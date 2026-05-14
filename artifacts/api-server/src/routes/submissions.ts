import { Router, type IRouter, type Request, type Response } from "express";
import { and, desc, eq } from "drizzle-orm";
import { db, submissionsTable, studentsTable } from "@workspace/db";
import {
  ListSubmissionsResponseItem as SubmissionZ,
  GetSubmissionForModuleResponse as SubmissionOrNullZ,
} from "@workspace/api-zod";
import { attachSession, requireStudent } from "../middlewares/session";
import { moduleById, modules } from "../lib/curriculum";
import { checkWithGPTZero } from "../lib/gptzero";
import { computeActivityReport } from "../lib/activityReport";
import {
  analyzeProcessWithBaseline,
  foldIntoBaseline,
  type ProcessBaseline,
  type ProcessEvent,
} from "../lib/processForensics";
import { logger } from "../lib/logger";

const router: IRouter = Router();
router.use(attachSession);

router.get(
  "/submissions",
  requireStudent,
  async (req: Request, res: Response) => {
    const studentId = req.studentId as number;
    const rows = await db
      .select()
      .from(submissionsTable)
      .where(eq(submissionsTable.studentId, studentId))
      .orderBy(desc(submissionsTable.createdAt));
    res.json(rows.map((r) => SubmissionZ.parse(r)));
  },
);

router.post(
  "/submissions",
  requireStudent,
  async (req: Request, res: Response) => {
    const body = req.body as {
      moduleId?: unknown;
      content?: unknown;
      keystrokes?: unknown;
      scoreHistory?: unknown;
      finalAiScore?: unknown;
      finalAiClass?: unknown;
      flaggedOnSubmit?: unknown;
    };
    const moduleId = String(body.moduleId ?? "");
    const content = String(body.content ?? "");
    if (!moduleId) {
      res.status(400).json({ error: "Invalid body" });
      return;
    }
    const targetModule = moduleById(moduleId);
    if (!targetModule) {
      res.status(400).json({ error: "Unknown module" });
      return;
    }
    if (!content.trim()) {
      res.status(400).json({ error: "Content cannot be empty" });
      return;
    }
    const studentId = req.studentId as number;

    // Server-side sequential gating
    const targetIdx = modules.findIndex((m) => m.id === targetModule.id);
    if (targetIdx > 0) {
      const priorIds = modules.slice(0, targetIdx).map((m) => m.id);
      const priorSubs = await db
        .select({ moduleId: submissionsTable.moduleId })
        .from(submissionsTable)
        .where(eq(submissionsTable.studentId, studentId));
      const submitted = new Set(priorSubs.map((s) => s.moduleId));
      const missing = priorIds.filter((id) => !submitted.has(id));
      if (missing.length > 0) {
        res.status(403).json({
          error: `Module ${targetModule.number} is locked. Submit prior modules first: ${missing.join(", ")}`,
        });
        return;
      }
    }

    const keystrokes = Array.isArray(body.keystrokes) ? body.keystrokes : null;
    const scoreHistory = Array.isArray(body.scoreHistory)
      ? body.scoreHistory
      : null;
    // `flaggedOnSubmit` is advisory only — what the live client believed at
    // submit time. The server always re-runs GPTZero and is the source of
    // truth for the persisted aiScore/aiClass/aiStatus.
    const flaggedOnSubmit = !!body.flaggedOnSubmit;

    const activityReport =
      keystrokes && scoreHistory
        ? computeActivityReport(keystrokes, scoreHistory)
        : null;

    // ---- Diachronic process-forensics analysis -------------------------
    // Guard against sparse data: short streams or short content read the
    // same way as "robotic AI" (no human signals) and would falsely flag.
    let processScore: number | null = null;
    let processClass: string | null = null;
    let processFeatures: Record<string, unknown> | null = null;
    let processFlags: string[] | null = null;

    const events: ProcessEvent[] = Array.isArray(keystrokes)
      ? (keystrokes as ProcessEvent[])
      : [];
    if (events.length >= 20 && content.length >= 80) {
      const studentRows = await db
        .select({ baseline: studentsTable.processBaseline })
        .from(studentsTable)
        .where(eq(studentsTable.id, studentId))
        .limit(1);
      const baseline =
        (studentRows[0]?.baseline as ProcessBaseline | null) ?? null;
      const analysis = analyzeProcessWithBaseline(events, content, baseline);
      processScore = analysis.processScore;
      processClass = analysis.processClass;
      processFlags = analysis.flags;
      processFeatures = {
        ...analysis.features,
        __baselineAdjustedScore: analysis.baselineAdjustedScore,
        __baselineDeviation: analysis.baselineDeviation,
        __baselineSnapshot: baseline?.features ?? null,
        __baselineN: baseline?.n ?? 0,
        __burstLens: analysis.burstLens,
      };

      // Fold into the per-student baseline only while n < 2. After 2
      // submissions the baseline is frozen — slow-drift defense.
      if (!baseline || baseline.n < 2) {
        const next = foldIntoBaseline(baseline, analysis.features);
        await db
          .update(studentsTable)
          .set({ processBaseline: next })
          .where(eq(studentsTable.id, studentId));
      }
    }

    const inserted = await db
      .insert(submissionsTable)
      .values({
        studentId,
        moduleId,
        content,
        aiScore: null,
        aiClass: null,
        aiCheckedAt: null,
        aiStatus: "pending",
        keystrokes: keystrokes ?? undefined,
        scoreHistory: scoreHistory ?? undefined,
        activityReport: activityReport ?? undefined,
        flaggedOnSubmit,
        processScore: processScore ?? undefined,
        processClass: processClass ?? undefined,
        processFeatures: processFeatures ?? undefined,
        processFlags: processFlags ?? undefined,
      })
      .returning();

    const row = inserted[0];
    res.status(201).json(SubmissionZ.parse(row));

    // Authoritative server-side AI check, regardless of any client-side
    // pre-scoring. Runs in the background so the POST returns immediately.
    void runAICheck(row.id, content);
  },
);

router.get(
  "/submissions/module/:moduleId",
  requireStudent,
  async (req: Request<{ moduleId: string }>, res: Response) => {
    const studentId = req.studentId as number;
    const rows = await db
      .select()
      .from(submissionsTable)
      .where(
        and(
          eq(submissionsTable.studentId, studentId),
          eq(submissionsTable.moduleId, req.params.moduleId),
        ),
      )
      .orderBy(desc(submissionsTable.createdAt))
      .limit(1);
    res.json(SubmissionOrNullZ.parse({ submission: rows[0] ?? null }));
  },
);

async function runAICheck(submissionId: number, content: string): Promise<void> {
  try {
    const result = await checkWithGPTZero(content);
    if (result) {
      await db
        .update(submissionsTable)
        .set({
          aiScore: result.aiScore,
          aiClass: result.aiClass,
          aiCheckedAt: new Date(),
          aiStatus: "completed",
        })
        .where(eq(submissionsTable.id, submissionId));
    } else {
      await db
        .update(submissionsTable)
        .set({ aiCheckedAt: new Date(), aiStatus: "failed" })
        .where(eq(submissionsTable.id, submissionId));
    }
  } catch (err) {
    logger.error({ err, submissionId }, "Background AI check crashed");
    await db
      .update(submissionsTable)
      .set({ aiCheckedAt: new Date(), aiStatus: "failed" })
      .where(eq(submissionsTable.id, submissionId))
      .catch(() => {});
  }
}

export default router;

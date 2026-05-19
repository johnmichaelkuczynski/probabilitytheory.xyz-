import { Router, type IRouter, type Request, type Response } from "express";
import { sql, eq, and } from "drizzle-orm";
import {
  db,
  studentsTable,
  submissionsTable,
  assignmentDraftsTable,
  canvasSessionsTable,
} from "@workspace/db";
import { anthropic } from "@workspace/integrations-anthropic-ai";
import { modules, moduleById } from "../lib/curriculum";
import { pingGPTZero } from "../lib/gptzero";
import {
  analyzeProcess,
  type ProcessEvent,
} from "../lib/processForensics";

const router: IRouter = Router();

interface CheckResult {
  name: string;
  group: "system" | "functional";
  status: "pass" | "fail" | "skip";
  ms: number;
  info?: string;
  error?: string;
}

async function run(
  name: string,
  group: "system" | "functional",
  fn: () => Promise<string | void>,
): Promise<CheckResult> {
  const t0 = Date.now();
  try {
    const info = await fn();
    return {
      name,
      group,
      status: "pass",
      ms: Date.now() - t0,
      info: info ?? undefined,
    };
  } catch (err) {
    return {
      name,
      group,
      status: "fail",
      ms: Date.now() - t0,
      error: err instanceof Error ? err.message : String(err),
    };
  }
}

function skip(name: string, group: "system" | "functional", info: string): CheckResult {
  return { name, group, status: "skip", ms: 0, info };
}

router.post("/diagnostic/run", async (req: Request, res: Response) => {
  const checks: CheckResult[] = [];

  // ----- 1. SYSTEM CHECKS -------------------------------------------------
  checks.push(
    await run("Environment: SESSION_SECRET present", "system", async () => {
      if (!process.env.SESSION_SECRET) throw new Error("SESSION_SECRET is not set");
    }),
    await run("Environment: DATABASE_URL present", "system", async () => {
      if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL is not set");
    }),
    await run("Database: connectivity (SELECT 1)", "system", async () => {
      const r = await db.execute(sql`SELECT 1 as ok`);
      const rows = (r as unknown as { rows?: unknown[] }).rows ?? (r as unknown as unknown[]);
      if (!Array.isArray(rows) || rows.length === 0) throw new Error("No rows returned");
      return "ok";
    }),
    await run("Database: tables reachable", "system", async () => {
      // Ensure each core table is queryable.
      await db.select({ id: studentsTable.id }).from(studentsTable).limit(1);
      await db.select({ id: submissionsTable.id }).from(submissionsTable).limit(1);
      await db.select({ id: assignmentDraftsTable.id }).from(assignmentDraftsTable).limit(1);
      await db.select({ id: canvasSessionsTable.id }).from(canvasSessionsTable).limit(1);
      return "students, submissions, drafts, canvas_sessions all queryable";
    }),
    await run("Curriculum: 15 modules loaded, 850 points total", "system", async () => {
      if (modules.length !== 15)
        throw new Error(`expected 15 modules, got ${modules.length}`);
      const total = modules.reduce((s, m) => s + m.points, 0);
      if (total !== 850)
        throw new Error(`expected 850 total points, got ${total}`);
      // Sequential numbering 1..15
      for (let i = 0; i < modules.length; i++) {
        if (modules[i].number !== i + 1)
          throw new Error(`module ${i} has number ${modules[i].number}`);
      }
      return `${modules.length} modules, ${total} pts`;
    }),
    await run("Curriculum: lookup by id works", "system", async () => {
      const m = moduleById("d1");
      if (!m || m.number !== 1) throw new Error("moduleById('d1') failed");
    }),
  );

  // ----- 2. EXTERNAL API CHECKS -------------------------------------------
  checks.push(
    process.env.GPTZERO_API_KEY
      ? await run("GPTZero API: live ping", "system", async () => {
          const r = await pingGPTZero(
            "This is a short diagnostic ping. Please disregard.",
          );
          return `aiScore=${r.aiScore.toFixed(3)} class=${r.aiClass}`;
        })
      : skip(
          "GPTZero API: live ping",
          "system",
          "GPTZERO_API_KEY not set — AI scoring will be unavailable",
        ),
    await run("Anthropic API (grader/feedback): live ping", "system", async () => {
      const result = await anthropic.messages.create({
        model: "claude-sonnet-4-5",
        max_tokens: 16,
        messages: [{ role: "user", content: "Reply with the single word: pong" }],
      });
      const text = result.content
        .filter((b) => b.type === "text")
        .map((b) => (b as { text: string }).text)
        .join("")
        .trim();
      if (!text) throw new Error("empty response");
      return `model=claude-sonnet-4-5 reply="${text.slice(0, 40)}"`;
    }),
  );

  // ----- 2b. PROCESS-FORENSICS (DIACHRONIC) SYNTHETIC TESTS ---------------
  checks.push(
    await run(
      "Process forensics: synthetic transcription scores likelyAI (≥70)",
      "system",
      async () => {
        // Perfectly uniform 4-char inserts at 180 ms intervals.
        // No deletions, no caret backtracks, no abandoned starts.
        const events: ProcessEvent[] = [];
        let pos = 0;
        for (let i = 0; i < 60; i++) {
          events.push({
            t: i * 180,
            type: "insert",
            pos,
            len: 4,
            charCount: 4,
            caretBefore: pos,
            caretAfter: pos + 4,
            text: "abcd",
            k: "i",
            d: "abcd",
          });
          pos += 4;
        }
        // Final text: 60 × 4 = 240 chars; include some sentence boundaries
        // so pause-before-sentence is also measured.
        const finalText = "abcd. abcd. ".repeat(20).slice(0, 240);
        const a = analyzeProcess(events, finalText);
        if (a.processScore < 70 || a.processClass !== "likelyAI") {
          throw new Error(
            `expected ≥70/likelyAI, got ${a.processScore}/${a.processClass}`,
          );
        }
        return `score=${a.processScore} class=${a.processClass} flags=${a.flags.length}`;
      },
    ),
    await run(
      "Process forensics: synthetic composition scores human (<35)",
      "system",
      async () => {
        // Varied bursts, abandoned-and-restarted start (60→55 deleted),
        // 2 caret backtracks > 100 chars, 2+ structural deletes.
        const events: ProcessEvent[] = [
          // Burst 1: write 60 chars in varied chunks
          { t: 0, type: "insert", pos: 0, len: 10, caretBefore: 0, caretAfter: 10, k: "i", d: "x".repeat(10) },
          { t: 600, type: "insert", pos: 10, len: 8, caretBefore: 10, caretAfter: 18, k: "i", d: "x".repeat(8) },
          { t: 1200, type: "insert", pos: 18, len: 12, caretBefore: 18, caretAfter: 30, k: "i", d: "x".repeat(12) },
          { t: 2100, type: "insert", pos: 30, len: 15, caretBefore: 30, caretAfter: 45, k: "i", d: "x".repeat(15) },
          { t: 3500, type: "insert", pos: 45, len: 15, caretBefore: 45, caretAfter: 60, k: "i", d: "x".repeat(15) },
          // Abandoned start: delete 55 chars
          { t: 5000, type: "delete", pos: 5, len: 55, caretBefore: 60, caretAfter: 5, k: "d", d: "55" },
          // Long pause then burst 2 (varied)
          { t: 12000, type: "insert", pos: 5, len: 25, caretBefore: 5, caretAfter: 30, k: "i", d: "y".repeat(25) },
          { t: 13500, type: "insert", pos: 30, len: 8, caretBefore: 30, caretAfter: 38, k: "i", d: "y".repeat(8) },
          { t: 14300, type: "insert", pos: 38, len: 40, caretBefore: 38, caretAfter: 78, k: "i", d: "y".repeat(40) },
          { t: 16200, type: "insert", pos: 78, len: 12, caretBefore: 78, caretAfter: 90, k: "i", d: "y".repeat(12) },
          { t: 17700, type: "insert", pos: 90, len: 30, caretBefore: 90, caretAfter: 120, k: "i", d: "y".repeat(30) },
          { t: 19500, type: "insert", pos: 120, len: 18, caretBefore: 120, caretAfter: 138, k: "i", d: "y".repeat(18) },
          { t: 21200, type: "insert", pos: 138, len: 22, caretBefore: 138, caretAfter: 160, k: "i", d: "y".repeat(22) },
          { t: 22900, type: "insert", pos: 160, len: 35, caretBefore: 160, caretAfter: 195, k: "i", d: "y".repeat(35) },
          { t: 25300, type: "insert", pos: 195, len: 10, caretBefore: 195, caretAfter: 205, k: "i", d: "y".repeat(10) },
          // Caret jump back >100
          { t: 28000, type: "caretJump", len: 0, caretBefore: 205, caretAfter: 50, k: "m" },
          // Structural delete (≥30 chars in first half)
          { t: 29500, type: "delete", pos: 50, len: 35, caretBefore: 50, caretAfter: 15, k: "d", d: "35" },
          // Caret jump forward
          { t: 31000, type: "caretJump", len: 0, caretBefore: 15, caretAfter: 130, k: "m" },
          // Burst 3
          { t: 32500, type: "insert", pos: 130, len: 40, caretBefore: 130, caretAfter: 170, k: "i", d: "z".repeat(40) },
          { t: 34200, type: "insert", pos: 170, len: 22, caretBefore: 170, caretAfter: 192, k: "i", d: "z".repeat(22) },
          { t: 36800, type: "insert", pos: 192, len: 8, caretBefore: 192, caretAfter: 200, k: "i", d: "z".repeat(8) },
          // Second caret backtrack >100
          { t: 39000, type: "caretJump", len: 0, caretBefore: 200, caretAfter: 60, k: "m" },
          // Second structural delete
          { t: 40500, type: "delete", pos: 60, len: 30, caretBefore: 60, caretAfter: 30, k: "d", d: "30" },
          { t: 42200, type: "insert", pos: 30, len: 20, caretBefore: 30, caretAfter: 50, k: "i", d: "z".repeat(20) },
          { t: 44500, type: "insert", pos: 50, len: 15, caretBefore: 50, caretAfter: 65, k: "i", d: "z".repeat(15) },
        ];
        // Final text: arbitrary 245-char body without sentence endings to
        // keep pause features at NaN (no transitions).
        const finalText = "x".repeat(245);
        const a = analyzeProcess(events, finalText);
        if (a.processScore >= 35 || a.processClass !== "human") {
          throw new Error(
            `expected <35/human, got ${a.processScore}/${a.processClass}; flags=${JSON.stringify(a.flags)}; features=${JSON.stringify(a.features)}`,
          );
        }
        return `score=${a.processScore} class=${a.processClass}`;
      },
    ),
  );

  // ----- 3. FUNCTIONAL CHECKS (round-trip a synthetic student) ------------
  // Use a unique, throwaway student. Cascades clean up drafts/canvas/subs.
  const testEmail = `diag-${Date.now()}-${Math.random()
    .toString(36)
    .slice(2, 8)}@diagnostic.local`;
  let testStudentId: number | null = null;

  try {
    checks.push(
      await run("Functional: create synthetic student", "functional", async () => {
        const [row] = await db
          .insert(studentsTable)
          .values({ email: testEmail, name: "Diagnostic Test User" })
          .returning();
        if (!row?.id) throw new Error("insert returned no id");
        testStudentId = row.id;
        return `id=${row.id}`;
      }),
    );

    if (testStudentId == null) {
      checks.push(
        skip(
          "Functional: remaining flow checks",
          "functional",
          "Skipped because synthetic student could not be created.",
        ),
      );
    } else {
      const sid = testStudentId;

      checks.push(
        await run("Functional: integrity acknowledgment writes", "functional", async () => {
          await db
            .update(studentsTable)
            .set({ integrityAckAt: new Date() })
            .where(eq(studentsTable.id, sid));
          const r = await db
            .select({ a: studentsTable.integrityAckAt })
            .from(studentsTable)
            .where(eq(studentsTable.id, sid));
          if (!r[0]?.a) throw new Error("ack timestamp not persisted");
        }),
        await run("Functional: draft round-trip + lock", "functional", async () => {
          await db.insert(assignmentDraftsTable).values({
            studentId: sid,
            moduleId: "d1",
            content: "diagnostic draft body",
            feedback: "diagnostic feedback body",
            feedbackAt: new Date(),
            locked: true,
          });
          const rows = await db
            .select()
            .from(assignmentDraftsTable)
            .where(
              and(
                eq(assignmentDraftsTable.studentId, sid),
                eq(assignmentDraftsTable.moduleId, "d1"),
              ),
            );
          if (!rows[0] || !rows[0].locked)
            throw new Error("draft did not persist or did not lock");
          return `id=${rows[0].id}`;
        }),
        await run("Functional: canvas autosave round-trip", "functional", async () => {
          await db.insert(canvasSessionsTable).values({
            studentId: sid,
            moduleId: "d1",
            content: "diagnostic canvas v1",
            keystrokes: [{ t: 0, k: "i", d: "x" }],
            scoreHistory: [],
          });
          await db
            .update(canvasSessionsTable)
            .set({ content: "diagnostic canvas v2", updatedAt: new Date() })
            .where(
              and(
                eq(canvasSessionsTable.studentId, sid),
                eq(canvasSessionsTable.moduleId, "d1"),
              ),
            );
          const rows = await db
            .select()
            .from(canvasSessionsTable)
            .where(
              and(
                eq(canvasSessionsTable.studentId, sid),
                eq(canvasSessionsTable.moduleId, "d1"),
              ),
            );
          if (rows[0]?.content !== "diagnostic canvas v2")
            throw new Error("autosave update did not persist");
        }),
        await run("Functional: submit module 1", "functional", async () => {
          const [row] = await db
            .insert(submissionsTable)
            .values({
              studentId: sid,
              moduleId: "d1",
              content: "diagnostic submission for module 1",
              aiStatus: "pending",
            })
            .returning();
          if (!row?.id) throw new Error("submission insert returned nothing");
          const back = await db
            .select()
            .from(submissionsTable)
            .where(eq(submissionsTable.id, row.id));
          if (back[0]?.content !== "diagnostic submission for module 1")
            throw new Error("submission did not round-trip");
          return `id=${row.id}`;
        }),
        await run(
          "Functional: sequential gating allows next module after prior submitted",
          "functional",
          async () => {
            // Same logic the POST /submissions handler uses:
            const targetIdx = 1; // module 2 = e1
            const priorIds = modules.slice(0, targetIdx).map((m) => m.id);
            const priorSubs = await db
              .select({ moduleId: submissionsTable.moduleId })
              .from(submissionsTable)
              .where(eq(submissionsTable.studentId, sid));
            const submitted = new Set(priorSubs.map((s) => s.moduleId));
            const missing = priorIds.filter((id) => !submitted.has(id));
            if (missing.length > 0)
              throw new Error(
                `gating still blocks module 2 — missing: ${missing.join(",")}`,
              );
            // Now actually insert module 2 to confirm the chain works:
            await db.insert(submissionsTable).values({
              studentId: sid,
              moduleId: "e1",
              content: "diagnostic submission for module 2",
              aiStatus: "pending",
            });
          },
        ),
        await run(
          "Functional: sequential gating blocks skipping ahead",
          "functional",
          async () => {
            // Try to "submit" module 4 (e2, idx 3) when only d1+e1 are submitted.
            const targetIdx = 3;
            const priorIds = modules.slice(0, targetIdx).map((m) => m.id);
            const priorSubs = await db
              .select({ moduleId: submissionsTable.moduleId })
              .from(submissionsTable)
              .where(eq(submissionsTable.studentId, sid));
            const submitted = new Set(priorSubs.map((s) => s.moduleId));
            const missing = priorIds.filter((id) => !submitted.has(id));
            if (missing.length === 0)
              throw new Error(
                "gating did NOT block skipping ahead — every prior module appears submitted",
              );
            return `correctly blocked; missing: ${missing.join(",")}`;
          },
        ),
        await run(
          "Functional: list submissions for student returns inserted rows",
          "functional",
          async () => {
            const rows = await db
              .select()
              .from(submissionsTable)
              .where(eq(submissionsTable.studentId, sid));
            if (rows.length < 2)
              throw new Error(`expected 2+ submissions, got ${rows.length}`);
            return `${rows.length} submissions`;
          },
        ),
        await run(
          "Functional: admin accommodation toggle persists",
          "functional",
          async () => {
            await db
              .update(studentsTable)
              .set({ accommodated: true })
              .where(eq(studentsTable.id, sid));
            const r = await db
              .select({ a: studentsTable.accommodated })
              .from(studentsTable)
              .where(eq(studentsTable.id, sid));
            if (!r[0]?.a) throw new Error("accommodation flag did not persist");
          },
        ),
      );
    }
  } finally {
    // Cleanup — cascade deletes drafts/canvas/submissions.
    if (testStudentId != null) {
      checks.push(
        await run("Cleanup: delete synthetic student (cascade)", "functional", async () => {
          await db
            .delete(studentsTable)
            .where(eq(studentsTable.id, testStudentId as number));
          const r = await db
            .select({ id: studentsTable.id })
            .from(studentsTable)
            .where(eq(studentsTable.id, testStudentId as number));
          if (r.length !== 0) throw new Error("synthetic student still present after delete");
        }),
      );
    }
  }

  const totals = checks.reduce(
    (acc, c) => {
      acc[c.status]++;
      return acc;
    },
    { pass: 0, fail: 0, skip: 0 } as Record<string, number>,
  );
  const ok = totals.fail === 0;

  req.log.info({ totals }, "Diagnostic completed");
  res.json({
    ok,
    runAt: new Date().toISOString(),
    totals,
    checks,
  });
});

export default router;

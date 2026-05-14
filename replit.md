# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

## Required env vars

- `DATABASE_URL` — Postgres
- `SESSION_SECRET` — express-session
- `GPTZERO_API_KEY` — AI-detection scoring on every student submission. If absent, submissions still succeed; their `aiStatus` is recorded as `failed`.

## Architecture decisions

- AI-detection (GPTZero) runs **after** insert in a fire-and-forget background task in `routes/submissions.ts`; the POST returns immediately with `aiStatus: "pending"`. The web client polls `GET /submissions/module/:id` (and the assessments list) every 2–2.5s while any submission is still pending. If a submission carries `finalAiScore` from the live canvas, the background check is skipped. See `artifacts/api-server/src/lib/gptzero.ts` and `artifacts/phil-101/src/components/ai-score-badge.tsx`.
- **Integrity Canvas** (per assignment): two-box workflow on `/modules/:id`. Box 1 (`draft-workshop.tsx`) — single-shot AI feedback in 5 sections; once feedback is fetched the draft is locked (`assignment_drafts` table). Box 2 (`integrity-canvas.tsx`) — paste-blocked contentEditable+overlay editor, real-time GPTZero scoring (debounced ≥30 chars / 200-char bursts) with sentence-level highlighting, autosave every 5s to `canvas_sessions`, full keystroke log, traffic-light bar, and a 30-s cumulative-red warning. Submit on red prompts a confirm dialog; submission ships with `keystrokes`, `scoreHistory`, `finalAiScore`, `flaggedOnSubmit`. The server computes an `activityReport` (`lib/activityReport.ts`) on insert. Accommodated students (admin toggle) get a plain textarea and skip monitoring.
- **One-time integrity disclosure**: shown via `IntegrityDisclosureGate` modal on first module page load. `students.integrityAckAt` defaults to epoch 0; gate treats epoch as "not acked". Acknowledgment via `POST /api/integrity/ack`.
- **Two-layer AI detection.** Every submission is scored by two independent layers; both surface in the admin detail page and the student gets two traffic lights live in the canvas:
  1. **GPTZero** (synchronic / final-text) — fire-and-forget after insert; updates `aiScore`/`aiClass`/`aiStatus`.
  2. **Diachronic process forensics** (`artifacts/api-server/src/lib/processForensics.ts`) — pure analyzer over rich keystroke events (`type`/`pos`/`len`/`caretBefore`/`caretAfter`/`text`, single-char inserts coalesced ≤200 ms on the client). Computes 11 features (burstUniformity, pauseBeforeNew{Sentence,Paragraph}, deletionRatio, structuralEditCount, caretBacktrackCount, abandonedStartCount, burstLengthCV, frontToBackLinearity, totalActiveSeconds, charsPerSecond) and a 0–100 suspicion score with thresholds `human < 35`, `mixed < 65`, `likelyAI ≥ 65`. Persisted on submissions as `processScore` / `processClass` / `processFeatures` / `processFlags`. The student-facing GET strips these (zod schema in `@workspace/api-zod` doesn't declare them so `SubmissionZ.parse()` strips them); only the admin route exposes them.
  - **Per-student baseline** lives on `students.processBaseline` (`{n, features}` jsonb). Folded in via running mean for the first **2** submissions, then **frozen** — this prevents a slow-drift attack where a student gradually trains the baseline to look AI-like. The score is "baseline-adjusted" by softening up to 15 points when this submission's features are within ±50 % of the student's own baseline; raw + adjusted both shown in admin.
  - **Live throttled signal**: `POST /api/canvas/:moduleId/processScore` returns ONLY `{score, class}` (≤1 call / 60 s, gated on ≥20 events && ≥80 chars, skipped for accommodated). Never expose feature names or flags to students — that would give a sophisticated cheater a tuning oracle.
  - **Disclosure modal stays generic.** It mentions GPTZero (already public) but never names process-forensics features.
  - **Tuning workflow.** `WEIGHTS` (sum to 100) and per-feature `suspicion()` ramps are at the top of `processForensics.ts`. The two synthetic fixtures in `routes/diagnostic.ts` (transcription must score ≥70/likelyAI; composition <35/human) gate any change — re-run via `POST /api/diagnostic/run`.
- **Admin dashboard** at `/admin/submissions` (+ `/admin/submissions/:id`): list/replay/sparkline/activity-report; accommodation toggle per student. First authenticated user can claim admin via `POST /api/admin/bootstrap`; subsequent admin status is granted only by an existing admin. `requireAdmin` middleware in `artifacts/api-server/src/middleware/requireAdmin.ts`.

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

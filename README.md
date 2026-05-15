# 🎲 PROBABILITY 101

**An online college course in introductory probability, built around an AI tutor, formative draft feedback, and end-to-end academic-integrity instrumentation.**

## 🧩 Overview

Probability 101 is a complete 15-module undergraduate course shell for introductory probability theory. It pairs a verbatim instructor-authored course text with an always-available AI tutor, an automated formative-feedback layer for student drafts, and a built-in academic-integrity pipeline that scores every submission for AI generation and reconstructs the writing process from keystroke-level forensics.

Unlike generic LMS tools that bolt AI onto the side, this app is built around a strict pedagogical principle: the AI never writes the assignment for the student. The tutor teaches by questioning, the draft feedback describes what to revise without rewriting, and every model response is held back from the learner until they have submitted. The course covers sample spaces and Kolmogorov's axioms through Bayesian inference and the Central Limit Theorem, with all probability notation rendered as proper LaTeX via KaTeX.

## 👥 Who It's For

- **Undergraduate students taking their first probability or statistics course** -- need a patient, always-available tutor that pushes back on shallow reasoning instead of handing out answers
- **Self-learners working through introductory probability** -- need a structured 15-module path with worked examples, formative feedback, and a term paper that ties the material together
- **Instructors piloting AI-augmented coursework** -- need a course shell that enforces academic integrity by default and produces a defensible audit trail for every submission
- **Course designers building Quality Matters–aligned online courses** -- need a working reference implementation of QM Higher Ed Rubric (7th ed.) standards
- **Researchers studying AI-assisted learning** -- need granular keystroke, paste, and idle-time data on how students actually compose assignments

## ⚙️ Core Capabilities

- **15-Module Probability Curriculum** -- 8 discussions, 5 essays, a term-paper outline, and a final term paper totaling 850 points. Covers sample spaces, Kolmogorov's axioms, conditional probability, Bayes' theorem, expected value and variance, the binomial and normal distributions, the Law of Large Numbers, the Central Limit Theorem, and Bayesian inference. Every module ships with verbatim reading, an assignment prompt, instructor objectives, and a private model response.

- **AI Tutor (per-module, role-locked)** -- A Claude-Sonnet–powered instructor of record for each module. Teaches by Socratic questioning, never writes the assignment, pushes back on weak reasoning, and stays in role. Conversation history is persisted per student and per module. All probability notation is emitted as LaTeX so it renders properly in the chat.

- **One-Round Formative Draft Feedback** -- Students get exactly one round of structured feedback on a draft before final submission. The AI uses the instructor's reference standard to calibrate its judgment but is forbidden to quote it, paraphrase it, or rewrite the student's work. Output is locked to five fixed H2 sections so feedback is comparable across drafts.

- **Module Action Suite** -- One-click generation of a `Study Guide` (concepts, formulas, pitfalls, self-check questions), a `Step-by-Step Tutorial` with worked examples, a 2–3 minute `Audio Podcast Script`, a `Plain-Language Rewrite` of the reading, and a `Read My Draft` formative critique -- all streamed live to the student.

- **Critique Exercise Generator** -- Generates a deliberately mediocre B-/C+ student answer to any assignment, with at least three identifiable weaknesses (ill-defined sample space, confused independence, ignored base rate, gambler's fallacy, etc.) for students to critique as a learning exercise.

- **KaTeX Math Rendering** -- Full LaTeX rendering across readings, assignments, model responses, and AI-generated content. Inline math with `$ … $`, display math with `$$ … $$`. Probability notation (`$P(A \mid B)$`, `$\binom{n}{k}$`, `$E(X)$`, `$\mathrm{Var}(X)$`) renders correctly everywhere it appears.

- **GPTZero AI-Detection Scoring** -- Every final submission is scored by GPTZero for likelihood of AI generation. The score is stored alongside the submission and surfaced to instructors. AI-detection failures do not block submission; they create an audit record.

- **Process Forensics (Keystroke-Level Audit Trail)** -- The composition canvas records every insertion, deletion, paste, and idle gap as the student writes. A scoring engine then classifies the session on a 0–100 scale: composition vs. transcription, with explicit flags for large pastes, unbroken bursts, suspicious idle patterns, and other transcription signals. Synthetic transcription sessions reliably score `likelyAI ≥ 70`; genuine composition reliably scores `human < 35`.

- **Term Paper Workflow** -- Two-stage final assignment: a 100-point outline followed by a 100-point full paper. Both stages run through the same draft-feedback and integrity pipeline as every other module.

- **System Diagnostic** -- One-click self-check that verifies environment secrets, database connectivity, every API provider (Anthropic, GPTZero), the curriculum integrity (module count, point totals, sequential numbering), the process-forensics scoring engine, and the full functional flow (synthetic student → integrity ack → submission → grading → cleanup). Color-coded pass / fail / skip with millisecond timing per check.

- **Quality Matters–Aligned Course Shell** -- Includes a syllabus page, a "Start Here" onboarding flow with student introduction and integrity acknowledgment, an accessibility statement, a support page, and a learning-outcomes alignment to the QM Higher Ed Rubric (7th ed.).

## 🚀 What Makes It Different

- **The AI refuses to do the work for the student** -- The tutor's system prompt explicitly forbids writing the assignment. The draft-feedback pipeline forbids rewriting the student's prose. The model response is hidden from the student until after they submit. Most "AI tutor" products do the opposite by default; this one is built around the opposite principle.

- **Academic integrity is instrumented end-to-end, not bolted on** -- Every submission carries an AI-detection score and a full keystroke-level process recording. Instructors can replay how a student wrote a paper and see, with timestamps, when text was typed versus pasted. This is not an add-on; it is part of the submission contract.

- **Process forensics scores composition, not just output** -- A student who writes a great paper by typing it slowly looks completely different from one who pastes it in three large blocks, even if the final text is identical. The forensics engine captures that difference and surfaces it as a numeric score with explicit flags.

- **One round of feedback, not infinite hand-holding** -- The draft feedback is a finite resource: one round per assignment, then the student writes the final version. This mirrors real instructor office hours and prevents the AI from becoming a co-author.

- **Mathematical content is treated as mathematics** -- Probability notation renders as proper math (typeset binomial coefficients, summation, integrals, fractions), not as ASCII approximations. Every AI-generated artifact (study guide, tutorial, draft feedback) is instructed to emit LaTeX so the math survives the round trip.

- **A real curriculum, not placeholder Lorem ipsum** -- The 15 modules contain verbatim instructor-authored readings, assignment prompts with explicit point breakdowns, and full-length model responses. The course is teachable as-is on day one.

- **Transparent, testable, and self-diagnosing** -- The Diagnostic page exercises every external dependency, every database table, and every functional code path on demand, with a downloadable report. If anything is misconfigured, the failure is visible in 5–15 seconds.

## 🛠️ Tech Stack

- **Frontend**: React + Vite, TypeScript, KaTeX (CDN), routed via the Replit pnpm-monorepo artifact system
- **Backend**: Express + TypeScript on Node, built with esbuild
- **Database**: PostgreSQL (Neon) accessed through Drizzle ORM with `pg` driver; schema managed by `drizzle-kit push`
- **AI**: Anthropic Claude (Sonnet 4.5) via the Replit AI Integrations proxy for tutoring, draft feedback, and the module action suite
- **Integrity**: GPTZero API for AI-detection scoring; in-house process-forensics scoring engine for keystroke-level audits
- **Auth & Sessions**: Cookie-based sessions with `SESSION_SECRET`; per-student conversation persistence
- **Logging**: Pino structured logs with file and pretty-print transports
- **Deployment**: Replit Deployments with shared Replit proxy and per-artifact path routing

## 📦 Project Structure

```
artifacts/
  phil-101/         # Probability 101 student-facing web app (React + Vite)
  api-server/       # Express API: tutor, drafts, ai-actions, submissions, diagnostic, integrity
  mockup-sandbox/   # Component-preview server for canvas-based UI iteration
lib/
  db/               # Drizzle schema + client (@workspace/db)
  api-zod/          # Shared Zod request/response schemas
  integrations-anthropic-ai/  # Anthropic SDK via Replit AI proxy
```

## 🔐 Required Secrets

- `DATABASE_URL` -- Neon (or any Postgres) connection string
- `SESSION_SECRET` -- random string used to sign session cookies
- `GPTZERO_API_KEY` -- AI-detection scoring (course runs without it; AI scoring is skipped if absent)

Anthropic credentials are provided automatically by the Replit AI Integrations proxy -- no key required.

## ✅ Verifying Your Install

Open the app, go to **Diagnostic**, and click **Run diagnostic**. A green run shows:

- 15 modules / 850 points loaded
- Database connectivity and all tables reachable
- Anthropic API live ping
- GPTZero API live ping (or a clearly-labeled skip if `GPTZERO_API_KEY` is unset)
- Process-forensics synthetic checks scoring `likelyAI ≥ 70` on transcription and `human < 35` on composition
- Full functional flow (create synthetic student → integrity ack → draft → submission → grade → cleanup)

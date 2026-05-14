# 📊 MACROECONOMICS 101

**Self-Paced Online Course in Introductory Macroeconomics with AI-Powered Tutoring, Drafting, and Academic-Integrity Forensics**

---

## 🧩 Overview

Macroeconomics 101 is a complete, single-semester introductory macroeconomics course delivered as a self-contained web application. It covers the standard ECON 101 curriculum — GDP measurement, inflation and the quantity theory of money, unemployment, fiscal and monetary policy, the Phillips curve, trade deficits, recessions, long-run growth, public debt, the open-economy trilemma, and the Keynesian–Classical debate — across 13 sequential modules totaling 800 points.

Unlike a generic LMS shell wrapped around video lectures, Macroeconomics 101 is built around a strict pedagogical principle: students must demonstrate that they actually wrote what they submit. Every essay and term paper is graded by an AI tutor against a published model response, every draft is autosaved with keystroke and paste forensics, and every submission is scored for AI-generated content before it reaches the gradebook. No padding, no hedging, no participation credit for showing up.

---

## 👥 Who It's For

- **Undergraduates taking their first macroeconomics course** -- need a structured 13-module path with explicit learning outcomes, model answers, and immediate feedback rather than a 700-page textbook and a midterm
- **Returning adult learners and career-changers** -- need a fully asynchronous course they can complete on their own schedule without sacrificing rigor or graded feedback
- **High-school AP Macro and dual-enrollment students** -- need college-level practice problems and essay prompts with the same grading standards used in a university classroom
- **Self-studiers preparing for the GRE, CFA Level I economics section, or graduate program prerequisites** -- need a verifiable, transcript-ready record of mastery across the standard macro syllabus
- **Instructors and TAs** -- need a turnkey course shell with curriculum data, sequential gating, draft locking, and a built-in academic-integrity pipeline they can adopt or fork

---

## ⚙️ Core Capabilities

- **13-Module Sequential Curriculum** -- 7 discussion posts (50 pts each), 5 essays (50 pts each), and 1 two-part term paper (200 pts) totaling exactly 800 points. Each module includes learning objectives, required reading drawn verbatim from the course textbook, an assignment prompt, and a published model response students see only after submitting.

- **Sequential Gating** -- Students cannot skip ahead. The system enforces strict ordering (d1 → e1 → d2 → e2 → … → d7 → tp) and blocks any submission whose prerequisite modules are not yet complete, with an explicit list of what is missing.

- **AI Tutor (Claude Sonnet 4.5)** -- Conversational instructor backed by the full curriculum context and a macroeconomics-specific system prompt. Answers conceptual questions, walks through derivations, and explicitly refuses to write the student's assignment for them.

- **AI Draft Feedback** -- One-click formative feedback on any in-progress draft. Identifies missing concepts, weak arguments, and structural problems against the module's model response without revealing the model answer itself.

- **AI Study Tools** -- Per-module study guides, mini-tutorials, podcast-style audio hooks, and rewrite assistance. Every tool is constrained to the module's actual reading and learning objectives — no off-topic drift.

- **Draft Autosave + Lock** -- Every keystroke is autosaved server-side. On submission the draft is locked and timestamped, producing an immutable record of what was submitted and when.

- **Process Forensics** -- The drafting canvas captures keystroke cadence, paste events, and edit timing. A scoring engine flags submissions that look like transcription of pre-written or AI-generated text (≥70 = likelyAI) versus organic composition (<35 = human) with six distinct behavioral flags.

- **Term Paper Two-Part Pipeline** -- The capstone (Module 13, 200 pts) is split into a 100-point outline and a 100-point final paper, each with its own model version. Students cannot submit the final paper without first submitting an approved outline.

- **Admin Accommodation Toggle** -- Per-student override that relaxes timing-based forensics flags for students with documented accommodations, persisted in the database and audit-logged.

- **System Diagnostic** -- One-click self-check that verifies environment variables, database connectivity, all four core tables, the curriculum loader, the Anthropic integration, and the full functional pipeline (student creation → integrity ack → draft round-trip → autosave → submission → gating → cleanup). Color-coded pass/fail with a downloadable report.

---

## 🚀 What Makes It Different

- **It actually grades against a model answer** -- Every essay and discussion has a published model response written by the instructor. The AI grader compares the student's submission to that specific model, not to a generic "good writing" rubric. If the student missed the point, the feedback says exactly which point they missed.

- **It separates writing from transcription** -- Most online courses cannot tell the difference between a student who wrote a good essay and a student who pasted a good essay. The process-forensics layer scores composition behavior independently of the text itself, so a polished submission with a paste-heavy keystroke trace is flagged regardless of how well it reads.

- **It enforces sequential mastery** -- No student can submit Module 5 without finishing Modules 1–4 first. The gating logic is enforced server-side and returns the exact list of missing prerequisites, so the path through the course is unambiguous.

- **AI tutor that refuses to do the assignment** -- The system prompt is explicit: the tutor explains, derives, and quizzes, but it will not draft the student's discussion post or essay. Students who try to extract the assignment text get a redirect to the relevant reading.

- **One-shot integrity acknowledgment** -- Before any submission is accepted, the student must explicitly acknowledge the academic-integrity policy. The acknowledgment is timestamped and stored, creating a defensible audit trail.

- **Curriculum-as-code** -- All 13 modules — titles, objectives, readings, prompts, model responses, point values — live in a single TypeScript file and are loaded identically by both the frontend and the API server. Forking the course to a different subject is a single-file edit.

- **Built on a real Postgres database** -- Students, submissions, drafts, and canvas autosave sessions are persisted in Neon Postgres with cascade-delete integrity. Nothing lives in browser local storage; nothing is lost on refresh.

- **Production-grade diagnostic before every deploy** -- The 20-check self-test runs the entire pipeline against the live database and live AI provider. If anything is wrong — missing migration, expired key, broken gating logic — the report says exactly what failed and where.

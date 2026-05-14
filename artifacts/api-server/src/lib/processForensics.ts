/**
 * Diachronic AI-detection (writing-process forensics).
 *
 * Pure module — no I/O, no DB, no network. Operates on a captured event
 * stream + the final submitted text and returns a 0–100 suspicion score
 * with per-feature breakdowns and baseline-aware adjustment.
 *
 * Two test fixtures must pass:
 *   1. Synthetic transcription  → score ≥ 70, class "likelyAI"
 *   2. Synthetic composition    → score < 35,  class "human"
 *
 * Tunable knobs live in WEIGHTS / THRESHOLDS at the top of this file.
 */

// ---- Event shape ---------------------------------------------------------

export type ProcessEventType =
  | "insert"
  | "delete"
  | "caretJump"
  | "focus"
  | "blur";

export interface ProcessEvent {
  t: number; // ms epoch (or session-relative, both work)
  type: ProcessEventType;
  pos?: number;
  len: number;
  charCount?: number;
  caretBefore?: number;
  caretAfter?: number;
  text?: string;
  // Legacy compact fields (still emitted for back-compat):
  k?: string;
  d?: string;
}

// ---- Public types --------------------------------------------------------

export interface ProcessFeatures {
  burstUniformity: number; // ms stdev; NaN if insufficient
  pauseBeforeNewSentence: number; // median ms; NaN if no transitions
  pauseBeforeNewParagraph: number; // median ms; NaN if no transitions
  deletionRatio: number; // 0..1
  structuralEditCount: number; // integer
  caretBacktrackCount: number; // integer
  abandonedStartCount: number; // integer
  burstLengthCV: number; // CV (stdev/mean); NaN if <2 bursts
  frontToBackLinearity: number; // 0..1
  totalActiveSeconds: number;
  charsPerSecond: number;
}

export type ProcessClass = "human" | "mixed" | "likelyAI";

export interface ProcessBaseline {
  n: number;
  features: Record<string, number>;
}

export interface ProcessAnalysis {
  processScore: number;
  processClass: ProcessClass;
  features: ProcessFeatures;
  flags: string[];
  /** Char count per detected burst, in chronological order. Used by admin chart. */
  burstLens: number[];
  baselineAdjustedScore?: number | null;
  baselineDeviation?: Record<string, number> | null;
}

// ---- Tunables ------------------------------------------------------------

const WEIGHTS: Record<keyof ProcessFeatures | string, number> = {
  burstUniformity: 15,
  pauseBeforeNewSentence: 5,
  pauseBeforeNewParagraph: 5,
  deletionRatio: 15,
  structuralEditCount: 10,
  caretBacktrackCount: 12,
  abandonedStartCount: 8,
  burstLengthCV: 15,
  frontToBackLinearity: 10,
  charsPerSecond: 5,
};

const CLASS_THRESHOLDS = { human: 35, mixed: 65 } as const;

// Burst boundary: insert-to-insert gap larger than this starts a new burst.
const BURST_GAP_MS = 3000;
// Cap a single inter-event gap when summing active time.
const ACTIVE_GAP_CAP_MS = 30_000;

// ---- Helpers -------------------------------------------------------------

function isInsert(e: ProcessEvent): boolean {
  return e.type === "insert" || e.k === "i";
}
function isDelete(e: ProcessEvent): boolean {
  return e.type === "delete" || e.k === "d";
}
function eventLen(e: ProcessEvent): number {
  if (typeof e.charCount === "number") return e.charCount;
  if (typeof e.len === "number") return e.len;
  if (typeof e.d === "string") {
    const n = Number(e.d);
    if (Number.isFinite(n)) return n;
    return e.d.length;
  }
  return 1;
}

function mean(xs: number[]): number {
  if (xs.length === 0) return NaN;
  let s = 0;
  for (const x of xs) s += x;
  return s / xs.length;
}

function stdev(xs: number[]): number {
  if (xs.length < 2) return NaN;
  const m = mean(xs);
  let v = 0;
  for (const x of xs) v += (x - m) * (x - m);
  return Math.sqrt(v / xs.length);
}

function median(xs: number[]): number {
  if (xs.length === 0) return NaN;
  const ys = [...xs].sort((a, b) => a - b);
  const mid = Math.floor(ys.length / 2);
  return ys.length % 2 ? ys[mid] : (ys[mid - 1] + ys[mid]) / 2;
}

// ---- Per-feature suspicion (each → 0..1) ---------------------------------

function suspicion(feature: keyof ProcessFeatures, v: number): number {
  switch (feature) {
    case "burstUniformity":
      if (Number.isNaN(v)) return 0;
      if (v < 30) return 1;
      if (v > 150) return 0;
      return (150 - v) / 120;
    case "pauseBeforeNewSentence":
      if (Number.isNaN(v)) return 0;
      if (v < 300) return 1;
      if (v > 1500) return 0;
      return (1500 - v) / 1200;
    case "pauseBeforeNewParagraph":
      if (Number.isNaN(v)) return 0;
      if (v < 500) return 1;
      if (v > 2500) return 0;
      return (2500 - v) / 2000;
    case "deletionRatio":
      if (v < 0.03) return 1;
      if (v > 0.15) return 0;
      return (0.15 - v) / 0.12;
    case "structuralEditCount":
      if (v <= 0) return 0.7;
      if (v === 1) return 0.3;
      return 0;
    case "caretBacktrackCount":
      if (v <= 0) return 0.7;
      if (v === 1) return 0.3;
      return 0;
    case "abandonedStartCount":
      if (v <= 0) return 0.4;
      return 0;
    case "burstLengthCV":
      if (Number.isNaN(v)) return 0.5;
      if (v < 0.2) return 1;
      if (v > 0.8) return 0;
      return (0.8 - v) / 0.6;
    case "frontToBackLinearity":
      if (v > 0.95) return 1;
      if (v < 0.7) return 0;
      return (v - 0.7) / 0.25;
    case "charsPerSecond":
      if (v > 8) return 1;
      if (v < 4) return 0;
      return (v - 4) / 4;
    case "totalActiveSeconds":
      return 0; // not used in scoring
  }
}

// ---- Feature extraction --------------------------------------------------

export function extractFeatures(
  events: ProcessEvent[],
  finalText: string,
): ProcessFeatures {
  const sorted = [...events].sort((a, b) => a.t - b.t);
  const inserts = sorted.filter(isInsert);
  const deletes = sorted.filter(isDelete);

  // Total inserted / deleted chars
  let totalInsertedChars = 0;
  for (const e of inserts) totalInsertedChars += eventLen(e);
  let totalDeletedChars = 0;
  for (const e of deletes) totalDeletedChars += eventLen(e);

  const docLen = finalText.length;

  // Bursts: contiguous inserts with gap ≤ BURST_GAP_MS
  const bursts: { events: ProcessEvent[]; gaps: number[]; chars: number }[] = [];
  if (inserts.length > 0) {
    let cur: { events: ProcessEvent[]; gaps: number[]; chars: number } = {
      events: [inserts[0]],
      gaps: [],
      chars: eventLen(inserts[0]),
    };
    for (let i = 1; i < inserts.length; i++) {
      const gap = inserts[i].t - inserts[i - 1].t;
      if (gap <= BURST_GAP_MS) {
        cur.events.push(inserts[i]);
        cur.gaps.push(gap);
        cur.chars += eventLen(inserts[i]);
      } else {
        bursts.push(cur);
        cur = {
          events: [inserts[i]],
          gaps: [],
          chars: eventLen(inserts[i]),
        };
      }
    }
    bursts.push(cur);
  }

  // burstUniformity: stdev across all intra-burst gaps
  const allIntraGaps: number[] = [];
  for (const b of bursts) for (const g of b.gaps) allIntraGaps.push(g);
  const burstUniformity = allIntraGaps.length >= 2 ? stdev(allIntraGaps) : NaN;

  // burstLengthCV
  const burstLens = bursts.map((b) => b.chars);
  let burstLengthCV: number;
  if (burstLens.length < 2) {
    burstLengthCV = NaN;
  } else {
    const m = mean(burstLens);
    burstLengthCV = m > 0 ? stdev(burstLens) / m : NaN;
  }

  // Per-character timestamp series for sentence/paragraph pause analysis.
  // Reconstruct by walking inserts in order, attributing all chars in an
  // insert event the timestamp of that event.
  const charTimes: number[] = [];
  let charText = "";
  for (const e of inserts) {
    const len = eventLen(e);
    const text =
      typeof e.text === "string"
        ? e.text
        : typeof e.d === "string" && Number.isNaN(Number(e.d))
          ? e.d
          : "";
    if (text.length === len) {
      charText += text;
    } else {
      // We don't have actual char text — pad with placeholder. Sentence/
      // paragraph detection then falls back to finalText below.
      charText += "x".repeat(len);
    }
    for (let i = 0; i < len; i++) charTimes.push(e.t);
  }

  // Sentence / paragraph pause: walk finalText; whenever we cross a
  // ./?/! followed (after whitespace) by a non-WS char, measure the gap
  // between the timestamps of the boundary char and the next non-WS char.
  // Using charTimes if its length ≥ finalText length; otherwise use charText.
  const useText = charText.length >= docLen ? charText : finalText;
  const useTimes = charText.length >= docLen ? charTimes : charTimes;
  const sentencePauses: number[] = [];
  const paragraphPauses: number[] = [];
  if (useTimes.length >= useText.length && useText.length > 0) {
    for (let i = 0; i < useText.length - 1; i++) {
      const c = useText[i];
      if (c !== "." && c !== "?" && c !== "!") continue;
      // find next non-whitespace
      let j = i + 1;
      let crossedDoubleNewline = false;
      let nlCount = 0;
      while (j < useText.length && /\s/.test(useText[j])) {
        if (useText[j] === "\n") nlCount++;
        if (nlCount >= 2) crossedDoubleNewline = true;
        j++;
      }
      if (j >= useText.length) break;
      const tBoundary = useTimes[i];
      const tNext = useTimes[j];
      if (
        typeof tBoundary === "number" &&
        typeof tNext === "number" &&
        tNext >= tBoundary
      ) {
        const gap = tNext - tBoundary;
        sentencePauses.push(gap);
        if (crossedDoubleNewline) paragraphPauses.push(gap);
      }
    }
  }
  const pauseBeforeNewSentence =
    sentencePauses.length > 0 ? median(sentencePauses) : NaN;
  const pauseBeforeNewParagraph =
    paragraphPauses.length > 0 ? median(paragraphPauses) : NaN;

  // deletionRatio
  const deletionRatio =
    totalInsertedChars > 0 ? totalDeletedChars / totalInsertedChars : 0;

  // structuralEditCount: deletes with len ≥ 30 OR caret position < docLen / 2
  let structuralEditCount = 0;
  for (const e of deletes) {
    const len = eventLen(e);
    const pos =
      typeof e.pos === "number"
        ? e.pos
        : typeof e.caretBefore === "number"
          ? e.caretBefore
          : null;
    if (len >= 30 || (pos != null && docLen > 0 && pos < docLen / 2)) {
      structuralEditCount++;
    }
  }

  // caretBacktrackCount: explicit backward jumps > 100 chars
  let caretBacktrackCount = 0;
  for (const e of sorted) {
    if (e.type === "caretJump") {
      if (
        typeof e.caretBefore === "number" &&
        typeof e.caretAfter === "number" &&
        e.caretBefore - e.caretAfter > 100
      ) {
        caretBacktrackCount++;
      }
    }
  }

  // abandonedStartCount:
  //   burst of ≥30 chars where ≥80% is deleted within 60s, AND
  //   the next insert lands within 10 chars of the original burst's
  //   start caret. Continue (don't break) when caretBefore is null.
  let abandonedStartCount = 0;
  for (let i = 0; i < bursts.length; i++) {
    const b = bursts[i];
    if (b.chars < 30) continue;
    const startCaret =
      typeof b.events[0].caretBefore === "number"
        ? b.events[0].caretBefore
        : null;
    const burstEndT = b.events[b.events.length - 1].t;
    const window = burstEndT + 60_000;
    let deletedInWindow = 0;
    for (const e of deletes) {
      if (e.t >= burstEndT && e.t <= window) deletedInWindow += eventLen(e);
    }
    if (deletedInWindow / b.chars < 0.8) continue;
    // Find next insert after burst
    const next = inserts.find((e) => e.t > burstEndT);
    if (!next) continue;
    if (startCaret == null) {
      // Spec: continue (don't break) — count if delete-fraction holds.
      abandonedStartCount++;
      continue;
    }
    const nextCaret =
      typeof next.caretBefore === "number" ? next.caretBefore : null;
    if (nextCaret == null) {
      abandonedStartCount++;
      continue;
    }
    if (Math.abs(nextCaret - startCaret) <= 10) abandonedStartCount++;
  }

  // frontToBackLinearity: simulate doc length walk; for each insert,
  // is caretBefore == prior docLength?
  let docLenSim = 0;
  let endInserts = 0;
  let totalInsertsCounted = 0;
  for (const e of sorted) {
    if (isInsert(e)) {
      const cb = typeof e.caretBefore === "number" ? e.caretBefore : null;
      const len = eventLen(e);
      if (cb != null) {
        totalInsertsCounted++;
        if (Math.abs(cb - docLenSim) <= 1) endInserts++;
        docLenSim = Math.max(cb + len, docLenSim);
      } else {
        // No caret data — assume end-append (legacy).
        totalInsertsCounted++;
        endInserts++;
        docLenSim += len;
      }
    } else if (isDelete(e)) {
      const len = eventLen(e);
      docLenSim = Math.max(0, docLenSim - len);
    }
  }
  const frontToBackLinearity =
    totalInsertsCounted > 0 ? endInserts / totalInsertsCounted : 0;

  // totalActiveSeconds + charsPerSecond
  let activeMs = 0;
  for (let i = 1; i < sorted.length; i++) {
    const dt = sorted[i].t - sorted[i - 1].t;
    activeMs += Math.min(Math.max(0, dt), ACTIVE_GAP_CAP_MS);
  }
  const totalActiveSeconds = activeMs / 1000;
  const charsPerSecond =
    totalActiveSeconds > 0 ? docLen / totalActiveSeconds : 0;

  return {
    burstUniformity,
    pauseBeforeNewSentence,
    pauseBeforeNewParagraph,
    deletionRatio,
    structuralEditCount,
    caretBacktrackCount,
    abandonedStartCount,
    burstLengthCV,
    frontToBackLinearity,
    totalActiveSeconds,
    charsPerSecond,
  };
}

// ---- Scoring + flag generation -------------------------------------------

function buildFlags(f: ProcessFeatures): string[] {
  const flags: string[] = [];
  if (!Number.isNaN(f.burstUniformity) && f.burstUniformity < 40)
    flags.push(
      `burstUniformity is ${Math.round(f.burstUniformity)} ms (transcription-like)`,
    );
  if (!Number.isNaN(f.pauseBeforeNewSentence) && f.pauseBeforeNewSentence < 300)
    flags.push(
      `pauseBeforeNewSentence is ${Math.round(f.pauseBeforeNewSentence)} ms (no thinking pauses)`,
    );
  if (
    !Number.isNaN(f.pauseBeforeNewParagraph) &&
    f.pauseBeforeNewParagraph < 500
  )
    flags.push(
      `pauseBeforeNewParagraph is ${Math.round(f.pauseBeforeNewParagraph)} ms (no paragraph pauses)`,
    );
  if (f.deletionRatio < 0.03)
    flags.push(
      `deletionRatio is ${(f.deletionRatio * 100).toFixed(1)}% (essentially no revision)`,
    );
  if (f.structuralEditCount === 0)
    flags.push("structuralEditCount is 0 (no large or far-back edits)");
  if (f.caretBacktrackCount === 0)
    flags.push(
      "caretBacktrackCount is 0 (no caret jumps backward — purely linear typing)",
    );
  if (!Number.isNaN(f.burstLengthCV) && f.burstLengthCV < 0.2)
    flags.push(
      `burstLengthCV is ${f.burstLengthCV.toFixed(2)} (uniform burst sizes)`,
    );
  if (f.frontToBackLinearity > 0.95)
    flags.push(
      `frontToBackLinearity is ${(f.frontToBackLinearity * 100).toFixed(0)}% (every insert at end-of-doc)`,
    );
  if (f.charsPerSecond > 8)
    flags.push(
      `charsPerSecond is ${f.charsPerSecond.toFixed(1)} (sustained transcription speed)`,
    );
  return flags;
}

function classOf(score: number): ProcessClass {
  if (score < CLASS_THRESHOLDS.human) return "human";
  if (score < CLASS_THRESHOLDS.mixed) return "mixed";
  return "likelyAI";
}

function rawScore(f: ProcessFeatures): number {
  const keys: (keyof ProcessFeatures)[] = [
    "burstUniformity",
    "pauseBeforeNewSentence",
    "pauseBeforeNewParagraph",
    "deletionRatio",
    "structuralEditCount",
    "caretBacktrackCount",
    "abandonedStartCount",
    "burstLengthCV",
    "frontToBackLinearity",
    "charsPerSecond",
  ];
  let total = 0;
  for (const k of keys) {
    const w = WEIGHTS[k] ?? 0;
    const s = suspicion(k, f[k] as number);
    total += w * s;
  }
  return Math.round(Math.max(0, Math.min(100, total)));
}

function burstLengths(events: ProcessEvent[]): number[] {
  const inserts = [...events]
    .sort((a, b) => a.t - b.t)
    .filter(isInsert);
  if (inserts.length === 0) return [];
  const lens: number[] = [];
  let cur = eventLen(inserts[0]);
  for (let i = 1; i < inserts.length; i++) {
    const gap = inserts[i].t - inserts[i - 1].t;
    if (gap <= BURST_GAP_MS) {
      cur += eventLen(inserts[i]);
    } else {
      lens.push(cur);
      cur = eventLen(inserts[i]);
    }
  }
  lens.push(cur);
  return lens;
}

export function analyzeProcess(
  events: ProcessEvent[],
  finalText: string,
): ProcessAnalysis {
  const features = extractFeatures(events, finalText);
  const processScore = rawScore(features);
  const flags = buildFlags(features);
  return {
    processScore,
    processClass: classOf(processScore),
    features,
    flags,
    burstLens: burstLengths(events),
    baselineAdjustedScore: null,
    baselineDeviation: null,
  };
}

// ---- Baseline math -------------------------------------------------------

const BASELINE_KEYS: (keyof ProcessFeatures)[] = [
  "burstUniformity",
  "pauseBeforeNewSentence",
  "pauseBeforeNewParagraph",
  "deletionRatio",
  "burstLengthCV",
  "frontToBackLinearity",
  "charsPerSecond",
];

export function foldIntoBaseline(
  baseline: ProcessBaseline | null,
  features: ProcessFeatures,
): ProcessBaseline {
  const prev = baseline ?? { n: 0, features: {} };
  const n = prev.n + 1;
  const out: Record<string, number> = { ...prev.features };
  for (const k of BASELINE_KEYS) {
    const v = features[k] as number;
    if (typeof v !== "number" || Number.isNaN(v)) continue;
    const prior = typeof out[k] === "number" ? out[k] : v;
    // Running mean
    out[k] = (prior * (n - 1) + v) / n;
  }
  return { n, features: out };
}

export function compareToBaseline(
  features: ProcessFeatures,
  baseline: ProcessBaseline | null,
): Record<string, number> {
  if (!baseline) return {};
  const out: Record<string, number> = {};
  for (const k of BASELINE_KEYS) {
    const v = features[k] as number;
    const b = baseline.features[k];
    if (
      typeof v !== "number" ||
      Number.isNaN(v) ||
      typeof b !== "number" ||
      !Number.isFinite(b) ||
      b === 0
    )
      continue;
    out[k] = (v - b) / b;
  }
  return out;
}

export function analyzeProcessWithBaseline(
  events: ProcessEvent[],
  finalText: string,
  baseline: ProcessBaseline | null,
): ProcessAnalysis {
  const base = analyzeProcess(events, finalText);
  if (!baseline || baseline.n === 0) {
    return { ...base, baselineAdjustedScore: null, baselineDeviation: null };
  }
  const dev = compareToBaseline(base.features, baseline);
  // Soften the score for features that are within 50% of this student's
  // own baseline (unsurprising behavior gets credit).
  let softener = 0;
  let softenerWeight = 0;
  for (const k of BASELINE_KEYS) {
    const w = WEIGHTS[k] ?? 0;
    if (w === 0) continue;
    const r = dev[k];
    if (typeof r !== "number") continue;
    const within = Math.max(0, 1 - Math.abs(r) / 0.5); // 1 if r==0, 0 if |r|>=0.5
    softener += within * w;
    softenerWeight += w;
  }
  // Adjust by reducing score in proportion to within-baseline weight.
  let adjusted = base.processScore;
  if (softenerWeight > 0) {
    const reduction = (softener / softenerWeight) * 15; // up to 15pt softening
    adjusted = Math.max(0, Math.round(base.processScore - reduction));
  }
  return {
    ...base,
    baselineAdjustedScore: adjusted,
    baselineDeviation: dev,
  };
}

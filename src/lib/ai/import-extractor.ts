// Reads a question paper and its official solutions out of two PDFs.
//
// The point of this is to avoid retyping hundreds of olympiad problems by
// hand. The point of everything below is that it never quietly makes
// something up while doing so.
//
// The extractor may only report what it can actually find. A missing point
// value is reported as missing, not guessed; an uncertain question/solution
// pairing is flagged rather than assumed. Nothing it produces is publishable
// until a human has approved it.
//
// Like grading, this is provider-neutral at the boundary and Gemini-specific
// only inside callGemini(). SERVER-ONLY.

// SERVER-ONLY. This check turns an accidental client import into an
// immediate, obvious error rather than a secret quietly shipped to a
// browser bundle.
if (typeof window !== "undefined") {
  throw new Error("src/lib/ai/import-extractor.ts must not be imported in the browser");
}

import { z } from "zod";
import { configuredAiModel, configuredAiProvider, estimateAiCostUsd } from "@/lib/pro/config";
import { CURRICULUM_TOPICS } from "@/data/mcq/topicTaxonomy";
import { extractJson } from "./schema";
import { hasLeftoverLatex, toUnicodeMath, toUnicodeMathOrNull } from "./math-notation";
import {
  EXTRACTION_FLAG_LABELS,
  type ExtractionFlag,
} from "@/lib/pro/extraction-flags";

// --- Warning flags ---------------------------------------------------------

// The flag vocabulary lives in a dependency-free module so the admin review
// screen (a Client Component) can show the labels without importing this
// server-only file. Re-exported here so callers have one import.
export {
  EXTRACTION_FLAGS,
  EXTRACTION_FLAG_LABELS,
  type ExtractionFlag,
} from "@/lib/pro/extraction-flags";

// --- Extraction shape ------------------------------------------------------

const extractedPartSchema = z.object({
  label: z.string().min(1).max(20),
  prompt: z.string().min(1),
  /// Null when the paper does not state a point value for this part. The
  /// model is told never to invent one.
  max_points: z.number().nullish(),
  official_solution: z.string().nullish(),
  grading_rubric: z.string().nullish(),
});

const extractedQuestionSchema = z.object({
  question_number: z.string().min(1).max(30),
  title: z.string().nullish(),
  question_text: z.string().min(1),
  total_points: z.number().nullish(),
  official_solution: z.string().nullish(),
  grading_rubric: z.string().nullish(),
  topic: z.string().nullish(),
  question_source_pages: z.array(z.number()).nullish(),
  solution_source_pages: z.array(z.number()).nullish(),
  references_figure: z.boolean().nullish(),
  solution_pairing_confident: z.boolean().nullish(),
  source_pages_confident: z.boolean().nullish(),
  confidence: z.number().min(0).max(1).nullish(),
  parts: z.array(extractedPartSchema).nullish(),
});

export const extractionResponseSchema = z.object({
  questions: z.array(extractedQuestionSchema),
});

export type ExtractedQuestion = z.infer<typeof extractedQuestionSchema>;

/// One draft ready to be written to the database, with its warnings already
/// worked out.
export type DraftQuestion = {
  questionNumber: string;
  title: string | null;
  questionText: string;
  totalPoints: number;
  officialSolution: string | null;
  gradingRubric: string | null;
  topic: string;
  questionPdfPages: number[];
  solutionPdfPages: number[];
  confidence: number | null;
  flags: ExtractionFlag[];
  parts: Array<{
    label: string;
    orderIndex: number;
    prompt: string;
    maxPoints: number;
    officialSolution: string | null;
    gradingRubric: string | null;
  }>;
};

export type ExtractionResult = {
  ok: boolean;
  drafts: DraftQuestion[];
  error?: string;
  usage: {
    provider: string;
    model: string;
    inputTokens: number | null;
    outputTokens: number | null;
    latencyMs: number;
    estimatedCostUsd: number | null;
  };
};

// --- Prompt ----------------------------------------------------------------

function buildExtractionPrompt(context: {
  competition: string;
  year: number;
  examName: string;
}): string {
  return [
    `You are helping build a study archive of astronomy olympiad problems.`,
    `You are given two PDFs: a question paper and its official solutions, from`,
    `${context.competition} ${context.year} (${context.examName}).`,
    ``,
    `Extract every free-response question, pairing each with its official solution.`,
    ``,
    `NEVER INVENT ANYTHING. This matters more than completeness.`,
    `  - If a point value is not printed in the paper, set it to null.`,
    `    Do not estimate it, and do not infer it from other questions.`,
    `  - If you cannot find an official solution for a question, set it to null.`,
    `  - If you are unsure a solution belongs to a question, still pair them but`,
    `    set solution_pairing_confident to false.`,
    `  - If you are unsure which source pages a question came from, set`,
    `    source_pages_confident to false.`,
    `  - Never write a solution, a derivation or an answer yourself. Only copy`,
    `    what the solutions PDF actually says.`,
    `  - Do not correct, reword or tidy the question text. Reproduce it.`,
    ``,
    `MATHS AND SYMBOLS`,
    `Write maths as plain Unicode text, NOT as LaTeX. This archive renders`,
    `question text directly, so backslashes and dollar signs would be shown`,
    `to students exactly as you typed them.`,
    `  Write:  1.8 × 10⁹ sources     L₀     α ≈ 0h, δ = 60°     T² ∝ a³`,
    `  Not:    $1.8 \\times 10^{9}$   L_0    \\alpha \\approx 0h    T^2 \\propto a^3`,
    `Use × · ± ≈ ∝ ≤ ≥ ° √ ∞ Σ ∫ and Greek letters directly. Use superscript`,
    `and subscript characters (² ³ ⁹ ⁻ ₀ ₁ ₑ) for powers and indices.`,
    `Write fractions with a slash, e.g. GM/r². Keep units as ordinary text,`,
    `e.g. "m/s²", "kg m⁻³".`,
    ``,
    `FIGURES`,
    `You cannot attach images. If a question depends on a diagram, graph or`,
    `table, set references_figure to true so a human attaches it before`,
    `publication. Do not describe the figure as if it were the question text.`,
    ``,
    `PARTS`,
    `If a question has lettered or numbered subparts, list them in "parts" with`,
    `the paper's own labels and per-part point values. If it has none, leave`,
    `"parts" empty and put the whole solution in official_solution.`,
    ``,
    `TOPIC`,
    `Classify each question into exactly one of these:`,
    CURRICULUM_TOPICS.map((topic) => `  - ${topic}`).join("\n"),
    ``,
    `OUTPUT`,
    `Reply with one JSON object and nothing else:`,
    `{ "questions": [ {`,
    `  "question_number": string, "title": string|null, "question_text": string,`,
    `  "total_points": number|null, "official_solution": string|null,`,
    `  "grading_rubric": string|null, "topic": string,`,
    `  "question_source_pages": number[], "solution_source_pages": number[],`,
    `  "references_figure": boolean, "solution_pairing_confident": boolean,`,
    `  "source_pages_confident": boolean, "confidence": number,`,
    `  "parts": [ { "label": string, "prompt": string, "max_points": number|null,`,
    `              "official_solution": string|null, "grading_rubric": string|null } ]`,
    `} ] }`,
  ].join("\n");
}

// --- Turning an extraction into a draft ------------------------------------

/// Below this the extraction is flagged for a closer look.
const LOW_CONFIDENCE_THRESHOLD = 0.7;

/// Works out a draft and its warnings from one extracted question.
///
/// Every uncertainty becomes a flag rather than a filled-in blank, and a
/// draft with any flag cannot be published (see canPublish).
export function toDraft(extracted: ExtractedQuestion): DraftQuestion {
  const flags = new Set<ExtractionFlag>();

  // Every piece of text is converted to the plain-Unicode maths style the
  // app renders, so an imported question matches the existing MCQ bank
  // instead of showing raw LaTeX to students.
  const parts = (extracted.parts ?? []).map((part, index) => ({
    label: part.label,
    orderIndex: index,
    prompt: toUnicodeMath(part.prompt),
    // A missing part point value becomes 0 and a flag — never a guess.
    maxPoints: typeof part.max_points === "number" ? part.max_points : 0,
    officialSolution: toUnicodeMathOrNull(part.official_solution),
    gradingRubric: toUnicodeMathOrNull(part.grading_rubric),
  }));

  const questionText = toUnicodeMath(extracted.question_text);
  const officialSolution = toUnicodeMathOrNull(extracted.official_solution);
  const gradingRubric = toUnicodeMathOrNull(extracted.grading_rubric);

  const statedTotal =
    typeof extracted.total_points === "number" ? extracted.total_points : null;
  const partsTotal = parts.reduce((sum, part) => sum + part.maxPoints, 0);

  if (statedTotal === null && partsTotal === 0) {
    flags.add("POINT_VALUE_MISSING");
  }
  if (parts.some((part) => part.maxPoints <= 0)) {
    flags.add("POINT_VALUE_MISSING");
  }
  if (statedTotal !== null && partsTotal > 0 && statedTotal !== partsTotal) {
    flags.add("PART_POINTS_DO_NOT_SUM");
  }

  const hasSolution =
    Boolean(officialSolution) || parts.some((part) => part.officialSolution);
  if (!hasSolution) flags.add("SOLUTION_MISSING");

  if (extracted.solution_pairing_confident === false) {
    flags.add("SOLUTION_PAIRING_UNCERTAIN");
  }
  if (extracted.source_pages_confident === false) {
    flags.add("SOURCE_PAGE_UNCERTAIN");
  }
  if ((extracted.question_source_pages ?? []).length === 0) {
    flags.add("SOURCE_PAGE_UNCERTAIN");
  }
  if (extracted.references_figure) {
    flags.add("MEDIA_REVIEW_REQUIRED");
  }
  if (
    typeof extracted.confidence === "number" &&
    extracted.confidence < LOW_CONFIDENCE_THRESHOLD
  ) {
    flags.add("LOW_CONFIDENCE");
  }

  const topic = (CURRICULUM_TOPICS as readonly string[]).includes(extracted.topic ?? "")
    ? (extracted.topic as string)
    : "Miscellaneous & Space History";

  // Notation the converter did not recognise would reach a student as raw
  // LaTeX, so it is flagged for a human rather than published looking wrong.
  const everyField = [questionText, officialSolution ?? "", gradingRubric ?? ""]
    .concat(parts.flatMap((part) => [part.prompt, part.officialSolution ?? ""]))
    .join("\n");
  if (hasLeftoverLatex(everyField)) flags.add("NOTATION_REVIEW_REQUIRED");

  return {
    questionNumber: extracted.question_number,
    title: toUnicodeMathOrNull(extracted.title),
    questionText,
    // 0 stands for "unknown", paired with POINT_VALUE_MISSING. It is never
    // presented to a student, because a flagged draft cannot be published.
    totalPoints: statedTotal ?? partsTotal,
    officialSolution,
    gradingRubric,
    topic,
    questionPdfPages: (extracted.question_source_pages ?? []).filter(Number.isInteger),
    solutionPdfPages: (extracted.solution_source_pages ?? []).filter(Number.isInteger),
    confidence: extracted.confidence ?? null,
    flags: Array.from(flags),
    parts,
  };
}

/// Whether a draft may be published to students.
///
/// This is the last gate before third-party olympiad material becomes part
/// of a paid product, so it is deliberately strict: unresolved warnings,
/// unreviewed rights, a missing point value or a missing solution all block
/// publication.
export function canPublish(draft: {
  flags: string[];
  totalPoints: number;
  rightsStatus: string;
  officialSolution: string | null;
  parts: Array<{ maxPoints: number; officialSolution: string | null }>;
}): { ok: true } | { ok: false; reasons: string[] } {
  const reasons: string[] = [];

  if (draft.flags.length > 0) {
    reasons.push(
      `Unresolved warnings: ${draft.flags
        .map((flag) => EXTRACTION_FLAG_LABELS[flag as ExtractionFlag] ?? flag)
        .join("; ")}`,
    );
  }

  if (draft.totalPoints <= 0) {
    reasons.push("The question has no point value. Enter the paper's own value.");
  }

  if (draft.parts.length > 0) {
    const sum = draft.parts.reduce((total, part) => total + part.maxPoints, 0);
    if (sum !== draft.totalPoints) {
      reasons.push(`Part points add up to ${sum}, but the total is ${draft.totalPoints}.`);
    }
    if (draft.parts.some((part) => part.maxPoints <= 0)) {
      reasons.push("Every part needs the point value printed in the paper.");
    }
    if (!draft.parts.some((part) => part.officialSolution)) {
      reasons.push("No official solution on any part.");
    }
  } else if (!draft.officialSolution) {
    reasons.push("No official solution.");
  }

  // Third-party material is never assumed to be cleared for reuse.
  const clearedRights = ["PERMISSION_GRANTED", "PUBLIC_DOMAIN", "FAIR_USE_CLAIMED"];
  if (!clearedRights.includes(draft.rightsStatus)) {
    reasons.push("Rights have not been reviewed for this source.");
  }

  return reasons.length === 0 ? { ok: true } : { ok: false, reasons };
}

// --- Running the extraction ------------------------------------------------

export async function extractFrqsFromPdfs(
  pdfs: { question: Uint8Array; solution: Uint8Array | null },
  context: { competition: string; year: number; examName: string },
): Promise<ExtractionResult> {
  const startedAt = Date.now();
  const provider = configuredAiProvider();
  const model = configuredAiModel();

  if (provider !== "gemini" || !process.env.GEMINI_API_KEY) {
    return {
      ok: false,
      drafts: [],
      error:
        "PDF extraction needs a real AI provider. Set GEMINI_API_KEY to use the importer.",
      usage: {
        provider: "none",
        model: "none",
        inputTokens: null,
        outputTokens: null,
        latencyMs: 0,
        estimatedCostUsd: null,
      },
    };
  }

  const called = await callGemini(model, process.env.GEMINI_API_KEY, pdfs, context);
  const latencyMs = Date.now() - startedAt;

  const usage = {
    provider: "gemini",
    model,
    inputTokens: called.inputTokens,
    outputTokens: called.outputTokens,
    latencyMs,
    estimatedCostUsd: estimateAiCostUsd(model, called.inputTokens, called.outputTokens),
  };

  if (!called.text) {
    return { ok: false, drafts: [], error: called.error ?? "Extraction failed.", usage };
  }

  const parsed = extractionResponseSchema.safeParse(extractJson(called.text));
  if (!parsed.success) {
    return {
      ok: false,
      drafts: [],
      error: "The extraction came back in a shape we could not read.",
      usage,
    };
  }

  return { ok: true, drafts: parsed.data.questions.map(toDraft), usage };
}

/// The only Gemini-specific code in this file.
async function callGemini(
  model: string,
  apiKey: string,
  pdfs: { question: Uint8Array; solution: Uint8Array | null },
  context: { competition: string; year: number; examName: string },
): Promise<{
  text: string | null;
  error?: string;
  inputTokens: number | null;
  outputTokens: number | null;
}> {
  const parts: Array<Record<string, unknown>> = [
    { text: buildExtractionPrompt(context) },
    { text: "QUESTION PAPER:" },
    { inline_data: { mime_type: "application/pdf", data: base64(pdfs.question) } },
  ];

  if (pdfs.solution) {
    parts.push({ text: "OFFICIAL SOLUTIONS:" });
    parts.push({ inline_data: { mime_type: "application/pdf", data: base64(pdfs.solution) } });
  }

  const controller = new AbortController();
  // Reading two full papers takes considerably longer than grading one answer.
  const timeout = setTimeout(() => controller.abort(), 240_000);

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-goog-api-key": apiKey },
        body: JSON.stringify({
          contents: [{ role: "user", parts }],
          generationConfig: { temperature: 0, responseMimeType: "application/json" },
        }),
        signal: controller.signal,
      },
    );

    const payload = (await response.json().catch(() => null)) as {
      candidates?: Array<{ content?: { parts?: Array<{ text?: string }> } }>;
      usageMetadata?: { promptTokenCount?: number; candidatesTokenCount?: number };
      error?: { message?: string };
    } | null;

    const inputTokens = payload?.usageMetadata?.promptTokenCount ?? null;
    const outputTokens = payload?.usageMetadata?.candidatesTokenCount ?? null;

    if (!response.ok || !payload || payload.error) {
      console.error("FRQ extraction failed:", payload?.error?.message ?? response.status);
      return {
        text: null,
        error: "The extraction service is unavailable right now.",
        inputTokens,
        outputTokens,
      };
    }

    const text =
      payload.candidates?.[0]?.content?.parts?.map((part) => part.text ?? "").join("") ?? null;

    return { text: text?.trim() || null, inputTokens, outputTokens };
  } catch (error) {
    console.error("FRQ extraction error:", error);
    return {
      text: null,
      error: "Extraction timed out or failed.",
      inputTokens: null,
      outputTokens: null,
    };
  } finally {
    clearTimeout(timeout);
  }
}

function base64(bytes: Uint8Array): string {
  return Buffer.from(bytes).toString("base64");
}

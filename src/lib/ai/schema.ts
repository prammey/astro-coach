// Validating what the model sends back.
//
// A language model's JSON is untrusted input. It can invent a part, award
// 12 points out of 8, return a mistake tag that isn't in our taxonomy, or
// simply not be JSON at all. Everything below assumes that and repairs or
// rejects rather than storing nonsense.
//
// The scores in particular are recomputed here: the total we store is the
// sum of the clamped part scores, never the total the model claimed.

import { z } from "zod";
import { isMistakeTag, type MistakeTag } from "./mistakes";
import type {
  GradedPartScore,
  GradingOutcome,
  GradingPart,
  GradingSuccess,
} from "./types";

/// The shape the model is asked to produce. Deliberately permissive about
/// types it might get slightly wrong — we normalise afterwards.
export const modelResponseSchema = z.object({
  outcome: z.enum(["graded", "unreadable"]),
  unreadable_message: z.string().nullish(),
  unclear_pages: z.array(z.number()).nullish(),
  part_scores: z
    .array(
      z.object({
        label: z.string(),
        awarded_points: z.number(),
        comment: z.string().nullish(),
      }),
    )
    .nullish(),
  overall: z.string().nullish(),
  strengths: z.array(z.string()).nullish(),
  improvements: z.array(z.string()).nullish(),
  next_step: z.string().nullish(),
  mistake_tags: z.array(z.string()).nullish(),
  confidence: z.enum(["high", "medium", "low"]).nullish(),
  legibility_note: z.string().nullish(),
});

export type ModelResponse = z.infer<typeof modelResponseSchema>;

/// Pulls JSON out of a model's reply.
///
/// Models wrap JSON in ```json fences, add a sentence before it, or return
/// it clean. This handles all three and returns null when there is no
/// parseable object at all.
export function extractJson(text: string): unknown | null {
  const trimmed = text.trim();

  const fenced = trimmed.match(/```(?:json)?\s*([\s\S]*?)```/i);
  const candidate = fenced ? fenced[1].trim() : trimmed;

  try {
    return JSON.parse(candidate);
  } catch {
    // Last resort: the outermost {...} in the reply.
    const start = candidate.indexOf("{");
    const end = candidate.lastIndexOf("}");
    if (start === -1 || end <= start) return null;
    try {
      return JSON.parse(candidate.slice(start, end + 1));
    } catch {
      return null;
    }
  }
}

/// Rounds to half a point. Olympiad rubrics award halves; anything finer is
/// a model artefact rather than a real distinction.
function roundToHalf(value: number): number {
  return Math.round(value * 2) / 2;
}

/// Forces one part score into the range the competition actually allows.
function clampPartScore(awarded: number, maxPoints: number): number {
  if (!Number.isFinite(awarded)) return 0;
  return Math.min(Math.max(roundToHalf(awarded), 0), maxPoints);
}

/// Turns a validated model response into the result we store, or explains
/// why it cannot be trusted.
///
/// `parts` is the question's real structure. Part scores are matched to it
/// by label, so a part the model omitted scores zero and a part it invented
/// is discarded — the question's own point structure always wins.
export function normaliseGrade(
  raw: unknown,
  parts: GradingPart[],
  questionTotalPoints: number,
): GradingOutcome {
  const parsed = modelResponseSchema.safeParse(raw);
  if (!parsed.success) {
    return {
      outcome: "failed",
      errorCode: "INVALID_RESPONSE",
      message: "The grading model returned a response we could not read.",
    };
  }

  const response = parsed.data;

  if (response.outcome === "unreadable") {
    return {
      outcome: "unreadable",
      message:
        response.unreadable_message?.trim() ||
        "Some of your uploaded work could not be read clearly enough to grade.",
      unclearPages: (response.unclear_pages ?? [])
        .filter((page) => Number.isInteger(page) && page > 0)
        .slice(0, 20),
    };
  }

  // A graded response has to actually contain a grade.
  if (!response.part_scores || response.part_scores.length === 0) {
    return {
      outcome: "failed",
      errorCode: "INVALID_RESPONSE",
      message: "The grading model returned no scores.",
    };
  }

  const byLabel = new Map(
    response.part_scores.map((score) => [score.label.trim().toLowerCase(), score]),
  );

  // A question with no lettered parts is graded as a single unit worth the
  // question's own total.
  const structure: GradingPart[] =
    parts.length > 0
      ? parts
      : [
          {
            id: "whole",
            label: "Answer",
            prompt: "",
            maxPoints: questionTotalPoints,
            officialSolution: null,
            gradingRubric: null,
          },
        ];

  const partScores: GradedPartScore[] = structure.map((part, index) => {
    const match =
      byLabel.get(part.label.trim().toLowerCase()) ??
      // Fall back to position when the model relabelled the parts.
      (response.part_scores!.length === structure.length
        ? response.part_scores![index]
        : undefined);

    return {
      partId: part.id,
      label: part.label,
      awardedPoints: clampPartScore(match?.awarded_points ?? 0, part.maxPoints),
      maxPoints: part.maxPoints,
      comment: match?.comment?.trim() ?? "",
    };
  });

  // The stored total is our arithmetic on clamped part scores, never the
  // model's claimed total.
  const awardedPoints = roundToHalf(
    partScores.reduce((sum, score) => sum + score.awardedPoints, 0),
  );
  const maximumPoints = partScores.reduce((sum, score) => sum + score.maxPoints, 0);

  const mistakeTags = Array.from(
    new Set((response.mistake_tags ?? []).filter(isMistakeTag)),
  ) as MistakeTag[];

  const success: GradingSuccess = {
    outcome: "graded",
    awardedPoints,
    maximumPoints,
    partScores,
    feedback: {
      overall: response.overall?.trim() || "Graded.",
      strengths: cleanList(response.strengths),
      improvements: cleanList(response.improvements),
      nextStep: response.next_step?.trim() || "",
      confidence: response.confidence ?? "medium",
      legibilityNote: response.legibility_note?.trim() || null,
    },
    mistakeTags,
  };

  return success;
}

function cleanList(values: string[] | null | undefined): string[] {
  return (values ?? [])
    .map((value) => value.trim())
    .filter(Boolean)
    .slice(0, 6);
}

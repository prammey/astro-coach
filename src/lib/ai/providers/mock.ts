// A deterministic grader for local development and tests.
//
// It never calls a network service and never costs money, so a developer
// can run the whole FRQ flow — submit, grade, retry, unlock — with no API
// key configured. Production refuses to use it (see ../grader.ts).
//
// The scoring is intentionally crude but stable: the same submission always
// produces the same grade, which is what makes it useful in tests.

import type {
  GradedPartScore,
  GradingInput,
  GradingProvider,
  GradingResult,
} from "../types";

/// Small stable hash, so the same work always earns the same marks.
function hash(text: string): number {
  let value = 0;
  for (let index = 0; index < text.length; index += 1) {
    value = (value * 31 + text.charCodeAt(index)) >>> 0;
  }
  return value;
}

export class MockGradingProvider implements GradingProvider {
  readonly name = "mock";
  readonly model = "mock";

  async grade(input: GradingInput): Promise<GradingResult> {
    const startedAt = Date.now();

    const typed = input.student.typedResponse?.trim() ?? "";
    const pages = input.student.attachments.length;
    const seed = hash(`${typed}|${pages}|${input.question.questionNumber}`);

    // Two magic strings let a developer or a test force the awkward paths
    // without needing a real unreadable photo or a provider outage.
    if (typed.toLowerCase().includes("[mock:unreadable]")) {
      return {
        outcome: {
          outcome: "unreadable",
          message: "The uploaded pages were too blurry to read (mock grader).",
          unclearPages: [1],
        },
        usage: this.usage(startedAt),
      };
    }
    if (typed.toLowerCase().includes("[mock:full]")) {
      return this.gradedResult(input, () => 1, startedAt);
    }

    // Roughly 40–90% of each part, deterministic per submission and part.
    return this.gradedResult(
      input,
      (index) => 0.4 + ((seed >> (index % 8)) % 51) / 100,
      startedAt,
    );
  }

  private gradedResult(
    input: GradingInput,
    fractionForPart: (index: number) => number,
    startedAt: number,
  ): GradingResult {
    const structure =
      input.parts.length > 0
        ? input.parts.map((part) => ({
            partId: part.id,
            label: part.label,
            maxPoints: part.maxPoints,
          }))
        : [
            {
              partId: "whole",
              label: "Answer",
              maxPoints: input.question.totalPoints,
            },
          ];

    const partScores: GradedPartScore[] = structure.map((part, index) => {
      const awarded = Math.round(part.maxPoints * fractionForPart(index) * 2) / 2;
      return {
        partId: part.partId,
        label: part.label,
        awardedPoints: Math.min(awarded, part.maxPoints),
        maxPoints: part.maxPoints,
        comment:
          awarded >= part.maxPoints
            ? "Complete and correct (mock grader)."
            : "Method is on the right lines; check the final steps (mock grader).",
      };
    });

    const awardedPoints = partScores.reduce((sum, part) => sum + part.awardedPoints, 0);
    const maximumPoints = partScores.reduce((sum, part) => sum + part.maxPoints, 0);
    const isFullMarks = awardedPoints >= maximumPoints;

    return {
      outcome: {
        outcome: "graded",
        awardedPoints,
        maximumPoints,
        partScores,
        feedback: {
          overall: isFullMarks
            ? "This is a complete solution (mock grader — not a real grade)."
            : "The approach is sound but some steps need tightening (mock grader — not a real grade).",
          strengths: ["Set the problem up with a sensible physical model."],
          improvements: isFullMarks
            ? []
            : ["Show the substitution of numbers explicitly before evaluating."],
          nextStep: isFullMarks
            ? "Try a harder question on the same topic."
            : "Re-derive the final expression, keeping track of units throughout.",
          confidence: "medium",
          legibilityNote: null,
        },
        mistakeTags: isFullMarks ? [] : ["incomplete_reasoning", "unit_error"],
      },
      usage: this.usage(startedAt),
    };
  }

  private usage(startedAt: number) {
    return {
      provider: this.name,
      model: this.model,
      inputTokens: null,
      outputTokens: null,
      latencyMs: Date.now() - startedAt,
    };
  }
}

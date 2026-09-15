// Tests for how untrusted model output becomes a stored grade.
//
// A language model can invent parts, over-award points, return tags we do
// not recognise, or reply with something that is not JSON at all. Every one
// of those is a case here.

import { describe, expect, it } from "vitest";
import { extractJson, normaliseGrade } from "./schema";
import { buildSystemPrompt, buildUserPrompt } from "./prompt";
import { MockGradingProvider } from "./providers/mock";
import { estimateAiCostUsd } from "@/lib/pro/config";
import type { GradingInput, GradingPart } from "./types";

const PARTS: GradingPart[] = [
  { id: "p-a", label: "A", prompt: "State Kepler's third law.", maxPoints: 2, officialSolution: "T^2 ∝ a^3", gradingRubric: null },
  { id: "p-b", label: "B", prompt: "Derive the period.", maxPoints: 3, officialSolution: "T = 3.42 years", gradingRubric: null },
  { id: "p-c", label: "C", prompt: "Comment on the result.", maxPoints: 5, officialSolution: "Consistent with the asteroid belt.", gradingRubric: null },
];

function gradedPayload(overrides: Record<string, unknown> = {}) {
  return {
    outcome: "graded",
    part_scores: [
      { label: "A", awarded_points: 2, comment: "Correct." },
      { label: "B", awarded_points: 1.5, comment: "Method fine, arithmetic slipped." },
      { label: "C", awarded_points: 3, comment: "Partly justified." },
    ],
    overall: "Solid approach with a numerical slip.",
    strengths: ["Correct statement of the law."],
    improvements: ["Track units through the substitution."],
    next_step: "Redo part B keeping units explicit.",
    mistake_tags: ["arithmetic_error", "unit_error"],
    confidence: "high",
    legibility_note: null,
    ...overrides,
  };
}

describe("pulling JSON out of a model reply", () => {
  it("reads clean JSON", () => {
    expect(extractJson('{"outcome":"graded"}')).toEqual({ outcome: "graded" });
  });

  it("reads JSON out of a markdown fence", () => {
    expect(extractJson('```json\n{"outcome":"graded"}\n```')).toEqual({ outcome: "graded" });
  });

  it("reads JSON that has prose wrapped around it", () => {
    expect(extractJson('Here is the grade:\n{"outcome":"graded"}\nHope that helps!'))
      .toEqual({ outcome: "graded" });
  });

  it("returns null when there is no JSON at all", () => {
    expect(extractJson("I could not grade this.")).toBeNull();
  });
});

describe("normalising a grade", () => {
  it("keeps the competition's own point values", () => {
    const result = normaliseGrade(gradedPayload(), PARTS, 10);
    expect(result.outcome).toBe("graded");
    if (result.outcome !== "graded") return;

    expect(result.maximumPoints).toBe(10);
    expect(result.partScores.map((score) => score.maxPoints)).toEqual([2, 3, 5]);
  });

  it("recomputes the total from the part scores rather than trusting the model", () => {
    const lying = gradedPayload({ total_awarded: 10 });
    const result = normaliseGrade(lying, PARTS, 10);
    if (result.outcome !== "graded") throw new Error("expected a grade");

    expect(result.awardedPoints).toBe(6.5); // 2 + 1.5 + 3
  });

  it("clamps a part score the model awarded above its maximum", () => {
    const overAwarded = gradedPayload({
      part_scores: [
        { label: "A", awarded_points: 99, comment: "" },
        { label: "B", awarded_points: 3, comment: "" },
        { label: "C", awarded_points: 5, comment: "" },
      ],
    });
    const result = normaliseGrade(overAwarded, PARTS, 10);
    if (result.outcome !== "graded") throw new Error("expected a grade");

    expect(result.partScores[0].awardedPoints).toBe(2);
    expect(result.awardedPoints).toBe(10);
  });

  it("clamps a negative score to zero", () => {
    const negative = gradedPayload({
      part_scores: [{ label: "A", awarded_points: -5, comment: "" }],
    });
    const result = normaliseGrade(negative, PARTS, 10);
    if (result.outcome !== "graded") throw new Error("expected a grade");
    expect(result.partScores[0].awardedPoints).toBe(0);
  });

  it("scores a part the model forgot as zero rather than dropping it", () => {
    const missing = gradedPayload({
      part_scores: [{ label: "A", awarded_points: 2, comment: "Correct." }],
    });
    const result = normaliseGrade(missing, PARTS, 10);
    if (result.outcome !== "graded") throw new Error("expected a grade");

    expect(result.partScores).toHaveLength(3);
    expect(result.partScores[1].awardedPoints).toBe(0);
    expect(result.maximumPoints).toBe(10);
  });

  it("discards a part the model invented", () => {
    const invented = gradedPayload({
      part_scores: [
        ...gradedPayload().part_scores,
        { label: "D", awarded_points: 5, comment: "Bonus part." },
      ],
    });
    const result = normaliseGrade(invented, PARTS, 10);
    if (result.outcome !== "graded") throw new Error("expected a grade");

    expect(result.partScores.map((score) => score.label)).toEqual(["A", "B", "C"]);
    expect(result.maximumPoints).toBe(10);
  });

  it("grades a question with no lettered parts as one whole answer", () => {
    const whole = {
      outcome: "graded",
      part_scores: [{ label: "Answer", awarded_points: 3, comment: "Good." }],
      overall: "Fine.",
      mistake_tags: [],
      confidence: "high",
    };
    const result = normaliseGrade(whole, [], 3);
    if (result.outcome !== "graded") throw new Error("expected a grade");

    expect(result.maximumPoints).toBe(3);
    expect(result.awardedPoints).toBe(3);
  });

  it("keeps only mistake tags from our taxonomy", () => {
    const withJunk = gradedPayload({
      mistake_tags: ["unit_error", "vibes_were_off", "arithmetic_error", "unit_error"],
    });
    const result = normaliseGrade(withJunk, PARTS, 10);
    if (result.outcome !== "graded") throw new Error("expected a grade");

    expect(result.mistakeTags).toEqual(["unit_error", "arithmetic_error"]);
  });

  it("passes through an unreadable verdict with its unclear pages", () => {
    const result = normaliseGrade(
      { outcome: "unreadable", unreadable_message: "Page 2 is too dark.", unclear_pages: [2] },
      PARTS,
      10,
    );
    expect(result.outcome).toBe("unreadable");
    if (result.outcome !== "unreadable") return;
    expect(result.unclearPages).toEqual([2]);
  });

  it("rejects a response that is not the shape we asked for", () => {
    const result = normaliseGrade({ nonsense: true }, PARTS, 10);
    expect(result.outcome).toBe("failed");
    if (result.outcome !== "failed") return;
    expect(result.errorCode).toBe("INVALID_RESPONSE");
  });

  it("rejects a graded response that contains no scores", () => {
    const result = normaliseGrade({ outcome: "graded", part_scores: [] }, PARTS, 10);
    expect(result.outcome).toBe("failed");
  });
});

function gradingInput(overrides: Partial<GradingInput> = {}): GradingInput {
  return {
    question: {
      competition: "USAAAO",
      year: 2019,
      questionNumber: "3",
      questionText: "An asteroid orbits at 2.3 AU.",
      totalPoints: 10,
      officialSolution: "T = 3.42 years",
      gradingRubric: null,
    },
    parts: PARTS,
    student: { typedResponse: "T squared equals a cubed", attachments: [] },
    attemptNumber: 1,
    maxAttempts: 3,
    previousFeedback: [],
    solutionAlreadyVisible: false,
    ...overrides,
  };
}

describe("spoiler-safe prompting", () => {
  it("instructs the model not to reveal the answer before unlock", () => {
    const prompt = buildSystemPrompt(gradingInput());
    expect(prompt).toContain("SPOILER RULE");
    expect(prompt).toContain("Do NOT hand it over");
  });

  it("drops the spoiler rule once the student has unlocked the solution", () => {
    const prompt = buildSystemPrompt(gradingInput({ solutionAlreadyVisible: true }));
    expect(prompt).not.toContain("SPOILER RULE");
    expect(prompt).toContain("already unlocked");
  });

  it("gives the model the official solution as server-only context", () => {
    const prompt = buildUserPrompt(gradingInput());
    expect(prompt).toContain("OFFICIAL SOLUTION (do not reveal): T = 3.42 years");
  });

  it("tells the model never to invent a grade for unreadable work", () => {
    const prompt = buildSystemPrompt(gradingInput());
    expect(prompt).toContain("do NOT guess");
    expect(prompt).toContain("Never pretend to have read handwriting you could not read");
  });

  it("forbids rescaling to a percentage or out of ten", () => {
    expect(buildSystemPrompt(gradingInput())).toContain("Never rescale");
  });

  it("passes earlier feedback in so a retry builds on it", () => {
    const prompt = buildUserPrompt(
      gradingInput({ attemptNumber: 2, previousFeedback: ["Check your units."] }),
    );
    expect(prompt).toContain("attempt 2 of 3");
    expect(prompt).toContain("Check your units.");
  });
});

describe("the mock grader", () => {
  const provider = new MockGradingProvider();

  it("returns the same grade for the same submission", async () => {
    const first = await provider.grade(gradingInput());
    const second = await provider.grade(gradingInput());
    expect(first.outcome).toEqual(second.outcome);
  });

  it("scores against the question's real point values", async () => {
    const result = await provider.grade(gradingInput());
    if (result.outcome.outcome !== "graded") throw new Error("expected a grade");
    expect(result.outcome.maximumPoints).toBe(10);
    expect(result.outcome.awardedPoints).toBeLessThanOrEqual(10);
  });

  it("can be forced to award full marks, for testing early unlock", async () => {
    const result = await provider.grade(
      gradingInput({ student: { typedResponse: "[mock:full]", attachments: [] } }),
    );
    if (result.outcome.outcome !== "graded") throw new Error("expected a grade");
    expect(result.outcome.awardedPoints).toBe(10);
  });

  it("can be forced to report unreadable work", async () => {
    const result = await provider.grade(
      gradingInput({ student: { typedResponse: "[mock:unreadable]", attachments: [] } }),
    );
    expect(result.outcome.outcome).toBe("unreadable");
  });

  it("costs nothing", () => {
    expect(estimateAiCostUsd("mock", 1000, 1000)).toBe(0);
  });
});

describe("cost estimation", () => {
  it("estimates from the rates table", () => {
    // 1M input at $0.30 plus 1M output at $2.50.
    expect(estimateAiCostUsd("gemini-3.5-flash-lite", 1_000_000, 1_000_000)).toBeCloseTo(2.8, 6);
  });

  it("returns null for a model we have no rates for, rather than a false zero", () => {
    expect(estimateAiCostUsd("some-unknown-model", 1000, 1000)).toBeNull();
  });

  it("returns null when no token counts were reported", () => {
    expect(estimateAiCostUsd("gemini-3.5-flash-lite", null, null)).toBeNull();
  });

  it("costs nothing for the mock grader", () => {
    expect(estimateAiCostUsd("mock", 1_000_000, 1_000_000)).toBe(0);
  });

  it("still prices the retired 2.5 models, for historical usage rows", () => {
    expect(estimateAiCostUsd("gemini-2.5-flash", 1_000_000, 1_000_000)).toBeCloseTo(2.8, 6);
  });

  describe("promotional pricing that expires", () => {
    const DURING = new Date("2026-09-08T00:00:00Z");
    const AFTER = new Date("2027-01-01T00:00:00Z");

    it("uses the discounted rate before the changeover", () => {
      // $0.75 input + $3.75 output per 1M.
      expect(estimateAiCostUsd("gemini-3.8-flash", 1_000_000, 1_000_000, DURING))
        .toBeCloseTo(4.5, 6);
    });

    it("uses the full rate from the changeover date onward", () => {
      // Doubles to $1.50 + $7.50.
      expect(estimateAiCostUsd("gemini-3.8-flash", 1_000_000, 1_000_000, AFTER))
        .toBeCloseTo(9, 6);
    });

    it("switches exactly on the boundary, not a day late", () => {
      const justBefore = new Date("2026-12-31T23:59:59Z");
      expect(estimateAiCostUsd("gemini-3.8-flash", 1_000_000, 0, justBefore)).toBeCloseTo(0.75, 6);
      expect(estimateAiCostUsd("gemini-3.8-flash", 1_000_000, 0, AFTER)).toBeCloseTo(1.5, 6);
    });

    it("leaves models without a promotion unaffected by the date", () => {
      expect(estimateAiCostUsd("gemini-3.5-flash", 1_000_000, 0, DURING)).toBeCloseTo(1.5, 6);
      expect(estimateAiCostUsd("gemini-3.5-flash", 1_000_000, 0, AFTER)).toBeCloseTo(1.5, 6);
    });
  });
});

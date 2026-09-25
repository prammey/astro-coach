import { afterEach, describe, expect, it, vi } from "vitest";
import { gradeFrqSubmission } from "./grader";
import type { GradingInput } from "./types";

const input: GradingInput = {
  question: {
    competition: "IAAC",
    year: 2022,
    questionNumber: "C",
    questionText: "Show that...",
    totalPoints: 5,
    officialSolution: "N = rho pi R^2 d ...",
    gradingRubric: null,
  },
  parts: [],
  student: { typedResponse: "my working", attachments: [] },
  attemptNumber: 1,
  maxAttempts: 3,
  previousFeedback: [],
  solutionAlreadyVisible: false,
};

describe("choosing the grader", () => {
  afterEach(() => vi.unstubAllEnvs());

  it("never hands out mock grades in production just because the key is missing", async () => {
    vi.stubEnv("NODE_ENV", "production");
    vi.stubEnv("GEMINI_API_KEY", "");
    vi.stubEnv("AI_GRADING_PROVIDER", "");
    const result = await gradeFrqSubmission(input, { prisma: {} as never });
    expect(result.outcome).toMatchObject({ outcome: "failed", errorCode: "NOT_CONFIGURED" });
  });
});

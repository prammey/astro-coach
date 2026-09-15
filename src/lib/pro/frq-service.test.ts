// Tests the one place a grading credit is ever spent.
//
// These drive the real submitGradedAttempt with a stub database, stubbed
// storage and a stubbed grader, so the rule the whole feature rests on can
// be checked directly: a credit is charged when, and only when, a real
// grade comes back.
//
// The stub database is deliberately small — it answers only what this
// function asks — but the logic under test is the real thing.

import { beforeEach, describe, expect, it, vi } from "vitest";

const downloadFile = vi.fn();
const gradeFrqSubmission = vi.fn();

vi.mock("@/lib/pro/storage", () => ({
  downloadFile: (...args: unknown[]) => downloadFile(...(args as [])),
  statFile: vi.fn(async () => ({ mimeType: "image/png", byteSize: 1024 })),
  ownsStudentWorkPath: (userId: string, path: string) => path.startsWith(`${userId}/`),
  createSignedReadUrl: vi.fn(async () => "https://signed.example/file"),
}));

vi.mock("@/lib/ai/grader", () => ({
  gradeFrqSubmission: (...args: unknown[]) => gradeFrqSubmission(...(args as [])),
}));

vi.mock("@/lib/prisma", () => ({ getPrisma: () => prisma }));

const USER = "user-abc";
const QUESTION = "frq-1";
const UPLOAD = `${USER}/${QUESTION}/1-page.png`;

/// Records what the code under test wrote, so assertions can read it back.
let updates: Array<Record<string, unknown>>;

/// A stub Prisma client answering only what submitGradedAttempt asks of it.
/// Defaults describe a Pro user with credits, on their first attempt.
let prisma: Record<string, never> | ReturnType<typeof buildPrisma>;

function buildPrisma() {
  const client = {
    frqQuestion: {
      findFirst: async () => ({
        id: QUESTION,
        status: "PUBLISHED",
        competition: "IOAA",
        year: 2024,
        questionNumber: "3",
        questionText: "Estimate the mass of the cluster.",
        totalPoints: 5,
        officialSolution: "Use the virial theorem.",
        gradingRubric: null,
        parts: [],
      }),
    },
    subscription: {
      findUnique: async () => ({
        plan: "PRO",
        stripeStatus: "active",
        currentPeriodStart: new Date(Date.now() - 86_400_000),
        currentPeriodEnd: new Date(Date.now() + 86_400_000),
        cancelAtPeriodEnd: false,
        isFoundingPrice: true,
      }),
    },
    creditGrant: { findMany: async () => [] },
    frqSolutionUnlock: {
      findUnique: async () => null,
      upsert: async () => ({}),
    },
    frqSubmission: {
      count: async () => 0,
      findFirst: async () => null,
      findMany: async () => [],
      aggregate: async () => ({ _max: { sequenceNumber: 0 } }),
      create: async () => ({ id: "sub_row_1" }),
      update: async (args: { data: Record<string, unknown> }) => {
        updates.push(args.data);
        return {};
      },
    },
    $executeRaw: async () => 0,
    $transaction: async (fn: (tx: unknown) => Promise<unknown>) => fn(client),
  };
  return client;
}

/// A successful grade from the provider.
function gradedOutcome() {
  return {
    outcome: {
      outcome: "graded",
      awardedPoints: 4,
      maximumPoints: 5,
      partScores: [],
      feedback: "Good use of the virial theorem.",
      mistakeTags: [],
    },
    usage: {
      provider: "gemini",
      model: "gemini-3.5-flash-lite",
      inputTokens: 100,
      outputTokens: 50,
      latencyMs: 1200,
    },
  };
}

const { submitGradedAttempt } = await import("./frq-service");

beforeEach(() => {
  vi.clearAllMocks();
  updates = [];
  prisma = buildPrisma();
  downloadFile.mockResolvedValue(new Uint8Array([1, 2, 3]));
  gradeFrqSubmission.mockResolvedValue(gradedOutcome());
});

describe("what a submission costs", () => {
  it("charges a credit when a real grade comes back", async () => {
    const result = await submitGradedAttempt(
      USER,
      QUESTION,
      { typedResponse: null, uploadPaths: [UPLOAD] },
      prisma as never,
    );

    expect(result.ok).toBe(true);
    const graded = updates.find((update) => update.status === "GRADED");
    expect(graded).toMatchObject({ creditConsumed: true, attemptNumber: 1 });
  });

  it("charges nothing when the uploaded work cannot be retrieved", async () => {
    // Storage is unreachable. downloadFile returns null rather than throwing,
    // which is exactly how this used to reach the model as an empty
    // submission and come back as a zero the student paid for.
    downloadFile.mockResolvedValue(null);

    const result = await submitGradedAttempt(
      USER,
      QUESTION,
      { typedResponse: null, uploadPaths: [UPLOAD] },
      prisma as never,
    );

    expect(result).toMatchObject({ ok: false, code: "GRADING_UNAVAILABLE" });

    // The model was never asked, so there is nothing to charge for.
    expect(gradeFrqSubmission).not.toHaveBeenCalled();
    expect(updates.some((update) => update.creditConsumed === true)).toBe(false);

    // And the row does not sit in GRADING forever.
    expect(updates.at(-1)).toMatchObject({
      status: "FAILED",
      errorCode: "UPLOAD_UNREADABLE",
    });
  });

  it("charges nothing when only some of the pages come back", async () => {
    // A partial submission is still the wrong thing to grade: the model
    // would mark work it cannot see as missing.
    downloadFile
      .mockResolvedValueOnce(new Uint8Array([1, 2, 3]))
      .mockResolvedValueOnce(null);

    const result = await submitGradedAttempt(
      USER,
      QUESTION,
      {
        typedResponse: null,
        uploadPaths: [UPLOAD, `${USER}/${QUESTION}/2-page.png`],
      },
      prisma as never,
    );

    expect(result).toMatchObject({ ok: false, code: "GRADING_UNAVAILABLE" });
    expect(gradeFrqSubmission).not.toHaveBeenCalled();
  });

  it("charges nothing when the provider fails", async () => {
    gradeFrqSubmission.mockResolvedValue({
      outcome: {
        outcome: "failed",
        errorCode: "PROVIDER_ERROR",
        message: "The grading service is unavailable right now.",
      },
      usage: {
        provider: "gemini",
        model: "gemini-3.5-flash-lite",
        inputTokens: null,
        outputTokens: null,
        latencyMs: 40,
      },
    });

    const result = await submitGradedAttempt(
      USER,
      QUESTION,
      { typedResponse: null, uploadPaths: [UPLOAD] },
      prisma as never,
    );

    expect(result).toMatchObject({ ok: false, code: "GRADING_UNAVAILABLE" });
    expect(updates.some((update) => update.creditConsumed === true)).toBe(false);
  });

  it("charges nothing when the model cannot read the work", async () => {
    gradeFrqSubmission.mockResolvedValue({
      outcome: {
        outcome: "unreadable",
        message: "Page 2 is too blurry to mark.",
        unclearPages: [2],
      },
      usage: {
        provider: "gemini",
        model: "gemini-3.5-flash-lite",
        inputTokens: 80,
        outputTokens: 10,
        latencyMs: 900,
      },
    });

    const result = await submitGradedAttempt(
      USER,
      QUESTION,
      { typedResponse: null, uploadPaths: [UPLOAD] },
      prisma as never,
    );

    expect(result).toMatchObject({ ok: false, code: "UNREADABLE_WORK" });
    expect(updates.some((update) => update.creditConsumed === true)).toBe(false);
    expect(updates.at(-1)).toMatchObject({ status: "UNREADABLE" });
  });

  it("refuses a file belonging to somebody else", async () => {
    const result = await submitGradedAttempt(
      USER,
      QUESTION,
      { typedResponse: null, uploadPaths: ["someone-else/frq-1/page.png"] },
      prisma as never,
    );

    expect(result).toMatchObject({ ok: false, code: "FILE_NOT_FOUND" });
    expect(gradeFrqSubmission).not.toHaveBeenCalled();
  });
});

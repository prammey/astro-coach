// Tests for the Pro business rules — the logic that decides who may do
// what, and what it costs them. These are the rules that guard money,
// so they are tested directly rather than only through the UI.

import { describe, expect, it } from "vitest";
import {
  canGiveUp,
  canViewFrqContent,
  canViewOfficialSolution,
  computeCredits,
  computeEntitlements,
  decideGradeAttempt,
  isProActive,
  proStatus,
  unlockReasonAfterGrade,
  type CreditUsageSnapshot,
  type QuestionHistorySnapshot,
  type SubscriptionSnapshot,
} from "./rules";

const NOW = new Date("2026-09-15T12:00:00Z");

// A user who has never spent a credit of any kind.
const NO_USAGE: CreditUsageSnapshot = {
  freeLifetimeUsed: 0,
  proPeriodUsed: 0,
  purchasedGranted: 0,
  purchasedUsed: 0,
};

// A fresh question the user has never touched.
const FRESH_QUESTION: QuestionHistorySnapshot = {
  gradedAttempts: 0,
  unlockReason: null,
  hasSubmitted: false,
};

function proSubscription(
  overrides: Partial<NonNullable<SubscriptionSnapshot>> = {},
): SubscriptionSnapshot {
  return {
    plan: "PRO",
    stripeStatus: "active",
    currentPeriodStart: new Date("2026-09-10T00:00:00Z"),
    currentPeriodEnd: new Date("2026-10-10T00:00:00Z"),
    cancelAtPeriodEnd: false,
    isFoundingPrice: true,
    ...overrides,
  };
}

describe("subscription state", () => {
  it("treats a user with no subscription as Free", () => {
    expect(isProActive(null, NOW)).toBe(false);
    expect(proStatus(null, NOW)).toBe("none");
    expect(computeEntitlements(null, NO_USAGE, NOW).plan).toBe("FREE");
  });

  it("treats an active subscription as Pro", () => {
    expect(isProActive(proSubscription(), NOW)).toBe(true);
    expect(proStatus(proSubscription(), NOW)).toBe("active");
  });

  it("keeps Pro access for a cancelled subscription until its paid-through date", () => {
    const canceling = proSubscription({ cancelAtPeriodEnd: true });
    expect(isProActive(canceling, NOW)).toBe(true);
    expect(proStatus(canceling, NOW)).toBe("canceling");
  });

  it("ends Pro access once the paid-through date has passed", () => {
    const expired = proSubscription({
      currentPeriodEnd: new Date("2026-09-01T00:00:00Z"),
    });
    expect(isProActive(expired, NOW)).toBe(false);
    expect(proStatus(expired, NOW)).toBe("expired");
  });

  it("ends Pro access when Stripe reports the subscription cancelled", () => {
    expect(isProActive(proSubscription({ stripeStatus: "canceled" }), NOW)).toBe(false);
    expect(isProActive(proSubscription({ stripeStatus: "unpaid" }), NOW)).toBe(false);
  });

  it("keeps access during a past_due retry window, but says so", () => {
    const pastDue = proSubscription({ stripeStatus: "past_due" });
    expect(isProActive(pastDue, NOW)).toBe(true);
    expect(proStatus(pastDue, NOW)).toBe("past_due");
  });
});

describe("free lifetime credits", () => {
  it("gives a brand-new free account exactly three grades", () => {
    const credits = computeCredits(null, NO_USAGE, NOW);
    expect(credits.remaining).toBe(3);
    expect(credits.total).toBe(3);
    expect(credits.nextSource).toBe("FREE_LIFETIME");
  });

  it("never gives a free account a reset date", () => {
    expect(computeCredits(null, NO_USAGE, NOW).resetsAt).toBeNull();
    expect(
      computeCredits(null, { ...NO_USAGE, freeLifetimeUsed: 3 }, NOW).resetsAt,
    ).toBeNull();
  });

  it("counts down as the free grades are used", () => {
    expect(computeCredits(null, { ...NO_USAGE, freeLifetimeUsed: 1 }, NOW).remaining).toBe(2);
    expect(computeCredits(null, { ...NO_USAGE, freeLifetimeUsed: 2 }, NOW).remaining).toBe(1);
    expect(computeCredits(null, { ...NO_USAGE, freeLifetimeUsed: 3 }, NOW).remaining).toBe(0);
  });

  it("locks new FRQ content once all three are spent", () => {
    const spent = computeEntitlements(null, { ...NO_USAGE, freeLifetimeUsed: 3 }, NOW);
    expect(spent.canOpenNewFrq).toBe(false);
    expect(spent.credits.nextSource).toBeNull();
  });

  it("never goes negative if usage somehow exceeds the allowance", () => {
    expect(computeCredits(null, { ...NO_USAGE, freeLifetimeUsed: 9 }, NOW).remaining).toBe(0);
  });
});

describe("pro billing-period credits", () => {
  it("gives an active Pro subscriber fifty grades per period", () => {
    const credits = computeCredits(proSubscription(), NO_USAGE, NOW);
    expect(credits.remaining).toBe(50);
    expect(credits.nextSource).toBe("PRO_PERIOD");
  });

  it("resets on the Stripe period end, not the first of the month", () => {
    const credits = computeCredits(proSubscription(), NO_USAGE, NOW);
    expect(credits.resetsAt).toEqual(new Date("2026-10-10T00:00:00Z"));
  });

  it("reports the cap once all fifty are used", () => {
    const credits = computeCredits(
      proSubscription(),
      { ...NO_USAGE, proPeriodUsed: 50 },
      NOW,
    );
    expect(credits.remaining).toBe(0);
    expect(credits.hitPeriodCap).toBe(true);
    expect(credits.nextSource).toBeNull();
  });

  it("does not spend free lifetime credits while Pro is active", () => {
    const credits = computeCredits(
      proSubscription(),
      { ...NO_USAGE, freeLifetimeUsed: 0, proPeriodUsed: 3 },
      NOW,
    );
    expect(credits.nextSource).toBe("PRO_PERIOD");
    expect(credits.remaining).toBe(47);
  });

  it("leaves genuinely unused free credits intact when Pro lapses", () => {
    // Used one free grade, subscribed, used Pro grades, then let Pro expire.
    const lapsed = proSubscription({
      currentPeriodEnd: new Date("2026-09-01T00:00:00Z"),
    });
    const credits = computeCredits(
      lapsed,
      { ...NO_USAGE, freeLifetimeUsed: 1, proPeriodUsed: 40 },
      NOW,
    );
    expect(credits.remaining).toBe(2);
    expect(credits.nextSource).toBe("FREE_LIFETIME");
  });

  it("does not regenerate free credits that were already spent", () => {
    const lapsed = proSubscription({
      currentPeriodEnd: new Date("2026-09-01T00:00:00Z"),
    });
    const credits = computeCredits(lapsed, { ...NO_USAGE, freeLifetimeUsed: 3 }, NOW);
    expect(credits.remaining).toBe(0);
  });
});

describe("question access", () => {
  const lockedFree = computeEntitlements(null, { ...NO_USAGE, freeLifetimeUsed: 3 }, NOW);
  const freshFree = computeEntitlements(null, NO_USAGE, NOW);
  const pro = computeEntitlements(proSubscription(), NO_USAGE, NOW);

  it("lets a Pro user open anything", () => {
    expect(canViewFrqContent(pro, FRESH_QUESTION)).toBe(true);
  });

  it("lets a Free user with credits open a new question", () => {
    expect(canViewFrqContent(freshFree, FRESH_QUESTION)).toBe(true);
  });

  it("locks a new question for a Free user with no credits left", () => {
    expect(canViewFrqContent(lockedFree, FRESH_QUESTION)).toBe(false);
  });

  it("keeps questions the Free user already worked on, even after locking", () => {
    expect(
      canViewFrqContent(lockedFree, { ...FRESH_QUESTION, hasSubmitted: true }),
    ).toBe(true);
  });

  it("keeps questions the Free user already unlocked, even after locking", () => {
    expect(
      canViewFrqContent(lockedFree, { ...FRESH_QUESTION, unlockReason: "GIVE_UP" }),
    ).toBe(true);
  });

  it("never releases a solution without an unlock record", () => {
    expect(canViewOfficialSolution(FRESH_QUESTION)).toBe(false);
    expect(canViewOfficialSolution({ ...FRESH_QUESTION, gradedAttempts: 2 })).toBe(false);
    expect(
      canViewOfficialSolution({ ...FRESH_QUESTION, unlockReason: "ATTEMPTS_EXHAUSTED" }),
    ).toBe(true);
  });
});

describe("grading attempts", () => {
  const pro = computeEntitlements(proSubscription(), NO_USAGE, NOW);
  const freeOneLeft = computeEntitlements(null, { ...NO_USAGE, freeLifetimeUsed: 2 }, NOW);
  const freeNoneLeft = computeEntitlements(null, { ...NO_USAGE, freeLifetimeUsed: 3 }, NOW);

  it("numbers the first attempt 1", () => {
    const decision = decideGradeAttempt(pro, FRESH_QUESTION);
    expect(decision).toEqual({
      allowed: true,
      attemptNumber: 1,
      creditSource: "PRO_PERIOD",
    });
  });

  it("allows attempts 2 and 3", () => {
    expect(decideGradeAttempt(pro, { ...FRESH_QUESTION, gradedAttempts: 1 })).toMatchObject({
      allowed: true,
      attemptNumber: 2,
    });
    expect(decideGradeAttempt(pro, { ...FRESH_QUESTION, gradedAttempts: 2 })).toMatchObject({
      allowed: true,
      attemptNumber: 3,
    });
  });

  it("stops at three graded attempts", () => {
    expect(decideGradeAttempt(pro, { ...FRESH_QUESTION, gradedAttempts: 3 })).toEqual({
      allowed: false,
      reason: "ATTEMPTS_EXHAUSTED",
    });
  });

  it("charges a Free user's last credit to the lifetime pool", () => {
    expect(decideGradeAttempt(freeOneLeft, FRESH_QUESTION)).toEqual({
      allowed: true,
      attemptNumber: 1,
      creditSource: "FREE_LIFETIME",
    });
  });

  it("refuses to grade with no credits left", () => {
    expect(
      decideGradeAttempt(freeNoneLeft, { ...FRESH_QUESTION, hasSubmitted: true }),
    ).toEqual({ allowed: false, reason: "NO_CREDITS" });
  });

  it("refuses to grade a question the user may not even open", () => {
    expect(decideGradeAttempt(freeNoneLeft, FRESH_QUESTION)).toEqual({
      allowed: false,
      reason: "QUESTION_LOCKED",
    });
  });

  it("refuses to grade once the solution is visible", () => {
    for (const reason of ["GIVE_UP", "FULL_CREDIT", "ATTEMPTS_EXHAUSTED"] as const) {
      expect(
        decideGradeAttempt(pro, { ...FRESH_QUESTION, gradedAttempts: 1, unlockReason: reason }),
      ).toEqual({ allowed: false, reason: "SOLUTION_ALREADY_UNLOCKED" });
    }
  });
});

describe("solution unlocking", () => {
  it("unlocks immediately on full marks, on any attempt", () => {
    expect(unlockReasonAfterGrade(1, 8, 8)).toBe("FULL_CREDIT");
    expect(unlockReasonAfterGrade(2, 20, 20)).toBe("FULL_CREDIT");
  });

  it("keeps the solution locked after a partial score on attempts 1 and 2", () => {
    expect(unlockReasonAfterGrade(1, 5, 8)).toBeNull();
    expect(unlockReasonAfterGrade(2, 7, 8)).toBeNull();
  });

  it("unlocks after the third graded attempt whatever the score", () => {
    expect(unlockReasonAfterGrade(3, 0, 8)).toBe("ATTEMPTS_EXHAUSTED");
    expect(unlockReasonAfterGrade(3, 5, 8)).toBe("ATTEMPTS_EXHAUSTED");
  });

  it("scores against the competition's own point value, not out of ten", () => {
    // A 3-point question is full marks at 3, not at 10.
    expect(unlockReasonAfterGrade(1, 3, 3)).toBe("FULL_CREDIT");
    expect(unlockReasonAfterGrade(1, 3, 20)).toBeNull();
  });

  it("offers Give Up only while the solution is still hidden", () => {
    expect(canGiveUp(FRESH_QUESTION)).toBe(true);
    expect(canGiveUp({ ...FRESH_QUESTION, unlockReason: "FULL_CREDIT" })).toBe(false);
  });
});

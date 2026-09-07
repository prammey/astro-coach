// The business rules behind Astro Coach Pro, written as pure functions.
//
// Nothing here touches the database, the network, or environment variables.
// Every function takes a plain snapshot of the facts and returns a decision.
// That is deliberate: it makes each rule directly unit-testable, and it
// keeps "what is this user allowed to do" in one readable place instead of
// scattered across API routes and components.
//
// The database-backed wrappers that gather these snapshots live in
// ./entitlements.ts.

import {
  FREE_LIFETIME_GRADE_CREDITS,
  MAX_GRADED_ATTEMPTS_PER_FRQ,
  PRO_PERIOD_GRADE_CREDITS,
} from "./config";

// --- Inputs ----------------------------------------------------------------

/// The subscription facts we mirror from Stripe. Null when the user has
/// never subscribed.
export type SubscriptionSnapshot = {
  plan: "FREE" | "PRO";
  stripeStatus: string | null;
  currentPeriodStart: Date | null;
  currentPeriodEnd: Date | null;
  cancelAtPeriodEnd: boolean;
  isFoundingPrice: boolean;
} | null;

/// How many grades the user has already consumed, counted server-side.
export type CreditUsageSnapshot = {
  /// Free lifetime grades consumed, ever.
  freeLifetimeUsed: number;
  /// Grades consumed inside the CURRENT Stripe billing period.
  proPeriodUsed: number;
  /// Extra credits granted (purchases, goodwill). Always 0 in Pro v1.
  purchasedGranted: number;
  purchasedUsed: number;
};

// --- Subscription state ----------------------------------------------------

/// Stripe statuses under which we still let the user into Pro features.
///
/// `past_due` is included on purpose: Stripe retries a failed payment for
/// days, and cutting a paying student off mid-retry is worse than briefly
/// serving someone whose card needs updating. When the retries run out
/// Stripe moves the subscription to `canceled` or `unpaid` and access ends.
const ENTITLING_STRIPE_STATUSES = ["active", "trialing", "past_due"];

/// True when the subscription entitles the user to Pro right now.
///
/// A subscription set to cancel at period end is still active until that
/// date — a student who cancels keeps what they paid for.
export function isProActive(
  subscription: SubscriptionSnapshot,
  now: Date = new Date(),
): boolean {
  if (!subscription) return false;
  if (subscription.plan !== "PRO") return false;
  if (!subscription.stripeStatus) return false;
  if (!ENTITLING_STRIPE_STATUSES.includes(subscription.stripeStatus)) return false;

  // A period end in the past means Stripe has not renewed it and we have
  // not yet received the cancellation webhook. Fail closed.
  if (subscription.currentPeriodEnd && subscription.currentPeriodEnd <= now) {
    return false;
  }

  return true;
}

/// A short label for the account screen, distinct from raw Stripe status.
export type ProStatus = "none" | "active" | "canceling" | "past_due" | "expired";

export function proStatus(
  subscription: SubscriptionSnapshot,
  now: Date = new Date(),
): ProStatus {
  if (!subscription || subscription.plan !== "PRO") return "none";
  if (!isProActive(subscription, now)) return "expired";
  if (subscription.stripeStatus === "past_due") return "past_due";
  if (subscription.cancelAtPeriodEnd) return "canceling";
  return "active";
}

// --- Credits ---------------------------------------------------------------

export type CreditState = {
  /// Grades the user can still run right now.
  remaining: number;
  /// The allowance the remaining count is measured against.
  total: number;
  used: number;
  /// Which pool the NEXT grade would be drawn from. Null when exhausted.
  nextSource: "FREE_LIFETIME" | "PRO_PERIOD" | "PURCHASED" | null;
  /// When the allowance refills. Null for Free — lifetime credits never do.
  resetsAt: Date | null;
  /// True for Pro users who have used their whole billing-period allowance.
  /// Drives the "you've used all 50" state and the admin cap metric.
  hitPeriodCap: boolean;
};

/// Works out how many grades a user has left.
///
/// Pro users spend their billing-period allowance first, then any extra
/// purchased credits. Free users spend their lifetime allowance, then any
/// purchased credits. Free lifetime credits are never restored — a Pro
/// subscription that later lapses leaves genuinely unused free credits
/// intact but does not regenerate spent ones.
export function computeCredits(
  subscription: SubscriptionSnapshot,
  usage: CreditUsageSnapshot,
  now: Date = new Date(),
): CreditState {
  const purchasedRemaining = Math.max(
    0,
    usage.purchasedGranted - usage.purchasedUsed,
  );

  if (isProActive(subscription, now)) {
    const periodRemaining = Math.max(
      0,
      PRO_PERIOD_GRADE_CREDITS - usage.proPeriodUsed,
    );
    const hitPeriodCap = periodRemaining === 0;

    return {
      remaining: periodRemaining + purchasedRemaining,
      total: PRO_PERIOD_GRADE_CREDITS + usage.purchasedGranted,
      used: usage.proPeriodUsed + usage.purchasedUsed,
      nextSource: periodRemaining > 0
        ? "PRO_PERIOD"
        : purchasedRemaining > 0
          ? "PURCHASED"
          : null,
      resetsAt: subscription?.currentPeriodEnd ?? null,
      hitPeriodCap,
    };
  }

  const freeRemaining = Math.max(
    0,
    FREE_LIFETIME_GRADE_CREDITS - usage.freeLifetimeUsed,
  );

  return {
    remaining: freeRemaining + purchasedRemaining,
    total: FREE_LIFETIME_GRADE_CREDITS + usage.purchasedGranted,
    used: usage.freeLifetimeUsed + usage.purchasedUsed,
    nextSource: freeRemaining > 0
      ? "FREE_LIFETIME"
      : purchasedRemaining > 0
        ? "PURCHASED"
        : null,
    // Lifetime credits do not reset, so there is no reset date to show.
    resetsAt: null,
    hitPeriodCap: false,
  };
}

// --- Entitlements ----------------------------------------------------------

export type Entitlements = {
  plan: "FREE" | "PRO";
  isPro: boolean;
  status: ProStatus;
  currentPeriodEnd: Date | null;
  cancelAtPeriodEnd: boolean;
  isFoundingPrice: boolean;
  credits: CreditState;
  /// Whether the user may open FRQ questions they have not attempted.
  /// Pro always may; Free may only while they still hold a grading credit.
  canOpenNewFrq: boolean;
};

export function computeEntitlements(
  subscription: SubscriptionSnapshot,
  usage: CreditUsageSnapshot,
  now: Date = new Date(),
): Entitlements {
  const isPro = isProActive(subscription, now);
  const credits = computeCredits(subscription, usage, now);

  return {
    plan: isPro ? "PRO" : "FREE",
    isPro,
    status: proStatus(subscription, now),
    currentPeriodEnd: subscription?.currentPeriodEnd ?? null,
    cancelAtPeriodEnd: subscription?.cancelAtPeriodEnd ?? false,
    isFoundingPrice: subscription?.isFoundingPrice ?? false,
    credits,
    // A Free student who has used all three lifetime grades keeps every
    // question they already touched, but new FRQ content becomes Pro-only.
    canOpenNewFrq: isPro || credits.remaining > 0,
  };
}

// --- Per-question access ---------------------------------------------------

/// What we already know about this user's relationship to one FRQ.
export type QuestionHistorySnapshot = {
  /// Graded attempts already used, out of MAX_GRADED_ATTEMPTS_PER_FRQ.
  gradedAttempts: number;
  /// Set once the official solution has been unlocked, with the reason.
  unlockReason: "FULL_CREDIT" | "ATTEMPTS_EXHAUSTED" | "GIVE_UP" | null;
  /// True when the user has any submission on this question, graded or not.
  hasSubmitted: boolean;
};

/// Whether the user may see this question's text and figures.
///
/// A Free student who has run out of credits still keeps everything they
/// previously worked on — running out locks new content, it does not erase
/// their history.
export function canViewFrqContent(
  entitlements: Entitlements,
  history: QuestionHistorySnapshot,
): boolean {
  if (entitlements.isPro) return true;
  if (history.hasSubmitted) return true;
  if (history.unlockReason !== null) return true;
  return entitlements.canOpenNewFrq;
}

/// Whether the official solution may be sent to this user. The ONLY way a
/// solution is ever released is an unlock record existing.
export function canViewOfficialSolution(
  history: QuestionHistorySnapshot,
): boolean {
  return history.unlockReason !== null;
}

export type GradeBlockedReason =
  | "NO_CREDITS"
  | "ATTEMPTS_EXHAUSTED"
  | "SOLUTION_ALREADY_UNLOCKED"
  | "QUESTION_LOCKED";

export type GradeDecision =
  | { allowed: true; attemptNumber: number; creditSource: "FREE_LIFETIME" | "PRO_PERIOD" | "PURCHASED" }
  | { allowed: false; reason: GradeBlockedReason };

/// Decides whether one more graded attempt is allowed, and if so which
/// attempt number it is and which credit pool pays for it.
///
/// Grading stops once the official solution is visible, whatever unlocked
/// it. Grading a problem whose answer is on screen cannot tell the student
/// anything, and letting it through would burn credits for nothing.
export function decideGradeAttempt(
  entitlements: Entitlements,
  history: QuestionHistorySnapshot,
): GradeDecision {
  if (!canViewFrqContent(entitlements, history)) {
    return { allowed: false, reason: "QUESTION_LOCKED" };
  }
  if (history.unlockReason !== null) {
    return { allowed: false, reason: "SOLUTION_ALREADY_UNLOCKED" };
  }
  if (history.gradedAttempts >= MAX_GRADED_ATTEMPTS_PER_FRQ) {
    return { allowed: false, reason: "ATTEMPTS_EXHAUSTED" };
  }
  if (!entitlements.credits.nextSource) {
    return { allowed: false, reason: "NO_CREDITS" };
  }

  return {
    allowed: true,
    attemptNumber: history.gradedAttempts + 1,
    creditSource: entitlements.credits.nextSource,
  };
}

// --- Solution unlocking ----------------------------------------------------

/// Whether a just-completed grade should unlock the official solution.
///
/// Full marks on any attempt unlock immediately — there is nothing left to
/// learn by trying again. Otherwise the solution opens after the third and
/// final graded attempt.
export function unlockReasonAfterGrade(
  attemptNumber: number,
  awardedPoints: number,
  maximumPoints: number,
): "FULL_CREDIT" | "ATTEMPTS_EXHAUSTED" | null {
  if (maximumPoints > 0 && awardedPoints >= maximumPoints) return "FULL_CREDIT";
  if (attemptNumber >= MAX_GRADED_ATTEMPTS_PER_FRQ) return "ATTEMPTS_EXHAUSTED";
  return null;
}

/// Whether "Give Up & View Solution" is offered. It is pointless once the
/// solution is already visible, and it costs no credits.
export function canGiveUp(history: QuestionHistorySnapshot): boolean {
  return history.unlockReason === null;
}

// --- What a grading outcome costs ------------------------------------------

/// The three ways a grading run can end.
export type GradingOutcomeKind = "graded" | "unreadable" | "failed";

/// Whether an outcome costs the student anything.
///
/// Only a real grade does. Work the model could not read, and a provider
/// or validation failure, are both free: they consume no credit and no
/// attempt, so a bad photo or an outage never costs a student one of their
/// three tries. Keeping this as one small function means the rule is
/// stated once and can be tested directly, rather than living implicitly
/// inside an if-statement in the submission flow.
export function creditChargeForOutcome(outcome: GradingOutcomeKind): {
  chargeCredit: boolean;
  consumesAttempt: boolean;
} {
  const graded = outcome === "graded";
  return { chargeCredit: graded, consumesAttempt: graded };
}

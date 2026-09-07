// The single server-side answer to "what is this user allowed to do?".
//
// Every Pro gate in the app goes through this module. Nothing anywhere
// else reads the Subscription table directly or counts credits by hand,
// so there is exactly one place a mistake could live.
//
// SERVER-ONLY.

// SERVER-ONLY. This check turns an accidental client import into an
// immediate, obvious error rather than a secret quietly shipped to a
// browser bundle.
if (typeof window !== "undefined") {
  throw new Error("src/lib/pro/entitlements.ts must not be imported in the browser");
}

import type { PrismaClient } from "@/generated/prisma/client";
import { getPrisma } from "@/lib/prisma";
import {
  canViewFrqContent,
  canViewOfficialSolution,
  computeEntitlements,
  decideGradeAttempt,
  isProActive,
  type CreditUsageSnapshot,
  type Entitlements,
  type GradeDecision,
  type QuestionHistorySnapshot,
  type SubscriptionSnapshot,
} from "./rules";

export type { Entitlements, QuestionHistorySnapshot } from "./rules";

/// Reads the user's mirrored Stripe subscription, or null if they have
/// never subscribed.
export async function getSubscriptionSnapshot(
  userId: string,
  prisma: PrismaClient = getPrisma(),
): Promise<SubscriptionSnapshot> {
  const row = await prisma.subscription.findUnique({ where: { userId } });
  if (!row) return null;

  return {
    plan: row.plan,
    stripeStatus: row.stripeStatus,
    currentPeriodStart: row.currentPeriodStart,
    currentPeriodEnd: row.currentPeriodEnd,
    cancelAtPeriodEnd: row.cancelAtPeriodEnd,
    isFoundingPrice: row.isFoundingPrice,
  };
}

/// Counts the grades this user has actually been charged for.
///
/// Only submissions with creditConsumed = true count. An attempt that
/// failed validation, failed at the provider, or came back unreadable
/// never sets that flag, so it never costs the student anything.
export async function getCreditUsage(
  userId: string,
  subscription: SubscriptionSnapshot,
  prisma: PrismaClient = getPrisma(),
  now: Date = new Date(),
): Promise<CreditUsageSnapshot> {
  // The Pro window is the Stripe billing period, not a calendar month, so
  // a subscription that started on the 10th resets on the 10th.
  const periodStart = isProActive(subscription, now)
    ? subscription?.currentPeriodStart ?? null
    : null;

  const [freeLifetimeUsed, proPeriodUsed, purchasedUsed, grants] = await Promise.all([
    prisma.frqSubmission.count({
      where: { userId, creditConsumed: true, creditSource: "FREE_LIFETIME" },
    }),
    periodStart
      ? prisma.frqSubmission.count({
          where: {
            userId,
            creditConsumed: true,
            creditSource: "PRO_PERIOD",
            createdAt: { gte: periodStart },
          },
        })
      : Promise.resolve(0),
    prisma.frqSubmission.count({
      where: { userId, creditConsumed: true, creditSource: "PURCHASED" },
    }),
    // Always 0 in Pro v1 — nothing creates credit grants yet. The query is
    // here so adding credit packs later needs no change to this service.
    prisma.creditGrant.findMany({
      where: {
        userId,
        OR: [{ expiresAt: null }, { expiresAt: { gt: now } }],
      },
      select: { amount: true },
    }),
  ]);

  return {
    freeLifetimeUsed,
    proPeriodUsed,
    purchasedUsed,
    purchasedGranted: grants.reduce((sum, grant) => sum + grant.amount, 0),
  };
}

/// The main entry point: everything the server needs to decide what this
/// user can see and do.
export async function getUserEntitlements(
  userId: string,
  prisma: PrismaClient = getPrisma(),
  now: Date = new Date(),
): Promise<Entitlements> {
  const subscription = await getSubscriptionSnapshot(userId, prisma);
  const usage = await getCreditUsage(userId, subscription, prisma, now);
  return computeEntitlements(subscription, usage, now);
}

/// Whether the user may open FRQ questions they have not attempted before.
export async function canUseFrq(
  userId: string,
  prisma: PrismaClient = getPrisma(),
): Promise<boolean> {
  const entitlements = await getUserEntitlements(userId, prisma);
  return entitlements.canOpenNewFrq;
}

/// How many AI grades the user has left right now.
export async function getRemainingGradeCredits(
  userId: string,
  prisma: PrismaClient = getPrisma(),
): Promise<number> {
  const entitlements = await getUserEntitlements(userId, prisma);
  return entitlements.credits.remaining;
}

/// This user's attempt and unlock history for one question.
export async function getQuestionHistory(
  userId: string,
  frqQuestionId: string,
  prisma: PrismaClient = getPrisma(),
): Promise<QuestionHistorySnapshot> {
  const [gradedAttempts, anySubmission, unlock] = await Promise.all([
    // Only attempts that were actually charged count against the limit of
    // three, so a provider outage does not cost a student an attempt.
    prisma.frqSubmission.count({
      where: { userId, frqQuestionId, creditConsumed: true },
    }),
    prisma.frqSubmission.findFirst({
      where: { userId, frqQuestionId },
      select: { id: true },
    }),
    prisma.frqSolutionUnlock.findUnique({
      where: { userId_frqQuestionId: { userId, frqQuestionId } },
      select: { reason: true },
    }),
  ]);

  return {
    gradedAttempts,
    hasSubmitted: anySubmission !== null,
    unlockReason: unlock?.reason ?? null,
  };
}

/// Whether this user may see this question's text and figures at all.
export async function canViewQuestion(
  userId: string,
  frqQuestionId: string,
  prisma: PrismaClient = getPrisma(),
): Promise<boolean> {
  const [entitlements, history] = await Promise.all([
    getUserEntitlements(userId, prisma),
    getQuestionHistory(userId, frqQuestionId, prisma),
  ]);
  return canViewFrqContent(entitlements, history);
}

/// Whether the official solution may be released to this user.
export async function canViewSolution(
  userId: string,
  frqQuestionId: string,
  prisma: PrismaClient = getPrisma(),
): Promise<boolean> {
  const history = await getQuestionHistory(userId, frqQuestionId, prisma);
  return canViewOfficialSolution(history);
}

/// Whether one more graded attempt is allowed, and what it would cost.
/// Used both to render the confirmation modal and, again, to authorise the
/// real submission — the browser's copy of this answer is never trusted.
export async function canGradeFrq(
  userId: string,
  frqQuestionId: string,
  prisma: PrismaClient = getPrisma(),
): Promise<GradeDecision> {
  const [entitlements, history] = await Promise.all([
    getUserEntitlements(userId, prisma),
    getQuestionHistory(userId, frqQuestionId, prisma),
  ]);
  return decideGradeAttempt(entitlements, history);
}

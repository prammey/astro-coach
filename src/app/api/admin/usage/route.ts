// Internal usage and AI-spend analytics.
//
// This is the view that answers "what does a grade cost us, and who is
// hitting the cap?". It is aggregate only — it deliberately does not list
// individual students or their work.

import { NextResponse } from "next/server";
import { requireAdminUser } from "@/lib/pro/auth-guard";
import { getPrisma } from "@/lib/prisma";
import { isMockGrading } from "@/lib/ai/grader";
import { PRO_PERIOD_GRADE_CREDITS } from "@/lib/pro/config";
import { isLiveStripeKey, isStripeConfigured } from "@/lib/stripe/client";

/// Spend and volume are reported over a rolling 30-day window rather than a
/// calendar month, because subscriptions renew on their own dates.
const WINDOW_DAYS = 30;

export async function GET(request: Request) {
  const auth = await requireAdminUser(request);
  if (!auth.ok) {
    return NextResponse.json({ error: auth.error }, { status: auth.status });
  }

  const prisma = getPrisma();
  const since = new Date(Date.now() - WINDOW_DAYS * 24 * 60 * 60 * 1000);

  try {
    const [activeSubscriptions, foundingSubscriptions, grades, usageEvents, questionCounts] =
      await Promise.all([
        prisma.subscription.count({
          where: { plan: "PRO", stripeStatus: { in: ["active", "trialing", "past_due"] } },
        }),
        prisma.subscription.count({
          where: {
            plan: "PRO",
            isFoundingPrice: true,
            stripeStatus: { in: ["active", "trialing", "past_due"] },
          },
        }),
        prisma.frqSubmission.findMany({
          where: { creditConsumed: true, createdAt: { gte: since } },
          select: {
            userId: true,
            uploadedPageCount: true,
            estimatedCostUsd: true,
            latencyMs: true,
            creditSource: true,
          },
        }),
        prisma.aiUsageEvent.findMany({
          where: { createdAt: { gte: since } },
          select: { kind: true, success: true, estimatedCostUsd: true, latencyMs: true },
        }),
        prisma.frqQuestion.groupBy({ by: ["status"], _count: { _all: true } }),
      ]);

    const gradesByUser = new Map<string, number>();
    for (const grade of grades) {
      gradesByUser.set(grade.userId, (gradesByUser.get(grade.userId) ?? 0) + 1);
    }

    const proGrades = grades.filter((grade) => grade.creditSource === "PRO_PERIOD");
    const usersAtCap = Array.from(gradesByUser.values()).filter(
      (count) => count >= PRO_PERIOD_GRADE_CREDITS,
    ).length;

    const failures = usageEvents.filter((event) => !event.success).length;
    const spend = usageEvents.reduce(
      (total, event) => total + (event.estimatedCostUsd ?? 0),
      0,
    );

    return NextResponse.json({
      windowDays: WINDOW_DAYS,
      // Surfaced so mock output is never mistaken for real grading.
      mockGrading: isMockGrading(),
      stripe: { configured: isStripeConfigured(), liveKey: isLiveStripeKey() },

      subscriptions: {
        activePro: activeSubscriptions,
        foundingPrice: foundingSubscriptions,
      },

      grading: {
        total: grades.length,
        proGrades: proGrades.length,
        freeGrades: grades.filter((grade) => grade.creditSource === "FREE_LIFETIME").length,
        distinctUsers: gradesByUser.size,
        averagePerUser: round(average(Array.from(gradesByUser.values())), 1),
        usersAtCap,
        percentAtCap:
          gradesByUser.size > 0 ? round((usersAtCap / gradesByUser.size) * 100, 1) : 0,
        averagePagesPerGrade: round(
          average(grades.map((grade) => grade.uploadedPageCount)),
          2,
        ),
        averageLatencyMs: Math.round(
          average(grades.map((grade) => grade.latencyMs ?? 0)),
        ),
      },

      cost: {
        estimatedTotalUsd: round(spend, 4),
        estimatedPerGradeUsd: round(
          average(
            grades
              .map((grade) => grade.estimatedCostUsd)
              .filter((cost): cost is number => cost != null),
          ),
          5,
        ),
      },

      provider: {
        calls: usageEvents.length,
        failures,
        errorRatePercent:
          usageEvents.length > 0 ? round((failures / usageEvents.length) * 100, 1) : 0,
        extractionCalls: usageEvents.filter((event) => event.kind === "IMPORT_EXTRACTION").length,
      },

      questionBank: Object.fromEntries(
        questionCounts.map((row) => [row.status, row._count._all]),
      ),
    });
  } catch (error) {
    console.error("Failed to build admin usage:", error);
    return NextResponse.json({ error: "Could not load usage." }, { status: 500 });
  }
}

function average(values: number[]): number {
  return values.length === 0 ? 0 : values.reduce((sum, value) => sum + value, 0) / values.length;
}

function round(value: number, places: number): number {
  return Number(value.toFixed(places));
}

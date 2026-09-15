// The numbers behind the Pro dashboard.
//
// Two deliberate choices run through this file:
//
//   - MCQ accuracy and FRQ scoring are reported separately and never
//     averaged together. They measure different things — recognising the
//     right option versus constructing a full argument — and blending them
//     would produce a "mastery percentage" that means nothing.
//   - A topic with too little evidence is reported as having too little
//     evidence. Calling a topic someone's weakest on the strength of one
//     wrong answer is worse than saying nothing.
//
// SERVER-ONLY.

// SERVER-ONLY. This check turns an accidental client import into an
// immediate, obvious error rather than a secret quietly shipped to a
// browser bundle.
if (typeof window !== "undefined") {
  throw new Error("src/lib/pro/analytics.ts must not be imported in the browser");
}

import type { PrismaClient } from "@/generated/prisma/client";
import { getPrisma } from "@/lib/prisma";
import { realQuestionCatalog } from "@/data/mcq/catalog.server";
import { CURRICULUM_TOPICS, type CurriculumTopic } from "@/data/mcq/topicTaxonomy";
import { getUserEntitlements } from "./entitlements";
import type { Entitlements } from "./rules";

// --- How much evidence is enough -------------------------------------------

/// Below these counts a topic shows "Not enough data" rather than a figure,
/// and is never named as a strongest or weakest topic.
///
/// Five MCQs is roughly where a single lucky or unlucky guess stops
/// dominating the percentage. Two graded FRQs is the smallest number that
/// can show a trend rather than a one-off.
export const MIN_MCQ_ATTEMPTS_FOR_SIGNAL = 5;
export const MIN_FRQ_ATTEMPTS_FOR_SIGNAL = 2;

// --- Shapes ----------------------------------------------------------------

export type TopicPerformance = {
  topic: string;
  mcqAttempted: number;
  mcqCorrect: number;
  /// Percentage, or null when there is not enough evidence yet.
  mcqAccuracy: number | null;
  frqAttempted: number;
  frqPointsEarned: number;
  frqPointsPossible: number;
  frqPercentage: number | null;
  hasEnoughData: boolean;
};

export type ProAnalytics = {
  entitlements: {
    plan: "FREE" | "PRO";
    creditsRemaining: number;
    creditsTotal: number;
    creditsResetAt: string | null;
    hitPeriodCap: boolean;
  };
  frqOverview: {
    questionsAttempted: number;
    questionsUnlocked: number;
    gradingAttempts: number;
    pointsEarned: number;
    pointsPossible: number;
    averagePercentage: number | null;
  };
  topics: TopicPerformance[];
  strongestTopic: string | null;
  topicToPractiseNext: string | null;
  /// Newest last, so a chart reads left to right.
  trend: Array<{ date: string; percentage: number; competition: string; questionNumber: string }>;
  commonMistakes: Array<{ tag: string; count: number }>;
  recentAttempts: Array<{
    submissionId: string;
    frqQuestionId: string;
    competition: string;
    year: number;
    questionNumber: string;
    attemptNumber: number | null;
    awardedPoints: number | null;
    maximumPoints: number;
    createdAt: string;
    solutionUnlocked: boolean;
  }>;
};

// --- MCQ topic lookup ------------------------------------------------------

/// Maps every MCQ (and every part of a multi-part MCQ item) to its
/// curriculum topic, so recorded attempts can be grouped without storing a
/// topic on each attempt row.
///
/// Built once per server process from the same catalog the training pages
/// use, which is why the dashboard can never drift out of step with the
/// filters.
const mcqTopicById: Map<string, CurriculumTopic> = (() => {
  const map = new Map<string, CurriculumTopic>();
  for (const question of realQuestionCatalog) {
    map.set(question.id, question.primaryCurriculumTopic);
    for (const part of question.parts ?? []) {
      map.set(part.id, part.primaryCurriculumTopic);
    }
  }
  return map;
})();

// --- The report ------------------------------------------------------------

export async function buildProAnalytics(
  userId: string,
  prisma: PrismaClient = getPrisma(),
): Promise<ProAnalytics> {
  const [entitlements, progressRows, submissions, unlocks] = await Promise.all([
    getUserEntitlements(userId, prisma),
    // One row per question the user has worked on, which is the right
    // denominator for accuracy: repeatedly retrying one question should not
    // dominate the figure.
    prisma.userQuestionProgress.findMany({
      where: { userId },
      select: { questionId: true, attemptCount: true, correctAttemptCount: true },
    }),
    prisma.frqSubmission.findMany({
      where: { userId, creditConsumed: true, status: "GRADED" },
      orderBy: { createdAt: "asc" },
      select: {
        id: true,
        frqQuestionId: true,
        attemptNumber: true,
        awardedPoints: true,
        maximumPoints: true,
        mistakeTags: true,
        createdAt: true,
        question: {
          select: {
            competition: true,
            year: true,
            questionNumber: true,
            primaryCurriculumTopic: true,
          },
        },
      },
    }),
    prisma.frqSolutionUnlock.findMany({
      where: { userId },
      select: { frqQuestionId: true },
    }),
  ]);

  const topics = buildTopicPerformance(progressRows, submissions);
  const unlockedIds = new Set(unlocks.map((unlock) => unlock.frqQuestionId));

  return {
    entitlements: summariseEntitlements(entitlements),
    frqOverview: summariseFrq(submissions, unlockedIds),
    topics,
    ...pickStrongestAndWeakest(topics),
    trend: submissions
      .filter((submission) => submission.maximumPoints > 0)
      .slice(-20)
      .map((submission) => ({
        date: submission.createdAt.toISOString(),
        percentage: Math.round(
          ((submission.awardedPoints ?? 0) / submission.maximumPoints) * 100,
        ),
        competition: submission.question.competition,
        questionNumber: submission.question.questionNumber,
      })),
    commonMistakes: countMistakes(submissions),
    recentAttempts: submissions
      .slice()
      .reverse()
      .slice(0, 20)
      .map((submission) => ({
        submissionId: submission.id,
        frqQuestionId: submission.frqQuestionId,
        competition: submission.question.competition,
        year: submission.question.year,
        questionNumber: submission.question.questionNumber,
        attemptNumber: submission.attemptNumber,
        awardedPoints: submission.awardedPoints,
        maximumPoints: submission.maximumPoints,
        createdAt: submission.createdAt.toISOString(),
        solutionUnlocked: unlockedIds.has(submission.frqQuestionId),
      })),
  };
}

function summariseEntitlements(entitlements: Entitlements) {
  return {
    plan: entitlements.plan,
    creditsRemaining: entitlements.credits.remaining,
    creditsTotal: entitlements.credits.total,
    creditsResetAt: entitlements.credits.resetsAt?.toISOString() ?? null,
    hitPeriodCap: entitlements.credits.hitPeriodCap,
  };
}

type GradedSubmission = {
  frqQuestionId: string;
  awardedPoints: number | null;
  maximumPoints: number;
  mistakeTags: string[];
  question: { primaryCurriculumTopic: string };
};

function summariseFrq(submissions: GradedSubmission[], unlockedIds: Set<string>) {
  const pointsEarned = submissions.reduce(
    (sum, submission) => sum + (submission.awardedPoints ?? 0),
    0,
  );
  const pointsPossible = submissions.reduce(
    (sum, submission) => sum + submission.maximumPoints,
    0,
  );
  const attemptedQuestions = new Set(submissions.map((s) => s.frqQuestionId));

  return {
    questionsAttempted: attemptedQuestions.size,
    questionsUnlocked: unlockedIds.size,
    gradingAttempts: submissions.length,
    pointsEarned: Math.round(pointsEarned * 10) / 10,
    pointsPossible,
    // Points earned over points available — not an average of percentages,
    // so a 20-point question counts for more than a 2-point one.
    averagePercentage:
      pointsPossible > 0 ? Math.round((pointsEarned / pointsPossible) * 100) : null,
  };
}

/// Builds one row per curriculum topic, always covering every topic in the
/// taxonomy rather than a hardcoded count, so adding a topic to
/// topicTaxonomy.ts makes it appear here automatically.
function buildTopicPerformance(
  progressRows: Array<{ questionId: string; attemptCount: number; correctAttemptCount: number }>,
  submissions: GradedSubmission[],
): TopicPerformance[] {
  const byTopic = new Map<string, TopicPerformance>();

  for (const topic of CURRICULUM_TOPICS) {
    byTopic.set(topic, {
      topic,
      mcqAttempted: 0,
      mcqCorrect: 0,
      mcqAccuracy: null,
      frqAttempted: 0,
      frqPointsEarned: 0,
      frqPointsPossible: 0,
      frqPercentage: null,
      hasEnoughData: false,
    });
  }

  for (const row of progressRows) {
    const topic = mcqTopicById.get(row.questionId);
    const entry = topic ? byTopic.get(topic) : undefined;
    if (!entry) continue;

    entry.mcqAttempted += row.attemptCount;
    entry.mcqCorrect += row.correctAttemptCount;
  }

  for (const submission of submissions) {
    // FRQ topics come from the question's own row, which the admin sets
    // from the same taxonomy the MCQ bank uses.
    const entry = byTopic.get(submission.question.primaryCurriculumTopic);
    if (!entry) continue;

    entry.frqAttempted += 1;
    entry.frqPointsEarned += submission.awardedPoints ?? 0;
    entry.frqPointsPossible += submission.maximumPoints;
  }

  for (const entry of byTopic.values()) {
    const mcqReady = entry.mcqAttempted >= MIN_MCQ_ATTEMPTS_FOR_SIGNAL;
    const frqReady = entry.frqAttempted >= MIN_FRQ_ATTEMPTS_FOR_SIGNAL;

    entry.mcqAccuracy = mcqReady
      ? Math.round((entry.mcqCorrect / entry.mcqAttempted) * 100)
      : null;
    entry.frqPercentage =
      frqReady && entry.frqPointsPossible > 0
        ? Math.round((entry.frqPointsEarned / entry.frqPointsPossible) * 100)
        : null;
    entry.frqPointsEarned = Math.round(entry.frqPointsEarned * 10) / 10;
    entry.hasEnoughData = mcqReady || frqReady;
  }

  return Array.from(byTopic.values());
}

/// Names a strongest topic and one to practise next, using only topics that
/// cleared the sample-size rule. Returns nulls when nothing qualifies, or
/// when only one topic does — a single data point is not a comparison.
function pickStrongestAndWeakest(topics: TopicPerformance[]): {
  strongestTopic: string | null;
  topicToPractiseNext: string | null;
} {
  const scored = topics
    .filter((topic) => topic.hasEnoughData)
    .map((topic) => ({
      topic: topic.topic,
      // Where both exist, weight them equally; otherwise use whichever we
      // actually have. This ranks topics — it is not shown as a score.
      score:
        topic.mcqAccuracy !== null && topic.frqPercentage !== null
          ? (topic.mcqAccuracy + topic.frqPercentage) / 2
          : (topic.mcqAccuracy ?? topic.frqPercentage) as number,
    }))
    .sort((a, b) => b.score - a.score);

  if (scored.length < 2) return { strongestTopic: null, topicToPractiseNext: null };

  return {
    strongestTopic: scored[0].topic,
    topicToPractiseNext: scored[scored.length - 1].topic,
  };
}

function countMistakes(
  submissions: Array<{ mistakeTags: string[] }>,
): Array<{ tag: string; count: number }> {
  const counts = new Map<string, number>();

  for (const submission of submissions) {
    for (const tag of submission.mistakeTags) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    }
  }

  return Array.from(counts.entries())
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 8);
}

// Loads a student's practice history from Postgres and turns it into the
// activity calendar and badge facts.
//
// All the rules live in the pure modules next to this file (activity.ts,
// badges.ts); this file only fetches rows and hands them over.
//
// SERVER-ONLY.

if (typeof window !== "undefined") {
  throw new Error("src/lib/progress/facts.server.ts must not be imported in the browser");
}

import type { PrismaClient } from "@/generated/prisma/client";
import { getPrisma } from "@/lib/prisma";
import { getMcqCatalog } from "@/data/mcq/catalog.server";
import { CURRICULUM_TOPICS } from "@/data/mcq/topicTaxonomy";
import {
  activeDaysThisWeek,
  buildActivityDays,
  computeStreaks,
  dayKey,
  hasPerfectWeek,
  localParts,
  type ActivityDay,
  type ActivityEvent,
  type Streaks,
} from "./activity";
import { evaluateBadges, type BadgeFacts, type BadgeStatus } from "./badges";

// --- One student's raw history ---------------------------------------------

/// Where a question comes from, for topic / competition / year badges.
type QuestionInfo = { topic: string; competition: string; year: number };

type McqAttemptRow = { questionId: string; isCorrect: boolean; createdAt: Date };

type FrqScoreRow = {
  frqQuestionId: string;
  awardedPoints: number;
  maximumPoints: number;
  createdAt: Date;
  question: { primaryCurriculumTopic: string; competition: string; year: number };
};

export type PracticeHistory = {
  /// Every MCQ check, oldest first.
  mcqAttempts: McqAttemptRow[];
  /// Every scored FRQ result (AI grade or free check), oldest first.
  frqScores: FrqScoreRow[];
  /// Different MCQs ever answered correctly.
  mcqCorrectIds: Set<string>;
  /// Topic, competition and year of every MCQ in the bank.
  mcqInfo: Map<string, QuestionInfo>;
};

export async function loadPracticeHistory(
  userId: string,
  prisma: PrismaClient = getPrisma(),
): Promise<PracticeHistory> {
  const [mcqAttempts, frqRows, correctRows, catalog] = await Promise.all([
    prisma.userAttempt.findMany({
      where: { userId },
      orderBy: { createdAt: "asc" },
      select: { questionId: true, isCorrect: true, createdAt: true },
    }),
    // A scored FRQ is an AI grade that was charged, or a free exact check.
    prisma.frqSubmission.findMany({
      where: {
        userId,
        status: "GRADED",
        awardedPoints: { not: null },
        OR: [{ creditConsumed: true }, { gradingMethod: "EXACT" }],
      },
      orderBy: { createdAt: "asc" },
      select: {
        frqQuestionId: true,
        awardedPoints: true,
        maximumPoints: true,
        createdAt: true,
        question: { select: { primaryCurriculumTopic: true, competition: true, year: true } },
      },
    }),
    prisma.userQuestionProgress.findMany({
      where: { userId, isCorrect: true },
      select: { questionId: true },
    }),
    getMcqCatalog(),
  ]);

  const mcqInfo = new Map<string, QuestionInfo>();
  for (const item of catalog.items) {
    mcqInfo.set(item.id, { topic: item.primaryCurriculumTopic, competition: item.competition, year: item.year });
  }

  return {
    mcqAttempts,
    frqScores: frqRows.map((row) => ({ ...row, awardedPoints: row.awardedPoints ?? 0 })),
    mcqCorrectIds: new Set(correctRows.map((row) => row.questionId)),
    mcqInfo,
  };
}

/// Every MCQ check and FRQ result as calendar events.
function toEvents(history: PracticeHistory): ActivityEvent[] {
  return [
    ...history.mcqAttempts.map((row) => ({ at: row.createdAt, kind: "MCQ" as const, questionId: row.questionId })),
    ...history.frqScores.map((row) => ({ at: row.createdAt, kind: "FRQ" as const, questionId: row.frqQuestionId })),
  ];
}

// --- The activity calendar --------------------------------------------------

export type ActivityReport = {
  /// Only days with activity; the browser fills in the empty ones.
  days: ActivityDay[];
  streaks: Streaks;
  /// Today's date in the student's time zone, so the browser draws the
  /// calendar ending on the same day the server counted to.
  today: string;
};

export function buildActivityReport(history: PracticeHistory, timeZone: string, now = new Date()): ActivityReport {
  const days = buildActivityDays(toEvents(history), timeZone);
  const today = dayKey(now, timeZone);
  return {
    days,
    streaks: computeStreaks(days.map((day) => day.date), today),
    today,
  };
}

// --- Badges -----------------------------------------------------------------

/// Longest run of consecutive correct MCQ checks.
function longestCorrectRun(attempts: McqAttemptRow[]): number {
  let best = 0;
  let run = 0;
  for (const attempt of attempts) {
    run = attempt.isCorrect ? run + 1 : 0;
    best = Math.max(best, run);
  }
  return best;
}

/// Questions (MCQ or FRQ) solved after at least two unsuccessful tries.
function countComebacks(history: PracticeHistory): number {
  const misses = new Map<string, number>();
  const comebacks = new Set<string>();

  for (const attempt of history.mcqAttempts) {
    const key = `mcq:${attempt.questionId}`;
    if (attempt.isCorrect) {
      if ((misses.get(key) ?? 0) >= 2) comebacks.add(key);
    } else {
      misses.set(key, (misses.get(key) ?? 0) + 1);
    }
  }
  for (const score of history.frqScores) {
    const key = `frq:${score.frqQuestionId}`;
    if (score.awardedPoints >= score.maximumPoints) {
      if ((misses.get(key) ?? 0) >= 2) comebacks.add(key);
    } else {
      misses.set(key, (misses.get(key) ?? 0) + 1);
    }
  }
  return comebacks.size;
}

export function buildBadgeFacts(history: PracticeHistory, timeZone: string, now = new Date()): BadgeFacts {
  const events = toEvents(history);
  const activeDays = buildActivityDays(events, timeZone).map((day) => day.date);
  const today = dayKey(now, timeZone);

  // Topics, competitions and years touched, across MCQ and FRQ.
  const topics = new Set<string>();
  const competitions = new Set<string>();
  const years = new Set<number>();
  for (const attempt of history.mcqAttempts) {
    const info = history.mcqInfo.get(attempt.questionId);
    if (!info) continue;
    topics.add(info.topic);
    competitions.add(info.competition);
    years.add(info.year);
  }
  for (const score of history.frqScores) {
    topics.add(score.question.primaryCurriculumTopic);
    competitions.add(score.question.competition);
    years.add(score.question.year);
  }

  // Local hours, for the night and morning badges.
  const hours = events.map((event) => localParts(event.at, timeZone).hour);

  const frqFullMarks = new Set(
    history.frqScores.filter((s) => s.maximumPoints > 0 && s.awardedPoints >= s.maximumPoints).map((s) => s.frqQuestionId),
  );
  const frqScored = new Set(history.frqScores.filter((s) => s.awardedPoints > 0).map((s) => s.frqQuestionId));
  const questionsAnswered =
    new Set(history.mcqAttempts.map((a) => a.questionId)).size +
    new Set(history.frqScores.map((s) => s.frqQuestionId)).size;

  return {
    questionsAnswered,
    mcqCorrect: history.mcqCorrectIds.size,
    longestStreak: computeStreaks(activeDays, today).longest,
    daysActiveThisWeek: activeDaysThisWeek(activeDays, today),
    hadPerfectWeek: hasPerfectWeek(activeDays),
    topicsTried: [...topics].filter((topic) => (CURRICULUM_TOPICS as readonly string[]).includes(topic)).length,
    topicsTotal: CURRICULUM_TOPICS.length,
    bestCorrectRun: longestCorrectRun(history.mcqAttempts),
    comebacks: countComebacks(history),
    frqFullMarks: frqFullMarks.size,
    frqScored: frqScored.size,
    practisedLateNight: hours.some((hour) => hour >= 22 || hour < 4),
    practisedEarlyMorning: hours.some((hour) => hour >= 5 && hour < 8),
    competitionsTried: competitions.size,
    yearsTried: years.size,
  };
}

export async function getBadgesForUser(userId: string, timeZone: string): Promise<BadgeStatus[]> {
  return evaluateBadges(buildBadgeFacts(await loadPracticeHistory(userId), timeZone));
}

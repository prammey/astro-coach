import { describe, expect, it } from "vitest";
import {
  activeDaysThisWeek,
  activityLevel,
  addDays,
  buildActivityDays,
  calendarDays,
  computeStreaks,
  dayKey,
  hasPerfectWeek,
  localParts,
  safeTimeZone,
} from "./activity";
import { BADGES, evaluateBadges, type BadgeFacts } from "./badges";
import { stretchAccuracy, strengthColour, topicStrength, type StrengthInput } from "./strength";

describe("activity days", () => {
  it("uses the student's own time zone for the day", () => {
    const lateEvening = new Date("2026-09-25T04:30:00Z"); // 9:30 pm on the 24th in Los Angeles
    expect(dayKey(lateEvening, "America/Los_Angeles")).toBe("2026-09-24");
    expect(dayKey(lateEvening, "UTC")).toBe("2026-09-25");
    expect(localParts(lateEvening, "America/Los_Angeles").hour).toBe(21);
  });

  it("falls back to UTC for an unknown time zone", () => {
    expect(safeTimeZone("Not/AZone")).toBe("UTC");
    expect(safeTimeZone(undefined)).toBe("UTC");
    expect(safeTimeZone("Europe/Berlin")).toBe("Europe/Berlin");
  });

  it("counts each question once per day, split into MCQ and FRQ", () => {
    const at = new Date("2026-09-24T12:00:00Z");
    const days = buildActivityDays(
      [
        { at, kind: "MCQ", questionId: "a" },
        { at, kind: "MCQ", questionId: "a" }, // a retry: still one question
        { at, kind: "MCQ", questionId: "b" },
        { at, kind: "FRQ", questionId: "f" },
        { at: new Date("2026-09-23T12:00:00Z"), kind: "MCQ", questionId: "a" },
      ],
      "UTC",
    );
    expect(days).toEqual([
      { date: "2026-09-23", mcq: 1, frq: 0 },
      { date: "2026-09-24", mcq: 2, frq: 1 },
    ]);
  });

  it("shades days from empty to brightest", () => {
    expect([0, 1, 2, 3, 5, 6, 9, 10, 40].map(activityLevel)).toEqual([0, 1, 1, 2, 2, 3, 3, 4, 4]);
  });

  it("lays the calendar out in whole weeks ending today", () => {
    const days = calendarDays("2026-09-24", 2); // a Thursday
    expect(days[0]).toBe("2026-09-13"); // the Sunday a week and a half back
    expect(days[days.length - 1]).toBe("2026-09-24");
    expect(days).toHaveLength(12);
  });
});

describe("streaks", () => {
  const run = (start: string, length: number) => Array.from({ length }, (_, i) => addDays(start, i));

  it("finds the current and longest streaks", () => {
    const days = [...run("2026-09-01", 5), ...run("2026-09-20", 5)];
    expect(computeStreaks(days, "2026-09-24")).toEqual({ current: 5, longest: 5 });
    expect(computeStreaks(run("2026-09-01", 9), "2026-09-24")).toEqual({ current: 0, longest: 9 });
  });

  it("keeps the streak alive until a whole day is missed", () => {
    const days = run("2026-09-20", 4); // up to yesterday
    expect(computeStreaks(days, "2026-09-24").current).toBe(4);
    expect(computeStreaks(days, "2026-09-25").current).toBe(0);
  });

  it("counts this week and spots a perfect week", () => {
    // 2026-09-21 is a Monday.
    expect(activeDaysThisWeek(["2026-09-21", "2026-09-23", "2026-09-20"], "2026-09-24")).toBe(2);
    expect(hasPerfectWeek(run("2026-09-21", 7))).toBe(true);
    expect(hasPerfectWeek(run("2026-09-22", 7))).toBe(false); // Tuesday to Monday
  });
});

describe("badges", () => {
  const empty: BadgeFacts = {
    questionsAnswered: 0,
    mcqCorrect: 0,
    longestStreak: 0,
    daysActiveThisWeek: 0,
    hadPerfectWeek: false,
    topicsTried: 0,
    topicsTotal: 10,
    bestCorrectRun: 0,
    comebacks: 0,
    frqFullMarks: 0,
    frqScored: 0,
    practisedLateNight: false,
    practisedEarlyMorning: false,
    competitionsTried: 0,
    yearsTried: 0,
  };

  it("gives a new student every badge locked with zero progress", () => {
    const badges = evaluateBadges(empty);
    expect(badges).toHaveLength(BADGES.length);
    expect(badges.every((badge) => !badge.earned && badge.current === 0)).toBe(true);
  });

  it("earns badges at their targets and caps progress", () => {
    const badges = evaluateBadges({ ...empty, mcqCorrect: 120, questionsAnswered: 130 });
    const byId = Object.fromEntries(badges.map((badge) => [badge.id, badge]));
    expect(byId["lift-off"].earned).toBe(true);
    expect(byId["lift-off"].current).toBe(10);
    expect(byId["star-catalog"].earned).toBe(true);
    expect(byId["constellation"]).toMatchObject({ earned: false, current: 120, target: 250 });
  });

  it("shows this week for Perfect Week but unlocks it from any past week", () => {
    const badges = evaluateBadges({ ...empty, daysActiveThisWeek: 2, hadPerfectWeek: true });
    expect(badges.find((badge) => badge.id === "perfect-week")).toMatchObject({ earned: true, current: 2, target: 7 });
  });

  it("uses the taxonomy's topic count for Explorer", () => {
    const explorer = evaluateBadges({ ...empty, topicsTried: 4, topicsTotal: 12 }).find((b) => b.id === "explorer");
    expect(explorer).toMatchObject({ current: 4, target: 12, earned: false });
  });

  it("has an image for every badge and unique ids", () => {
    expect(new Set(BADGES.map((badge) => badge.id)).size).toBe(BADGES.length);
    expect(BADGES.every((badge) => badge.image === `/badges/${badge.id}.svg`)).toBe(true);
  });
});

describe("topic strength", () => {
  const none: StrengthInput = {
    mcqAttempts: 0,
    mcqCorrectAttempts: 0,
    mcqQuestionsTried: 0,
    frqQuestionsScored: 0,
    frqPointsEarned: 0,
    frqPointsPossible: 0,
    questionsAvailable: 100,
  };
  const mcq = (tried: number, right: number): StrengthInput => ({
    ...none,
    mcqAttempts: tried,
    mcqCorrectAttempts: right,
    mcqQuestionsTried: tried,
  });

  it("is empty with no answers", () => {
    expect(topicStrength(none)).toEqual({ score: 0, accuracy: null, answered: 0 });
  });

  it("matches the agreed examples", () => {
    expect(topicStrength(mcq(2, 2)).score).toBe(56);
    expect(topicStrength(mcq(10, 8)).score).toBe(76);
    expect(topicStrength(mcq(40, 34)).score).toBe(90);
    expect(topicStrength(mcq(60, 60)).score).toBe(100);
    expect(topicStrength(mcq(50, 20)).score).toBe(37);
  });

  it("does not crown a topic from two lucky answers", () => {
    const tiny = topicStrength(mcq(2, 2));
    expect(tiny.accuracy).toBe(100);
    expect(topicStrength(mcq(10, 8)).score).toBeGreaterThan(tiny.score);
    expect(topicStrength(mcq(40, 34)).score).toBeGreaterThan(tiny.score);
  });

  it("reaches 100% for perfect work once there is enough of it", () => {
    expect(topicStrength(mcq(15, 15)).score).toBe(100);
    expect(topicStrength(mcq(5, 5)).score).toBeLessThan(100);
  });

  it("rewards covering more of a topic at the same accuracy", () => {
    expect(topicStrength(mcq(30, 24)).score).toBeGreaterThan(topicStrength(mcq(10, 8)).score);
  });

  it("scores weak topics below their raw accuracy", () => {
    expect(topicStrength(mcq(50, 20)).score).toBeLessThan(40);
    expect(topicStrength(mcq(3, 0)).score).toBeLessThan(25);
  });

  it("lets a small topic reach full confidence", () => {
    expect(topicStrength({ ...mcq(12, 12), questionsAvailable: 12 }).score).toBe(100);
  });

  it("stretches accuracy away from 50% but keeps the ends and the order", () => {
    expect(stretchAccuracy(0)).toBe(0);
    expect(stretchAccuracy(0.5)).toBe(0.5);
    expect(stretchAccuracy(1)).toBe(1);
    expect(stretchAccuracy(0.85)).toBeGreaterThan(0.85);
    expect(stretchAccuracy(0.4)).toBeLessThan(0.4);
    const samples = Array.from({ length: 101 }, (_, i) => stretchAccuracy(i / 100));
    expect(samples.every((value, i) => i === 0 || value > samples[i - 1])).toBe(true);
  });

  it("counts free-response work, weighted by its points", () => {
    const withFrq = topicStrength({ ...mcq(10, 7), frqQuestionsScored: 3, frqPointsEarned: 27, frqPointsPossible: 30 });
    expect(withFrq.answered).toBe(13);
    expect(withFrq.score).toBeGreaterThan(topicStrength(mcq(10, 7)).score);
  });

  it("colours bars red, orange, yellow, green, then blue", () => {
    const hue = (score: number) => Number(strengthColour(score).match(/hsl\((\d+)/)![1]);
    expect(hue(0)).toBe(0);
    expect(hue(40)).toBe(28);
    expect(hue(60)).toBe(48);
    expect(hue(80)).toBe(130);
    expect(hue(100)).toBe(205);
    expect(hue(70)).toBeGreaterThan(48);
    expect(hue(70)).toBeLessThan(130);
  });
});

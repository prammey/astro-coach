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
import { topicMastery } from "./mastery";

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

describe("topic mastery", () => {
  const base = { tried: 0, solved: 0, available: 100, accuracy: null, hasFrqs: true, frqFullMarks: 0 };

  it("starts at Not started, then Novice after one try", () => {
    expect(topicMastery(base).name).toBe("Not started");
    expect(topicMastery({ ...base, tried: 1, accuracy: 0 }).name).toBe("Novice");
  });

  it("needs both coverage and accuracy for each level", () => {
    expect(topicMastery({ ...base, tried: 30, solved: 26, accuracy: 65 }).name).toBe("Adept");
    expect(topicMastery({ ...base, tried: 30, solved: 26, accuracy: 55 }).name).toBe("Apprentice");
  });

  it("asks for a full-mark FRQ before Olympian when the topic has FRQs", () => {
    const strong = { ...base, tried: 90, solved: 85, accuracy: 90 };
    expect(topicMastery(strong).name).toBe("Expert");
    expect(topicMastery({ ...strong, frqFullMarks: 1 }).name).toBe("Olympian");
    expect(topicMastery({ ...strong, hasFrqs: false }).name).toBe("Olympian");
  });

  it("scales to small topics without letting one answer level them up", () => {
    const small = { ...base, available: 12, tried: 2, solved: 2, accuracy: 100 };
    expect(topicMastery(small).name).toBe("Novice"); // Apprentice needs at least 3 solved
    expect(topicMastery({ ...small, solved: 3, tried: 3 }).name).toBe("Apprentice");
  });

  it("explains the next step in plain words", () => {
    const result = topicMastery({ ...base, tried: 12, solved: 12, accuracy: 55 });
    expect(result.name).toBe("Apprentice");
    expect(result.nextStep).toBe("To reach Adept: Solve 13 more questions, and raise your accuracy to 60% (now 55%).");
    expect(topicMastery({ ...base, tried: 90, solved: 85, accuracy: 90, frqFullMarks: 1 }).nextStep).toBeNull();
  });
});

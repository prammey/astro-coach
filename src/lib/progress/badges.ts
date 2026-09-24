// Badges: what they are, and how close a student is to each one.
//
// Pure functions only, so every rule is unit-tested. The server gathers a
// student's history into `BadgeFacts` (see facts.server.ts); this file
// turns those facts into earned / not-yet-earned badges with progress.
//
// Badges reward learning, not clicking: correct answers count once per
// question, and nothing is earned for opening a question or giving up.

/// Everything the badge rules need to know about one student.
export type BadgeFacts = {
  /// Different questions attempted (MCQ + FRQ).
  questionsAnswered: number;
  /// Different MCQs answered correctly at least once.
  mcqCorrect: number;
  longestStreak: number;
  /// Days practised in the current Monday–Sunday week.
  daysActiveThisWeek: number;
  /// Whether any Monday–Sunday week had all seven days practised.
  hadPerfectWeek: boolean;
  /// Curriculum topics with at least one attempted question.
  topicsTried: number;
  /// Total curriculum topics (the target for Explorer).
  topicsTotal: number;
  /// Longest run of MCQ checks answered correctly in a row.
  bestCorrectRun: number;
  /// Questions got right after at least two wrong tries.
  comebacks: number;
  /// Different FRQs scored at full marks.
  frqFullMarks: number;
  /// Different FRQs that earned at least one point.
  frqScored: number;
  /// Practised between 10 pm and 4 am (local time).
  practisedLateNight: boolean;
  /// Practised between 5 am and 8 am (local time).
  practisedEarlyMorning: boolean;
  /// Different competitions practised (USAAAO, IAAC, BAAO).
  competitionsTried: number;
  /// Different exam years practised.
  yearsTried: number;
};

export type BadgeDefinition = {
  id: string;
  name: string;
  /// How to earn it, shown on hover.
  description: string;
  /// Image in /public/badges/.
  image: string;
  /// The goal. Progress is `current / target`.
  target: number;
  /// Words after the progress numbers, e.g. "MCQs correct".
  unit: string;
  /// Where the badge currently stands, read from the facts.
  current: (facts: BadgeFacts) => number;
  /// Optional override for badges whose progress is not their unlock rule
  /// (Perfect Week shows this week, but unlocks from any week).
  earned?: (facts: BadgeFacts) => boolean;
};

/// Converts a yes/no fact into 0 or 1 for badges with a target of 1.
const oneIf = (condition: boolean) => (condition ? 1 : 0);

/// Every badge, in the order the badges box shows them: getting started,
/// consistency, mastery of MCQs, free response, then the fun ones.
export const BADGES: BadgeDefinition[] = [
  {
    id: "first-light",
    name: "First Light",
    description: "Answer your first question.",
    image: "/badges/first-light.svg",
    target: 1,
    unit: "question answered",
    current: (facts) => facts.questionsAnswered,
  },
  {
    id: "lift-off",
    name: "Lift-Off",
    description: "Get 10 different multiple-choice questions right.",
    image: "/badges/lift-off.svg",
    target: 10,
    unit: "MCQs correct",
    current: (facts) => facts.mcqCorrect,
  },
  {
    id: "ignition",
    name: "Ignition",
    description: "Practise 3 days in a row.",
    image: "/badges/ignition.svg",
    target: 3,
    unit: "days in a row",
    current: (facts) => facts.longestStreak,
  },
  {
    id: "perfect-week",
    name: "Perfect Week",
    description: "Practise on all 7 days of one week, Monday to Sunday.",
    image: "/badges/perfect-week.svg",
    target: 7,
    unit: "days this week",
    current: (facts) => facts.daysActiveThisWeek,
    earned: (facts) => facts.hadPerfectWeek,
  },
  {
    id: "lunar-cycle",
    name: "Lunar Cycle",
    description: "Practise 30 days in a row — one full cycle of the Moon.",
    image: "/badges/lunar-cycle.svg",
    target: 30,
    unit: "days in a row",
    current: (facts) => facts.longestStreak,
  },
  {
    id: "explorer",
    name: "Explorer",
    description: "Try a question from every curriculum topic.",
    image: "/badges/explorer.svg",
    target: 10,
    unit: "topics tried",
    current: (facts) => facts.topicsTried,
  },
  {
    id: "star-catalog",
    name: "Star Catalog",
    description: "Get 100 different multiple-choice questions right.",
    image: "/badges/star-catalog.svg",
    target: 100,
    unit: "MCQs correct",
    current: (facts) => facts.mcqCorrect,
  },
  {
    id: "constellation",
    name: "Constellation Maker",
    description: "Get 250 different multiple-choice questions right.",
    image: "/badges/constellation.svg",
    target: 250,
    unit: "MCQs correct",
    current: (facts) => facts.mcqCorrect,
  },
  {
    id: "supernova",
    name: "Supernova",
    description: "Get 500 different multiple-choice questions right.",
    image: "/badges/supernova.svg",
    target: 500,
    unit: "MCQs correct",
    current: (facts) => facts.mcqCorrect,
  },
  {
    id: "sharpshooter",
    name: "Sharpshooter",
    description: "Answer 10 multiple-choice questions right in a row.",
    image: "/badges/sharpshooter.svg",
    target: 10,
    unit: "right in a row",
    current: (facts) => facts.bestCorrectRun,
  },
  {
    id: "comeback",
    name: "Comeback Kid",
    description: "Get a question right after two or more wrong tries. Persistence pays!",
    image: "/badges/comeback.svg",
    target: 1,
    unit: "comeback",
    current: (facts) => facts.comebacks,
  },
  {
    id: "first-proof",
    name: "First Proof",
    description: "Score full marks on a free-response question.",
    image: "/badges/first-proof.svg",
    target: 1,
    unit: "full-mark FRQ",
    current: (facts) => facts.frqFullMarks,
  },
  {
    id: "problem-solver",
    name: "Problem Solver",
    description: "Earn points on 10 different free-response questions.",
    image: "/badges/problem-solver.svg",
    target: 10,
    unit: "FRQs scored",
    current: (facts) => facts.frqScored,
  },
  {
    id: "perfectionist",
    name: "Perfectionist",
    description: "Score full marks on 5 different free-response questions.",
    image: "/badges/perfectionist.svg",
    target: 5,
    unit: "full-mark FRQs",
    current: (facts) => facts.frqFullMarks,
  },
  {
    id: "globetrotter",
    name: "Olympiad Globetrotter",
    description: "Practise questions from USAAAO, IAAC and BAAO.",
    image: "/badges/globetrotter.svg",
    target: 3,
    unit: "competitions",
    current: (facts) => facts.competitionsTried,
  },
  {
    id: "time-traveller",
    name: "Time Traveller",
    description: "Practise questions from 10 different exam years.",
    image: "/badges/time-traveller.svg",
    target: 10,
    unit: "exam years",
    current: (facts) => facts.yearsTried,
  },
  {
    id: "stargazer",
    name: "Stargazer",
    description: "Practise at night, between 10 pm and 4 am — prime observing hours.",
    image: "/badges/stargazer.svg",
    target: 1,
    unit: "night session",
    current: (facts) => oneIf(facts.practisedLateNight),
  },
  {
    id: "early-bird",
    name: "Early Bird",
    description: "Practise at sunrise, between 5 am and 8 am.",
    image: "/badges/early-bird.svg",
    target: 1,
    unit: "morning session",
    current: (facts) => oneIf(facts.practisedEarlyMorning),
  },
];

/// One badge as the browser receives it: no rules, just the result.
export type BadgeStatus = {
  id: string;
  name: string;
  description: string;
  image: string;
  earned: boolean;
  /// Progress, capped at the target so a bar never overflows.
  current: number;
  target: number;
  unit: string;
};

export function evaluateBadges(facts: BadgeFacts): BadgeStatus[] {
  return BADGES.map((badge) => {
    // Explorer's target follows the taxonomy, so adding a topic updates it.
    const target = badge.id === "explorer" ? facts.topicsTotal : badge.target;
    const raw = badge.current(facts);
    const earned = badge.earned ? badge.earned(facts) : raw >= target;
    return {
      id: badge.id,
      name: badge.name,
      description: badge.description,
      image: badge.image,
      earned,
      current: Math.min(raw, target),
      target,
      unit: badge.unit,
    };
  });
}

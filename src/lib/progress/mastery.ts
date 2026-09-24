// Topic mastery levels for the Pro dashboard.
//
// Topics differ a lot in size (Energy & Stellar Physics has about 20
// questions, Math, Data & Coordinates over 160), so levels are based on the
// SHARE of a topic's questions solved, plus accuracy — never on raw counts
// that a small topic could never reach. Pure functions only, unit-tested.

/// The level names, lowest first. Index = level number.
export const MASTERY_LEVELS = ["Not started", "Novice", "Apprentice", "Adept", "Expert", "Olympian"] as const;

export type MasteryLevelName = (typeof MASTERY_LEVELS)[number];

/// What each level above Novice asks for. `share` is the fraction of the
/// topic's questions solved; `minSolved` stops a tiny topic being levelled
/// up by one lucky answer; `accuracy` is a percentage.
const REQUIREMENTS: Array<{ share: number; minSolved: number; accuracy: number; needsFullMarkFrq: boolean }> = [
  { share: 0.1, minSolved: 3, accuracy: 50, needsFullMarkFrq: false }, // Apprentice
  { share: 0.25, minSolved: 5, accuracy: 60, needsFullMarkFrq: false }, // Adept
  { share: 0.5, minSolved: 8, accuracy: 70, needsFullMarkFrq: false }, // Expert
  { share: 0.8, minSolved: 10, accuracy: 80, needsFullMarkFrq: true }, // Olympian
];

/// A free-response question counts as solved from this score upward.
export const FRQ_SOLVED_SHARE = 0.7;

export type TopicMasteryInput = {
  /// Different questions tried in the topic (MCQ + FRQ).
  tried: number;
  /// Different MCQs answered correctly + FRQs scored at least 70%.
  solved: number;
  /// Questions in the bank for this topic (MCQ + published FRQ).
  available: number;
  /// Percentage: MCQ accuracy if the student has MCQ attempts here,
  /// otherwise their FRQ score percentage. Null with no attempts.
  accuracy: number | null;
  /// Whether the topic has any free-response questions at all.
  hasFrqs: boolean;
  /// Different FRQs in this topic scored at full marks.
  frqFullMarks: number;
};

export type TopicMastery = {
  level: number;
  name: MasteryLevelName;
  solved: number;
  available: number;
  /// What to do to reach the next level, or null at the top.
  nextStep: string | null;
};

/// The number of solved questions a requirement asks for in this topic.
function solvedNeeded(requirement: (typeof REQUIREMENTS)[number], available: number): number {
  return Math.min(available, Math.max(requirement.minSolved, Math.ceil(requirement.share * available)));
}

/// Whether a student meets one level's requirement.
function meets(input: TopicMasteryInput, requirement: (typeof REQUIREMENTS)[number]): boolean {
  return (
    input.solved >= solvedNeeded(requirement, input.available) &&
    (input.accuracy ?? 0) >= requirement.accuracy &&
    (!requirement.needsFullMarkFrq || !input.hasFrqs || input.frqFullMarks > 0)
  );
}

/// Explains, in one sentence, what the next level asks for.
function describeNextStep(input: TopicMasteryInput, level: number): string | null {
  if (level === 0) return "Try a question in this topic to get started.";
  const requirement = REQUIREMENTS[level - 1];
  if (!requirement) return null;

  const nextName = MASTERY_LEVELS[level + 1];
  const missing: string[] = [];
  const remaining = solvedNeeded(requirement, input.available) - input.solved;
  if (remaining > 0) missing.push(`solve ${remaining} more question${remaining === 1 ? "" : "s"}`);
  if ((input.accuracy ?? 0) < requirement.accuracy) {
    missing.push(`raise your accuracy to ${requirement.accuracy}% (now ${input.accuracy ?? 0}%)`);
  }
  if (requirement.needsFullMarkFrq && input.hasFrqs && input.frqFullMarks === 0) {
    missing.push("score full marks on a free-response question here");
  }
  const joined = missing.join(", and ");
  return `To reach ${nextName}: ${joined.charAt(0).toUpperCase()}${joined.slice(1)}.`;
}

export function topicMastery(input: TopicMasteryInput): TopicMastery {
  let level = input.tried > 0 ? 1 : 0;
  // Levels are climbed in order: Expert needs Adept's bar met too.
  for (const requirement of REQUIREMENTS) {
    if (level === 0 || !meets(input, requirement)) break;
    level++;
  }

  return {
    level,
    name: MASTERY_LEVELS[level],
    solved: input.solved,
    available: input.available,
    nextStep: describeNextStep(input, level),
  };
}

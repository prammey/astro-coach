// Topic "strength" for the dashboard's Strengths panel: one number from 0 to
// 100 per curriculum topic.
//
// Raw accuracy alone is misleading: two questions right would read as 100%
// and outrank a topic with 40 questions at 85%. So the score blends three
// things, each explained below:
//
//   1. accuracy, shrunk towards 50% until there is enough evidence;
//   2. how much of the topic the student has covered;
//   3. a gentle lift, so solid work reads as encouraging but a topic still
//      has to be earned to look full.
//
// Pure functions only, so every rule is unit-tested.

/// A free-response question tells us more than one multiple-choice click,
/// so each scored FRQ counts as this many MCQ answers of evidence.
export const FRQ_EVIDENCE_WEIGHT = 3;

/// Accuracy starts as if the student had already answered this many
/// questions at 50%. Real answers quickly outweigh it: after 5 answers the
/// prior is half the evidence, after 45 only a tenth.
export const PRIOR_ANSWERS = 5;
export const PRIOR_ACCURACY = 0.5;

/// Covering this many different questions (or the whole topic, if it is
/// smaller) earns full credit for breadth.
export const COVERAGE_TARGET = 25;

/// Breadth can scale the score between this and 100%.
export const COVERAGE_FLOOR = 0.75;

/// Raising to this power below 1 lifts the middle of the range a little
/// (0.50 → 0.55, 0.80 → 0.83) while keeping 0 at 0 and 1 at 1.
export const LIFT = 0.85;

export type StrengthInput = {
  /// Every MCQ check in this topic, and how many were right.
  mcqAttempts: number;
  mcqCorrectAttempts: number;
  /// Different MCQs tried in this topic.
  mcqQuestionsTried: number;
  /// Different FRQs scored in this topic, and their points.
  frqQuestionsScored: number;
  frqPointsEarned: number;
  frqPointsPossible: number;
  /// Questions in the bank for this topic (MCQ + published FRQ).
  questionsAvailable: number;
};

export type TopicStrength = {
  /// 0–100, what the bar shows.
  score: number;
  /// Plain accuracy for the hover label, or null with no answers yet.
  accuracy: number | null;
  /// Different questions answered in this topic.
  answered: number;
};

export function topicStrength(input: StrengthInput): TopicStrength {
  // Evidence, in "MCQ answers": each FRQ counts FRQ_EVIDENCE_WEIGHT times,
  // at its share of points earned.
  const frqEvidence = FRQ_EVIDENCE_WEIGHT * input.frqQuestionsScored;
  const frqShare = input.frqPointsPossible > 0 ? input.frqPointsEarned / input.frqPointsPossible : 0;
  const evidence = input.mcqAttempts + frqEvidence;
  const correct = input.mcqCorrectAttempts + frqShare * frqEvidence;
  const answered = input.mcqQuestionsTried + input.frqQuestionsScored;

  if (evidence <= 0) return { score: 0, accuracy: null, answered };

  // 1. Accuracy, shrunk towards 50% while evidence is thin.
  const shrunkAccuracy = (correct + PRIOR_ANSWERS * PRIOR_ACCURACY) / (evidence + PRIOR_ANSWERS);

  // 2. Breadth: from COVERAGE_FLOOR up to 1 as more of the topic is covered.
  const target = Math.max(1, Math.min(COVERAGE_TARGET, input.questionsAvailable));
  const coverage = Math.min(1, answered / target);
  const breadth = COVERAGE_FLOOR + (1 - COVERAGE_FLOOR) * coverage;

  // 3. The gentle lift.
  const score = Math.pow(shrunkAccuracy * breadth, LIFT) * 100;

  return {
    score: Math.round(Math.min(100, Math.max(0, score))),
    accuracy: Math.round((correct / evidence) * 100),
    answered,
  };
}

/// The bar colour for a score: red (weak) → orange → yellow → green →
/// blue (full). Hues are interpolated between these stops.
const HUE_STOPS: Array<[score: number, hue: number]> = [
  [0, 0], // red
  [40, 28], // orange
  [60, 48], // yellow
  [80, 130], // green
  [100, 205], // blue
];

export function strengthColour(score: number): string {
  const clamped = Math.min(100, Math.max(0, score));
  for (let index = 1; index < HUE_STOPS.length; index++) {
    const [endScore, endHue] = HUE_STOPS[index];
    if (clamped <= endScore) {
      const [startScore, startHue] = HUE_STOPS[index - 1];
      const t = (clamped - startScore) / (endScore - startScore);
      return `hsl(${Math.round(startHue + t * (endHue - startHue))} 85% 52%)`;
    }
  }
  return `hsl(${HUE_STOPS[HUE_STOPS.length - 1][1]} 85% 52%)`;
}

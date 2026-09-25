// Topic "strength" for the dashboard's Strengths panel: one number from 0 to
// 100 per curriculum topic.
//
// Raw accuracy alone is misleading: two questions right would read as 100%
// and outrank a topic with 40 questions at 85%. So the score combines two
// ideas, each explained below:
//
//   1. Confidence: with only a few answers, the score leans towards a
//      cautious starting value. After CONFIDENT_ANSWERS different questions
//      (or the whole topic, if it is smaller) it is fully trusted.
//   2. Stretch: accuracy above 50% is nudged up and accuracy below 50% is
//      nudged down, so real strengths stand out and weak spots are not
//      flattered. 0% stays 0% and 100% stays 100%.
//
// A few results (MCQs only):
//   2 of 2 right → 56     10 at 80% → 76     40 at 85% → 90
//   60 of 60     → 100    50 at 40% → 37
//
// Pure functions only, so every rule is unit-tested.

/// A free-response question tells us more than one multiple-choice click,
/// so each scored FRQ counts as this many MCQ answers of evidence.
export const FRQ_EVIDENCE_WEIGHT = 3;

/// Different questions answered before a topic's score is fully trusted.
export const CONFIDENT_ANSWERS = 15;

/// Where a score starts while there is little evidence (as a fraction).
export const STARTING_SCORE = 0.3;

/// How strongly accuracy is stretched away from 50% (0 = not at all).
/// Anything up to 1 keeps the curve rising, so more accuracy always means
/// a higher score.
export const STRETCH = 0.6;

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

/// Pushes an accuracy (0–1) away from 50%: 0.85 → 0.90, 0.40 → 0.37.
export function stretchAccuracy(accuracy: number): number {
  return accuracy + STRETCH * accuracy * (1 - accuracy) * (2 * accuracy - 1);
}

export function topicStrength(input: StrengthInput): TopicStrength {
  const answered = input.mcqQuestionsTried + input.frqQuestionsScored;

  // Accuracy over every MCQ check plus each FRQ's share of points, with
  // each FRQ counting FRQ_EVIDENCE_WEIGHT times.
  const frqEvidence = FRQ_EVIDENCE_WEIGHT * input.frqQuestionsScored;
  const frqShare = input.frqPointsPossible > 0 ? input.frqPointsEarned / input.frqPointsPossible : 0;
  const checks = input.mcqAttempts + frqEvidence;
  if (checks <= 0) return { score: 0, accuracy: null, answered };
  const accuracy = (input.mcqCorrectAttempts + frqShare * frqEvidence) / checks;

  // 1. Confidence: rises with different questions answered (FRQs weighted),
  // reaching 1 at CONFIDENT_ANSWERS, or at the topic's size if smaller.
  const evidence = input.mcqQuestionsTried + frqEvidence;
  const needed = Math.max(1, Math.min(CONFIDENT_ANSWERS, input.questionsAvailable));
  const confidence = Math.sqrt(Math.min(1, evidence / needed));

  // 2. Blend the stretched accuracy with the cautious starting score.
  const score = confidence * stretchAccuracy(accuracy) + (1 - confidence) * STARTING_SCORE;

  return {
    score: Math.round(Math.min(1, Math.max(0, score)) * 100),
    accuracy: Math.round(accuracy * 100),
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

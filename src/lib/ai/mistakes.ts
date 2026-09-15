// The standardised mistake taxonomy.
//
// Grading feedback is stored structurally, not just as prose, because these
// tags are what the Pro dashboard aggregates into "Missing justification —
// 8, Units — 5". A model is only allowed to return tags from this list; an
// invented tag is dropped rather than stored.

export const MISTAKE_TAGS = [
  "conceptual_error",
  "algebra_error",
  "arithmetic_error",
  "unit_error",
  "incorrect_formula",
  "missing_justification",
  "incomplete_reasoning",
  "misread_question",
  "final_answer_error",
  "unclear_work",
] as const;

export type MistakeTag = (typeof MISTAKE_TAGS)[number];

/// Short, student-facing names for the dashboard. The raw tags are stable
/// identifiers; these are what a person actually reads.
export const MISTAKE_TAG_LABELS: Record<MistakeTag, string> = {
  conceptual_error: "Concept misunderstood",
  algebra_error: "Algebra slip",
  arithmetic_error: "Arithmetic slip",
  unit_error: "Units",
  incorrect_formula: "Wrong formula",
  missing_justification: "Missing justification",
  incomplete_reasoning: "Incomplete reasoning",
  misread_question: "Misread the question",
  final_answer_error: "Final answer wrong",
  unclear_work: "Work hard to follow",
};

export function isMistakeTag(value: unknown): value is MistakeTag {
  return typeof value === "string" && (MISTAKE_TAGS as readonly string[]).includes(value);
}

export function labelForMistakeTag(tag: string): string {
  return isMistakeTag(tag) ? MISTAKE_TAG_LABELS[tag] : tag;
}

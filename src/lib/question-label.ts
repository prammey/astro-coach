import type { PublicQuestion } from "@/data/mcq/types";

// "Question 3" for a standalone question, "Questions 3–4" for a multi-part
// item, so a learner can see at a glance that two exam questions are joined.
export function questionNumberLabel(question: PublicQuestion): string {
  const parts = question.parts;
  if (!parts || parts.length < 2) return `Question ${question.questionNumber}`;

  const numbers = parts.map((part) => part.questionNumber);
  return `Questions ${Math.min(...numbers)}–${Math.max(...numbers)}`;
}

// How many parts a learner has to answer for this item.
export function partCount(question: PublicQuestion): number {
  return question.parts?.length ?? 1;
}

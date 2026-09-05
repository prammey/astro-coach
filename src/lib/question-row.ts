import { findCatalogQuestionById } from '@/data/mcq/catalog.server';

// Turns a stored questionId into something a person can read, e.g.
// "USAAAO 2026 Q13" instead of "usaaao-2026-first-round-q13".
//
// Returns null when the ID no longer matches a question — a row left over
// from an earlier import, or a question that has since been renamed or
// folded into a multi-part item. Callers show the raw ID and skip the link
// in that case, rather than sending someone to a 404.
export function questionLabelFor(questionId: string): string | null {
  const question = findCatalogQuestionById(questionId);
  if (!question) return null;

  const numbers = question.parts?.length
    ? question.parts.map((part) => part.questionNumber)
    : [question.questionNumber];

  const range =
    numbers.length > 1
      ? `Q${Math.min(...numbers)}–${Math.max(...numbers)}`
      : `Q${numbers[0]}`;

  return `${question.competition} ${question.year} ${range}`;
}

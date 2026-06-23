// Server-only catalog combining the three real competition question banks
// into one list with stable, deterministic IDs. This file (and its raw
// data, including correct answers and explanations) must never be
// imported from a Client Component — only from Server Components and
// API routes. The check below catches an accidental client import early.
if (typeof window !== "undefined") {
  throw new Error("src/data/mcq/catalog.server.ts must not be imported in the browser");
}

import { usaaaoMcqs } from "./usaaao_mcqs";
import { iaacMcqs } from "./iaac_mcqs";
import { baaoMcqs } from "./baao_mcqs";
import type { CatalogQuestion, PublicQuestion, RawMcqQuestion } from "./types";
import { classifyQuestionTopics, getPrimaryCurriculumTopic } from "./topicTaxonomy";

// Turns free text into a URL-safe, lowercase slug, e.g.
// "First Round" -> "first-round".
function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-+|-+$)/g, "");
}

// Builds a stable ID from competition + year + exam name + question number,
// e.g. "usaaao-2015-first-round-q12". This is computed at load time, never
// stored in the raw source files.
function buildQuestionId(question: RawMcqQuestion): string {
  return `${slugify(question.competition)}-${question.year}-${slugify(question.examName)}-q${question.questionNumber}`;
}

function withId(question: RawMcqQuestion): CatalogQuestion {
  const curriculumTopics = classifyQuestionTopics(question.topic);
  const primaryCurriculumTopic = getPrimaryCurriculumTopic(question.topic);

  return {
    ...question,
    id: buildQuestionId(question),
    primaryCurriculumTopic,
    curriculumTopics,
  };
}

// The three raw arrays are typed with literal unions via `as const` in
// their source files; we only need the general shape here.
const rawQuestions = [...usaaaoMcqs, ...iaacMcqs, ...baaoMcqs] as unknown as RawMcqQuestion[];

// The full catalog, including correct answers and explanations.
// Server-only — never pass this directly to a Client Component.
export const realQuestionCatalog: CatalogQuestion[] = rawQuestions.map(withId);

export function findCatalogQuestionById(id: string): CatalogQuestion | undefined {
  return realQuestionCatalog.find((question) => question.id === id);
}

// Strips the fields that must never reach the browser before an answer
// is submitted: correctAnswer, explanation, and solutionMedia details.
export function toPublicQuestion(question: CatalogQuestion): PublicQuestion {
  const { correctAnswer, explanation, solutionMedia, ...rest } = question;
  void correctAnswer;
  void explanation;

  return {
    ...rest,
    questionMediaMissing: question.questionMedia?.status === "required-missing",
    hasSolutionMedia: Boolean(solutionMedia) && solutionMedia?.status !== "required-missing",
  };
}

export const publicQuestionCatalog: PublicQuestion[] = realQuestionCatalog.map(toPublicQuestion);

// Counts used for the audit report and the dashboard denominator.
export const catalogCounts = {
  usaaao: usaaaoMcqs.length,
  iaac: iaacMcqs.length,
  baao: baaoMcqs.length,
  total: realQuestionCatalog.length,
  missingQuestionMedia: realQuestionCatalog.filter(
    (q) => q.questionMedia?.status === "required-missing"
  ).length,
  missingSolutionMedia: realQuestionCatalog.filter(
    (q) => q.solutionMedia?.status === "required-missing"
  ).length,
};

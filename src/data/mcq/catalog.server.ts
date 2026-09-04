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

const allQuestions: CatalogQuestion[] = rawQuestions.map(withId);

// Two questions belong to the same exam when these all match.
function sameExam(a: CatalogQuestion, b: CatalogQuestion): boolean {
  return (
    a.competition === b.competition && a.year === b.year && a.examName === b.examName
  );
}

// The ID of a joined multi-part item, e.g. "usaaao-2019-first-round-q3-q4".
// Distinct from any single-question ID, which always ends in one "-q<N>".
function buildGroupId(parts: CatalogQuestion[]): string {
  const [first, ...rest] = parts;
  return [first.id, ...rest.map((p) => `q${p.questionNumber}`)].join("-");
}

// Joins each question that declares `continuesFrom` onto the question it
// builds on, producing one multi-part item that replaces both. A follow-up
// is never left in the catalog on its own, because without the earlier
// question's setup it cannot be answered.
function buildCatalogItems(questions: CatalogQuestion[]): CatalogQuestion[] {
  const consumed = new Set<string>();
  const partsByParentId = new Map<string, CatalogQuestion[]>();

  for (const question of questions) {
    if (question.continuesFrom === undefined) continue;

    const parent = questions.find(
      (candidate) =>
        sameExam(candidate, question) &&
        candidate.questionNumber === question.continuesFrom
    );
    if (!parent) continue;

    const existing = partsByParentId.get(parent.id) ?? [parent];
    partsByParentId.set(parent.id, [...existing, question]);
    consumed.add(question.id);
  }

  const items: CatalogQuestion[] = [];
  for (const question of questions) {
    if (consumed.has(question.id)) continue; // folded into its parent

    const parts = partsByParentId.get(question.id);
    if (!parts) {
      items.push(question);
      continue;
    }

    // The item inherits the first part's shared metadata (competition,
    // topic, source, difficulty) and carries every part with its own
    // prompt, choices, answer and explanation.
    const labelled = parts.map((part, index) => ({
      ...part,
      partLabel: String.fromCharCode(65 + index), // A, B, C...
    }));

    items.push({
      ...question,
      id: buildGroupId(parts),
      parts: labelled,
    });
  }

  return items;
}

// The full catalog, including correct answers and explanations.
// Server-only — never pass this directly to a Client Component.
export const realQuestionCatalog: CatalogQuestion[] = buildCatalogItems(allQuestions);

export function findCatalogQuestionById(id: string): CatalogQuestion | undefined {
  return realQuestionCatalog.find((question) => question.id === id);
}

// Strips the fields that must never reach the browser before an answer
// is submitted: correctAnswer, explanation, and solutionMedia details.
export function toPublicQuestion(question: CatalogQuestion): PublicQuestion {
  const { correctAnswer, explanation, solutionMedia, parts, ...rest } = question;
  void correctAnswer;
  void explanation;

  return {
    ...rest,
    questionMediaMissing: question.questionMedia?.status === "required-missing",
    hasSolutionMedia: Boolean(solutionMedia) && solutionMedia?.status !== "required-missing",
    // Each part is stripped the same way, so no answer or explanation for
    // any part reaches the browser before the learner submits.
    parts: parts?.map(toPublicQuestion),
  };
}

export const publicQuestionCatalog: PublicQuestion[] = realQuestionCatalog.map(toPublicQuestion);

// Counts used for the audit report and the dashboard denominator.
// `total` counts practice items, so a multi-part item counts once — it is
// answered, scored and tracked as a single unit.
export const catalogCounts = {
  usaaao: usaaaoMcqs.length,
  iaac: iaacMcqs.length,
  baao: baaoMcqs.length,
  total: realQuestionCatalog.length,
  missingQuestionMedia: allQuestions.filter(
    (q) => q.questionMedia?.status === "required-missing"
  ).length,
  missingSolutionMedia: allQuestions.filter(
    (q) => q.solutionMedia?.status === "required-missing"
  ).length,
};

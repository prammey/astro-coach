// Pure functions that turn raw MCQ rows into the catalog the app serves.
//
// This file has no database and no Next.js in it, so it can be used by
// three callers with the same result:
//   - src/data/mcq/catalog.server.ts  (builds the catalog from Postgres)
//   - scripts/seed-mcq.ts             (computes IDs/topics before upserting)
//   - the tests                       (build the catalog from the seed files)
import type { CatalogQuestion, PublicQuestion, RawMcqQuestion } from "./types";
import type { McqExplanation } from "./explanations/types";
import { classifyQuestionTopics, getPrimaryCurriculumTopic } from "./topicTaxonomy";

// Turns free text into a URL-safe, lowercase slug, e.g.
// "First Round" -> "first-round".
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-+|-+$)/g, "");
}

// Builds a stable ID from competition + year + exam name + question number,
// e.g. "usaaao-2015-first-round-q12". This is the primary key in Postgres
// and the questionId stored on every attempt, bookmark and report.
export function buildQuestionId(question: RawMcqQuestion): string {
  return `${slugify(question.competition)}-${question.year}-${slugify(question.examName)}-q${question.questionNumber}`;
}

// A raw row plus its ID, curriculum topics and (if written) explanation.
export function toCatalogQuestion(
  question: RawMcqQuestion,
  findExplanation: (id: string) => McqExplanation | undefined
): CatalogQuestion {
  const id = buildQuestionId(question);

  return {
    ...question,
    id,
    primaryCurriculumTopic: getPrimaryCurriculumTopic(question.topic),
    curriculumTopics: classifyQuestionTopics(question.topic),
    detailedExplanation: findExplanation(id),
  };
}

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
export function buildCatalogItems(questions: CatalogQuestion[]): CatalogQuestion[] {
  const consumed = new Set<string>();
  const partsByParentId = new Map<string, CatalogQuestion[]>();

  for (const question of questions) {
    if (question.continuesFrom === undefined || question.continuesFrom === null) continue;

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

// Strips the fields that must never reach the browser before an answer
// is submitted: correctAnswer, both explanations, and solutionMedia details.
export function toPublicQuestion(question: CatalogQuestion): PublicQuestion {
  const { correctAnswer, explanation, detailedExplanation, solutionMedia, parts, ...rest } =
    question;
  void correctAnswer;
  void explanation;
  void detailedExplanation;

  return {
    ...rest,
    questionMediaMissing: question.questionMedia?.status === "required-missing",
    hasSolutionMedia: Boolean(solutionMedia) && solutionMedia?.status !== "required-missing",
    // Each part is stripped the same way, so no answer or explanation for
    // any part reaches the browser before the learner submits.
    parts: parts?.map(toPublicQuestion),
  };
}

// Everything the app needs from the bank, built once from a list of rows.
export type McqCatalog = {
  items: CatalogQuestion[];
  publicItems: PublicQuestion[];
  byId: Map<string, CatalogQuestion>;
  counts: {
    usaaao: number;
    iaac: number;
    baao: number;
    total: number;
    missingQuestionMedia: number;
    missingSolutionMedia: number;
  };
};

export function buildCatalog(questions: CatalogQuestion[]): McqCatalog {
  const items = buildCatalogItems(questions);
  const count = (competition: string) =>
    questions.filter((q) => q.competition === competition).length;

  return {
    items,
    publicItems: items.map(toPublicQuestion),
    byId: new Map(items.map((item) => [item.id, item])),
    counts: {
      usaaao: count("USAAAO"),
      iaac: count("IAAC"),
      baao: count("BAAO"),
      // Practice items: a multi-part item counts once, since it is answered,
      // scored and tracked as a single unit.
      total: items.length,
      missingQuestionMedia: questions.filter(
        (q) => q.questionMedia?.status === "required-missing"
      ).length,
      missingSolutionMedia: questions.filter(
        (q) => q.solutionMedia?.status === "required-missing"
      ).length,
    },
  };
}

// --- Database rows -----------------------------------------------------------

// The columns of one McqQuestion row (plus its McqExplanation), described
// structurally so this file does not depend on the generated Prisma client.
export type McqQuestionRow = {
  id: string;
  competition: string;
  year: number;
  examName: string;
  questionNumber: number;
  difficulty: string;
  topic: string;
  subtopic: string;
  tags: string[];
  primaryCurriculumTopic: string;
  curriculumTopics: string[];
  questionText: string;
  choices: unknown;
  correctAnswer: string;
  explanation: string;
  questionMedia: unknown;
  solutionMedia: unknown;
  continuesFrom: number | null;
  sourceUrl: string;
  pdfUrl: string;
  pageNumber: number;
  answerKeyUrl: string;
  answerKeyPageNumber: number;
  attributionText: string;
  permissionStatus: string;
  status: string;
  detailedExplanation: {
    solution: string[];
    wrongChoices: unknown;
    takeaway: string;
  } | null;
};

// Turns one database row back into the exact CatalogQuestion shape the app
// has always used. Fields are copied one by one, so database-only columns
// (createdAt, updatedAt, orderIndex) never ride along to the browser, and
// nulls become "absent" so `question.questionMedia?.x` and
// `continuesFrom === undefined` checks behave as before.
export function fromDbRow(row: McqQuestionRow): CatalogQuestion {
  const explanation = row.detailedExplanation;

  return {
    id: row.id,
    competition: row.competition,
    year: row.year,
    examName: row.examName,
    questionNumber: row.questionNumber,
    difficulty: row.difficulty,
    topic: row.topic,
    subtopic: row.subtopic,
    tags: row.tags,
    type: "MCQ",
    questionText: row.questionText,
    choices: row.choices as CatalogQuestion["choices"],
    correctAnswer: row.correctAnswer,
    explanation: row.explanation,
    sourceUrl: row.sourceUrl,
    pdfUrl: row.pdfUrl,
    pageNumber: row.pageNumber,
    answerKeyUrl: row.answerKeyUrl,
    answerKeyPageNumber: row.answerKeyPageNumber,
    attributionText: row.attributionText,
    permissionStatus: row.permissionStatus,
    status: row.status,
    questionMedia: (row.questionMedia ?? undefined) as CatalogQuestion["questionMedia"],
    solutionMedia: (row.solutionMedia ?? undefined) as CatalogQuestion["solutionMedia"],
    continuesFrom: row.continuesFrom ?? undefined,
    primaryCurriculumTopic: row.primaryCurriculumTopic as CatalogQuestion["primaryCurriculumTopic"],
    curriculumTopics: row.curriculumTopics as CatalogQuestion["curriculumTopics"],
    detailedExplanation: explanation
      ? {
          solution: explanation.solution,
          wrongChoices: explanation.wrongChoices as Record<string, string>,
          takeaway: explanation.takeaway,
        }
      : undefined,
  };
}

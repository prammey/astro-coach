// Shared types for the real competition question bank (USAAAO, IAAC, BAAO).
// These describe the raw source data shape and the "safe" shape we are
// allowed to send to the browser before a learner answers a question.

import type { CurriculumTopic } from "./topicTaxonomy";

// One multiple-choice option, e.g. { label: "A", text: "Delphinus" }.
export type McqChoice = {
  label: string;
  text: string;
};

// Media (image) metadata attached to a question or its solution.
// "required-missing" means the source needs a figure that hasn't been
// added to Astro Coach yet. "complete" means the figure has been added.
export type MediaInfo = {
  status: "required-missing" | "complete";
  assets: unknown[];
};

// The shape every question object has in the raw source files
// (usaaao_mcqs.ts, iaac_mcqs.ts, baao_mcqs.ts). No `id` field yet —
// IDs are generated at load time by the catalog, not stored in the files.
export type RawMcqQuestion = {
  competition: string;
  year: number;
  examName: string;
  questionNumber: number;
  difficulty: string;
  topic: string;
  subtopic: string;
  tags: string[];
  type: "MCQ";
  questionText: string;
  choices: McqChoice[];
  correctAnswer: string;
  explanation: string;
  sourceUrl: string;
  pdfUrl: string;
  pageNumber: number;
  answerKeyUrl: string;
  answerKeyPageNumber: number;
  attributionText: string;
  permissionStatus: string;
  status: string;
  questionMedia?: MediaInfo;
  solutionMedia?: MediaInfo;
  // Set on a question that builds directly on an earlier one in the same
  // exam (e.g. "the comet from the previous question"). The catalog joins
  // the two into a single multi-part item so the follow-up is never shown
  // on its own, without the setup it depends on.
  continuesFrom?: number;
};

// A raw question plus its deterministic, server-generated ID and curriculum topics.
// This full shape includes `correctAnswer` and `explanation` and must
// only ever be used on the server.
export type CatalogQuestion = RawMcqQuestion & {
  id: string;
  primaryCurriculumTopic: CurriculumTopic;
  curriculumTopics: CurriculumTopic[];
  // Present only on a multi-part item. Each entry is one part (A, B, ...)
  // and carries its own prompt, choices, answer and explanation. When this
  // is set, the item's own questionText/correctAnswer are the first part's
  // and are used only for previews and search — grading always uses `parts`.
  parts?: CatalogQuestion[];
  partLabel?: string;
};

// The shape that is safe to send to the browser before the learner
// answers. Never includes the correct answer, the explanation, or
// solution media — only a flag saying whether a solution figure exists.
// Includes curriculum topics for filtering and display.
export type PublicQuestion = Omit<
  CatalogQuestion,
  "correctAnswer" | "explanation" | "solutionMedia" | "parts"
> & {
  questionMediaMissing: boolean;
  hasSolutionMedia: boolean;
  primaryCurriculumTopic: CurriculumTopic;
  curriculumTopics: CurriculumTopic[];
  // Same stripping applied to each part of a multi-part item.
  parts?: PublicQuestion[];
};

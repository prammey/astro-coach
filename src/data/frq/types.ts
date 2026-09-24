// The shape of the curated free-response bank in src/data/frq/.
//
// Each exam is one file exporting an FrqSeedExam. `npm run seed:frq`
// uploads the figures to private storage and upserts the questions into
// Postgres (FrqQuestion, FrqPart, FrqMedia). Like the MCQ files, these
// hold solutions and accepted answers, so they are imported only by the
// seed script and the tests — never by the app.
//
// Text conventions (rendered by FrqText + MathText):
//   - maths in LaTeX: $inline$ and $$display$$ (display may span lines);
//   - **bold** for emphasis;
//   - a blank line starts a new paragraph;
//   - [[figure:key]] places a figure at that point in the text;
//   - tables are typed as KaTeX arrays inside $$...$$.

import type { CurriculumTopic } from "../mcq/topicTaxonomy";
import type { ShortAnswerBlank } from "../../lib/pro/short-answer";

export type FrqSeedFigure = {
  /// Placement name, used in text as [[figure:key]]. Lowercase, a-z0-9_-.
  key: string;
  /// File name inside src/data/frq/figures/<exam slug>/.
  file: string;
  caption?: string;
  /// Defaults to QUESTION. SOLUTION figures appear only with the solution.
  kind?: "QUESTION" | "SOLUTION" | "ANSWER_SHEET";
  /// Label of the part this figure belongs to, when not the question stem.
  part?: string;
  /// Page of the source PDF it was cropped from.
  sourcePage?: number;
};

export type FrqSeedPart = {
  /// As printed: "(a)", "(b)(i)", "(c)–(d)" for parts scored together.
  label: string;
  /// The paper's own point value for this part.
  points: number;
  prompt: string;
  /// Defaults to WORKED.
  format?: "WORKED" | "SHORT_ANSWER" | "DRAWING";
  /// Set-up text shown above this part, introducing a group of sub-parts.
  leadIn?: string;
  /// Worked solution for this part (server-only until earned/unlocked).
  solution?: string;
  /// The official marking scheme for this part, when the source gives one.
  rubric?: string;
  /// SHORT_ANSWER only: the blanks and what each accepts.
  blanks?: ShortAnswerBlank[];
};

export type FrqSeedQuestion = {
  /// As printed: "3", "A", "II.2".
  number: string;
  title?: string;
  /// Section of the paper, e.g. "Short Questions".
  section?: string;
  topic: CurriculumTopic;
  topics?: CurriculumTopic[];
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  /// The paper's own total for the question.
  points: number;
  /// 0.5 only when the official rubric itself awards half points.
  pointStep?: number;
  /// The question stem (everything before the first part).
  text: string;
  parts?: FrqSeedPart[];
  /// Whole-question solution: used when there are no parts, or written once
  /// for all parts together.
  solution?: string;
  rubric?: string;
  solutionSource: "OFFICIAL" | "ADAPTED" | "ASTRO_COACH";
  figures?: FrqSeedFigure[];
  questionPages: number[];
  solutionPages?: number[];
};

export type FrqSeedExam = {
  competition: "USAAAO" | "IAAC";
  year: number;
  /// As the paper names itself.
  examName: string;
  /// Prefix for every question slug and the figure folder, e.g.
  /// "usaaao-2025-nac". Question slugs are `${slug}-q${number}`.
  slug: string;
  sourceUrl: string;
  questionPdfUrl?: string;
  solutionPdfUrl?: string;
  attributionText: string;
  questions: FrqSeedQuestion[];
};

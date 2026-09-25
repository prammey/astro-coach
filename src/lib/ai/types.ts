// The vendor-neutral contract between Astro Coach and whatever model grades
// a submission.
//
// Business logic only ever speaks in these types. Nothing outside
// src/lib/ai/providers/ knows which provider is in use, so swapping Gemini
// for another model — or adopting an SDK later — is a change to one file.

import type { MistakeTag } from "./mistakes";

/// One part of a question as the grader sees it, including the official
/// solution and rubric. This whole structure is SERVER-ONLY.
export type GradingPart = {
  id: string;
  label: string;
  prompt: string;
  maxPoints: number;
  /// How the part is answered. DRAWING parts are judged from the
  /// student's photographed answer sheet.
  answerFormat?: "WORKED" | "SHORT_ANSWER" | "DRAWING";
  /// Server-only context. The grader is told to use it to judge the work,
  /// and told not to hand it back to the student before unlock.
  officialSolution: string | null;
  gradingRubric: string | null;
};

/// One page of the student's uploaded work, already fetched server-side.
export type GradingAttachment = {
  mimeType: string;
  /// Raw file bytes. Providers encode these however they need to.
  bytes: Uint8Array;
  fileName: string;
};

/// One of the question's own figures, fetched server-side so the grader
/// can see what the student saw — and, for solution figures, what a
/// correct answer looks like. SERVER-ONLY: solution figures are part of
/// the official solution.
export type ReferenceFigure = {
  /// QUESTION: shown with the question. SOLUTION: an official solution
  /// diagram (never described to the student before unlock).
  /// ANSWER_SHEET: the blank sheet a drawing part is answered on.
  role: "QUESTION" | "SOLUTION" | "ANSWER_SHEET";
  /// How the figure is introduced to the model, e.g.
  /// 'Question figure "orbit" (part (b)): The planet's orbit'.
  label: string;
  mimeType: string;
  bytes: Uint8Array;
};

export type GradingInput = {
  question: {
    competition: string;
    year: number;
    questionNumber: string;
    questionText: string;
    totalPoints: number;
    /// The smallest score step the marking scheme uses (1, or 0.5 where the
    /// official rubric awards halves). Every score is rounded to it.
    pointStep?: number;
    /// Used when the question has no lettered parts.
    officialSolution: string | null;
    gradingRubric: string | null;
  };
  parts: GradingPart[];
  student: {
    typedResponse: string | null;
    attachments: GradingAttachment[];
  };
  /// The question's own figures, attached before the student's pages.
  referenceFigures?: ReferenceFigure[];
  /// 1, 2 or 3.
  attemptNumber: number;
  maxAttempts: number;
  /// Feedback the student has already been given, so a retry can build on
  /// it instead of repeating it.
  previousFeedback: string[];
  /// False while the official solution is still hidden from the student.
  /// When false the grader must coach without revealing the answer.
  solutionAlreadyVisible: boolean;
};

export type GradedPartScore = {
  partId: string;
  label: string;
  awardedPoints: number;
  maxPoints: number;
  comment: string;
};

/// The structured feedback shown to the student and stored forever. It is
/// re-read from the database on every later view — never regenerated.
export type GradingFeedback = {
  overall: string;
  strengths: string[];
  improvements: string[];
  nextStep: string;
  /// How sure the grader is that it read and understood the work.
  confidence: "high" | "medium" | "low";
  /// Set when some pages were hard to read but grading was still possible.
  legibilityNote: string | null;
};

/// A completed grade.
export type GradingSuccess = {
  outcome: "graded";
  awardedPoints: number;
  maximumPoints: number;
  partScores: GradedPartScore[];
  feedback: GradingFeedback;
  mistakeTags: MistakeTag[];
};

/// The work could not be read well enough to grade. This is NOT a failure
/// of ours and NOT a grade: it costs the student no credit and no attempt,
/// and asks them for clearer pages.
export type GradingUnreadable = {
  outcome: "unreadable";
  message: string;
  /// 1-based page numbers that were unclear, when the model can say.
  unclearPages: number[];
};

/// The provider or our own validation failed. Also costs nothing.
export type GradingFailure = {
  outcome: "failed";
  errorCode: "PROVIDER_ERROR" | "TIMEOUT" | "INVALID_RESPONSE" | "NOT_CONFIGURED";
  message: string;
};

export type GradingOutcome = GradingSuccess | GradingUnreadable | GradingFailure;

/// What a provider reports about the call itself, for cost tracking.
export type GradingUsage = {
  provider: string;
  model: string;
  inputTokens: number | null;
  outputTokens: number | null;
  latencyMs: number;
};

export type GradingResult = {
  outcome: GradingOutcome;
  usage: GradingUsage;
};

/// Every grading provider implements exactly this.
export interface GradingProvider {
  readonly name: string;
  readonly model: string;
  grade(input: GradingInput): Promise<GradingResult>;
}

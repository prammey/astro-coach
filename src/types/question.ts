// The kind of question this is.
// MCQ = multiple choice, FRQ = free response.
export type QuestionType = "MCQ" | "FRQ";

// How hard the question is.
export type Difficulty = "Beginner" | "Intermediate" | "Advanced";

// Whether we are allowed to use this question's content.
// "original-placeholder" means we wrote it ourselves for development only.
export type PermissionStatus = "original-placeholder";

// One answer choice for an MCQ question.
export type AnswerChoice = {
  label: string; // e.g. "A", "B", "C", "D"
  text: string;
};

// A single practice question. MCQ and FRQ fields are both optional
// here because not every question uses every field.
export type Question = {
  id: string;
  competition: string;
  year: number;
  round: string;
  questionNumber: number;
  type: QuestionType;
  topic: string;
  subtopic: string;
  difficulty: Difficulty;
  questionText: string;

  // MCQ-only fields
  choices?: AnswerChoice[];
  correctAnswer?: string; // matches a choice's label, e.g. "B"

  // FRQ-only fields
  sampleAnswer?: string;
  rubric?: string;

  explanation: string;

  // Source metadata (see Astro Coach source policy)
  sourceUrl: string;
  pdfUrl: string;
  pageNumber: number | null;
  attributionText: string;
  permissionStatus: PermissionStatus;
};

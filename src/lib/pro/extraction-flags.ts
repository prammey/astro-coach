// The warnings the FRQ importer can raise, and their human labels.
//
// Kept in its own dependency-free module because the admin review screen is
// a Client Component and needs the labels. The extractor itself is
// server-only — importing it from the browser would drag the AI provider
// code along with it — so the shared vocabulary lives here instead.

export const EXTRACTION_FLAGS = [
  "POINT_VALUE_MISSING",
  "PART_POINTS_DO_NOT_SUM",
  "SOLUTION_MISSING",
  "SOLUTION_PAIRING_UNCERTAIN",
  "SOURCE_PAGE_UNCERTAIN",
  "MEDIA_REVIEW_REQUIRED",
  "NOTATION_REVIEW_REQUIRED",
  "LOW_CONFIDENCE",
] as const;

export type ExtractionFlag = (typeof EXTRACTION_FLAGS)[number];

export const EXTRACTION_FLAG_LABELS: Record<ExtractionFlag, string> = {
  POINT_VALUE_MISSING: "No point value found in the source",
  PART_POINTS_DO_NOT_SUM: "Part points do not add up to the total",
  SOLUTION_MISSING: "No official solution found",
  SOLUTION_PAIRING_UNCERTAIN: "Not sure this solution belongs to this question",
  SOURCE_PAGE_UNCERTAIN: "Source page numbers are uncertain",
  MEDIA_REVIEW_REQUIRED: "The question refers to a figure that needs attaching",
  NOTATION_REVIEW_REQUIRED: "Some maths notation could not be converted and may show as raw LaTeX",
  LOW_CONFIDENCE: "The model was not confident in this extraction",
};

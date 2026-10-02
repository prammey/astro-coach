import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageContainer from "@/components/PageContainer";
import QuestionView from "@/components/QuestionView";
import { getMcqCatalog, toPublicQuestion } from "@/data/mcq/catalog.server";
import { questionNumberLabel } from "@/lib/question-label";

/// Turns question text into a short plain-text preview for link previews:
/// drops LaTeX dollar signs and backslash commands, squashes whitespace.
function previewText(text: string, maxLength = 155): string {
  const plain = text
    .replace(/\$/g, "")
    .replace(/\\[a-zA-Z]+/g, " ")
    .replace(/[{}]/g, "")
    .replace(/\s+/g, " ")
    .trim();
  return plain.length > maxLength ? `${plain.slice(0, maxLength - 1).trimEnd()}…` : plain;
}

// Each question gets its own title, so a shared link says which question
// it is ("USAAAO 2014 National Astronomy Olympiad · Question 1").
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const { byId } = await getMcqCatalog();
  const question = byId.get(id);
  if (!question) return { title: "Question not found" };

  const publicQuestion = toPublicQuestion(question);
  const title = `${question.competition} ${question.year} ${question.examName} · ${questionNumberLabel(publicQuestion)}`;
  const firstText = question.questionText || question.parts?.[0]?.questionText || "";

  return {
    title,
    description: previewText(firstText) || `Practice ${question.examName} on Astro Coach.`,
  };
}

// Server Component: looks up the full question (with the correct answer)
// only on the server, strips the sensitive fields via toPublicQuestion,
// and passes only the safe version down to the shared question view.
export default async function QuestionDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { byId, publicItems: publicQuestionCatalog } = await getMcqCatalog();
  const question = byId.get(id);

  if (!question) {
    notFound();
  }

  const publicQuestion = toPublicQuestion(question);

  // Neighbours in catalog order, so Previous/Next move through the bank
  // predictably instead of jumping to a random question.
  const index = publicQuestionCatalog.findIndex((entry) => entry.id === publicQuestion.id);
  const previousQuestionId = index > 0 ? publicQuestionCatalog[index - 1].id : null;
  const nextQuestionId =
    index >= 0 && index < publicQuestionCatalog.length - 1
      ? publicQuestionCatalog[index + 1].id
      : null;

  return (
    <PageContainer>
      <QuestionView
        question={publicQuestion}
        previousQuestionId={previousQuestionId}
        nextQuestionId={nextQuestionId}
      />
    </PageContainer>
  );
}

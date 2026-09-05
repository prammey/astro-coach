import { notFound } from "next/navigation";
import PageContainer from "@/components/PageContainer";
import QuestionView from "@/components/QuestionView";
import {
  findCatalogQuestionById,
  publicQuestionCatalog,
  toPublicQuestion,
} from "@/data/mcq/catalog.server";

// Server Component: looks up the full question (with the correct answer)
// only on the server, strips the sensitive fields via toPublicQuestion,
// and passes only the safe version down to the shared question view.
export default async function QuestionDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const question = findCatalogQuestionById(id);

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

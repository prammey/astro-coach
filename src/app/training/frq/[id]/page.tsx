import PageContainer from "@/components/PageContainer";
import FrqDetailView from "@/components/pro/FrqDetailView";

// The question itself is fetched client-side from /api/frq/[id], which
// decides what this particular student is allowed to receive. Nothing about
// the question is rendered into the page's HTML here, so a locked question
// never reaches the browser at all.
export default async function FrqDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <PageContainer>
      <FrqDetailView questionId={id} />
    </PageContainer>
  );
}

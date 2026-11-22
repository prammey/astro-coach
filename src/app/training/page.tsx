import PageContainer from "@/components/PageContainer";
import BrutalButton from "@/components/ui/BrutalButton";
import TrainingBrowser from "@/components/TrainingBrowser";
import { Icon } from "@/components/ui/Icon";
import { getMcqCatalog } from "@/data/mcq/catalog.server";
import { CONSTANTS_SHEET_URL } from "@/lib/constants-sheet";

// Rendered per request (from the cached catalog) rather than at build
// time, so building the site never needs a database connection.
export const dynamic = "force-dynamic";

export const metadata = {
  title: "Question bank",
  description:
    "Search and filter hundreds of real astronomy olympiad multiple-choice questions by competition, year, topic and difficulty.",
};

// Server Component: builds the safe (no answer keys) question list once
// on the server, then hands it to the client-side search/filter UI.
export default async function TrainingPage({
  searchParams,
}: {
  searchParams: Promise<{ competition?: string }>;
}) {
  const { publicItems: publicQuestionCatalog } = await getMcqCatalog();
  const { competition } = await searchParams;

  return (
    <PageContainer>
      {/* Title on the left; the two "elsewhere" links on the same row on
          the right, so the search box starts near the top. */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl font-extrabold text-navy sm:text-4xl">Training</h1>

        {/* The constants sheet in yellow with a document icon, so it is
            easy to spot; free-response practice beside it. Two equal
            buttons on phones, natural width on wider screens. */}
        <div className="grid shrink-0 grid-cols-2 gap-3 sm:flex">
          <BrutalButton
            href={CONSTANTS_SHEET_URL}
            variant="accent"
            size="sm"
            target="_blank"
            rel="noopener noreferrer"
            // A PDF is not a page, so Next.js must not try to pre-load it.
            prefetch={false}
            className="whitespace-nowrap"
          >
            <Icon name="document" className="h-5 w-5" />
            Constants sheet
          </BrutalButton>
          {/* Free-response practice lives on its own page: those questions
              come from the database and depend on the student's plan. */}
          <BrutalButton href="/training/frq" variant="dark" size="sm" className="whitespace-nowrap">
            <span className="sm:hidden">Free-response →</span>
            <span className="hidden sm:inline">Free-response practice →</span>
          </BrutalButton>
        </div>
      </div>

      <TrainingBrowser questions={publicQuestionCatalog} initialCompetition={competition} />
    </PageContainer>
  );
}

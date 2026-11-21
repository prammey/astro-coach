import PageContainer from "@/components/PageContainer";
import BrutalButton from "@/components/ui/BrutalButton";
import TrainingBrowser from "@/components/TrainingBrowser";
import { getMcqCatalog } from "@/data/mcq/catalog.server";

// Rendered per request (from the cached catalog) rather than at build
// time, so building the site never needs a database connection.
export const dynamic = "force-dynamic";

export const metadata = {
  title: "Question bank",
  description:
    "Search and filter hundreds of real astronomy olympiad multiple-choice questions by competition, year, topic and difficulty.",
};

// The printable constants sheet, committed in public/resources. Linked
// directly: a per-request file check cannot see public/ on Vercel.
const CONSTANTS_SHEET_URL = "/resources/astro-coach-constants-sheet.pdf";

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
      {/* Title on the left; the two "elsewhere" links on the right, kept
          small so the questions themselves start near the top. */}
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-3xl font-extrabold text-navy sm:text-4xl">Training</h1>
          <p className="mt-2 max-w-2xl text-navy/80">
            {publicQuestionCatalog.length} real multiple-choice questions from USAAAO, IAAC and
            BAAO. Search, filter, and practice.
          </p>
        </div>

        <div className="flex shrink-0 flex-wrap gap-3">
          <BrutalButton
            href={CONSTANTS_SHEET_URL}
            variant="ghost"
            size="sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Constants sheet (PDF)
          </BrutalButton>
          {/* Free-response practice lives on its own page: those questions
              come from the database and depend on the student's plan. */}
          <BrutalButton href="/training/frq" variant="dark" size="sm">
            Free-response practice →
          </BrutalButton>
        </div>
      </div>

      <TrainingBrowser questions={publicQuestionCatalog} initialCompetition={competition} />
    </PageContainer>
  );
}

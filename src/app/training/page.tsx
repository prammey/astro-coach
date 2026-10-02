import { promises as fs } from "fs";
import path from "path";
import PageContainer from "@/components/PageContainer";
import BrutalCard from "@/components/BrutalCard";
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

// Check if the constants sheet PDF exists
async function constantsSheetExists(): Promise<boolean> {
  try {
    await fs.access(path.join(process.cwd(), "public/resources/astro-coach-constants-sheet.pdf"));
    return true;
  } catch {
    return false;
  }
}

// Server Component: builds the safe (no answer keys) question list once
// on the server, then hands it to the client-side search/filter UI.
export default async function TrainingPage({
  searchParams,
}: {
  searchParams: Promise<{ competition?: string }>;
}) {
  const pdfExists = await constantsSheetExists();
  const { publicItems: publicQuestionCatalog } = await getMcqCatalog();
  const { competition } = await searchParams;

  return (
    <PageContainer>
      <h1 className="text-3xl font-extrabold text-navy sm:text-4xl">
        Training
      </h1>
      <p className="mt-2 max-w-2xl text-navy/80">
        Browse real competition questions from USAAAO, IAAC, and BAAO.
        Search by keyword or filter by competition, topic, difficulty, and
        question type.
      </p>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        {/* Reference sheet */}
        <BrutalCard tone="cream" className="flex flex-col">
          <h2 className="text-lg font-extrabold text-navy">
            {pdfExists ? "Reference sheet" : "How to practice"}
          </h2>
          {pdfExists ? (
            <>
              <p className="mt-1 flex-1 text-sm text-navy/80">
                The constants and formulas you are allowed in the exam, on one page.
              </p>
              <BrutalButton
                href="/resources/astro-coach-constants-sheet.pdf"
                variant="dark"
                size="sm"
                className="mt-4 self-start"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open constants sheet (PDF)
              </BrutalButton>
            </>
          ) : (
            // Until the constants sheet PDF is added, give useful tips
            // instead of a "coming soon" placeholder.
            <ul className="mt-2 flex-1 list-disc space-y-1 pl-5 text-sm text-navy/80">
              <li>Filter by one topic and do ten questions in a row.</li>
              <li>Press &quot;Start training&quot; to work through your filtered set in order.</li>
              <li>Read the explanation for every miss, then retry it later.</li>
            </ul>
          )}
        </BrutalCard>

        {/* Free-response practice lives on its own page: those questions come
            from the database and depend on the signed-in student's plan, so
            they cannot be part of this pre-rendered MCQ catalog. */}
        <BrutalCard tone="purple" hover className="flex flex-col">
          <h2 className="text-lg font-extrabold">Free-response practice</h2>
          <p className="mt-1 flex-1 text-sm text-white/90">
            Write full solutions to real olympiad free-response problems and get
            rubric-based, part-by-part AI feedback.
          </p>
          <BrutalButton href="/training/frq" variant="accent" size="sm" className="mt-4 self-start">
            Open free-response practice
          </BrutalButton>
        </BrutalCard>
      </div>

      <TrainingBrowser questions={publicQuestionCatalog} initialCompetition={competition} />
    </PageContainer>
  );
}

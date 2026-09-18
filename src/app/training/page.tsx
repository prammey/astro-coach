import { promises as fs } from "fs";
import path from "path";
import PageContainer from "@/components/PageContainer";
import BrutalCard from "@/components/BrutalCard";
import BrutalButton from "@/components/ui/BrutalButton";
import TrainingBrowser from "@/components/TrainingBrowser";
import { publicQuestionCatalog } from "@/data/mcq/catalog.server";

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
export default async function TrainingPage() {
  const pdfExists = await constantsSheetExists();
  const pdfPath = "public/resources/astro-coach-constants-sheet.pdf";

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
          <h2 className="text-lg font-extrabold text-navy">Reference sheet</h2>
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
            <div className="mt-1 space-y-2">
              <p className="text-sm text-navy/80">Constants sheet coming soon.</p>
              <p className="text-xs text-navy/60">
                Place your PDF at:{" "}
                <code className="rounded bg-navy/10 px-2 py-1">{pdfPath}</code>
              </p>
            </div>
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

      <TrainingBrowser questions={publicQuestionCatalog} />
    </PageContainer>
  );
}

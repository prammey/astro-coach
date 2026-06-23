import { promises as fs } from "fs";
import path from "path";
import PageContainer from "@/components/PageContainer";
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
      <h1 className="text-3xl font-extrabold text-[var(--color-navy)] sm:text-4xl">
        Training
      </h1>
      <p className="mt-2 max-w-2xl text-[var(--color-navy)]/80">
        Browse real competition questions from USAAAO, IAAC, and BAAO.
        Search by keyword or filter by competition, topic, difficulty, and
        question type.
      </p>

      {/* Reference Sheet Card */}
      <div className="mt-6 border-4 border-black bg-[var(--color-cream)] p-4 rounded-lg">
        <h2 className="text-lg font-bold text-[var(--color-navy)] mb-2">Reference Sheet</h2>
        {pdfExists ? (
          <a
            href="/resources/astro-coach-constants-sheet.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-[var(--color-navy)] text-white font-bold rounded-lg border-2 border-black hover:bg-[var(--color-navy)]/90 transition"
          >
            Open Constants Sheet (PDF)
          </a>
        ) : (
          <div className="space-y-2">
            <p className="text-sm text-[var(--color-navy)]">
              Constants sheet coming soon
            </p>
            <p className="text-xs text-[var(--color-navy)]/60">
              Place your PDF at: <code className="bg-gray-100 px-2 py-1 rounded">{pdfPath}</code>
            </p>
          </div>
        )}
      </div>

      <TrainingBrowser questions={publicQuestionCatalog} />
    </PageContainer>
  );
}

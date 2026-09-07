import PageContainer from "@/components/PageContainer";
import { requireAdminPage } from "@/lib/pro/admin-page-guard";
import FrqImporter from "@/components/admin/FrqImporter";

export const metadata = { title: "Import FRQs — Astro Coach" };

export default async function FrqImportPage() {
  await requireAdminPage();

  return (
    <PageContainer>
      <h1 className="text-3xl font-extrabold text-[var(--color-navy)]">
        Import free-response questions
      </h1>
      <p className="mt-2 max-w-2xl text-[var(--color-navy)]/80">
        Upload a question paper and its official solutions. Every question the
        extractor finds is saved as a draft with its warnings — nothing is
        published until you approve it.
      </p>

      <FrqImporter />
    </PageContainer>
  );
}

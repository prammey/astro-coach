import PageContainer from "@/components/PageContainer";
import { requireAdminPage } from "@/lib/pro/admin-page-guard";
import FrqReviewQueue from "@/components/admin/FrqReviewQueue";

export const metadata = { title: "Review FRQs — Astro Coach" };

export default async function FrqReviewPage() {
  await requireAdminPage();

  return (
    <PageContainer>
      <h1 className="text-3xl font-extrabold text-[var(--color-navy)]">
        Review and publish
      </h1>
      <p className="mt-2 max-w-2xl text-[var(--color-navy)]/80">
        Check each extracted question against the source paper. A question can
        only be published once its warnings are resolved, its points add up,
        it has an official solution, and its rights have been reviewed.
      </p>

      <FrqReviewQueue />
    </PageContainer>
  );
}

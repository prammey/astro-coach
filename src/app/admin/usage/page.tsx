import PageContainer from "@/components/PageContainer";
import { requireAdminPage } from "@/lib/pro/admin-page-guard";
import UsageDashboard from "@/components/admin/UsageDashboard";

export const metadata = { title: "Usage — Astro Coach" };

export default async function AdminUsagePage() {
  await requireAdminPage();

  return (
    <PageContainer>
      <h1 className="text-3xl font-extrabold text-[var(--color-navy)]">
        Usage and AI spend
      </h1>
      <p className="mt-2 max-w-2xl text-[var(--color-navy)]/80">
        Aggregate figures over the last 30 days. Individual students and their
        work are deliberately not listed here.
      </p>

      <UsageDashboard />
    </PageContainer>
  );
}

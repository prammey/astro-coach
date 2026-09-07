import Link from "next/link";
import PageContainer from "@/components/PageContainer";
import { requireAdminPage } from "@/lib/pro/admin-page-guard";

export const metadata = { title: "Admin — Astro Coach" };

// Server Component: the admin check runs before anything renders, and a
// non-admin gets a 404.
export default async function AdminHomePage() {
  await requireAdminPage();

  const areas = [
    {
      href: "/admin/frq-import",
      title: "Import free-response questions",
      description: "Upload a question paper and its official solutions, and extract drafts.",
    },
    {
      href: "/admin/frq-review",
      title: "Review and publish",
      description: "Check extracted questions against the source, then approve or reject.",
    },
    {
      href: "/admin/usage",
      title: "Usage and AI spend",
      description: "Subscriptions, grading volume, cost per grade and provider errors.",
    },
    {
      href: "/admin/reports",
      title: "Reported problems",
      description: "Problems learners have reported with questions.",
    },
  ];

  return (
    <PageContainer>
      <h1 className="text-3xl font-extrabold text-[var(--color-navy)]">Admin</h1>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {areas.map((area) => (
          <Link
            key={area.href}
            href={area.href}
            className="rounded-xl border-4 border-black bg-white p-5 shadow-[6px_6px_0_0_#000] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0_0_#000] focus:outline-none focus-visible:ring-4 focus-visible:ring-[var(--color-electric-blue)]"
          >
            <h2 className="font-extrabold text-[var(--color-navy)]">{area.title}</h2>
            <p className="mt-1 text-sm text-[var(--color-navy)]/70">{area.description}</p>
          </Link>
        ))}
      </div>
    </PageContainer>
  );
}

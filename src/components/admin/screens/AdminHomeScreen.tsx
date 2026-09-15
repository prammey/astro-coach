"use client";

// The whole screen lives inside the client boundary on purpose.
//
// If the heading and body text were rendered by the Server Component and
// passed to AdminGate as children, Next would serialise them into the RSC
// payload embedded in the document — so a stranger would see the admin
// page's text in the HTML even though AdminGate never renders it. Keeping
// everything below the "use client" line means an unauthorised visitor
// receives a document with nothing admin-specific in it at all.

import AdminGate from "../AdminGate";
import Link from "next/link";

const AREAS = [
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

export default function AdminHomeScreen() {
  return (
    <AdminGate>
      <h1 className="text-3xl font-extrabold text-[var(--color-navy)]">Admin</h1>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {AREAS.map((area) => (
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
    </AdminGate>
  );
}

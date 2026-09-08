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
import UsageDashboard from "@/components/admin/UsageDashboard";

export default function UsageScreen() {
  return (
    <AdminGate>
      <h1 className="text-3xl font-extrabold text-[var(--color-navy)]">
        Usage and AI spend
      </h1>
      <p className="mt-2 max-w-2xl text-[var(--color-navy)]/80">
        Aggregate figures over the last 30 days. Individual students and their
          work are deliberately not listed here.
      </p>

      <UsageDashboard />
    </AdminGate>
  );
}

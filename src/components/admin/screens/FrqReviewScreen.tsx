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
import FrqReviewQueue from "@/components/admin/FrqReviewQueue";

export default function FrqReviewScreen() {
  return (
    <AdminGate>
      <h1 className="text-3xl font-extrabold text-[var(--color-navy)]">
        Review and publish
      </h1>
      <p className="mt-2 max-w-2xl text-[var(--color-navy)]/80">
        Check each extracted question against the source paper. A question can
          only be published once its warnings are resolved, its points add up,
          it has an official solution, and its rights have been reviewed.
      </p>

      <FrqReviewQueue />
    </AdminGate>
  );
}

import type { Metadata } from "next";
import PricingSection from "@/components/PricingSection";
import { isFoundingPriceOpen } from "@/lib/pro/public-config";

export const metadata: Metadata = {
  // The page's official address, so search engines never count a
  // second copy (e.g. on the vercel.app address) as a duplicate.
  alternates: { canonical: "/pricing" },
  title: "Pricing",
  description:
    "Practice astronomy olympiad multiple choice free. Go Pro for the full free-response bank and AI grading of your written work.",
};

// This page is built ahead of time and cached. Without this line it would
// be built once at deploy time, so the founding-price check below would be
// frozen on the build date. Rebuilding at most once a minute means the
// founding-price copy disappears within about a minute of the deadline,
// matching the regular price that checkout starts charging then.
export const revalidate = 60;

// Standalone pricing page, reachable from the navbar. Compact enough that
// the header and all three plans fit on one laptop screen.
export default function PricingPage() {
  return (
    <div className="starfield-dark min-h-screen bg-navy pb-12">
      <div className="mx-auto max-w-5xl px-4 pb-6 pt-6 text-center sm:px-6">
        <h1 className="text-3xl font-extrabold text-yellow sm:text-4xl">Pricing</h1>
        <p className="mt-1 text-white/75">
          Start free. Upgrade when you&apos;re ready for free-response practice.
        </p>
      </div>
      {/* Worked out here on the server and passed down as a prop, so the
          server's HTML and the browser's first render always agree. */}
      <PricingSection foundingPriceOpen={isFoundingPriceOpen()} />
    </div>
  );
}

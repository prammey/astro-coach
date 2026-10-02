import type { Metadata } from "next";
import PricingSection from "@/components/PricingSection";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Practice astronomy olympiad multiple choice free. Go Pro for the full free-response bank and AI grading of your written work.",
};

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
      <PricingSection />
    </div>
  );
}

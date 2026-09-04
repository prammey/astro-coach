import PricingSection from "@/components/PricingSection";

// Standalone pricing page — same plans shown on the homepage, reachable
// directly from the navbar for anyone who wants to compare plans.
export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[var(--color-navy)]">
      <div className="mx-auto max-w-5xl px-4 pt-16 sm:px-6">
        <h1 className="text-3xl font-extrabold text-[var(--color-yellow)] sm:text-4xl text-center">
          Pricing
        </h1>
        <p className="mt-2 text-center text-white/70">
          Compare plans and pick what fits your training.
        </p>
      </div>
      <div className="mt-10">
        <PricingSection />
      </div>
    </div>
  );
}

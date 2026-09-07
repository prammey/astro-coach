import PageContainer from "@/components/PageContainer";
import FrqBrowser from "@/components/pro/FrqBrowser";

export const metadata = {
  title: "Free-response practice — Astro Coach",
};

// Browsing is entirely client-side because which questions a given student
// can open depends on their plan and their own history, and both come from
// the server per request rather than being baked into a cached page.
export default function FrqTrainingPage() {
  return (
    <PageContainer>
      <h1 className="text-3xl font-extrabold text-[var(--color-navy)] sm:text-4xl">
        Free-response practice
      </h1>
      <p className="mt-2 max-w-2xl text-[var(--color-navy)]/80">
        Real olympiad free-response problems, graded against their original
        marking schemes. Write your solution or photograph your working, and
        get part-by-part feedback on where the reasoning holds up and where it
        does not.
      </p>

      <FrqBrowser />
    </PageContainer>
  );
}

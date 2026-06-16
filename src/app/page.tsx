import Link from "next/link";
import PageContainer from "@/components/PageContainer";
import BrutalCard from "@/components/BrutalCard";

// Feature cards shown below the hero section.
const FEATURES = [
  {
    title: "Question Bank",
    description: "Search and filter astronomy practice questions by topic, year, and difficulty.",
  },
  {
    title: "Olympiad Guide",
    description: "Learn which astronomy competitions exist and which one to start with.",
  },
  {
    title: "Progress Tracking",
    description: "Coming soon — track your attempts and accuracy over time.",
  },
  {
    title: "Gamification",
    description: "Coming soon — earn XP, build streaks, and unlock badges.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero section */}
      <section className="border-b-4 border-black bg-[var(--color-navy)] text-white">
        <PageContainer>
          <h1 className="text-4xl font-extrabold sm:text-6xl">
            <span className="text-[var(--color-yellow)]">Astro Coach</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            A training platform for astronomy olympiad students. Learn which
            competitions to try, practice real-style questions, and build
            your skills topic by topic.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/training"
              className="rounded-lg border-4 border-black bg-[var(--color-electric-blue)] px-6 py-3 font-bold text-white shadow-[4px_4px_0_0_#000] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
            >
              Start Training
            </Link>
            <Link
              href="/olympiads"
              className="rounded-lg border-4 border-black bg-[var(--color-yellow)] px-6 py-3 font-bold text-[var(--color-navy)] shadow-[4px_4px_0_0_#000] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
            >
              Explore Olympiads
            </Link>
          </div>
        </PageContainer>
      </section>

      {/* Feature cards */}
      <PageContainer>
        <h2 className="text-2xl font-extrabold text-[var(--color-navy)]">
          What Astro Coach Offers
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {FEATURES.map((feature) => (
            <BrutalCard key={feature.title} className="bg-[var(--color-cream)]">
              <h3 className="text-xl font-bold text-[var(--color-purple)]">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-[var(--color-navy)]">
                {feature.description}
              </p>
            </BrutalCard>
          ))}
        </div>
      </PageContainer>
    </>
  );
}

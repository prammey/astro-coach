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
      {/* Hero section with background image */}
      <section
        className="border-b-4 border-black text-white flex flex-col justify-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/hero/home-hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "500px",
        }}
      >
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

      {/* ========== PRICING OPTION 1: BOLD COMPARISON CARDS ========== */}
      <section className="border-t-4 border-b-4 border-black bg-white py-16">
        <PageContainer>
          <h2 className="text-3xl font-extrabold text-[var(--color-navy)] text-center">
            OPTION 1: Bold Comparison Cards
          </h2>
          <p className="mt-2 text-center text-sm text-[var(--color-navy)]">Three large cards, side-by-side hierarchy</p>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {/* Guest Plan */}
            <div className="relative rounded-lg border-4 border-black bg-gray-100 p-6">
              <h3 className="text-2xl font-extrabold text-gray-700">Guest</h3>
              <p className="mt-2 text-sm text-gray-600">No account required</p>

              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-lg text-gray-600 mt-0.5">✓</span>
                  <span className="text-sm font-semibold text-gray-700">Execute questions</span>
                </div>
              </div>

              <button className="mt-6 w-full rounded-lg border-4 border-black bg-gray-400 px-4 py-2 font-bold text-white cursor-not-allowed opacity-60">
                Already Using
              </button>
            </div>

            {/* Free Plan */}
            <div className="relative rounded-lg border-4 border-black bg-[var(--color-electric-blue)] p-6 shadow-[4px_4px_0_0_#000]">
              <h3 className="text-2xl font-extrabold text-white">Free</h3>
              <p className="mt-2 text-sm text-white/90">Create a free account</p>

              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-lg text-white mt-0.5">✓</span>
                  <span className="text-sm font-semibold text-white">Multiple choice questions</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-lg text-white mt-0.5">✓</span>
                  <span className="text-sm font-semibold text-white">Track & monitor progress</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-lg text-white mt-0.5">✓</span>
                  <span className="text-sm font-semibold text-white">Personal dashboard</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-lg text-white mt-0.5">✓</span>
                  <span className="text-sm font-semibold text-white">Review missed questions</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-lg text-white mt-0.5">✓</span>
                  <span className="text-sm font-semibold text-white">Accuracy tracking</span>
                </div>
              </div>

              <button className="mt-6 w-full rounded-lg border-4 border-black bg-[var(--color-yellow)] px-4 py-2 font-bold text-[var(--color-navy)] shadow-[3px_3px_0_0_#000] transition hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none">
                Create Free Account
              </button>
            </div>

            {/* Pro Plan */}
            <div className="relative rounded-lg border-4 border-black bg-[var(--color-purple)] p-6 shadow-[4px_4px_0_0_#000]">
              <div className="absolute -top-3 right-4 bg-[var(--color-yellow)] border-4 border-black px-3 py-1 rounded font-extrabold text-xs text-[var(--color-navy)]">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-extrabold text-white">Pro</h3>
              <p className="mt-2 text-sm text-white/90">Everything in Free, plus:</p>

              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-lg text-white mt-0.5">✓</span>
                  <span className="text-sm font-semibold text-white">Free response questions (FRQ)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-lg text-white mt-0.5">✓</span>
                  <span className="text-sm font-semibold text-white">Advanced FRQ questions</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-lg text-white mt-0.5">✓</span>
                  <span className="text-sm font-semibold text-white">Advanced AI support</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-lg text-white mt-0.5">✓</span>
                  <span className="text-sm font-semibold text-white">All Free features</span>
                </div>
              </div>

              <button className="mt-6 w-full rounded-lg border-4 border-black bg-[var(--color-yellow)] px-4 py-2 font-bold text-[var(--color-navy)] shadow-[3px_3px_0_0_#000] transition hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none">
                Create Pro Account
              </button>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* ========== PRICING OPTION 2: FEATURE COMPARISON GRID ========== */}
      <section className="border-t-4 border-b-4 border-black bg-[var(--color-cream)] py-16">
        <PageContainer>
          <h2 className="text-3xl font-extrabold text-[var(--color-navy)] text-center">
            OPTION 2: Feature Comparison Grid
          </h2>
          <p className="mt-2 text-center text-sm text-[var(--color-navy)]">Clean table format, compact and scannable</p>

          <div className="mt-10 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-4 border-black">
                  <th className="border-4 border-black bg-[var(--color-navy)] px-6 py-4 text-left font-extrabold text-white">Feature</th>
                  <th className="border-4 border-black bg-gray-200 px-6 py-4 text-center font-extrabold text-gray-800">Guest</th>
                  <th className="border-4 border-black bg-[var(--color-electric-blue)] px-6 py-4 text-center font-extrabold text-white">Free</th>
                  <th className="border-4 border-black bg-[var(--color-purple)] px-6 py-4 text-center font-extrabold text-white">Pro</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-4 border-black">
                  <td className="border-4 border-black bg-white px-6 py-4 font-semibold text-[var(--color-navy)]">Execute Questions</td>
                  <td className="border-4 border-black bg-white px-6 py-4 text-center text-2xl">✓</td>
                  <td className="border-4 border-black bg-white px-6 py-4 text-center text-2xl">✓</td>
                  <td className="border-4 border-black bg-white px-6 py-4 text-center text-2xl">✓</td>
                </tr>
                <tr className="border-4 border-black">
                  <td className="border-4 border-black bg-white px-6 py-4 font-semibold text-[var(--color-navy)]">Multiple Choice Questions</td>
                  <td className="border-4 border-black bg-white px-6 py-4 text-center text-gray-300">—</td>
                  <td className="border-4 border-black bg-white px-6 py-4 text-center text-2xl">✓</td>
                  <td className="border-4 border-black bg-white px-6 py-4 text-center text-2xl">✓</td>
                </tr>
                <tr className="border-4 border-black">
                  <td className="border-4 border-black bg-white px-6 py-4 font-semibold text-[var(--color-navy)]">Personal Dashboard</td>
                  <td className="border-4 border-black bg-white px-6 py-4 text-center text-gray-300">—</td>
                  <td className="border-4 border-black bg-white px-6 py-4 text-center text-2xl">✓</td>
                  <td className="border-4 border-black bg-white px-6 py-4 text-center text-2xl">✓</td>
                </tr>
                <tr className="border-4 border-black">
                  <td className="border-4 border-black bg-white px-6 py-4 font-semibold text-[var(--color-navy)]">Progress Tracking & Monitoring</td>
                  <td className="border-4 border-black bg-white px-6 py-4 text-center text-gray-300">—</td>
                  <td className="border-4 border-black bg-white px-6 py-4 text-center text-2xl">✓</td>
                  <td className="border-4 border-black bg-white px-6 py-4 text-center text-2xl">✓</td>
                </tr>
                <tr className="border-4 border-black">
                  <td className="border-4 border-black bg-white px-6 py-4 font-semibold text-[var(--color-navy)]">Review Missed Questions</td>
                  <td className="border-4 border-black bg-white px-6 py-4 text-center text-gray-300">—</td>
                  <td className="border-4 border-black bg-white px-6 py-4 text-center text-2xl">✓</td>
                  <td className="border-4 border-black bg-white px-6 py-4 text-center text-2xl">✓</td>
                </tr>
                <tr className="border-4 border-black">
                  <td className="border-4 border-black bg-white px-6 py-4 font-semibold text-[var(--color-navy)]">Accuracy Tracking</td>
                  <td className="border-4 border-black bg-white px-6 py-4 text-center text-gray-300">—</td>
                  <td className="border-4 border-black bg-white px-6 py-4 text-center text-2xl">✓</td>
                  <td className="border-4 border-black bg-white px-6 py-4 text-center text-2xl">✓</td>
                </tr>
                <tr className="border-4 border-black bg-yellow-50">
                  <td className="border-4 border-black bg-yellow-50 px-6 py-4 font-semibold text-[var(--color-navy)]">Free Response Questions (FRQ)</td>
                  <td className="border-4 border-black bg-yellow-50 px-6 py-4 text-center text-gray-300">—</td>
                  <td className="border-4 border-black bg-yellow-50 px-6 py-4 text-center text-gray-300">—</td>
                  <td className="border-4 border-black bg-yellow-50 px-6 py-4 text-center text-2xl">✓</td>
                </tr>
                <tr className="border-4 border-black bg-yellow-50">
                  <td className="border-4 border-black bg-yellow-50 px-6 py-4 font-semibold text-[var(--color-navy)]">Advanced FRQ Questions</td>
                  <td className="border-4 border-black bg-yellow-50 px-6 py-4 text-center text-gray-300">—</td>
                  <td className="border-4 border-black bg-yellow-50 px-6 py-4 text-center text-gray-300">—</td>
                  <td className="border-4 border-black bg-yellow-50 px-6 py-4 text-center text-2xl">✓</td>
                </tr>
                <tr className="border-4 border-black bg-yellow-50">
                  <td className="border-4 border-black bg-yellow-50 px-6 py-4 font-semibold text-[var(--color-navy)]">Advanced AI Support</td>
                  <td className="border-4 border-black bg-yellow-50 px-6 py-4 text-center text-gray-300">—</td>
                  <td className="border-4 border-black bg-yellow-50 px-6 py-4 text-center text-gray-300">—</td>
                  <td className="border-4 border-black bg-yellow-50 px-6 py-4 text-center text-2xl">✓</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="rounded-lg border-4 border-black bg-[var(--color-cream)] px-8 py-3 font-bold text-[var(--color-navy)] border-2 border-gray-400 text-gray-600">
              Continue as Guest
            </button>
            <button className="rounded-lg border-4 border-black bg-[var(--color-electric-blue)] px-8 py-3 font-bold text-white shadow-[4px_4px_0_0_#000] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none">
              Create Free Account
            </button>
            <button className="rounded-lg border-4 border-black bg-[var(--color-purple)] px-8 py-3 font-bold text-white shadow-[4px_4px_0_0_#000] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none">
              Create Pro Account
            </button>
          </div>
        </PageContainer>
      </section>

      {/* ========== PRICING OPTION 3: VISUAL PROGRESSION/LADDER ========== */}
      <section className="border-t-4 border-b-4 border-black bg-[var(--color-space-blue)] py-16">
        <PageContainer>
          <h2 className="text-3xl font-extrabold text-white text-center">
            OPTION 3: Visual Progression Journey
          </h2>
          <p className="mt-2 text-center text-sm text-white/80">Unlock more power as you level up</p>

          <div className="mt-12 space-y-8">
            {/* Guest Step */}
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-16 w-16 rounded-lg border-4 border-black bg-gray-300 text-2xl font-extrabold text-gray-700">
                  1
                </div>
              </div>
              <div className="flex-1 rounded-lg border-4 border-black bg-gray-100 p-6">
                <h3 className="text-2xl font-extrabold text-gray-800">Start as Guest</h3>
                <p className="mt-2 text-sm text-gray-700">No account needed. Jump right in and practice questions.</p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">→</span>
                    <span className="font-semibold text-gray-700">Execute any question</span>
                  </div>
                </div>
                <button className="mt-4 rounded-lg border-4 border-black bg-gray-400 px-6 py-2 font-bold text-white cursor-not-allowed opacity-60">
                  You&rsquo;re Here
                </button>
              </div>
            </div>

            {/* Arrow */}
            <div className="text-center text-3xl font-extrabold text-[var(--color-yellow)]">↓</div>

            {/* Free Step */}
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-16 w-16 rounded-lg border-4 border-black bg-[var(--color-electric-blue)] text-2xl font-extrabold text-white">
                  2
                </div>
              </div>
              <div className="flex-1 rounded-lg border-4 border-black bg-[var(--color-cream)] p-6 shadow-[4px_4px_0_0_#000]">
                <h3 className="text-2xl font-extrabold text-[var(--color-navy)]">Upgrade to Free Account</h3>
                <p className="mt-2 text-sm text-[var(--color-navy)]">Unlock tracking and your personal progress dashboard.</p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-lg text-[var(--color-electric-blue)]">→</span>
                    <span className="font-semibold text-[var(--color-navy)]">Multiple choice questions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg text-[var(--color-electric-blue)]">→</span>
                    <span className="font-semibold text-[var(--color-navy)]">Personal dashboard</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg text-[var(--color-electric-blue)]">→</span>
                    <span className="font-semibold text-[var(--color-navy)]">Track progress over time</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg text-[var(--color-electric-blue)]">→</span>
                    <span className="font-semibold text-[var(--color-navy)]">Review missed questions</span>
                  </div>
                </div>
                <button className="mt-4 rounded-lg border-4 border-black bg-[var(--color-electric-blue)] px-6 py-2 font-bold text-white shadow-[3px_3px_0_0_#000]">
                  Create Free Account
                </button>
              </div>
            </div>

            {/* Arrow */}
            <div className="text-center text-3xl font-extrabold text-[var(--color-yellow)]">↓</div>

            {/* Pro Step */}
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-16 w-16 rounded-lg border-4 border-black bg-[var(--color-yellow)] text-2xl font-extrabold text-[var(--color-navy)]">
                  3
                </div>
              </div>
              <div className="flex-1 rounded-lg border-4 border-black bg-[var(--color-purple)] p-6 shadow-[6px_6px_0_0_#000]">
                <h3 className="text-2xl font-extrabold text-white">Go Pro</h3>
                <p className="mt-2 text-sm text-white/90">Master every question type with advanced content and AI support.</p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-lg text-[var(--color-yellow)]">★</span>
                    <span className="font-semibold text-white">Free response questions (FRQ)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg text-[var(--color-yellow)]">★</span>
                    <span className="font-semibold text-white">Advanced FRQ questions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg text-[var(--color-yellow)]">★</span>
                    <span className="font-semibold text-white">Advanced AI support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg text-[var(--color-yellow)]">★</span>
                    <span className="font-semibold text-white">All Free features</span>
                  </div>
                </div>
                <button className="mt-4 rounded-lg border-4 border-black bg-[var(--color-yellow)] px-6 py-2 font-bold text-[var(--color-navy)] shadow-[3px_3px_0_0_#000]">
                  Create Pro Account
                </button>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* ========== PRICING OPTION 4: ASYMMETRIC LAYOUT ========== */}
      <section className="border-t-4 border-b-4 border-black bg-white py-16">
        <PageContainer>
          <h2 className="text-3xl font-extrabold text-[var(--color-navy)] text-center">
            OPTION 4: Asymmetric Focus
          </h2>
          <p className="mt-2 text-center text-sm text-[var(--color-navy)]">Left basic, right premium</p>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left column: Guest + Free (smaller) */}
            <div className="space-y-6">
              {/* Guest */}
              <div className="rounded-lg border-4 border-black bg-gray-100 p-5">
                <h4 className="text-lg font-extrabold text-gray-700">Guest</h4>
                <p className="mt-2 text-xs text-gray-600">No account</p>
                <div className="mt-3 space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-sm">✓</span>
                    <span className="text-xs font-semibold text-gray-700">Execute questions</span>
                  </div>
                </div>
                <button className="mt-4 w-full rounded-lg border-4 border-black bg-gray-400 px-3 py-2 font-bold text-xs text-white cursor-not-allowed opacity-60">
                  Already Using
                </button>
              </div>

              {/* Free */}
              <div className="rounded-lg border-4 border-black bg-[var(--color-electric-blue)] p-5">
                <h4 className="text-lg font-extrabold text-white">Free</h4>
                <p className="mt-2 text-xs text-white/80">All basics included</p>
                <div className="mt-3 space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-sm">✓</span>
                    <span className="text-xs font-semibold text-white">Multiple choice</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-sm">✓</span>
                    <span className="text-xs font-semibold text-white">Dashboard</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-sm">✓</span>
                    <span className="text-xs font-semibold text-white">Progress tracking</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-sm">✓</span>
                    <span className="text-xs font-semibold text-white">Review missed</span>
                  </div>
                </div>
                <button className="mt-4 w-full rounded-lg border-4 border-black bg-[var(--color-yellow)] px-3 py-2 font-bold text-xs text-[var(--color-navy)]">
                  Sign Up Free
                </button>
              </div>
            </div>

            {/* Right column: Pro (larger, premium) */}
            <div className="lg:col-span-2">
              <div className="relative h-full rounded-lg border-4 border-black bg-[var(--color-purple)] p-8 shadow-[8px_8px_0_0_#000]">
                <div className="absolute -top-4 left-8 bg-[var(--color-yellow)] border-4 border-black px-4 py-1 rounded font-extrabold text-sm text-[var(--color-navy)]">
                  RECOMMENDED
                </div>

                <h3 className="text-4xl font-extrabold text-white mt-2">Go Pro</h3>
                <p className="mt-3 text-lg text-white/90">Everything in Free, plus premium features</p>

                <div className="mt-8 grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-[var(--color-yellow)] text-sm uppercase">Included</h4>
                    <div className="mt-3 space-y-2">
                      <div className="flex items-start gap-2">
                        <span className="text-xl text-[var(--color-yellow)]">✓</span>
                        <span className="text-sm font-semibold text-white">All Free features</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-xl text-[var(--color-yellow)]">✓</span>
                        <span className="text-sm font-semibold text-white">Multiple choice</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-xl text-[var(--color-yellow)]">✓</span>
                        <span className="text-sm font-semibold text-white">Dashboard</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-xl text-[var(--color-yellow)]">✓</span>
                        <span className="text-sm font-semibold text-white">Progress tracking</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-[var(--color-yellow)] text-sm uppercase">Premium</h4>
                    <div className="mt-3 space-y-2">
                      <div className="flex items-start gap-2">
                        <span className="text-xl text-[var(--color-yellow)]">★</span>
                        <span className="text-sm font-semibold text-white">FRQ questions</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-xl text-[var(--color-yellow)]">★</span>
                        <span className="text-sm font-semibold text-white">Advanced FRQ</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-xl text-[var(--color-yellow)]">★</span>
                        <span className="text-sm font-semibold text-white">AI support</span>
                      </div>
                    </div>
                  </div>
                </div>

                <button className="mt-8 w-full rounded-lg border-4 border-black bg-[var(--color-yellow)] px-6 py-3 font-extrabold text-[var(--color-navy)] text-lg shadow-[4px_4px_0_0_#000] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none">
                  Create Pro Account
                </button>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>
    </>
  );
}

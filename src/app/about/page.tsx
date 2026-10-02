import PageContainer from "@/components/PageContainer";
import BrutalCard from "@/components/BrutalCard";
import BrutalButton from "@/components/ui/BrutalButton";
import Reveal from "@/components/ui/Reveal";
import { OLYMPIADS } from "@/data/olympiads";

export const metadata = {
  title: "About",
  description:
    "Astro Coach is an independent, student-built training platform for astronomy olympiads. Where the questions come from, how it works, and how to reach us.",
};

/// Where to send questions, corrections and takedown requests. The same
/// address the privacy policy uses.
const CONTACT_EMAIL = "prameet.guha@gmail.com";

// The three things Astro Coach does, shown as a row of cards.
const PILLARS = [
  {
    icon: "🔭",
    title: "Real past questions",
    body: "Multiple-choice and free-response problems from past USAAAO, IAAC and BAAO papers — not made-up practice sets.",
  },
  {
    icon: "📈",
    title: "Progress you can see",
    body: "Your accuracy, badges and missed questions on one dashboard — plus streaks and topic strengths with Pro — so you always know what to practice next.",
  },
  {
    icon: "✍️",
    title: "Feedback that teaches",
    body: "Every multiple-choice answer is explained. Free-response work is graded part by part against the official marking scheme.",
  },
];

// Short answers to what people usually ask first.
const FAQS = [
  {
    question: "Is it free?",
    answer:
      "Yes. Every multiple-choice question, the olympiad guide and your progress dashboard are free. Astro Coach Pro adds the full free-response bank and AI grading.",
  },
  {
    question: "Who is it for?",
    answer: `High school students preparing for astronomy olympiads — from a first online contest to national rounds. The olympiad guide ranks ${OLYMPIADS.length} competitions by difficulty to help you choose.`,
  },
  {
    question: "Is the AI grading reliable?",
    answer:
      "It grades against the competition's own marking scheme, one part at a time, and explains each score. Treat it like a strict study partner, not an official result.",
  },
];

// Explains what Astro Coach is, where the questions come from, and how to
// get in touch (including corrections and takedowns).
export default function AboutPage() {
  return (
    <>
      {/* ---------- Header ---------- */}
      <section className="starfield-dark border-b-[3px] border-ink bg-navy text-white">
        <PageContainer>
          <p className="animate-rise-in text-sm font-bold uppercase tracking-widest text-yellow">
            About Astro Coach
          </p>
          <h1
            className="mt-3 max-w-3xl animate-rise-in text-4xl font-extrabold leading-tight sm:text-5xl"
            style={{ animationDelay: "80ms" }}
          >
            One place to train for astronomy olympiads.
          </h1>
          <p
            className="mt-5 max-w-2xl animate-rise-in text-lg leading-relaxed text-white/85"
            style={{ animationDelay: "160ms" }}
          >
            Past papers are scattered across old PDFs, answer keys rarely explain anything, and
            there&apos;s no easy way to see which topics you&apos;re weak in. Astro Coach puts real
            questions, real explanations and your progress in one place.
          </p>
        </PageContainer>
      </section>

      {/* ---------- What it does ---------- */}
      <PageContainer>
        <div className="grid gap-6 md:grid-cols-3">
          {PILLARS.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 80} className="flex">
              <BrutalCard tone="white" hover className="flex w-full flex-col">
                <span aria-hidden className="text-3xl">
                  {pillar.icon}
                </span>
                <h2 className="mt-3 text-lg font-extrabold text-navy">{pillar.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-navy/80">{pillar.body}</p>
              </BrutalCard>
            </Reveal>
          ))}
        </div>

        {/* ---------- Sources and independence ---------- */}
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <BrutalCard tone="cream" className="h-full">
              <h2 className="text-xl font-extrabold text-purple">Where the questions come from</h2>
              <p className="mt-2 text-sm leading-relaxed text-navy">
                Every question comes from a past competition paper and is labelled with its source:
                competition, year, round and question number, with a link back to the original
                where one exists.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-navy">
                Multiple-choice explanations are written by Astro Coach. Free-response solutions
                are labelled as official, adapted from the official one, or written by us.
              </p>
            </BrutalCard>
          </Reveal>

          <Reveal delay={80}>
            <BrutalCard tone="yellow" className="h-full">
              <h2 className="text-xl font-extrabold text-navy">Independent</h2>
              <p className="mt-2 text-sm leading-relaxed text-navy">
                Astro Coach is an independent educational project. It is not affiliated with,
                endorsed by or run by USAAAO, IAAC, BAAO, IOAA, IAO, Science Olympiad or any other
                competition organization. Competition names belong to their organizers.
              </p>
            </BrutalCard>
          </Reveal>
        </div>

        {/* ---------- FAQ ---------- */}
        <h2 className="mt-12 text-2xl font-extrabold text-navy sm:text-3xl">Common questions</h2>
        <div className="mt-6 space-y-3">
          {FAQS.map((faq) => (
            // A native <details> disclosure: keyboard- and screen-reader
            // friendly with no JavaScript.
            <details
              key={faq.question}
              className="group rounded-xl border-[3px] border-ink bg-white shadow-brutal-sm open:shadow-brutal"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-extrabold text-navy">
                {faq.question}
                <span
                  aria-hidden
                  className="text-xl transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="px-5 pb-5 text-sm leading-relaxed text-navy/85">{faq.answer}</p>
            </details>
          ))}
        </div>

        {/* ---------- Contact and takedowns ---------- */}
        <Reveal>
          <BrutalCard tone="purple" className="mt-12">
            <h2 className="text-xl font-extrabold">Contact, corrections and takedowns</h2>
            <p className="mt-2 text-sm leading-relaxed text-white/90">
              Found a wrong answer? Use &quot;Report a problem&quot; on any question. Represent a
              competition and want something credited differently or removed? Email us and
              we&apos;ll act on it promptly.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <BrutalButton href={`mailto:${CONTACT_EMAIL}`} variant="accent" size="sm">
                Email {CONTACT_EMAIL}
              </BrutalButton>
              <BrutalButton href="/training" variant="ghost" size="sm">
                Start practicing
              </BrutalButton>
            </div>
          </BrutalCard>
        </Reveal>
      </PageContainer>
    </>
  );
}

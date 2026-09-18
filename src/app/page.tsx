import PageContainer from "@/components/PageContainer";
import BrutalCard from "@/components/BrutalCard";
import BrutalButton from "@/components/ui/BrutalButton";
import Chip from "@/components/ui/Chip";
import Reveal from "@/components/ui/Reveal";
import { publicQuestionCatalog } from "@/data/mcq/catalog.server";
import { CURRICULUM_TOPICS } from "@/data/mcq/topicTaxonomy";
import { questionNumberLabel } from "@/lib/question-label";

// The three steps a new student takes. This is a real sequence, which is
// why the cards are numbered.
const STEPS = [
  {
    title: "Pick your competition",
    description:
      "Eleven olympiads, ranked from beginner-friendly to international. Find the one that fits where you are now.",
    href: "/olympiads",
    linkLabel: "See the olympiad guide",
  },
  {
    title: "Practice by topic",
    description:
      "Search past questions by competition, year, topic and difficulty. Bookmark the ones you want to revisit.",
    href: "/training",
    linkLabel: "Open the question bank",
  },
  {
    title: "Get feedback that teaches",
    description:
      "Every multiple-choice answer comes with an explanation. Free-response work is graded part by part against the real marking scheme.",
    href: "/training/frq",
    linkLabel: "Try free-response practice",
  },
];

// Shortens long question text so the preview stays one or two lines.
function previewText(text: string, maxLength: number) {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trim()}...`;
}

// Picks one short beginner question to show as a live preview of the bank.
// The catalog order is fixed, so the same question shows every time.
function pickSampleQuestion() {
  return (
    publicQuestionCatalog.find(
      (question) =>
        question.difficulty === "Beginner" &&
        !question.parts?.length &&
        question.questionText.length <= 90,
    ) ?? publicQuestionCatalog[0]
  );
}

export default function HomePage() {
  const questionCount = publicQuestionCatalog.length;
  const competitionCount = new Set(publicQuestionCatalog.map((q) => q.competition)).size;
  const topicCount = CURRICULUM_TOPICS.length;
  const sampleQuestion = pickSampleQuestion();

  return (
    <>
      {/* ---------- Hero ---------- */}
      <section
        className="relative flex min-h-[560px] flex-col justify-center border-b-[3px] border-ink text-white"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(11, 15, 46, 0.55), rgba(11, 15, 46, 0.35) 55%, rgba(11, 15, 46, 0.92)), url('/hero/home-hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <PageContainer>
          {/* Each line arrives a beat after the previous one. This is the
              one choreographed moment on the site. */}
          <h1
            className="max-w-3xl animate-rise-in text-4xl font-extrabold leading-tight sm:text-6xl"
            style={{ animationDelay: "0ms" }}
          >
            Train for your astronomy olympiad.
          </h1>
          <p
            className="mt-5 max-w-2xl animate-rise-in text-lg leading-relaxed text-white/85 sm:text-xl"
            style={{ animationDelay: "90ms" }}
          >
            Real past questions from USAAAO, IAAC and BAAO. Practice by topic,
            get feedback on free-response work, and watch your accuracy climb.
          </p>
          <div
            className="mt-8 flex flex-wrap gap-4 animate-rise-in"
            style={{ animationDelay: "180ms" }}
          >
            <BrutalButton href="/training" variant="primary" size="lg">
              Start training
            </BrutalButton>
            <BrutalButton href="/olympiads" variant="accent" size="lg">
              Explore olympiads
            </BrutalButton>
          </div>

          {/* What is actually in the bank, counted from the data. */}
          <dl
            className="mt-12 flex flex-wrap gap-x-10 gap-y-4 animate-rise-in"
            style={{ animationDelay: "270ms" }}
          >
            <HeroStat value={questionCount} label="past questions" />
            <HeroStat value={competitionCount} label="competitions" />
            <HeroStat value={topicCount} label="topics" />
          </dl>
        </PageContainer>
      </section>

      {/* ---------- How it works ---------- */}
      <PageContainer>
        <h2 className="text-2xl font-extrabold text-navy sm:text-3xl">
          How training works
        </h2>
        <p className="mt-2 max-w-2xl text-navy/75">
          Three steps, in order. Most students start at step one and are
          practicing within a few minutes.
        </p>

        <ol className="mt-8 grid gap-6 md:grid-cols-3">
          {STEPS.map((step, index) => (
            <li key={step.title} className="flex">
              <Reveal delay={index * 80} className="flex w-full">
                <BrutalCard tone="white" hover className="flex w-full flex-col">
                  <span
                    aria-hidden
                    className="flex h-10 w-10 items-center justify-center rounded-full border-[3px] border-ink bg-navy text-lg font-extrabold text-yellow"
                  >
                    {index + 1}
                  </span>
                  <h3 className="mt-4 text-xl font-extrabold text-navy">{step.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-navy/80">
                    {step.description}
                  </p>
                  <BrutalButton href={step.href} variant="ghost" size="sm" className="mt-5 self-start">
                    {step.linkLabel}
                  </BrutalButton>
                </BrutalCard>
              </Reveal>
            </li>
          ))}
        </ol>
      </PageContainer>

      {/* ---------- What is inside ---------- */}
      <PageContainer>
        <h2 className="text-2xl font-extrabold text-navy sm:text-3xl">
          Built for olympiad prep
        </h2>

        <div className="mt-8 grid gap-6 lg:grid-cols-5">
          {/* The question bank, with one real question as a live preview. */}
          <Reveal className="lg:col-span-3">
            <BrutalCard tone="white" className="h-full">
              <h3 className="text-xl font-extrabold text-navy">
                A question bank you can actually search
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/80">
                {questionCount} past questions with source attribution, filterable
                by competition, year, topic and difficulty. Here is one:
              </p>

              {/* A miniature of the real question card from the Training page. */}
              <div className="mt-5 rounded-lg border-[3px] border-ink bg-cream p-4">
                <div className="flex flex-wrap gap-2">
                  <Chip tone="type">{sampleQuestion.type}</Chip>
                  <Chip tone="difficulty">{sampleQuestion.difficulty}</Chip>
                  <Chip tone="topic">{sampleQuestion.primaryCurriculumTopic}</Chip>
                </div>
                <p className="mt-3 text-sm font-bold text-navy">
                  {sampleQuestion.competition} {sampleQuestion.year} · {questionNumberLabel(sampleQuestion)}
                </p>
                <p className="mt-1 text-sm text-navy/85">
                  {previewText(sampleQuestion.questionText, 140)}
                </p>
                <BrutalButton
                  href={`/training/${sampleQuestion.id}`}
                  variant="dark"
                  size="sm"
                  className="mt-4"
                >
                  Try this question
                </BrutalButton>
              </div>

              {/* The topics a student can filter by. */}
              <p className="mt-6 text-sm font-bold text-navy">Every question is tagged by topic:</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {CURRICULUM_TOPICS.map((topic) => (
                  <li key={topic}>
                    <Chip tone="topic">{topic}</Chip>
                  </li>
                ))}
              </ul>
            </BrutalCard>
          </Reveal>

          <div className="flex flex-col gap-6 lg:col-span-2">
            {/* Free-response grading. */}
            <Reveal delay={80} className="flex-1">
              <BrutalCard tone="purple" hover className="h-full">
                <h3 className="text-xl font-extrabold">Free-response, graded part by part</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/85">
                  Type it, photograph it or upload a PDF. Each part is scored on
                  the competition&apos;s own point values, with the official
                  solution unlocked as you work.
                </p>
                <BrutalButton href="/training/frq" variant="accent" size="sm" className="mt-5">
                  See free-response questions
                </BrutalButton>
              </BrutalCard>
            </Reveal>

            {/* Progress tracking. */}
            <Reveal delay={160} className="flex-1">
              <BrutalCard tone="navy" hover className="h-full">
                <h3 className="text-xl font-extrabold">Your progress, on one dashboard</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/85">
                  Accuracy, bookmarks and the questions you got wrong, so you
                  always know what to practice next.
                </p>
                <BrutalButton href="/signup" variant="accent" size="sm" className="mt-5">
                  Create a free account
                </BrutalButton>
              </BrutalCard>
            </Reveal>
          </div>
        </div>

        {/* Honest about what is not built yet. */}
        <Reveal delay={240}>
          <div className="mt-6 flex flex-wrap items-center gap-3 rounded-lg border-[3px] border-dashed border-navy/40 px-5 py-4 text-sm text-navy/75">
            <Chip tone="neutral">Coming soon</Chip>
            <span>XP, streaks and badges for a daily practice habit.</span>
          </div>
        </Reveal>
      </PageContainer>

      {/* ---------- Final call to action ---------- */}
      <section className="starfield-dark border-t-[3px] border-ink bg-navy py-16 text-white">
        <PageContainer>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold sm:text-4xl">Ready to start?</h2>
            <p className="mt-3 text-white/80">
              The question bank is free. You can try a question right now
              without an account, and sign up when you want your progress saved.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <BrutalButton href="/training" variant="accent" size="lg">
                Start training
              </BrutalButton>
              <BrutalButton href="/pricing" variant="ghost" size="lg">
                See Pro plans
              </BrutalButton>
            </div>
          </div>
        </PageContainer>
      </section>
    </>
  );
}

// One number in the hero: a big figure with a small label under it.
function HeroStat({ value, label }: { value: number; label: string }) {
  return (
    <div>
      <dt className="sr-only">{label}</dt>
      <dd className="flex items-baseline gap-2">
        <span className="text-3xl font-extrabold text-yellow">{value}</span>
        <span className="text-sm font-semibold text-white/80">{label}</span>
      </dd>
    </div>
  );
}

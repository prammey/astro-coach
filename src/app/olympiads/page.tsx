import PageContainer from "@/components/PageContainer";
import OlympiadCard, { TIER_COLORS } from "@/components/OlympiadCard";
import BrutalButton from "@/components/ui/BrutalButton";
import { OLYMPIADS, type DifficultyTier } from "@/data/olympiads";
import Reveal from "@/components/ui/Reveal";

export const metadata = {
  title: "Astronomy olympiads guide",
  description:
    "Every major astronomy olympiad, from beginner online contests to the IOAA, ordered by difficulty — with what each one is like and how to prepare.",
};

// The ladder is shown in four stages. Each stage takes the competitions
// whose tier is in its list, so adding a competition to
// src/data/olympiads.ts puts it in the right place automatically.
const STAGES: { title: string; description: string; tiers: DifficultyTier[] }[] = [
  {
    title: "Start here",
    description: "Online and team contests for students new to olympiads.",
    tiers: [1, 2],
  },
  {
    title: "Build up",
    description: "National qualifying rounds. More physics, more math.",
    tiers: [3],
  },
  {
    title: "Go deeper",
    description: "Long written problems and national finals.",
    tiers: [4],
  },
  {
    title: "International",
    description: "The top of the ladder, for students competing for their country.",
    tiers: [5, 6],
  },
];

const ALL_TIERS: DifficultyTier[] = [1, 2, 3, 4, 5, 6];

export default function OlympiadsPage() {
  return (
    <>
      {/* ---------- Header ---------- */}
      <section className="starfield-dark border-b-[3px] border-ink bg-navy text-white">
        <PageContainer>
          <p className="animate-rise-in text-xs font-extrabold uppercase tracking-[0.2em] text-yellow">
            Olympiad guide
          </p>
          <h1
            className="mt-3 max-w-3xl animate-rise-in text-4xl font-extrabold leading-tight sm:text-5xl"
            style={{ animationDelay: "80ms" }}
          >
            Find the olympiad that fits you.
          </h1>
          <p
            className="mt-4 max-w-2xl animate-rise-in text-lg leading-relaxed text-white/85"
            style={{ animationDelay: "160ms" }}
          >
            {OLYMPIADS.length} competitions, ordered from first-timer friendly to the
            international stage. Start where you are, then climb.
          </p>

          {/* The difficulty ladder as a color legend: six squares, one per level. */}
          <div
            className="mt-8 flex animate-rise-in items-center gap-3 text-xs font-extrabold uppercase tracking-widest text-white/80"
            style={{ animationDelay: "240ms" }}
          >
            <span>Easier</span>
            <div className="flex">
              {ALL_TIERS.map((tier) => (
                <span
                  key={tier}
                  className="flex h-8 w-8 items-center justify-center border-[3px] border-ink text-sm sm:w-12"
                  style={{
                    backgroundColor: TIER_COLORS[tier].background,
                    color: TIER_COLORS[tier].text,
                  }}
                >
                  {tier}
                </span>
              ))}
            </div>
            <span>Harder</span>
          </div>
        </PageContainer>
      </section>

      {/* ---------- The ladder ---------- */}
      <PageContainer>
        {/* On wider screens a thick rail runs down the left, with a colored
            marker where each stage begins. */}
        <div className="relative sm:pl-16">
          <span
            aria-hidden
            className="absolute bottom-6 left-[1.3rem] top-2 hidden w-[3px] bg-ink sm:block"
          />

          {STAGES.map((stage, stageIndex) => {
            const olympiads = OLYMPIADS.filter((olympiad) => stage.tiers.includes(olympiad.tier));
            if (olympiads.length === 0) return null;

            // The marker takes the color of the stage's first tier.
            const markerColors = TIER_COLORS[stage.tiers[0]];

            return (
              <section key={stage.title} className={stageIndex === 0 ? "" : "mt-12"}>
                <div className="relative flex items-center gap-3">
                  {/* A plain colored square on the rail. No number, so it is
                      not confused with the cards' "Level 1–6". */}
                  <span
                    aria-hidden
                    className="h-11 w-11 shrink-0 border-[3px] border-ink shadow-brutal-sm sm:absolute sm:-left-16"
                    style={{ backgroundColor: markerColors.background }}
                  />
                  <div>
                    <h2 className="text-2xl font-extrabold text-navy">{stage.title}</h2>
                    <p className="text-sm text-navy/70">{stage.description}</p>
                  </div>
                </div>

                <div className="mt-5 flex flex-col gap-5">
                  {olympiads.map((olympiad, index) => (
                    // Cards fade in on page load, so nothing waits for a scroll.
                    <Reveal key={olympiad.name} delay={Math.min(index, 4) * 60} immediate>
                      <OlympiadCard data={olympiad} />
                    </Reveal>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {/* ---------- Next step ---------- */}
        <Reveal>
          <div className="mt-14 flex flex-col gap-4 border-[3px] border-ink bg-yellow p-6 shadow-brutal sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-extrabold text-navy">Not sure where to start?</h2>
              <p className="mt-1 text-sm text-navy/85">
                Try ten beginner questions. If they feel easy, move one stage up.
              </p>
            </div>
            <BrutalButton href="/training" variant="dark" className="w-full shrink-0 sm:w-auto">
              Open the question bank →
            </BrutalButton>
          </div>
        </Reveal>
      </PageContainer>
    </>
  );
}

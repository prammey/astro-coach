import PageContainer from "@/components/PageContainer";
import OlympiadCard, { TIER_COLORS } from "@/components/OlympiadCard";
import { OLYMPIADS, type DifficultyTier } from "@/data/olympiads";
import Reveal from "@/components/ui/Reveal";

export const metadata = {
  title: "Astronomy olympiads guide",
  description:
    "Every major astronomy olympiad, from beginner online contests to the IOAA, ordered by difficulty — with what each one is like and how to prepare.",
};

export default function OlympiadsPage() {
  return (
    <PageContainer>
      <h1 className="text-3xl font-extrabold text-navy sm:text-4xl">
        Olympiad Guide
      </h1>
      <p className="mt-2 max-w-2xl text-navy/80">
        Competitions are stacked from easiest (green) at the top to hardest
        (dark red) at the bottom, so you know where to start.
      </p>

      {/* The difficulty ladder as a colour legend. */}
      <div className="mt-4 flex max-w-md items-center gap-3 text-xs font-bold text-navy/70">
        <span>Easier</span>
        <div className="flex h-3 flex-1 overflow-hidden rounded-full border-2 border-ink">
          {([1, 2, 3, 4, 5, 6] as DifficultyTier[]).map((tier) => (
            <span
              key={tier}
              className="flex-1"
              style={{ backgroundColor: TIER_COLORS[tier].background }}
            />
          ))}
        </div>
        <span>Harder</span>
      </div>

      <div className="mt-8 flex flex-col gap-5">
        {OLYMPIADS.map((olympiad, index) => (
          // All cards fade in on page load (a quick ripple down the list),
          // so nothing waits for you to scroll.
          <Reveal key={olympiad.name} delay={Math.min(index, 6) * 50} immediate>
            <OlympiadCard data={olympiad} />
          </Reveal>
        ))}
      </div>
    </PageContainer>
  );
}

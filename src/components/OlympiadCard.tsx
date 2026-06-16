// One competition's info card on the Olympiad Guide page.
// "tier" places it on the green (easy) → red (hard) difficulty gradient.
export type DifficultyTier = 1 | 2 | 3 | 4 | 5 | 6;

export type OlympiadCardData = {
  name: string;
  tier: DifficultyTier;
  difficultyLabel: string;
  blurb: string;
};

// Color gradient from beginner-friendly green up to advanced dark red.
// Tier 1 = easiest, tier 6 = hardest.
const TIER_COLORS: Record<DifficultyTier, { background: string; text: string }> = {
  1: { background: "#22c55e", text: "#0b0f2e" }, // green
  2: { background: "#84cc16", text: "#0b0f2e" }, // yellow-green
  3: { background: "#eab308", text: "#0b0f2e" }, // yellow
  4: { background: "#f97316", text: "#ffffff" }, // orange
  5: { background: "#dc2626", text: "#ffffff" }, // red
  6: { background: "#7f1d1d", text: "#ffffff" }, // dark red
};

export default function OlympiadCard({ data }: { data: OlympiadCardData }) {
  const colors = TIER_COLORS[data.tier];

  return (
    <div
      className="rounded-xl border-4 border-black p-6 shadow-[6px_6px_0_0_#000]"
      style={{ backgroundColor: colors.background, color: colors.text }}
    >
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="text-2xl font-extrabold">{data.name}</h3>
        <span
          className="rounded-full border-2 border-black px-3 py-1 text-xs font-bold"
          style={{ backgroundColor: colors.text, color: colors.background }}
        >
          {data.difficultyLabel}
        </span>
      </div>

      <p className="mt-3 text-sm leading-relaxed">{data.blurb}</p>

      <p className="mt-4 text-xs italic opacity-70">
        Source link placeholder — review source later
      </p>
    </div>
  );
}

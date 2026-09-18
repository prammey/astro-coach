// One competition's info card on the Olympiad Guide page.
//
// "tier" places it on a "deeper into space" ladder: the easiest tier is
// cream, then pale blue, electric blue, purple, space blue and finally navy
// for the hardest. The deeper the color, the harder the competition.
export type DifficultyTier = 1 | 2 | 3 | 4 | 5 | 6;

export type OlympiadCardData = {
  name: string;
  tier: DifficultyTier;
  difficultyLabel: string;
  blurb: string;
};

const HARDEST_TIER: DifficultyTier = 6;

// Card colors for each tier, all from the brand palette, plus the inverted
// colors for the difficulty badge in the corner. These are Tailwind classes
// (not inline styles) so the colors are guaranteed to be in the stylesheet.
const TIER_CLASSES: Record<DifficultyTier, { card: string; badge: string }> = {
  1: { card: "bg-cream text-navy", badge: "bg-navy text-cream" },
  2: { card: "bg-sky text-navy", badge: "bg-navy text-sky" },
  3: { card: "bg-electric text-white", badge: "bg-white text-electric" },
  4: { card: "bg-purple text-white", badge: "bg-white text-purple" },
  5: { card: "bg-space text-white", badge: "bg-white text-space" },
  6: { card: "bg-navy text-white", badge: "bg-white text-navy" },
};

export default function OlympiadCard({ data }: { data: OlympiadCardData }) {
  const classes = TIER_CLASSES[data.tier];

  return (
    <div
      className={`rounded-xl border-[3px] border-ink p-6 shadow-brutal transition-[translate,box-shadow] duration-200 ease-snappy hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-brutal-lg ${classes.card}`}
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <TierDots tier={data.tier} />
          <h3 className="mt-3 text-2xl font-extrabold leading-tight">{data.name}</h3>
        </div>
        <span
          className={`shrink-0 rounded-full border-2 border-ink px-3 py-1 text-xs font-bold ${classes.badge}`}
        >
          {data.difficultyLabel}
        </span>
      </div>

      <p className="mt-3 text-sm leading-relaxed">{data.blurb}</p>

      <p className="mt-4 text-xs italic opacity-60">
        Source link placeholder — review source later
      </p>
    </div>
  );
}

// Six dots, filled up to this competition's tier, so the difficulty is
// readable at a glance without decoding the color.
function TierDots({ tier }: { tier: DifficultyTier }) {
  const dots = Array.from({ length: HARDEST_TIER }, (_, index) => index + 1);

  return (
    <div
      className="flex gap-1.5"
      role="img"
      aria-label={`Difficulty ${tier} of ${HARDEST_TIER}`}
    >
      {dots.map((dot) => (
        <span
          key={dot}
          className={`h-2.5 w-2.5 rounded-full border-2 border-current ${
            dot <= tier ? "bg-current" : "bg-transparent opacity-40"
          }`}
        />
      ))}
    </div>
  );
}

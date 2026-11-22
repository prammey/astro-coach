import BrutalButton from "./ui/BrutalButton";
import type { DifficultyTier, OlympiadCardData } from "@/data/olympiads";

// One competition's card on the Olympiad Guide page.
// "tier" places it on the green (easy) → red (hard) difficulty ladder.
// The competitions themselves live in src/data/olympiads.ts.

/// How many steps the difficulty ladder has.
const TIER_COUNT = 6;

// Color for each step of the ladder, from beginner-friendly green up to
// advanced dark red. Tier 1 = easiest, tier 6 = hardest. `text` is the
// color that stays readable on that background.
export const TIER_COLORS: Record<DifficultyTier, { background: string; text: string }> = {
  1: { background: "#22c55e", text: "#0b0f2e" }, // green
  2: { background: "#84cc16", text: "#0b0f2e" }, // yellow-green
  3: { background: "#eab308", text: "#0b0f2e" }, // yellow
  4: { background: "#f97316", text: "#0b0f2e" }, // orange
  5: { background: "#dc2626", text: "#ffffff" }, // red
  6: { background: "#7f1d1d", text: "#ffffff" }, // dark red
};

/// "usaaao.org" from "https://usaaao.org/..." — a short label for the link.
function displayDomain(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

/// Splits "IAAC (International Astronomy ...)" into the short name for the
/// big title and the full name for the line under it. Names without a
/// bracket (e.g. "USAAAO First Round") are used whole.
function splitName(name: string): { short: string; full?: string } {
  const match = name.match(/^(.+?) \((.+)\)$/);
  return match ? { short: match[1], full: match[2] } : { short: name };
}

export default function OlympiadCard({ data }: { data: OlympiadCardData }) {
  const colors = TIER_COLORS[data.tier];
  const { short, full } = splitName(data.name);

  return (
    <article className="flex flex-col border-[3px] border-ink bg-white text-navy shadow-brutal transition-[translate,box-shadow] duration-200 ease-snappy hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-brutal-lg sm:flex-row">
      {/* The difficulty block: the tier's color, its number and a meter. A strip
          across the top on phones, a column on the left above that. */}
      <div
        className="flex shrink-0 items-center justify-between gap-4 border-b-[3px] border-ink px-5 py-3 sm:w-40 sm:flex-col sm:items-start sm:justify-start sm:border-b-0 sm:border-r-[3px] sm:py-5"
        style={{ backgroundColor: colors.background, color: colors.text }}
      >
        <div className="flex items-baseline gap-2 sm:flex-col sm:gap-0">
          <span className="text-xs font-extrabold uppercase tracking-widest">Difficulty</span>
          <span className="font-display text-3xl font-extrabold leading-none sm:text-5xl">
            {data.tier}
          </span>
        </div>
        <div className="flex flex-col items-end gap-2 sm:items-start">
          <DifficultyMeter tier={data.tier} color={colors.text} />
          <span className="text-xs font-extrabold leading-tight">{data.difficultyLabel}</span>
        </div>
      </div>

      {/* What it is and where to go next. */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {/* An h3: each card sits under its stage's h2 on the guide page. */}
        <h3 className="text-2xl font-extrabold leading-tight">{short}</h3>
        {full && <p className="mt-1 text-sm font-semibold text-navy/60">{full}</p>}

        <p className="mt-3 flex-1 text-sm leading-relaxed text-navy/85">{data.blurb}</p>

        {(data.practice || data.officialUrl) && (
          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
            {data.practice && (
              <BrutalButton href={data.practice.href} variant="dark" size="sm">
                {data.practice.label} →
              </BrutalButton>
            )}
            {data.officialUrl && (
              <a
                href={data.officialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold text-purple underline decoration-2 underline-offset-4 hover:text-navy"
              >
                {displayDomain(data.officialUrl)} ↗
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

// Six small squares, filled up to this competition's tier, so difficulty
// reads at a glance without relying on color alone.
function DifficultyMeter({ tier, color }: { tier: DifficultyTier; color: string }) {
  return (
    <span
      role="img"
      aria-label={`Difficulty ${tier} of ${TIER_COUNT}`}
      className="flex gap-1"
    >
      {Array.from({ length: TIER_COUNT }, (_, index) => (
        <span
          key={index}
          className="h-3 w-3 border-2"
          style={{
            borderColor: color,
            backgroundColor: index < tier ? color : "transparent",
          }}
        />
      ))}
    </span>
  );
}

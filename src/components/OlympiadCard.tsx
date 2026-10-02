import Link from "next/link";
import type { DifficultyTier, OlympiadCardData } from "@/data/olympiads";

// One competition's info card on the Olympiad Guide page.
// "tier" places it on the green (easy) → red (hard) difficulty gradient.
// The competitions themselves live in src/data/olympiads.ts.

// Color gradient from beginner-friendly green up to advanced dark red.
// Tier 1 = easiest, tier 6 = hardest.
export const TIER_COLORS: Record<DifficultyTier, { background: string; text: string }> = {
  1: { background: "#22c55e", text: "#0b0f2e" }, // green
  2: { background: "#84cc16", text: "#0b0f2e" }, // yellow-green
  3: { background: "#eab308", text: "#0b0f2e" }, // yellow
  4: { background: "#f97316", text: "#ffffff" }, // orange
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

export default function OlympiadCard({ data }: { data: OlympiadCardData }) {
  const colors = TIER_COLORS[data.tier];

  return (
    <div
      className="rounded-xl border-[3px] border-ink p-6 shadow-brutal transition-[translate,box-shadow] duration-200 ease-snappy hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-brutal-lg"
      style={{ backgroundColor: colors.background, color: colors.text }}
    >
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h2 className="text-xl font-extrabold sm:text-2xl">{data.name}</h2>
        <span
          className="rounded-full border-2 border-ink px-3 py-1 text-xs font-bold"
          style={{ backgroundColor: colors.text, color: colors.background }}
        >
          {data.difficultyLabel}
        </span>
      </div>

      <p className="mt-3 text-sm leading-relaxed">{data.blurb}</p>

      {/* Links: practise here, and the competition's own site. */}
      {(data.practice || data.officialUrl) && (
        <div className="mt-4 flex flex-wrap items-center gap-3">
          {data.practice && (
            <Link
              href={data.practice.href}
              className="rounded-lg border-[3px] border-ink bg-white px-3 py-1.5 text-sm font-extrabold text-navy shadow-brutal-sm transition-[translate,box-shadow] duration-200 ease-snappy hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
            >
              {data.practice.label} →
            </Link>
          )}
          {data.officialUrl && (
            <a
              href={data.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold underline decoration-2 underline-offset-4 opacity-90 hover:opacity-100"
            >
              Official site: {displayDomain(data.officialUrl)} ↗
            </a>
          )}
        </div>
      )}
    </div>
  );
}

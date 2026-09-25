"use client";

// The Strengths panel: one bar per curriculum topic, strongest first.
//
// Each bar shows only its strength score (see src/lib/progress/strength.ts
// for how it balances accuracy, evidence and coverage). The colour runs
// from red through orange, yellow and green to blue as the bar fills.
// Hovering a bar shows the plain accuracy and how many questions it is
// based on.
//
// This component only draws what it is given, so the same code shows a
// Pro student's real strengths and the blurred example on the Free
// dashboard.

import { strengthColour, type TopicStrength } from "@/lib/progress/strength";
import HoverTip from "../progress/HoverTip";

export type StrengthRow = { topic: string; strength: TopicStrength };

export default function StrengthsPanel({
  topics,
  strongestTopic,
  topicToPractiseNext,
  interactive = true,
}: {
  topics: StrengthRow[];
  strongestTopic: string | null;
  topicToPractiseNext: string | null;
  /// False for the blurred example: no tooltips.
  interactive?: boolean;
}) {
  // Strongest first; topics with no answers yet sink to the bottom.
  const rows = [...topics].sort(
    (a, b) => b.strength.score - a.strength.score || b.strength.answered - a.strength.answered,
  );

  return (
    <section className="flex h-full flex-col rounded-xl border-[3px] border-ink bg-cream p-5 text-navy shadow-brutal">
      <h2 className="text-2xl font-extrabold">Strengths</h2>
      <p className="text-sm text-navy/60">Performance by topic</p>

      <ul className="mt-4 space-y-2.5">
        {rows.map((row) => {
          const bar = <StrengthBar row={row} />;
          return (
            <li key={row.topic}>
              {interactive ? (
                <HoverTip className="block" content={<StrengthDetails strength={row.strength} />}>
                  <div
                    tabIndex={0}
                    aria-label={`${row.topic}: ${row.strength.score}% strength`}
                    className="rounded focus:outline-none focus-visible:ring-4 focus-visible:ring-electric/40"
                  >
                    {bar}
                  </div>
                </HoverTip>
              ) : (
                bar
              )}
            </li>
          );
        })}
      </ul>

      {(strongestTopic || topicToPractiseNext) && (
        <div className="mt-auto flex flex-wrap gap-2 pt-4 text-xs font-bold">
          {strongestTopic && (
            <span className="rounded-full border-2 border-ink bg-white px-3 py-1">
              Strongest: {strongestTopic}
            </span>
          )}
          {topicToPractiseNext && (
            <span className="rounded-full border-2 border-ink bg-yellow px-3 py-1">
              Practise next: {topicToPractiseNext}
            </span>
          )}
        </div>
      )}
    </section>
  );
}

/// One topic: its name and percentage over a coloured bar.
function StrengthBar({ row }: { row: StrengthRow }) {
  const { score, answered } = row.strength;
  return (
    <>
      <div className="flex items-baseline justify-between gap-2 text-sm">
        <span className="truncate font-bold">{row.topic}</span>
        <span className="font-extrabold tabular-nums">{answered > 0 ? `${score}%` : "—"}</span>
      </div>
      <div className="mt-1 h-3 w-full overflow-hidden rounded-full border-2 border-ink bg-white">
        <div
          className="h-full rounded-full transition-[width] duration-700 ease-snappy"
          style={{ width: `${score}%`, backgroundColor: strengthColour(score) }}
        />
      </div>
    </>
  );
}

/// What hovering a bar reveals.
function StrengthDetails({ strength }: { strength: TopicStrength }) {
  if (strength.accuracy === null) {
    return <span className="block font-bold">No questions answered yet</span>;
  }
  return (
    <>
      <span className="block font-extrabold">{strength.accuracy}% accuracy</span>
      <span className="block text-xs text-navy/70">
        {strength.answered} question{strength.answered === 1 ? "" : "s"} answered
      </span>
    </>
  );
}

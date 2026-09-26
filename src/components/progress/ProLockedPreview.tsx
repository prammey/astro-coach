"use client";

// What a Free account sees at the bottom of the dashboard: a heavily
// blurred picture of the Pro insights, with a lock and "Pro users only".
//
// Everything behind the blur is MADE-UP EXAMPLE DATA generated below — the
// server sends a Free account none of their Pro figures, so nothing real is
// ever hidden here, only suggested.

import Link from "next/link";
import LockIcon from "../ui/LockIcon";
import { addDays } from "@/lib/progress/activity";
import ActivityCalendar from "./ActivityCalendar";
import StrengthsPanel, { type StrengthRow } from "../dashboard/StrengthsPanel";

/// A fixed "today" for the example, so it looks the same for everyone.
const EXAMPLE_TODAY = "2026-09-24";

/// A small repeatable random-number generator, so the example calendar
/// looks lively but never changes between visits.
function seededRandom(seed: number): () => number {
  let state = seed;
  return () => {
    state = (state * 1664525 + 1013904223) % 4294967296;
    return state / 4294967296;
  };
}

/// A made-up year of practice for the blurred example.
function exampleDays() {
  const random = seededRandom(42);
  const days = [];
  for (let offset = 0; offset < 371; offset++) {
    const roll = random();
    if (roll < 0.35) continue; // a rest day
    const busy = Math.floor(random() * 12);
    days.push({ date: addDays(EXAMPLE_TODAY, -offset), mcq: busy, frq: roll > 0.85 ? 2 : 0 });
  }
  return days.reverse();
}

/// One made-up topic row for the blurred example.
function example(topic: string, score: number, accuracy: number, answered: number): StrengthRow {
  return { topic, strength: { score, accuracy, answered } };
}

/// Made-up strengths for the blurred example.
const EXAMPLE_STRENGTHS: StrengthRow[] = [
  example("Gravity & Orbits", 91, 88, 64),
  example("Stars & Black Holes", 78, 81, 40),
  example("Light & Spectra", 66, 72, 25),
  example("Math, Data & Coordinates", 58, 69, 31),
  example("Galaxies & Universe", 44, 55, 18),
  example("Solar System", 31, 50, 9),
];

export default function ProLockedPreview() {
  return (
    <section className="relative overflow-hidden rounded-xl border-[3px] border-ink shadow-brutal">
      {/* The blurred example. Hidden from screen readers and not clickable. */}
      <div aria-hidden className="pointer-events-none select-none space-y-4 bg-navy p-4 blur-[6px]">
        <ActivityCalendar days={exampleDays()} streaks={{ current: 12, longest: 31 }} today={EXAMPLE_TODAY} interactive={false} />
        <div className="grid gap-4 md:grid-cols-2">
          <StrengthsPanel
            topics={EXAMPLE_STRENGTHS}
            strongestTopic="Gravity & Orbits"
            topicToPractiseNext="Solar System"
            interactive={false}
          />
          <div className="rounded-xl border-[3px] border-ink bg-cream p-5">
            <div className="h-6 w-40 rounded bg-navy/20" />
            <div className="mt-4 h-32 rounded bg-purple/30" />
            <div className="mt-4 h-20 rounded bg-electric/25" />
          </div>
        </div>
      </div>

      {/* The lock */}
      <div className="absolute inset-0 flex items-center justify-center bg-navy/40 p-4">
        <div className="max-w-sm rounded-xl border-[3px] border-ink bg-white p-6 text-center text-navy shadow-brutal">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border-[3px] border-ink bg-yellow">
            <LockIcon />
          </span>
          <h2 className="mt-3 text-xl font-extrabold">Pro users only</h2>
          <p className="mt-1 text-sm text-navy/75">
            Your activity calendar, streaks, strengths by topic and free-response insights.
          </p>
          <Link
            href="/pricing"
            className="mt-4 inline-block rounded-lg border-[3px] border-ink bg-yellow px-5 py-2 font-extrabold text-navy shadow-brutal-sm transition-[translate,box-shadow] duration-200 ease-snappy hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
          >
            Unlock Astro Coach Pro
          </Link>
        </div>
      </div>
    </section>
  );
}

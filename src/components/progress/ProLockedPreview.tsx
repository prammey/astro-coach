"use client";

// What a Free account sees at the bottom of the dashboard: a heavily
// blurred picture of the Pro insights, with a lock and "Pro users only".
//
// Everything behind the blur is MADE-UP EXAMPLE DATA generated below — the
// server sends a Free account none of their Pro figures, so nothing real is
// ever hidden here, only suggested.

import Link from "next/link";
import { addDays } from "@/lib/progress/activity";
import ActivityCalendar from "./ActivityCalendar";
import { MasteryPill } from "../pro/ProAnalyticsPanel";

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

const EXAMPLE_TOPICS = [
  { topic: "Gravity & Orbits", level: 4, name: "Expert" },
  { topic: "Stars & Black Holes", level: 3, name: "Adept" },
  { topic: "Light & Spectra", level: 2, name: "Apprentice" },
  { topic: "Galaxies & Universe", level: 1, name: "Novice" },
];

export default function ProLockedPreview() {
  return (
    <section className="relative overflow-hidden rounded-xl border-[3px] border-ink shadow-brutal">
      {/* The blurred example. Hidden from screen readers and not clickable. */}
      <div aria-hidden className="pointer-events-none select-none space-y-4 bg-navy p-4 blur-[6px]">
        <ActivityCalendar days={exampleDays()} streaks={{ current: 12, longest: 31 }} today={EXAMPLE_TODAY} interactive={false} />
        <div className="grid gap-3 sm:grid-cols-2">
          {EXAMPLE_TOPICS.map((topic) => (
            <div key={topic.topic} className="rounded-lg border-[3px] border-ink bg-cream p-4">
              <div className="flex items-center justify-between gap-2">
                <span className="font-extrabold text-navy">{topic.topic}</span>
                <MasteryPill level={topic.level} name={topic.name} />
              </div>
              <div className="mt-3 h-3 rounded-full border-2 border-ink bg-white">
                <div className="h-full rounded-full bg-electric" style={{ width: `${topic.level * 20}%` }} />
              </div>
            </div>
          ))}
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
            Your activity calendar, streaks, topic mastery levels and detailed analytics.
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

/// A simple padlock drawing.
function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="4" y="10.5" width="16" height="10.5" rx="2.5" fill="#fff" />
      <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" />
      <circle cx="12" cy="15.5" r="1.4" fill="#000" />
    </svg>
  );
}

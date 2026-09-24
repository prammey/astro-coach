"use client";

// The badges box: every badge there is, earned ones in full colour and the
// rest dimmed to grey. Hovering (or tapping) a badge shows its name, how to
// earn it, and progress so far — "56 / 100 MCQs correct".
//
// Available to every signed-in account; progress is worked out on the
// server from the student's own history.

import { useEffect, useState } from "react";
import Image from "next/image";
import { apiGet } from "@/lib/pro/client";
import type { BadgeStatus } from "@/lib/progress/badges";
import HoverTip from "./HoverTip";
import { browserTimeZone } from "./ActivitySection";
import LoadingStar from "../ui/LoadingStar";

export default function BadgesBox() {
  const [badges, setBadges] = useState<BadgeStatus[] | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let active = true;
    apiGet<{ badges: BadgeStatus[] }>(`/api/dashboard/badges?tz=${encodeURIComponent(browserTimeZone())}`)
      .then((response) => active && setBadges(response.badges))
      .catch(() => active && setFailed(true));
    return () => {
      active = false;
    };
  }, []);

  if (failed) return <p className="text-sm text-white/70">Could not load your badges.</p>;
  if (!badges) return <LoadingStar tone="light" label="Loading your badges…" />;
  return <BadgesGrid badges={badges} />;
}

/// Draws the badges box for a list of badge results.
export function BadgesGrid({ badges }: { badges: BadgeStatus[] }) {
  const earnedCount = badges.filter((badge) => badge.earned).length;

  return (
    <section className="rounded-xl border-[3px] border-ink bg-cream p-5 text-navy shadow-brutal">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h2 className="text-2xl font-extrabold">Badges</h2>
        <p className="text-sm font-bold text-navy/70">
          {earnedCount} of {badges.length} earned
        </p>
      </div>

      {/* Scrolls when there are more badges than fit. */}
      <ul className="mt-4 grid max-h-[360px] grid-cols-3 gap-3 overflow-y-auto pr-1 sm:grid-cols-5 lg:grid-cols-6">
        {badges.map((badge) => (
          <li key={badge.id}>
            <HoverTip className="block" content={<BadgeDetails badge={badge} />}>
              <button
                type="button"
                aria-label={`${badge.name}: ${badge.earned ? "earned" : `${badge.current} of ${badge.target} ${badge.unit}`}`}
                className="group flex w-full flex-col items-center rounded-lg p-2 transition-transform duration-200 ease-snappy hover:-translate-y-1 focus:outline-none focus-visible:ring-4 focus-visible:ring-electric/40"
              >
                <Image
                  src={badge.image}
                  alt=""
                  width={80}
                  height={80}
                  unoptimized
                  className={`h-16 w-16 sm:h-20 sm:w-20 ${badge.earned ? "drop-shadow-[3px_3px_0_rgba(0,0,0,0.35)]" : "opacity-40 grayscale"}`}
                />
                <span
                  className={`mt-1 text-center text-xs font-bold leading-tight ${badge.earned ? "text-navy" : "text-navy/50"}`}
                >
                  {badge.name}
                </span>
              </button>
            </HoverTip>
          </li>
        ))}
      </ul>
    </section>
  );
}

/// What the tooltip says about one badge.
function BadgeDetails({ badge }: { badge: BadgeStatus }) {
  const percent = badge.target > 0 ? Math.round((badge.current / badge.target) * 100) : 0;
  return (
    <span className="block">
      <span className="block font-extrabold">{badge.name}</span>
      <span className="mt-0.5 block text-xs text-navy/80">{badge.description}</span>
      {badge.earned ? (
        <span className="mt-2 block text-xs font-extrabold text-success">★ Earned!</span>
      ) : (
        <span className="mt-2 block">
          <span className="block h-2 overflow-hidden rounded-full border border-ink bg-cream">
            <span className="block h-full bg-electric" style={{ width: `${percent}%` }} />
          </span>
          <span className="mt-1 block text-xs font-bold text-navy/70">
            {badge.current} / {badge.target} {badge.unit}
          </span>
        </span>
      )}
    </span>
  );
}

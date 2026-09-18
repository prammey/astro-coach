"use client";

// The deadline badge on the Pro card.
//
// Drawn as inline SVG rather than an image so it stays crisp at any size,
// scales with the layout, and adds no network request. It is a single
// 12-point star built from alternating long and short radii, with a plain
// black outline and no shadow behind it.
//
// The deadline is the real one — 31 December 2026 — and there is no
// countdown timer or manufactured scarcity. It says what is true: the price
// changes for new subscribers after that date.

import { PUBLIC_PRO_CONFIG } from "@/lib/pro/public-config";

/// Builds the points of a star with `spikes` peaks, alternating between the
/// outer and inner radius.
///
/// Coordinates are rounded to three decimals rather than written out in
/// full. Math.cos and Math.sin are not guaranteed to agree to the last bit
/// between the server's JavaScript engine and the browser's, and an
/// unrounded coordinate turns that into a hydration mismatch warning on
/// every page that renders this badge. Three decimals is far finer than a
/// 100-unit viewBox can show, so the shape is unchanged.
function starPoints(spikes: number, outerRadius: number, innerRadius: number): string {
  const points: string[] = [];

  for (let index = 0; index < spikes * 2; index += 1) {
    const radius = index % 2 === 0 ? outerRadius : innerRadius;
    // Start at the top so the star sits square rather than tilted.
    const angle = (Math.PI * index) / spikes - Math.PI / 2;
    const x = (50 + radius * Math.cos(angle)).toFixed(3);
    const y = (50 + radius * Math.sin(angle)).toFixed(3);
    points.push(`${x},${y}`);
  }

  return points.join(" ");
}

export default function FoundingPriceBadge() {
  return (
    <div
      className="pointer-events-none absolute -right-3 -top-6 h-32 w-32 sm:-right-10 sm:-top-12 sm:h-40 sm:w-40"
      aria-hidden="true"
    >
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <polygon
          points={starPoints(12, 46, 32)}
          fill="var(--color-yellow)"
          stroke="#000"
          strokeWidth="2"
        />

        {/* Three short lines, sized to stay inside the star's inner points. */}
        <text x="50" y="40" textAnchor="middle" fontSize="8" fontWeight="800" fill="#0b0f2e">
          PRICE GOES
        </text>
        <text x="50" y="51" textAnchor="middle" fontSize="8" fontWeight="800" fill="#0b0f2e">
          UP AFTER
        </text>
        <text x="50" y="65" textAnchor="middle" fontSize="10" fontWeight="900" fill="#0b0f2e">
          {PUBLIC_PRO_CONFIG.foundingDeadlineShort}!
        </text>
      </svg>
    </div>
  );
}

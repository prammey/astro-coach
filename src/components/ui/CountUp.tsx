"use client";

import { useEffect, useState } from "react";

// A number that counts up from 0 when the page loads ("0 → 899").
//
// Screen readers and search engines always get the real number (the
// sr-only copy); the animated digits are decoration. Students who set
// "reduce motion" in their system settings just see the final number.

const DURATION_MS = 1200;

export default function CountUp({ value, className = "" }: { value: number; className?: string }) {
  const [shown, setShown] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let frame = 0;
    const start = performance.now();

    // Ease-out: fast at first, settling gently on the final value. With
    // reduced motion the very first frame jumps straight to the end.
    const tick = (now: number) => {
      const progress = reduceMotion ? 1 : Math.min((now - start) / DURATION_MS, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setShown(Math.round(value * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [value]);

  return (
    <span className={className}>
      <span className="sr-only">{value}</span>
      <span aria-hidden className="tabular-nums">
        {shown}
      </span>
    </span>
  );
}

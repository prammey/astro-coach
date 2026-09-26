"use client";

import { useEffect, useRef, type ReactNode } from "react";

// Fades its children in the first time they scroll into view.
//
// How it works: the wrapper starts invisible (see `.reveal` in
// globals.css). An IntersectionObserver watches for it to enter the
// viewport, then sets `data-visible="true"` on the element, which the CSS
// animates. `delay` lets a row of cards appear one after another.
//
// The attribute is set straight on the DOM node rather than through React
// state, because nothing else needs to re-render when it changes.
//
// With `immediate`, the animation plays as soon as the page loads instead
// of waiting for the element to scroll into view — useful for a list you
// want fully visible straight away, still with the gentle fade-in.
//
// If the browser has no IntersectionObserver, or the user prefers reduced
// motion, the content simply shows immediately.
export default function Reveal({
  children,
  delay = 0,
  className = "",
  immediate = false,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  /// Play on page load rather than on scroll.
  immediate?: boolean;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const show = () => {
      wrapper.dataset.visible = "true";
    };

    // Older browsers, or a user who asked for less motion: show right away.
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!("IntersectionObserver" in window) || prefersReducedMotion) {
      show();
      return;
    }

    // On page load: wait one frame so the hidden starting state is drawn,
    // then fade in (so the transition actually plays).
    if (immediate) {
      const frame = requestAnimationFrame(show);
      return () => cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          show();
          // Only reveal once; no need to keep watching.
          observer.disconnect();
        }
      },
      // Start the reveal a little before the element is fully on screen.
      { rootMargin: "0px 0px -8% 0px", threshold: 0.1 },
    );

    observer.observe(wrapper);
    return () => observer.disconnect();
  }, [immediate]);

  return (
    <div
      ref={wrapperRef}
      className={`reveal ${className}`}
      data-visible="false"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

"use client";

// A small tooltip that appears when its child is hovered or focused (so it
// also works with the keyboard, and with a tap on phones).
//
// The tooltip is drawn in a portal on <body> with fixed positioning, so it
// is never clipped by a scrolling box such as the activity calendar or the
// badges box.

import { useEffect, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";

/// Half the tooltip's maximum width, used to keep it on screen.
const HALF_WIDTH = 120;

export default function HoverTip({
  content,
  children,
  className = "",
}: {
  content: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  const [anchor, setAnchor] = useState<DOMRect | null>(null);

  // Scrolling moves the anchor, so hide the tooltip rather than leave it
  // floating in the wrong place.
  useEffect(() => {
    if (!anchor) return;
    const hide = () => setAnchor(null);
    window.addEventListener("scroll", hide, true);
    window.addEventListener("resize", hide);
    return () => {
      window.removeEventListener("scroll", hide, true);
      window.removeEventListener("resize", hide);
    };
  }, [anchor]);

  const show = (event: { currentTarget: HTMLElement }) => setAnchor(event.currentTarget.getBoundingClientRect());
  const hide = () => setAnchor(null);

  return (
    <span
      className={className}
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
    >
      {children}
      {anchor && createPortal(<TipBubble anchor={anchor}>{content}</TipBubble>, document.body)}
    </span>
  );
}

/// The bubble itself: above the anchor, or below it near the top of the
/// screen, and nudged sideways so it never runs off the edge.
function TipBubble({ anchor, children }: { anchor: DOMRect; children: ReactNode }) {
  const below = anchor.top < 110;
  const centre = Math.min(
    Math.max(anchor.left + anchor.width / 2, HALF_WIDTH + 8),
    window.innerWidth - HALF_WIDTH - 8,
  );

  return (
    <div
      role="tooltip"
      style={{
        position: "fixed",
        left: centre,
        top: below ? anchor.bottom + 8 : anchor.top - 8,
        transform: below ? "translate(-50%, 0)" : "translate(-50%, -100%)",
      }}
      className="pointer-events-none z-[100] w-max max-w-[240px] rounded-lg border-[3px] border-ink bg-white px-3 py-2 text-sm text-navy shadow-brutal-sm"
    >
      {children}
    </div>
  );
}

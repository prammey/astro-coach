import type { ReactNode } from "react";

// A reusable "neo-brutalist" card: thick black border, bold offset shadow,
// and a chosen background color.
//
//   tone  = which background the card has (white by default)
//   hover = whether the card lifts toward you when hovered. Turn it on for
//           cards that are links or previews, leave it off for static text.

type Tone = "white" | "cream" | "navy" | "purple" | "yellow";

const TONE_CLASSES: Record<Tone, string> = {
  white: "bg-white text-navy",
  cream: "bg-cream text-navy",
  navy: "bg-navy text-white",
  purple: "bg-purple text-white",
  yellow: "bg-yellow text-navy",
};

// Lift up-left and grow the shadow, the opposite of a button's "press".
const HOVER_CLASSES =
  "transition-[translate,box-shadow] duration-200 ease-snappy " +
  "hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-brutal-lg";

export default function BrutalCard({
  children,
  className = "",
  tone = "white",
  hover = false,
}: {
  children: ReactNode;
  className?: string;
  tone?: Tone;
  hover?: boolean;
}) {
  return (
    <div
      className={`rounded-xl border-[3px] border-ink p-6 shadow-brutal ${TONE_CLASSES[tone]} ${
        hover ? HOVER_CLASSES : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}

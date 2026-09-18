import type { ReactNode } from "react";

// A small colored label, like the "MCQ" / "Beginner" / topic tags on a
// question card. Every chip on the site comes through here, so the same
// kind of information always has the same color:
//   type       = blue    (MCQ, FRQ)
//   difficulty = purple  (Beginner, Intermediate, Advanced)
//   topic      = yellow  (Solar System, Light & Spectra, ...)
//   parts      = navy    ("2 parts")
//   neutral    = white   (anything informational, e.g. "Coming soon")

type Tone = "type" | "difficulty" | "topic" | "parts" | "neutral";

const TONE_CLASSES: Record<Tone, string> = {
  type: "bg-electric text-white",
  difficulty: "bg-purple text-white",
  topic: "bg-yellow text-navy",
  parts: "bg-navy text-yellow",
  neutral: "border-2 border-ink bg-white text-navy",
};

export default function Chip({
  tone = "neutral",
  className = "",
  children,
}: {
  tone?: Tone;
  className?: string;
  children: ReactNode;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-bold leading-none ${TONE_CLASSES[tone]} ${className}`}
    >
      {children}
    </span>
  );
}

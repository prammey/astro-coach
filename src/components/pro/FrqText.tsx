"use client";

// Renders FRQ text: paragraphs of prose with LaTeX maths (via MathText),
// with figures dropped in exactly where the text says [[figure:key]].
//
// A paragraph is a run of text separated by a blank line. Inside a
// paragraph, single line breaks are kept, so listed data and short lines
// read the way they were typed. Figures belonging to this text that the
// text never mentions are shown at the end, so nothing is ever lost.

import MathText from "@/components/MathText";
import type { SignedFigure } from "@/lib/pro/frq-service";

const FIGURE_MARKER = /\[\[figure:([a-z0-9_-]+)\]\]/gi;

export default function FrqText({
  text,
  figures = [],
  className = "",
}: {
  text: string;
  /// Figures that may be placed in (or appended after) this text.
  figures?: SignedFigure[];
  className?: string;
}) {
  const byKey = new Map(figures.filter((f) => f.key).map((f) => [f.key as string, f]));
  const placed = new Set<string>();

  // Split into prose and figure pieces, keeping the order.
  const pieces: Array<{ kind: "text"; value: string } | { kind: "figure"; figure: SignedFigure }> = [];
  let last = 0;
  for (const match of text.matchAll(FIGURE_MARKER)) {
    const start = match.index ?? 0;
    if (start > last) pieces.push({ kind: "text", value: text.slice(last, start) });
    const figure = byKey.get(match[1].toLowerCase()) ?? byKey.get(match[1]);
    if (figure) {
      pieces.push({ kind: "figure", figure });
      placed.add(figure.id);
    }
    last = start + match[0].length;
  }
  if (last < text.length) pieces.push({ kind: "text", value: text.slice(last) });

  const leftovers = figures.filter((figure) => !placed.has(figure.id));

  return (
    <div className={`space-y-3 text-navy ${className}`}>
      {pieces.map((piece, index) =>
        piece.kind === "figure" ? (
          <Figure key={`fig-${piece.figure.id}-${index}`} figure={piece.figure} />
        ) : (
          <Paragraphs key={`text-${index}`} text={piece.value} />
        ),
      )}
      {leftovers.map((figure) => (
        <Figure key={figure.id} figure={figure} />
      ))}
    </div>
  );
}

/// The figures a text places with [[figure:key]], for texts (such as
/// solutions) whose figures come from a shared pool.
export function figuresPlacedIn(text: string, figures: SignedFigure[]): SignedFigure[] {
  const keys = new Set([...text.matchAll(FIGURE_MARKER)].map((match) => match[1].toLowerCase()));
  return figures.filter((figure) => figure.key && keys.has(figure.key.toLowerCase()));
}

function Paragraphs({ text }: { text: string }) {
  return (
    <>
      {text
        .split(/\n\s*\n/)
        .map((paragraph) => paragraph.trim())
        .filter(Boolean)
        .map((paragraph, index) => (
          // A paragraph that is only display maths is centred by KaTeX; a
          // plain <div> avoids nesting its block output inside a <p>.
          <div key={index} className="leading-relaxed [overflow-wrap:anywhere]">
            {/* Display maths ($$...$$) may span lines (tables, aligned
                steps), so such a paragraph is typeset as one piece. */}
            {paragraph.includes("$$") ? (
              <MathText text={paragraph} />
            ) : (
              lineGroups(paragraph).map((group, groupIndex) =>
                group.bullets ? (
                  <ul key={groupIndex} className="list-disc space-y-1 pl-6">
                    {group.lines.map((line, lineIndex) => (
                      <li key={lineIndex}>
                        <MathText text={line.replace(BULLET, "")} />
                      </li>
                    ))}
                  </ul>
                ) : (
                  group.lines.map((line, lineIndex) => (
                    <span key={`${groupIndex}-${lineIndex}`} className="block">
                      <MathText text={line} />
                    </span>
                  ))
                ),
              )
            )}
          </div>
        ))}
    </>
  );
}

const BULLET = /^\s*-\s+/;

/// Splits a paragraph's lines into runs of "- " bullet lines (shown as a
/// list) and ordinary lines (shown one per line), keeping their order.
function lineGroups(paragraph: string): Array<{ bullets: boolean; lines: string[] }> {
  const groups: Array<{ bullets: boolean; lines: string[] }> = [];
  for (const line of paragraph.split("\n")) {
    const bullets = BULLET.test(line);
    const last = groups[groups.length - 1];
    if (last && last.bullets === bullets) last.lines.push(line);
    else groups.push({ bullets, lines: [line] });
  }
  return groups;
}

function Figure({ figure }: { figure: SignedFigure }) {
  return (
    <figure className="my-2">
      {/* Signed, short-lived URLs from a private bucket. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={figure.url}
        alt={figure.caption ?? "Figure"}
        className="mx-auto max-h-[520px] w-auto max-w-full rounded-lg border-[3px] border-ink bg-white"
      />
      {figure.caption && (
        <figcaption className="mt-1 text-center text-xs text-navy/70">{figure.caption}</figcaption>
      )}
    </figure>
  );
}

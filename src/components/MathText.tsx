import katex from "katex";
import type { ReactNode } from "react";

// Renders explanation text that mixes ordinary words, **bold** phrases and
// maths. Maths is written the way textbooks write it, in LaTeX:
//
//   inline:   "The escape speed is $v = \\sqrt{2GM/r}$."
//   display:  "$$ F = \\frac{G M m}{r^2} $$"   (centred on its own line)
//
// KaTeX turns each piece into proper typeset HTML. Everything outside the
// dollar signs is shown exactly as written, so a stray $ in prose is safe:
// an unclosed one is left alone.

// One chunk of the text after splitting: plain prose, bold, or maths.
type Segment =
  | { kind: "text"; value: string }
  | { kind: "bold"; value: string }
  | { kind: "math"; value: string; display: boolean };

// Matches, in order of preference: $$display$$, $inline$, **bold**.
const SEGMENT_PATTERN = /\$\$([\s\S]+?)\$\$|\$([^$\n]+?)\$|\*\*([^*\n]+?)\*\*/g;

// Splits one string into prose, bold and maths segments.
function splitSegments(text: string): Segment[] {
  const segments: Segment[] = [];
  let lastIndex = 0;

  for (const match of text.matchAll(SEGMENT_PATTERN)) {
    const [whole, display, inline, bold] = match;
    const start = match.index ?? 0;

    if (start > lastIndex) {
      segments.push({ kind: "text", value: text.slice(lastIndex, start) });
    }

    if (display !== undefined) {
      segments.push({ kind: "math", value: display.trim(), display: true });
    } else if (inline !== undefined) {
      segments.push({ kind: "math", value: inline.trim(), display: false });
    } else if (bold !== undefined) {
      segments.push({ kind: "bold", value: bold });
    }

    lastIndex = start + whole.length;
  }

  if (lastIndex < text.length) {
    segments.push({ kind: "text", value: text.slice(lastIndex) });
  }

  return segments;
}

// Typesets one LaTeX string. `throwOnError: false` means a typo in the
// formula shows up in red on the page instead of crashing the component.
function renderMath(tex: string, display: boolean): string {
  return katex.renderToString(tex, {
    displayMode: display,
    throwOnError: false,
    strict: "ignore",
  });
}

// Turns one string into React nodes. Display maths becomes a block so it
// sits centred on its own line; everything else flows inline.
function renderSegments(text: string): ReactNode[] {
  return splitSegments(text).map((segment, index) => {
    if (segment.kind === "bold") {
      return (
        <strong key={index} className="font-bold">
          {segment.value}
        </strong>
      );
    }

    if (segment.kind === "math") {
      const Tag = segment.display ? "div" : "span";
      return (
        <Tag
          key={index}
          className={segment.display ? "my-2 overflow-x-auto" : undefined}
          dangerouslySetInnerHTML={{ __html: renderMath(segment.value, segment.display) }}
        />
      );
    }

    return <span key={index}>{segment.value}</span>;
  });
}

export default function MathText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return <span className={className}>{renderSegments(text)}</span>;
}

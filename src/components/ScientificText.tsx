import { Fragment } from "react";

// Shows plain-text science notation the way it is printed on an exam paper.
//
// Some questions and answer choices were typed as "6.87*10^8" or "m^-3".
// This turns them into "6.87 × 10⁸" and "m⁻³" with a real superscript,
// purely for display — the question data itself is never changed.

/// "6.87*10^8" → "6.87 × 10^8": a typed asterisk between a number and a
/// power of ten becomes a proper times sign.
function withTimesSign(text: string): string {
  return text.replace(/(\d)\s*\*\s*10\^/g, "$1 × 10^");
}

/// Matches "^8", "^-3", "^{12}" — a caret followed by a (signed) number.
const EXPONENT = /\^\{?([-−]?\d+(?:\.\d+)?)\}?/g;

/// Splits text into plain pieces and exponents, in order.
export function splitExponents(text: string): Array<{ text: string; isExponent: boolean }> {
  const pieces: Array<{ text: string; isExponent: boolean }> = [];
  const source = withTimesSign(text);
  let last = 0;
  for (const match of source.matchAll(EXPONENT)) {
    const start = match.index ?? 0;
    if (start > last) pieces.push({ text: source.slice(last, start), isExponent: false });
    // A real minus sign reads better than a hyphen in a superscript.
    pieces.push({ text: match[1].replace("-", "−"), isExponent: true });
    last = start + match[0].length;
  }
  if (last < source.length) pieces.push({ text: source.slice(last), isExponent: false });
  return pieces;
}

export default function ScientificText({ text }: { text: string }) {
  return (
    <>
      {splitExponents(text).map((piece, index) =>
        piece.isExponent ? (
          <sup key={index} className="text-[0.7em]">
            {piece.text}
          </sup>
        ) : (
          <Fragment key={index}>{piece.text}</Fragment>
        ),
      )}
    </>
  );
}

// Exact checking for short-answer FRQ parts: fill-in-the-blank, matching,
// naming. These need no AI, so checking them is free and never spends a
// grading credit. Pure functions only, so every rule here is unit-tested.
//
// A short-answer part has one or more blanks. Each blank lists the answers
// it accepts, and optionally a number with a tolerance, so "8.3", "8.3 min"
// and "8.30 minutes" can all be right without listing every spelling.

/// One blank as stored in FrqPart.acceptedAnswers. SERVER-ONLY: `accept`
/// and `numeric` are the answers themselves.
export type ShortAnswerBlank = {
  /// What the student sees next to the input, e.g. "(1)" or "A1 — class".
  label: string;
  /// Optional hint shown as the input's placeholder, e.g. "light-minutes".
  prompt?: string;
  /// Accepted answers. Compared after normalising case, accents, spacing
  /// and punctuation, so list meaningful variants only.
  accept: string[];
  /// Accept any number within `tolerance` of `value` (absolute). Useful
  /// for numeric blanks where rounding legitimately varies.
  numeric?: { value: number; tolerance: number };
  /// The same number written in other units, e.g. a blank that asks for
  /// metres but should also accept "2350 cm". Each option only counts when
  /// the student wrote one of its unit spellings right after the number.
  numericInOtherUnits?: Array<{ value: number; tolerance: number; units: string[] }>;
  /// Accept any answer that contains every one of these words, for blanks
  /// where a short free phrase is fine ("a comet visible to the naked eye"
  /// contains "comet").
  containsAll?: string[];
};

/// What the browser is allowed to know about a blank: never the answer.
export type PublicBlank = { label: string; prompt?: string };

export function toPublicBlanks(blanks: ShortAnswerBlank[]): PublicBlank[] {
  return blanks.map((blank) =>
    blank.prompt ? { label: blank.label, prompt: blank.prompt } : { label: blank.label },
  );
}

/// Reads acceptedAnswers from the database defensively: anything that is
/// not a well-formed list of blanks is treated as having none.
export function parseBlanks(value: unknown): ShortAnswerBlank[] {
  if (!Array.isArray(value)) return [];
  return value.filter(
    (blank): blank is ShortAnswerBlank =>
      typeof blank === "object" &&
      blank !== null &&
      typeof (blank as ShortAnswerBlank).label === "string" &&
      (Array.isArray((blank as ShortAnswerBlank).accept) ||
        Array.isArray((blank as ShortAnswerBlank).containsAll)),
  );
}

/// Lowercases, strips accents and punctuation, and collapses spaces, so
/// "Andromeda Galaxy" matches "andromeda  galaxy." and "Messier 110" matches
/// "messier-110". A leading "the" is dropped: "the Sun" matches "Sun".
export function normaliseAnswer(text: string): string {
  return text
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/(\d)\s*[×x]\s*10\s*\^?\s*/g, "$1e")
    .replace(/[^a-z0-9.+\-e ]+/g, " ")
    // A hyphen after a word is a separator ("messier-110"), but keep the
    // minus in "-0.5" and in an exponent like "1e-3".
    .replace(/([a-z])-/g, (match, letter, offset, whole) =>
      letter === "e" && /\d/.test(whole[offset - 1] ?? "") ? match : `${letter} `,
    )
    .replace(/\s+/g, " ")
    .trim()
    .replace(/^\.+|\.+$/g, "")
    .replace(/^the /, "");
}

/// Number words a student may write after a number: "393 billion".
const MAGNITUDE_WORDS: Record<string, number> = {
  thousand: 1e3,
  million: 1e6,
  billion: 1e9,
  trillion: 1e12,
};

/// Rewrites a student's answer so the first number in it is easy to read:
/// thousands commas removed, "×10^5" turned into "e5", unicode minus fixed.
function cleanNumberText(text: string): string {
  return text
    .replace(/(\d),(?=\d{3}(?!\d))/g, "$1")
    .replace(/[−–]/g, "-")
    .replace(/\s*[×x*]\s*10\s*\^?\s*\(?\s*([+-]?\d+)\s*\)?/gi, "e$1");
}

const NUMBER_PATTERN = /[+-]?(\d+\.?\d*|\.\d+)(e[+-]?\d+)?/i;

/// Pulls the first number out of a student's answer, understanding
/// "1.5e5", "1.5 × 10^5", "1.5x10^5", "-0.5", "1,400" (thousands commas)
/// and number words such as "393 billion".
export function extractNumber(text: string): number | null {
  const cleaned = cleanNumberText(text);
  const match = cleaned.match(NUMBER_PATTERN);
  if (!match) return null;
  let value = Number(match[0]);
  const after = cleaned.slice((match.index ?? 0) + match[0].length).trim().toLowerCase();
  const word = after.match(/^[a-z]+/)?.[0];
  if (word && MAGNITUDE_WORDS[word]) value *= MAGNITUDE_WORDS[word];
  return Number.isFinite(value) ? value : null;
}

/// The unit written straight after the first number, lowercased: "cm" in
/// "2350 cm", "m" in "23.5m", "km/s" in "7.2 km/s". Empty when there is none.
export function unitAfterNumber(text: string): string {
  const cleaned = cleanNumberText(text);
  const match = cleaned.match(NUMBER_PATTERN);
  if (!match) return "";
  const after = cleaned.slice((match.index ?? 0) + match[0].length).trim().toLowerCase();
  return after.match(/^[a-zµ°%/]+/)?.[0] ?? "";
}

/// Whether one student answer is right for one blank.
export function isBlankCorrect(blank: ShortAnswerBlank, answer: string | undefined): boolean {
  if (!answer || !answer.trim()) return false;

  const given = normaliseAnswer(answer);
  if ((blank.accept ?? []).some((accepted) => normaliseAnswer(accepted) === given)) return true;

  if (blank.containsAll && blank.containsAll.length > 0) {
    const words = ` ${given} `;
    if (blank.containsAll.every((word) => words.includes(` ${normaliseAnswer(word)}`))) return true;
  }

  const number = extractNumber(answer);
  if (number === null) return false;
  if (blank.numeric && Math.abs(number - blank.numeric.value) <= blank.numeric.tolerance) {
    return true;
  }
  // Other units only count when the student actually wrote that unit.
  const unit = unitAfterNumber(answer);
  return (blank.numericInOtherUnits ?? []).some(
    (option) =>
      option.units.some((spelling) => spelling.toLowerCase() === unit) &&
      Math.abs(number - option.value) <= option.tolerance,
  );
}

export type PartCheck = {
  /// Per blank label: right or wrong. Never includes the right answer.
  results: Record<string, boolean>;
  correctCount: number;
  blankCount: number;
  awardedPoints: number;
};

/// Checks every blank of one part and scores it as a fraction of the
/// part's points, rounded DOWN to the marking scheme's step so partial
/// answers never earn more than they would on paper.
export function checkPart(
  blanks: ShortAnswerBlank[],
  answers: Record<string, string>,
  maxPoints: number,
  pointStep: number = 1,
): PartCheck {
  const results: Record<string, boolean> = {};
  let correctCount = 0;
  for (const blank of blanks) {
    const right = isBlankCorrect(blank, answers[blank.label]);
    results[blank.label] = right;
    if (right) correctCount++;
  }

  const blankCount = blanks.length;
  const step = pointStep > 0 ? pointStep : 1;
  const raw = blankCount > 0 ? (maxPoints * correctCount) / blankCount : 0;
  const awardedPoints =
    correctCount === blankCount ? maxPoints : Math.floor(raw / step + 1e-9) * step;

  return { results, correctCount, blankCount, awardedPoints };
}

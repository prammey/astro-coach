import { describe, expect, it } from "vitest";
import { checkPart, extractNumber, isBlankCorrect, normaliseAnswer, toPublicBlanks, type ShortAnswerBlank } from "./short-answer";

describe("short-answer checking", () => {
  it("normalises case, accents, punctuation and a leading 'the'", () => {
    expect(normaliseAnswer("  The Andromeda   Galaxy. ")).toBe("andromeda galaxy");
    expect(normaliseAnswer("Messier-110")).toBe(normaliseAnswer("messier 110"));
    expect(normaliseAnswer("Mérak")).toBe("merak");
  });

  it("reads numbers in the forms students type", () => {
    expect(extractNumber("about 8.3 minutes")).toBe(8.3);
    expect(extractNumber("1.5 × 10^5 km")).toBe(150000);
    expect(extractNumber("1.5x10^-3")).toBe(0.0015);
    expect(extractNumber("1,400 km")).toBe(1400);
    expect(extractNumber("no number")).toBeNull();
    expect(extractNumber("392,699,081,699 stars")).toBe(392699081699);
    expect(extractNumber("393 billion")).toBe(393e9);
    expect(extractNumber("about 2.5 million years")).toBe(2.5e6);
  });

  it("accepts listed spellings and numbers within tolerance", () => {
    const blank: ShortAnswerBlank = { label: "1", accept: ["8.3"], numeric: { value: 8.3, tolerance: 0.1 } };
    expect(isBlankCorrect(blank, "8.3 light minutes")).toBe(true);
    expect(isBlankCorrect(blank, "8.25")).toBe(true);
    expect(isBlankCorrect(blank, "9")).toBe(false);
    expect(isBlankCorrect({ label: "3", accept: ["Jupiter"] }, "jupiter")).toBe(true);
    expect(isBlankCorrect({ label: "3", accept: ["Jupiter"] }, "Saturn")).toBe(false);
    expect(isBlankCorrect({ label: "3", accept: ["Jupiter"] }, "")).toBe(false);
  });

  it("accepts the same number in another unit only when that unit is written", () => {
    const blank: ShortAnswerBlank = {
      label: "Earth–Sun",
      accept: [],
      numeric: { value: 23.5, tolerance: 0.3 },
      numericInOtherUnits: [{ value: 2351, tolerance: 30, units: ["cm", "centimetres", "centimeters"] }],
    };
    expect(isBlankCorrect(blank, "23.5 m")).toBe(true);
    expect(isBlankCorrect(blank, "2350 cm")).toBe(true);
    expect(isBlankCorrect(blank, "2350cm")).toBe(true);
    expect(isBlankCorrect(blank, "2350")).toBe(false);
    expect(isBlankCorrect(blank, "2350 km")).toBe(false);
  });

  it("accepts a short phrase containing the key words", () => {
    const blank: ShortAnswerBlank = { label: "3", accept: [], containsAll: ["comet"] };
    expect(isBlankCorrect(blank, "A bright comet you could see with the naked eye")).toBe(true);
    expect(isBlankCorrect(blank, "An asteroid")).toBe(false);
  });

  it("scores a part by the fraction right, rounded down to the point step", () => {
    const blanks: ShortAnswerBlank[] = Array.from({ length: 8 }, (_, i) => ({ label: String(i + 1), accept: [`a${i}`] }));
    const answers = Object.fromEntries(blanks.slice(0, 7).map((b, i) => [b.label, `a${i}`]));
    const result = checkPart(blanks, answers, 5, 1);
    expect(result.correctCount).toBe(7);
    expect(result.awardedPoints).toBe(4); // 4.375 rounds down to whole points
    expect(checkPart(blanks, answers, 5, 0.5).awardedPoints).toBe(4);
    const all = Object.fromEntries(blanks.map((b, i) => [b.label, `a${i}`]));
    expect(checkPart(blanks, all, 5, 1).awardedPoints).toBe(5);
  });

  it("never sends the accepted answers to the browser", () => {
    const pub = toPublicBlanks([{ label: "1", prompt: "planet", accept: ["Jupiter"], numeric: { value: 1, tolerance: 0 } }]);
    expect(JSON.stringify(pub)).not.toContain("Jupiter");
    expect(pub).toEqual([{ label: "1", prompt: "planet" }]);
  });
});

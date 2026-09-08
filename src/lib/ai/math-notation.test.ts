// Tests for the LaTeX-to-Unicode converter.
//
// The app renders question text as plain text, so anything left as LaTeX
// reaches a student as literal backslashes. These cases are drawn from how
// the existing MCQ bank already writes maths.

import { describe, expect, it } from "vitest";
import { hasLeftoverLatex, toUnicodeMath, toUnicodeMathOrNull } from "./math-notation";

describe("matching the existing MCQ bank's style", () => {
  it("converts scientific notation", () => {
    expect(toUnicodeMath("$1.8 \\times 10^{9}$ sources")).toBe("1.8 × 10⁹ sources");
  });

  it("converts a multi-digit exponent as one run", () => {
    expect(toUnicodeMath("area is 1.438 \\times 10^{15} m^2")).toBe(
      "area is 1.438 × 10¹⁵ m²",
    );
  });

  it("converts subscripted symbols", () => {
    expect(toUnicodeMath("luminosity $L_0$ and $H_0$")).toBe("luminosity L₀ and H₀");
  });

  it("converts Greek letters and relations", () => {
    expect(toUnicodeMath("M52 ($\\alpha \\approx 0h$, $\\delta = 60\\degree$)")).toBe(
      "M52 (α ≈ 0h, δ = 60°)",
    );
  });

  it("converts a proportionality", () => {
    expect(toUnicodeMath("$T^2 \\propto a^3$")).toBe("T² ∝ a³");
  });

  it("converts a negative exponent", () => {
    expect(toUnicodeMath("density in kg m^{-3}")).toBe("density in kg m⁻³");
  });
});

describe("delimiters and wrappers", () => {
  it("strips inline and display math delimiters", () => {
    expect(toUnicodeMath("$x$ and $$y$$ and \\(z\\)")).toBe("x and y and z");
  });

  it("unwraps text and mathrm", () => {
    expect(toUnicodeMath("\\text{Hubble } H_0")).toBe("Hubble H₀");
  });

  it("drops \\left and \\right", () => {
    expect(toUnicodeMath("\\left( GM/r \\right)")).toBe("( GM/r )");
  });

  it("turns fractions into slashes", () => {
    expect(toUnicodeMath("$\\frac{GM}{r^2}$")).toBe("(GM)/(r²)");
    expect(toUnicodeMath("$\\frac{v}{c}$")).toBe("v/c");
  });
});

describe("leaving alone what it does not understand", () => {
  it("passes through text that is already Unicode", () => {
    const already = "1.8 × 10⁹ sources, α ≈ 0h, δ = 60°, T² ∝ a³";
    expect(toUnicodeMath(already)).toBe(already);
  });

  it("passes through ordinary prose untouched", () => {
    const prose = "Estimate the orbital period of the asteroid.";
    expect(toUnicodeMath(prose)).toBe(prose);
  });

  it("does not half-convert a subscript it cannot map", () => {
    // "esc" has no full Unicode subscript run, so it is left readable
    // rather than mangled into something wrong.
    expect(toUnicodeMath("v_{esc}")).toBe("v_{esc}");
  });

  it("preserves line breaks, because question layout matters", () => {
    expect(toUnicodeMath("Part a\n\nPart b")).toBe("Part a\n\nPart b");
  });

  it("does not confuse \\to with the start of a longer command", () => {
    expect(toUnicodeMath("A \\to B")).toBe("A → B");
    expect(toUnicodeMath("\\theta")).toBe("θ");
  });
});

describe("flagging notation a human should look at", () => {
  it("reports leftover LaTeX", () => {
    expect(hasLeftoverLatex("v_{esc} = \\sqrt{2GM/r}")).toBe(true);
    expect(hasLeftoverLatex("still $inline$ here")).toBe(true);
  });

  it("does not report clean Unicode text", () => {
    expect(hasLeftoverLatex("1.8 × 10⁹ sources, T² ∝ a³")).toBe(false);
    expect(hasLeftoverLatex("Estimate the orbital period.")).toBe(false);
  });
});

describe("optional fields", () => {
  it("passes null and undefined straight through", () => {
    expect(toUnicodeMathOrNull(null)).toBeNull();
    expect(toUnicodeMathOrNull(undefined)).toBeNull();
  });

  it("treats an empty result as null", () => {
    expect(toUnicodeMathOrNull("   ")).toBeNull();
  });
});

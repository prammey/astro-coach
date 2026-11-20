import { describe, expect, it } from "vitest";
import { splitExponents } from "./ScientificText";

// Joins the pieces back up, writing exponents as [^…] so tests can read them.
function render(text: string): string {
  return splitExponents(text)
    .map((piece) => (piece.isExponent ? `[^${piece.text}]` : piece.text))
    .join("");
}

describe("ScientificText", () => {
  it("turns a typed asterisk into a times sign before a power of ten", () => {
    expect(render("6.87*10^8")).toBe("6.87 × 10[^8]");
    expect(render("1.40*10^5 km/s")).toBe("1.40 × 10[^5] km/s");
  });

  it("raises negative and braced exponents, with a real minus sign", () => {
    expect(render("1.5 × 10^-26 balls/m3")).toBe("1.5 × 10[^−26] balls/m3");
    expect(render("10^{12} m")).toBe("10[^12] m");
    expect(render("m^-3")).toBe("m[^−3]");
  });

  it("leaves text without carets exactly as it was", () => {
    expect(render("Delphinus")).toBe("Delphinus");
    expect(render("2 * 3 = 6")).toBe("2 * 3 = 6");
  });
});

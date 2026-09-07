// Tests for the importer's safety rules.
//
// The importer exists to save typing hundreds of olympiad problems. These
// tests are about what it must refuse to do while saving that time: invent
// a point value, invent a solution, or let anything reach students without
// a human approving it.

import { describe, expect, it } from "vitest";
import { canPublish, toDraft } from "./import-extractor";

function extracted(overrides: Record<string, unknown> = {}) {
  return {
    question_number: "3",
    question_text: "An asteroid orbits at 2.3 AU. Find its period.",
    total_points: 8,
    official_solution: "Apply Kepler's third law.",
    topic: "Gravity & Orbits",
    question_source_pages: [4],
    solution_source_pages: [11],
    references_figure: false,
    solution_pairing_confident: true,
    source_pages_confident: true,
    confidence: 0.95,
    parts: [],
    ...overrides,
  };
}

describe("never inventing what is not in the paper", () => {
  it("flags a missing point value instead of guessing one", () => {
    const draft = toDraft(extracted({ total_points: null }));
    expect(draft.flags).toContain("POINT_VALUE_MISSING");
    expect(draft.totalPoints).toBe(0);
  });

  it("flags a missing part point value", () => {
    const draft = toDraft(
      extracted({
        total_points: 10,
        parts: [
          { label: "A", prompt: "State the law.", max_points: 2 },
          { label: "B", prompt: "Derive it.", max_points: null },
        ],
      }),
    );
    expect(draft.flags).toContain("POINT_VALUE_MISSING");
    expect(draft.parts[1].maxPoints).toBe(0);
  });

  it("flags part points that do not add up to the total", () => {
    const draft = toDraft(
      extracted({
        total_points: 10,
        parts: [
          { label: "A", prompt: "a", max_points: 2 },
          { label: "B", prompt: "b", max_points: 3 },
        ],
      }),
    );
    expect(draft.flags).toContain("PART_POINTS_DO_NOT_SUM");
  });

  it("flags a missing official solution", () => {
    expect(toDraft(extracted({ official_solution: null })).flags).toContain("SOLUTION_MISSING");
  });

  it("flags an uncertain question/solution pairing", () => {
    expect(toDraft(extracted({ solution_pairing_confident: false })).flags).toContain(
      "SOLUTION_PAIRING_UNCERTAIN",
    );
  });

  it("flags uncertain or missing source pages", () => {
    expect(toDraft(extracted({ source_pages_confident: false })).flags).toContain(
      "SOURCE_PAGE_UNCERTAIN",
    );
    expect(toDraft(extracted({ question_source_pages: [] })).flags).toContain(
      "SOURCE_PAGE_UNCERTAIN",
    );
  });

  it("flags a question that depends on a figure", () => {
    expect(toDraft(extracted({ references_figure: true })).flags).toContain(
      "MEDIA_REVIEW_REQUIRED",
    );
  });

  it("flags a low-confidence extraction", () => {
    expect(toDraft(extracted({ confidence: 0.4 })).flags).toContain("LOW_CONFIDENCE");
  });

  it("raises no flags on a clean extraction", () => {
    expect(toDraft(extracted()).flags).toEqual([]);
  });

  it("falls back to a safe topic rather than inventing a category", () => {
    expect(toDraft(extracted({ topic: "Astro-vibes" })).topic).toBe(
      "Miscellaneous & Space History",
    );
  });

  it("keeps the paper's own point value rather than rescaling it", () => {
    expect(toDraft(extracted({ total_points: 3 })).totalPoints).toBe(3);
    expect(toDraft(extracted({ total_points: 20 })).totalPoints).toBe(20);
  });
});

describe("what may be published", () => {
  const clean = {
    flags: [],
    totalPoints: 8,
    rightsStatus: "PERMISSION_GRANTED",
    officialSolution: "Apply Kepler's third law.",
    parts: [],
  };

  it("allows a clean, rights-cleared question", () => {
    expect(canPublish(clean).ok).toBe(true);
  });

  it("refuses while any warning is unresolved", () => {
    const result = canPublish({ ...clean, flags: ["POINT_VALUE_MISSING"] });
    expect(result.ok).toBe(false);
  });

  it("refuses without a point value", () => {
    expect(canPublish({ ...clean, totalPoints: 0 }).ok).toBe(false);
  });

  it("refuses without an official solution", () => {
    expect(canPublish({ ...clean, officialSolution: null }).ok).toBe(false);
  });

  it("refuses when part points do not add up to the total", () => {
    const result = canPublish({
      ...clean,
      totalPoints: 10,
      parts: [
        { maxPoints: 2, officialSolution: "…" },
        { maxPoints: 3, officialSolution: "…" },
      ],
    });
    expect(result.ok).toBe(false);
    if (!result.ok) expect(result.reasons.join(" ")).toContain("add up to 5");
  });

  it("refuses when no part carries an official solution", () => {
    expect(
      canPublish({
        ...clean,
        totalPoints: 5,
        parts: [
          { maxPoints: 2, officialSolution: null },
          { maxPoints: 3, officialSolution: null },
        ],
      }).ok,
    ).toBe(false);
  });

  it("never assumes third-party material may be reused", () => {
    for (const status of ["UNREVIEWED", "PENDING_PERMISSION", "DENIED"]) {
      const result = canPublish({ ...clean, rightsStatus: status });
      expect(result.ok).toBe(false);
      if (!result.ok) expect(result.reasons.join(" ")).toContain("Rights");
    }
  });

  it("accepts the rights states a human has actually decided", () => {
    for (const status of ["PERMISSION_GRANTED", "PUBLIC_DOMAIN", "FAIR_USE_CLAIMED"]) {
      expect(canPublish({ ...clean, rightsStatus: status }).ok).toBe(true);
    }
  });
});

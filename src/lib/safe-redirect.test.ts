import { describe, expect, it } from "vitest";
import { DEFAULT_AFTER_LOGIN, safeNextPath } from "./safe-redirect";

describe("safeNextPath", () => {
  it("keeps a path on this site", () => {
    expect(safeNextPath("/pricing")).toBe("/pricing");
    expect(safeNextPath("/training/frq/abc?tab=1")).toBe("/training/frq/abc?tab=1");
  });

  it("falls back to the dashboard when there is no next", () => {
    expect(safeNextPath(null)).toBe(DEFAULT_AFTER_LOGIN);
    expect(safeNextPath("")).toBe(DEFAULT_AFTER_LOGIN);
  });

  it("refuses other websites", () => {
    for (const next of ["https://evil.example", "//evil.example", "/\\evil.example", "javascript:alert(1)"]) {
      expect(safeNextPath(next)).toBe(DEFAULT_AFTER_LOGIN);
    }
  });

  it("never sends someone back to login or signup", () => {
    expect(safeNextPath("/login")).toBe(DEFAULT_AFTER_LOGIN);
    expect(safeNextPath("/signup?x=1")).toBe(DEFAULT_AFTER_LOGIN);
  });
});

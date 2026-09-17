// Tests the two config values that decide where money goes: the site URL
// used to build Stripe return URLs, and the AI cost estimates.
//
// The site URL matters most. It is where a student lands after paying, so
// a wrong value in production sends a paying customer to a dead address.

import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { estimateAiCostUsd, siteUrl } from "./config";

const ORIGINAL_ENV = { ...process.env };

beforeEach(() => {
  delete process.env.NEXT_PUBLIC_SITE_URL;
  delete process.env.VERCEL_PROJECT_PRODUCTION_URL;
});

afterEach(() => {
  process.env = { ...ORIGINAL_ENV };
});

describe("resolving the site URL", () => {
  it("prefers an explicitly configured domain", () => {
    process.env.NEXT_PUBLIC_SITE_URL = "https://astrocoach.app";
    process.env.VERCEL_PROJECT_PRODUCTION_URL = "astro-coach.vercel.app";

    expect(siteUrl()).toBe("https://astrocoach.app");
  });

  it("strips a trailing slash so paths do not double up", () => {
    process.env.NEXT_PUBLIC_SITE_URL = "https://astrocoach.app/";
    expect(siteUrl()).toBe("https://astrocoach.app");
  });

  it("falls back to the domain Vercel sets by itself", () => {
    // This is what makes a Vercel deployment work with nothing configured.
    process.env.VERCEL_PROJECT_PRODUCTION_URL = "astro-coach.vercel.app";
    expect(siteUrl()).toBe("https://astro-coach.vercel.app");
  });

  it("uses localhost in development", () => {
    expect(siteUrl()).toBe("http://localhost:3000");
  });

  it("refuses to fall back to localhost in production", () => {
    // The whole point: a silent localhost redirect after a real payment is
    // worse than a visible failure.
    const previous = process.env.NODE_ENV;
    Object.defineProperty(process.env, "NODE_ENV", {
      value: "production",
      configurable: true,
    });

    expect(() => siteUrl()).toThrow(/No site URL is configured/);

    Object.defineProperty(process.env, "NODE_ENV", {
      value: previous,
      configurable: true,
    });
  });

  it("ignores a blank setting rather than treating it as configured", () => {
    process.env.NEXT_PUBLIC_SITE_URL = "   ";
    process.env.VERCEL_PROJECT_PRODUCTION_URL = "astro-coach.vercel.app";

    expect(siteUrl()).toBe("https://astro-coach.vercel.app");
  });
});

describe("estimating what an AI call cost", () => {
  it("prices a known model from its published rates", () => {
    // 1M input at $0.30 plus 1M output at $2.50.
    expect(estimateAiCostUsd("gemini-3.5-flash-lite", 1_000_000, 1_000_000)).toBe(2.8);
  });

  it("returns null for a model it has no rates for", () => {
    // An unknown model must read as "unknown", never as a confident $0.00.
    expect(estimateAiCostUsd("some-future-model", 1000, 1000)).toBeNull();
  });

  it("doubles the promotional Flash rates once the promotion ends", () => {
    const duringPromotion = estimateAiCostUsd(
      "gemini-3.8-flash",
      1_000_000,
      0,
      new Date("2026-12-31T00:00:00Z"),
    );
    const afterPromotion = estimateAiCostUsd(
      "gemini-3.8-flash",
      1_000_000,
      0,
      new Date("2027-01-01T00:00:00Z"),
    );

    expect(duringPromotion).toBe(0.75);
    expect(afterPromotion).toBe(1.5);
  });
});

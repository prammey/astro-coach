import { describe, expect, it } from "vitest";
import { canSwitchViews, parseViewAs, viewAsFromCookieHeader } from "./view-as";
import { simulatedProSubscription } from "./pro/view-as.server";
import { computeEntitlements } from "./pro/rules";

describe("view as", () => {
  it("only the owner's account may switch views", () => {
    expect(canSwitchViews("prameet.guha@gmail.com")).toBe(true);
    expect(canSwitchViews("  Prameet.Guha@Gmail.com ")).toBe(true);
    expect(canSwitchViews("someone@else.com")).toBe(false);
    expect(canSwitchViews("prameet.guha@gmail.com.evil.com")).toBe(false);
    expect(canSwitchViews(null)).toBe(false);
  });

  it("reads the view from a cookie header and ignores junk", () => {
    expect(viewAsFromCookieHeader("a=1; astro_view_as=pro; b=2")).toBe("pro");
    expect(viewAsFromCookieHeader("astro_view_as=guest")).toBe("guest");
    expect(viewAsFromCookieHeader("astro_view_as=admin")).toBeNull();
    expect(viewAsFromCookieHeader("other=pro")).toBeNull();
    expect(viewAsFromCookieHeader(null)).toBeNull();
    expect(parseViewAs("free")).toBe("free");
    expect(parseViewAs("pro-out")).toBe("pro-out");
    expect(parseViewAs("FREE")).toBeNull();
  });

  it("the simulated Pro subscription really counts as Pro", () => {
    const now = new Date("2026-09-24T12:00:00Z");
    const usage = { freeLifetimeUsed: 0, proPeriodUsed: 0, purchasedUsed: 0, purchasedGranted: 0 };
    expect(computeEntitlements(simulatedProSubscription(now), usage, now).isPro).toBe(true);
    expect(computeEntitlements(null, usage, now).isPro).toBe(false);
  });
});

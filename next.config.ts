import type { NextConfig } from "next";

// Security headers sent with every page and API response.
//
// - Content-Security-Policy: only the parts that can never break the site.
//   `frame-ancestors 'none'` stops other websites from showing Astro Coach
//   inside a hidden frame (to trick a student into clicking "Cancel Pro" or
//   "Delete account"). `object-src` and `base-uri` close two old injection
//   tricks. Scripts and styles are deliberately NOT restricted here, since a
//   wrong rule would silently break Stripe, Supabase, KaTeX or Analytics.
// - X-Frame-Options: the same "no framing" rule for older browsers.
// - X-Content-Type-Options: browsers must trust our file types, never guess.
// - Referrer-Policy: other sites see only our domain, never full page URLs.
// - Permissions-Policy: the site never needs the camera, microphone or
//   location, so no page (or injected script) can ask for them. Photo
//   uploads use the normal file picker, which this does not affect.
//
// HTTPS-only (HSTS) is already added by Vercel, so it is not repeated here.
const SECURITY_HEADERS = [
  {
    key: "Content-Security-Policy",
    value: "frame-ancestors 'none'; object-src 'none'; base-uri 'self'",
  },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  experimental: {
    // The persistent Turbopack dev cache kept serving stale compiled CSS
    // after edits to globals.css (even across restarts). Turning it off
    // makes every edit show up in `npm run dev`. Production builds are
    // not affected by this setting.
    turbopackFileSystemCacheForDev: false,
  },

  // Applies SECURITY_HEADERS to every route.
  async headers() {
    return [{ source: "/:path*", headers: SECURITY_HEADERS }];
  },
};

export default nextConfig;

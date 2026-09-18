import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // The persistent Turbopack dev cache kept serving stale compiled CSS
    // after edits to globals.css (even across restarts). Turning it off
    // makes every edit show up in `npm run dev`. Production builds are
    // not affected by this setting.
    turbopackFileSystemCacheForDev: false,
  },
};

export default nextConfig;

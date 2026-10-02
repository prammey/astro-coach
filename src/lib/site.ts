// Facts about the public website, used for page titles, link previews
// (Open Graph), the sitemap and robots.txt.
//
// Safe to import anywhere: nothing here is secret.

export const SITE_NAME = "Astro Coach";

export const SITE_DESCRIPTION =
  "Free astronomy olympiad training: real past questions from USAAAO, IAAC and BAAO, " +
  "practice by topic, track your progress, and get AI feedback on free-response work.";

/// The live site's address, used when we need a full URL (link previews,
/// sitemap). The env var wins; otherwise Vercel's production domain; and
/// as a last resort the known public address, so a build never fails just
/// because link previews could not find their domain.
export function siteBaseUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) return explicit.replace(/\/$/, "");

  const vercelDomain = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (vercelDomain) return `https://${vercelDomain.replace(/\/$/, "")}`;

  return "https://astrocoach.vercel.app";
}

import type { MetadataRoute } from "next";
import { siteBaseUrl } from "@/lib/site";

// Served at /sitemap.xml. Lists the public pages search engines should know
// about. Individual questions are reachable from /training, so they are not
// listed one by one.
const PUBLIC_PAGES: Array<{ path: string; priority: number }> = [
  { path: "/", priority: 1 },
  { path: "/training", priority: 0.9 },
  { path: "/olympiads", priority: 0.8 },
  { path: "/training/frq", priority: 0.7 },
  { path: "/pricing", priority: 0.7 },
  { path: "/about", priority: 0.5 },
  { path: "/signup", priority: 0.5 },
  { path: "/privacy", priority: 0.2 },
  { path: "/terms", priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteBaseUrl();
  return PUBLIC_PAGES.map((page) => ({
    url: `${base}${page.path}`,
    changeFrequency: "weekly",
    priority: page.priority,
  }));
}

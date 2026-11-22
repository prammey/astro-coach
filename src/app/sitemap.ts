import type { MetadataRoute } from "next";
import { getMcqCatalog } from "@/data/mcq/catalog.server";
import { siteBaseUrl } from "@/lib/site";

// Served at /sitemap.xml. Lists the public pages search engines should know
// about, including every multiple-choice question page, so each question
// can be found from a search on its own.

// Built per request, like the Training page, so building the site never
// needs a database connection.
export const dynamic = "force-dynamic";

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

/// Every question's page, e.g. /training/usaaao-2014-...-q1. If the
/// database cannot be reached, the sitemap still lists the main pages.
async function questionPaths(): Promise<string[]> {
  try {
    const { publicItems } = await getMcqCatalog();
    return publicItems.map((question) => `/training/${question.id}`);
  } catch (error) {
    console.error("Sitemap: could not load the question list:", error);
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = siteBaseUrl();

  const pages: MetadataRoute.Sitemap = PUBLIC_PAGES.map((page) => ({
    url: `${base}${page.path}`,
    changeFrequency: "weekly",
    priority: page.priority,
  }));

  const questions: MetadataRoute.Sitemap = (await questionPaths()).map((path) => ({
    url: `${base}${path}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...pages, ...questions];
}

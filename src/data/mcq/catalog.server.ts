// Server-only access to the multiple-choice bank, which lives in Postgres
// (tables McqQuestion and McqExplanation, filled by `npm run seed:mcq`).
//
// The catalog includes correct answers and explanations, so this file must
// never be imported from a Client Component — only from Server Components
// and API routes. The check below catches an accidental client import early.
if (typeof window !== "undefined") {
  throw new Error("src/data/mcq/catalog.server.ts must not be imported in the browser");
}

import { getPrisma } from "@/lib/prisma";
import { buildCatalog, fromDbRow, type McqCatalog } from "./catalog-builder";
import type { CatalogQuestion } from "./types";

export { toPublicQuestion } from "./catalog-builder";

// The bank changes only when someone re-runs the seed, so one read per
// server process is plenty. After this long a process re-reads, so a
// re-seed shows up without a redeploy.
const CATALOG_TTL_MS = 5 * 60 * 1000;

let cached: { catalog: Promise<McqCatalog>; loadedAt: number } | null = null;

// Reads every question (with its explanation) in bank order and builds
// the catalog. Throws if the table is empty, because an empty bank means
// the seed was never run — that should be loud, not a blank training page.
async function loadCatalog(): Promise<McqCatalog> {
  const rows = await getPrisma().mcqQuestion.findMany({
    orderBy: { orderIndex: "asc" },
    include: { detailedExplanation: true },
  });

  if (rows.length === 0) {
    throw new Error("The McqQuestion table is empty. Run `npm run seed:mcq`.");
  }

  return buildCatalog(rows.map(fromDbRow));
}

// The whole bank: items (with answers), their browser-safe versions, a
// lookup by ID and the counts. Cached per process for CATALOG_TTL_MS.
export async function getMcqCatalog(): Promise<McqCatalog> {
  const now = Date.now();
  if (!cached || now - cached.loadedAt > CATALOG_TTL_MS) {
    const catalog = loadCatalog();
    cached = { catalog, loadedAt: now };
    // A failed load must not be cached, or one database hiccup would break
    // the site for the next five minutes.
    catalog.catch(() => {
      if (cached?.catalog === catalog) cached = null;
    });
  }
  return cached.catalog;
}

// One practice item by ID, or undefined if no such item exists.
export async function findCatalogQuestionById(id: string): Promise<CatalogQuestion | undefined> {
  const { byId } = await getMcqCatalog();
  return byId.get(id);
}

// Configuration for the Prisma CLI only — `migrate`, `db`, `introspect`.
//
// This file is NOT part of the running application. The app builds its own
// connection pool in src/lib/prisma.ts from DATABASE_URL (the pgBouncer
// transaction pooler), which is correct for serverless runtime traffic and
// is unaffected by anything here.
//
// Loads env vars from .env.local, matching the rest of the Astro Coach
// project's convention of keeping secrets there.
import { config } from "dotenv";
import { defineConfig } from "prisma/config";

config({ path: ".env.local" });

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    // Migrations MUST use the direct connection (DIRECT_URL, port 5432),
    // not the pooled one (DATABASE_URL, port 6543).
    //
    // Prisma Migrate takes an advisory lock and relies on session state,
    // neither of which survives pgBouncer's transaction-mode pooling. Run
    // against the pooler, `prisma migrate status` and `migrate deploy` hang
    // indefinitely and print nothing at all — no error, no timeout.
    //
    // The fallback keeps `prisma generate` working in environments where
    // only DATABASE_URL is set, such as the Vercel build. That is safe
    // because `generate` never opens a connection.
    url: process.env["DIRECT_URL"] ?? process.env["DATABASE_URL"],
  },
});

// Loads DATABASE_URL (and other env vars) from .env.local, matching the
// rest of the Astro Coach project's convention of keeping secrets there.
import { config } from "dotenv";
import { defineConfig } from "prisma/config";

config({ path: ".env.local" });

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: process.env["DATABASE_URL"],
    // Note: directUrl is handled by PRISMA_MIGRATION_ENGINE_OPTIONAL=true and DIRECT_URL env var
    // in the PRISMA_MIGRATION_CONNECTION_STRING for migrations
  } as any,
});

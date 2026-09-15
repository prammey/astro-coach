import { defineConfig } from "vitest/config";
import path from "node:path";

// Unit tests for the Pro business rules. These run against pure functions
// only — no database, no network, no Next.js runtime — so `npm test` is
// fast and needs no credentials.
export default defineConfig({
  test: {
    environment: "node",
    include: ["src/**/*.test.ts"],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

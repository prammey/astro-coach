import { PrismaClient } from "@/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

// Prisma 7 needs a "driver adapter" to know how to actually talk to
// Postgres, instead of reading DATABASE_URL automatically. PrismaPg wraps
// the standard `pg` Postgres driver for that purpose.
const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });

// Next.js reloads modules often in development, which would normally create
// a new PrismaClient (and a new DB connection) on every file change. This
// stashes one client on the global object so dev mode reuses it instead.
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma ?? new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

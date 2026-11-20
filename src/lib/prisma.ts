import { PrismaClient } from '@/generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

declare global {
  var prismaClient: PrismaClient | undefined;
}

export function getPrisma(): PrismaClient {
  let prisma = global.prismaClient;

  if (!prisma) {
    if (!process.env.DATABASE_URL) {
      throw new Error('DATABASE_URL environment variable is not set');
    }

    const pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      // Close connections that sit unused for 10 seconds, so a quiet
      // serverless instance does not hold database slots it is not using.
      idleTimeoutMillis: 10_000,
      // Give up on reaching the database after 10 seconds. Without this a
      // request waits forever when the database is down, instead of
      // failing fast with a clear error.
      connectionTimeoutMillis: 10_000,
    });

    const adapter = new PrismaPg(pool);

    prisma = new PrismaClient({
      adapter,
    });

    global.prismaClient = prisma;
  }

  return prisma;
}

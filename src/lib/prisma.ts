import { PrismaClient } from '@/generated/prisma';
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
    });

    const adapter = new PrismaPg(pool);

    prisma = new PrismaClient({
      adapter,
    });

    global.prismaClient = prisma;
  }

  return prisma;
}

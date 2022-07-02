import { PrismaClient } from '@prisma/client';
import { subDays } from 'date-fns';
const db = new PrismaClient();

// This'll do until https://github.com/prisma/prisma/issues/5596
async function truncate() {
  const tablenames = await db.$queryRaw<
    Array<{ tablename: string }>
  >`SELECT tablename FROM pg_tables WHERE schemaname='public'`;

  for (const { tablename } of tablenames) {
    if (tablename !== '_prisma_migrations') {
      try {
        await db.$executeRawUnsafe(
          `TRUNCATE TABLE "public"."${tablename}" CASCADE;`,
        );
      } catch (error) {
        console.log({ error });
      }
    }
  }
}

async function seed() {
}

truncate().then(seed);

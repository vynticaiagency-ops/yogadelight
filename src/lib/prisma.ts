import { Pool } from 'pg'
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
  // During Next.js build phase, avoid initializing Prisma/Pool to prevent crashes
  // if DATABASE_URL is missing or local proxy is not running.
  if (process.env.NEXT_PHASE === 'phase-production-build') {
    return {} as any;
  }

  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
     console.warn('DATABASE_URL is not defined. Using dummy Prisma client.');
     return {} as any;
  }

  const pool = new Pool({ connectionString });
  const adapter = new PrismaPg(pool);
  return new PrismaClient({ adapter });
}

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>
}

const prisma = globalThis.prisma ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== 'production' && process.env.NEXT_PHASE !== 'phase-production-build') {
  globalThis.prisma = prisma;
}

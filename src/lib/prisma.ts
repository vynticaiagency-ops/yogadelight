import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
  return new PrismaClient()
}

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>
}

// During Next.js build phase, avoid initializing Prisma to prevent crashes
// if DATABASE_URL is missing or local proxy is not running.
const isBuildPhase = process.env.NEXT_PHASE === 'phase-production-build';

const prisma = isBuildPhase 
  ? ({} as any) // Dummy object during build
  : (globalThis.prisma ?? prismaClientSingleton());

export default prisma

if (process.env.NODE_ENV !== 'production' && !isBuildPhase) {
  globalThis.prisma = prisma
}

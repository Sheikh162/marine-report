import { prisma } from '@/lib/prisma';
//const prisma = new PrismaClient();

async function checkDb() {
  try {
    await prisma.$connect();
    console.log('✅ Database is up');
  } catch (err) {
    console.error('❌ Database is down:', err);
  } finally {
    await prisma.$disconnect();
  }
}

checkDb();

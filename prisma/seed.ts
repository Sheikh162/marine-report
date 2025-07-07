import { PrismaClient } from "../generated/prisma" // instead of @prisma/client

const prisma = new PrismaClient();

async function seed(){
  await prisma.report.deleteMany({})
}

seed()
  .then(() => prisma.$disconnect())
  .catch((err) => {
    console.error('Seeding error:', err);
    return prisma.$disconnect();
  });

  
/* function seed(){
  console.log("seed")
}
seed() */
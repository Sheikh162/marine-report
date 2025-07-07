/*
  Warnings:

  - You are about to drop the column `injuries` on the `Report` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Casualty" ALTER COLUMN "name" DROP NOT NULL,
ALTER COLUMN "status" DROP NOT NULL,
ALTER COLUMN "nationality" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Report" DROP COLUMN "injuries",
ADD COLUMN     "injured" INTEGER;

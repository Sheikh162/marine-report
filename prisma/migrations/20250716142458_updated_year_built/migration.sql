/*
  Warnings:

  - The `yearBuilt` column on the `Report` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Report" DROP COLUMN "yearBuilt",
ADD COLUMN     "yearBuilt" TIMESTAMP(3);

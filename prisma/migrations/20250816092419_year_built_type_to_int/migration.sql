/*
  Warnings:

  - You are about to drop the column `areaOfIncidentOther` on the `Report` table. All the data in the column will be lost.
  - You are about to drop the column `isEdited` on the `Report` table. All the data in the column will be lost.
  - The `yearBuilt` column on the `Report` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Report" DROP COLUMN "areaOfIncidentOther",
DROP COLUMN "isEdited",
DROP COLUMN "yearBuilt",
ADD COLUMN     "yearBuilt" INTEGER;

/*
  Warnings:

  - The `incidentConsequences` column on the `Report` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Made the column `name` on table `Casualty` required. This step will fail if there are existing NULL values in that column.
  - Made the column `incidentSubCategory` on table `Casualty` required. This step will fail if there are existing NULL values in that column.
  - Made the column `status` on table `Casualty` required. This step will fail if there are existing NULL values in that column.
  - Made the column `nationality` on table `Casualty` required. This step will fail if there are existing NULL values in that column.
  - Made the column `gender` on table `Casualty` required. This step will fail if there are existing NULL values in that column.
  - Made the column `positionOfVessel` on table `Report` required. This step will fail if there are existing NULL values in that column.
  - Made the column `gt` on table `Report` required. This step will fail if there are existing NULL values in that column.
  - Made the column `classificationSociety` on table `Report` required. This step will fail if there are existing NULL values in that column.
  - Made the column `piClub` on table `Report` required. This step will fail if there are existing NULL values in that column.
  - Made the column `totalCrewOnBoard` on table `Report` required. This step will fail if there are existing NULL values in that column.
  - Made the column `lastPortOfCall` on table `Report` required. This step will fail if there are existing NULL values in that column.
  - Made the column `cargoTypeQty` on table `Report` required. This step will fail if there are existing NULL values in that column.
  - Made the column `techManagerName` on table `Report` required. This step will fail if there are existing NULL values in that column.
  - Made the column `techManagerPhone` on table `Report` required. This step will fail if there are existing NULL values in that column.
  - Made the column `techManagerEmail` on table `Report` required. This step will fail if there are existing NULL values in that column.
  - Made the column `deaths` on table `Report` required. This step will fail if there are existing NULL values in that column.
  - Made the column `companyName` on table `Report` required. This step will fail if there are existing NULL values in that column.
  - Made the column `contactNumber` on table `Report` required. This step will fail if there are existing NULL values in that column.
  - Made the column `designation` on table `Report` required. This step will fail if there are existing NULL values in that column.
  - Made the column `nextPortOfCall` on table `Report` required. This step will fail if there are existing NULL values in that column.
  - Made the column `reportedBy` on table `Report` required. This step will fail if there are existing NULL values in that column.
  - Made the column `flag` on table `Report` required. This step will fail if there are existing NULL values in that column.
  - Made the column `shipType` on table `Report` required. This step will fail if there are existing NULL values in that column.
  - Made the column `locationOfVessel` on table `Report` required. This step will fail if there are existing NULL values in that column.
  - Made the column `incidentCategory` on table `Report` required. This step will fail if there are existing NULL values in that column.
  - Made the column `injured` on table `Report` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Casualty" DROP CONSTRAINT "Casualty_reportId_fkey";

-- AlterTable
ALTER TABLE "Casualty" ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "incidentSubCategory" SET NOT NULL,
ALTER COLUMN "status" SET NOT NULL,
ALTER COLUMN "nationality" SET NOT NULL,
ALTER COLUMN "gender" SET NOT NULL;

-- AlterTable
ALTER TABLE "Report" ADD COLUMN     "incidentClassification" TEXT,
ALTER COLUMN "incidentDate" SET DATA TYPE TIMESTAMP(3),
ALTER COLUMN "positionOfVessel" SET NOT NULL,
ALTER COLUMN "gt" SET NOT NULL,
ALTER COLUMN "classificationSociety" SET NOT NULL,
ALTER COLUMN "piClub" SET NOT NULL,
ALTER COLUMN "totalCrewOnBoard" SET NOT NULL,
ALTER COLUMN "lastPortOfCall" SET NOT NULL,
ALTER COLUMN "cargoTypeQty" SET NOT NULL,
ALTER COLUMN "techManagerName" SET NOT NULL,
ALTER COLUMN "techManagerPhone" SET NOT NULL,
ALTER COLUMN "techManagerEmail" SET NOT NULL,
ALTER COLUMN "deaths" SET NOT NULL,
ALTER COLUMN "companyName" SET NOT NULL,
ALTER COLUMN "contactNumber" SET NOT NULL,
ALTER COLUMN "designation" SET NOT NULL,
ALTER COLUMN "nextPortOfCall" SET NOT NULL,
ALTER COLUMN "reportedBy" SET NOT NULL,
ALTER COLUMN "flag" SET NOT NULL,
ALTER COLUMN "shipType" SET NOT NULL,
ALTER COLUMN "locationOfVessel" SET NOT NULL,
ALTER COLUMN "incidentCategory" SET NOT NULL,
DROP COLUMN "incidentConsequences",
ADD COLUMN     "incidentConsequences" TEXT[],
ALTER COLUMN "injured" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Casualty" ADD CONSTRAINT "Casualty_reportId_fkey" FOREIGN KEY ("reportId") REFERENCES "Report"("id") ON DELETE CASCADE ON UPDATE CASCADE;

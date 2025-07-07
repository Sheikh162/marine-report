/*
  Warnings:

  - The `incidentSubCategory` column on the `Casualty` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `maritalStatus` column on the `Casualty` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `education` column on the `Casualty` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `flag` column on the `Report` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `shipType` column on the `Report` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `registrationType` column on the `Report` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `locationOfVessel` column on the `Report` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `areaOfIncident` column on the `Report` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `conditionLoadedBallast` column on the `Report` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `severityOfIncident` column on the `Report` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `bunkers` column on the `Report` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `ownershipType` column on the `Report` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `incidentCategory` column on the `Report` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `incidentConsequences` column on the `Report` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `status` on the `Casualty` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `nationality` on the `Casualty` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `gender` on the `Casualty` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Casualty" DROP COLUMN "incidentSubCategory",
ADD COLUMN     "incidentSubCategory" TEXT,
DROP COLUMN "status",
ADD COLUMN     "status" TEXT NOT NULL,
DROP COLUMN "nationality",
ADD COLUMN     "nationality" TEXT NOT NULL,
DROP COLUMN "maritalStatus",
ADD COLUMN     "maritalStatus" TEXT,
DROP COLUMN "gender",
ADD COLUMN     "gender" TEXT NOT NULL,
DROP COLUMN "education",
ADD COLUMN     "education" TEXT;

-- AlterTable
ALTER TABLE "Report" DROP COLUMN "flag",
ADD COLUMN     "flag" TEXT,
DROP COLUMN "shipType",
ADD COLUMN     "shipType" TEXT,
DROP COLUMN "registrationType",
ADD COLUMN     "registrationType" TEXT,
DROP COLUMN "locationOfVessel",
ADD COLUMN     "locationOfVessel" TEXT,
DROP COLUMN "areaOfIncident",
ADD COLUMN     "areaOfIncident" TEXT,
DROP COLUMN "conditionLoadedBallast",
ADD COLUMN     "conditionLoadedBallast" TEXT,
DROP COLUMN "severityOfIncident",
ADD COLUMN     "severityOfIncident" TEXT,
DROP COLUMN "bunkers",
ADD COLUMN     "bunkers" TEXT,
DROP COLUMN "ownershipType",
ADD COLUMN     "ownershipType" TEXT,
DROP COLUMN "incidentCategory",
ADD COLUMN     "incidentCategory" TEXT,
DROP COLUMN "incidentConsequences",
ADD COLUMN     "incidentConsequences" TEXT;

-- DropEnum
DROP TYPE "AreaType";

-- DropEnum
DROP TYPE "Bunkers";

-- DropEnum
DROP TYPE "CasualtyStatus";

-- DropEnum
DROP TYPE "ConditionType";

-- DropEnum
DROP TYPE "Education";

-- DropEnum
DROP TYPE "Flag";

-- DropEnum
DROP TYPE "Gender";

-- DropEnum
DROP TYPE "IncidentCategory";

-- DropEnum
DROP TYPE "IncidentConsequence";

-- DropEnum
DROP TYPE "IncidentSubCategory";

-- DropEnum
DROP TYPE "LocationType";

-- DropEnum
DROP TYPE "MaritalStatus";

-- DropEnum
DROP TYPE "Nationality";

-- DropEnum
DROP TYPE "OwnershipType";

-- DropEnum
DROP TYPE "PersonalMatter";

-- DropEnum
DROP TYPE "RegistrationType";

-- DropEnum
DROP TYPE "SeverityType";

-- DropEnum
DROP TYPE "ShipType";

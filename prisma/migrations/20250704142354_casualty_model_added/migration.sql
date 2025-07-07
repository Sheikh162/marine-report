/*
  Warnings:

  - You are about to drop the column `deceasedDetails` on the `Report` table. All the data in the column will be lost.
  - You are about to drop the column `injured` on the `Report` table. All the data in the column will be lost.
  - You are about to drop the column `maxDraft` on the `Report` table. All the data in the column will be lost.
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
  - The `sarRequired` column on the `Report` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "ShipType" AS ENUM ('Tug', 'RoRo', 'Passenger', 'OSV', 'AHTS', 'GeneralCargo', 'OilProductTanker', 'CrudeOilTanker', 'VLCC', 'BulkCarrier', 'Barge', 'CarCarrier', 'PilotBoat', 'FishingBoat', 'DrillShip', 'MSV', 'PleasureYacht', 'ContainerVessel', 'ChemicalTanker', 'LPGTanker', 'CNGTanker', 'LNGTanker', 'Dredger', 'Transhipper', 'OffshoreMultipurposeSurveyVessel', 'MODU', 'DynamicPSV', 'FPSO', 'SurveyVessel', 'CementCarrier', 'LivestockCarrier');

-- CreateEnum
CREATE TYPE "RegistrationType" AS ENUM ('ForeignFlag', 'ForeignGoingIndianFlag', 'CoastalIndianFlag');

-- CreateEnum
CREATE TYPE "LocationType" AS ENUM ('AtSea', 'InPort');

-- CreateEnum
CREATE TYPE "AreaType" AS ENUM ('OutsideIndianWaters200nm', 'IndianTerritorialWaters12nm', 'IndianEEZ12_200nm');

-- CreateEnum
CREATE TYPE "ConditionType" AS ENUM ('Loaded', 'PartlyLoaded', 'Ballast');

-- CreateEnum
CREATE TYPE "OwnershipType" AS ENUM ('Owned', 'Leased', 'Chartered');

-- CreateEnum
CREATE TYPE "SeverityType" AS ENUM ('VerySeriousMarineCasualty', 'MarineCasualty', 'OtherCasualty');

-- CreateEnum
CREATE TYPE "IncidentCategory" AS ENUM ('PersonnelRelated', 'Collision', 'Grounding', 'FireExplosion', 'Flooding', 'Beaching', 'Sinking', 'HijackingPiracy', 'LossOfContainment', 'WilfulDefault', 'Fouling', 'LossOfAnchorRudderPropeller', 'SteeringFailure', 'Capsizing');

-- CreateEnum
CREATE TYPE "IncidentConsequence" AS ENUM ('DamageToProperty', 'EnvironmentalDamage', 'PersonnelMatters');

-- CreateEnum
CREATE TYPE "PersonalMatter" AS ENUM ('Death', 'Injury', 'Sickness', 'Desertion', 'ManOverboardSurvived');

-- CreateEnum
CREATE TYPE "IncidentSubCategory" AS ENUM ('DeathOnBoard', 'ManOverboard', 'HomicideOnBoard', 'SuicideOnBoard', 'DrugAlcoholAbuseOnBoard', 'SicknessOnBoard', 'DeathAshore', 'MissingNotFound', 'MortalRemainsRecovered', 'InjuryOnBoard', 'InjuryDrugAlcoholAbuseOnBoard', 'InjuryAshore');

-- CreateEnum
CREATE TYPE "CasualtyStatus" AS ENUM ('Deceased', 'Injured', 'Deserter', 'MOBMissing', 'MOBMortalRemainsRecovered', 'MOBSurvived');

-- CreateEnum
CREATE TYPE "Nationality" AS ENUM ('Indian', 'ForeignNational');

-- CreateEnum
CREATE TYPE "MaritalStatus" AS ENUM ('Single', 'Married', 'Divorced', 'Widowed');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('Male', 'Female');

-- CreateEnum
CREATE TYPE "Education" AS ENUM ('Tenth', 'Twelfth', 'Graduation', 'PostGraduation');

-- CreateEnum
CREATE TYPE "Bunkers" AS ENUM ('VLSFOHFO', 'VLSMMGODO', 'LO', 'LNG', 'OTHERS');

-- CreateEnum
CREATE TYPE "Flag" AS ENUM ('PANAMA', 'LIBERIA', 'MARSHALL_ISLANDS');

-- AlterTable
ALTER TABLE "Report" DROP COLUMN "deceasedDetails",
DROP COLUMN "injured",
DROP COLUMN "maxDraft",
ADD COLUMN     "causalFactors" TEXT,
ADD COLUMN     "companyName" TEXT,
ADD COLUMN     "contactNumber" TEXT,
ADD COLUMN     "desertion" INTEGER,
ADD COLUMN     "designation" TEXT,
ADD COLUMN     "draftAft" TEXT,
ADD COLUMN     "draftBefore" TEXT,
ADD COLUMN     "injuries" INTEGER,
ADD COLUMN     "lastUpdatedAt" TIMESTAMPTZ,
ADD COLUMN     "lastUpdatedBy" TEXT,
ADD COLUMN     "localAgencyAddress" TEXT,
ADD COLUMN     "localAgencyContactEmail" TEXT,
ADD COLUMN     "localAgencyContactPhone" TEXT,
ADD COLUMN     "manOverboardSurvived" INTEGER,
ADD COLUMN     "nextPortOfCall" TEXT,
ADD COLUMN     "reportedBy" TEXT,
ADD COLUMN     "rpsAgencyAddress" TEXT,
ADD COLUMN     "rpsAgencyContactEmail" TEXT,
ADD COLUMN     "rpsAgencyContactPhone" TEXT,
ADD COLUMN     "rpslNumber" TEXT,
ADD COLUMN     "sickness" INTEGER,
ALTER COLUMN "incidentDate" SET DATA TYPE TIMESTAMPTZ,
ALTER COLUMN "reportedAt" SET DATA TYPE TIMESTAMPTZ,
DROP COLUMN "flag",
ADD COLUMN     "flag" "Flag",
DROP COLUMN "shipType",
ADD COLUMN     "shipType" "ShipType",
DROP COLUMN "registrationType",
ADD COLUMN     "registrationType" "RegistrationType",
DROP COLUMN "locationOfVessel",
ADD COLUMN     "locationOfVessel" "LocationType",
DROP COLUMN "areaOfIncident",
ADD COLUMN     "areaOfIncident" "AreaType",
DROP COLUMN "conditionLoadedBallast",
ADD COLUMN     "conditionLoadedBallast" "ConditionType",
DROP COLUMN "severityOfIncident",
ADD COLUMN     "severityOfIncident" "SeverityType",
DROP COLUMN "bunkers",
ADD COLUMN     "bunkers" "Bunkers",
DROP COLUMN "ownershipType",
ADD COLUMN     "ownershipType" "OwnershipType",
DROP COLUMN "incidentCategory",
ADD COLUMN     "incidentCategory" "IncidentCategory",
DROP COLUMN "incidentConsequences",
ADD COLUMN     "incidentConsequences" "IncidentConsequence",
DROP COLUMN "sarRequired",
ADD COLUMN     "sarRequired" BOOLEAN,
ALTER COLUMN "createdAt" SET DATA TYPE TIMESTAMPTZ,
ALTER COLUMN "updatedAt" SET DATA TYPE TIMESTAMPTZ;

-- CreateTable
CREATE TABLE "Casualty" (
    "id" TEXT NOT NULL,
    "reportId" TEXT NOT NULL,
    "incidentSubCategory" "IncidentSubCategory",
    "name" TEXT NOT NULL,
    "status" "CasualtyStatus" NOT NULL,
    "nationality" "Nationality" NOT NULL,
    "residentialAddress" TEXT,
    "dateOfBirth" TIMESTAMP(3),
    "age" INTEGER,
    "rank" TEXT,
    "dateOfJoining" TIMESTAMP(3),
    "maritalStatus" "MaritalStatus",
    "gender" "Gender" NOT NULL,
    "education" "Education",
    "insuranceCover" TEXT,
    "cdcNumber" TEXT,
    "cdcPlaceOfIssue" TEXT,
    "passportNumber" TEXT,
    "passportPlaceOfIssue" TEXT,
    "indosNumber" TEXT,
    "cocNumber" TEXT,
    "cocIssueDate" TIMESTAMP(3),
    "cocPlaceOfIssue" TEXT,
    "maritimeTraining" TEXT,
    "collectiveBargaining" TEXT,
    "nextOfKinDetails" TEXT,
    "medicalReports" TEXT,
    "mortalRemainsStatus" TEXT,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "Casualty_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Casualty" ADD CONSTRAINT "Casualty_reportId_fkey" FOREIGN KEY ("reportId") REFERENCES "Report"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

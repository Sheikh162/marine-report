/*
  Warnings:

  - The values [OutsideIndianWaters200nm,IndianTerritorialWaters12nm,IndianEEZ12_200nm] on the enum `AreaType` will be removed. If these variants are still used in the database, this will fail.
  - The values [VLSFOHFO,VLSMMGODO] on the enum `Bunkers` will be removed. If these variants are still used in the database, this will fail.
  - The values [MOBMissing,MOBMortalRemainsRecovered,MOBSurvived] on the enum `CasualtyStatus` will be removed. If these variants are still used in the database, this will fail.
  - The values [PartlyLoaded] on the enum `ConditionType` will be removed. If these variants are still used in the database, this will fail.
  - The values [Tenth,Twelfth,PostGraduation] on the enum `Education` will be removed. If these variants are still used in the database, this will fail.
  - The values [PANAMA,LIBERIA,MARSHALL_ISLANDS] on the enum `Flag` will be removed. If these variants are still used in the database, this will fail.
  - The values [PersonnelRelated,FireExplosion,HijackingPiracy,LossOfContainment,WilfulDefault,LossOfAnchorRudderPropeller,SteeringFailure] on the enum `IncidentCategory` will be removed. If these variants are still used in the database, this will fail.
  - The values [DamageToProperty,EnvironmentalDamage,PersonnelMatters] on the enum `IncidentConsequence` will be removed. If these variants are still used in the database, this will fail.
  - The values [DeathOnBoard,ManOverboard,HomicideOnBoard,SuicideOnBoard,DrugAlcoholAbuseOnBoard,SicknessOnBoard,DeathAshore,MissingNotFound,MortalRemainsRecovered,InjuryOnBoard,InjuryDrugAlcoholAbuseOnBoard,InjuryAshore] on the enum `IncidentSubCategory` will be removed. If these variants are still used in the database, this will fail.
  - The values [AtSea,InPort] on the enum `LocationType` will be removed. If these variants are still used in the database, this will fail.
  - The values [ForeignNational] on the enum `Nationality` will be removed. If these variants are still used in the database, this will fail.
  - The values [ManOverboardSurvived] on the enum `PersonalMatter` will be removed. If these variants are still used in the database, this will fail.
  - The values [ForeignFlag,ForeignGoingIndianFlag,CoastalIndianFlag] on the enum `RegistrationType` will be removed. If these variants are still used in the database, this will fail.
  - The values [VerySeriousMarineCasualty,MarineCasualty,OtherCasualty] on the enum `SeverityType` will be removed. If these variants are still used in the database, this will fail.
  - The values [GeneralCargo,OilProductTanker,CrudeOilTanker,BulkCarrier,CarCarrier,PilotBoat,FishingBoat,DrillShip,PleasureYacht,ContainerVessel,ChemicalTanker,LPGTanker,CNGTanker,LNGTanker,OffshoreMultipurposeSurveyVessel,DynamicPSV,SurveyVessel,CementCarrier,LivestockCarrier] on the enum `ShipType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "AreaType_new" AS ENUM ('Outside Indian Waters (200nm+)', 'Indian Territorial Waters (12nm)', 'Indian EEZ (12-200nm)');
ALTER TABLE "Report" ALTER COLUMN "areaOfIncident" TYPE "AreaType_new" USING ("areaOfIncident"::text::"AreaType_new");
ALTER TYPE "AreaType" RENAME TO "AreaType_old";
ALTER TYPE "AreaType_new" RENAME TO "AreaType";
DROP TYPE "AreaType_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "Bunkers_new" AS ENUM ('VLSFO/HFO', 'VLSM/MGO/DO', 'LO', 'LNG', 'OTHERS');
ALTER TABLE "Report" ALTER COLUMN "bunkers" TYPE "Bunkers_new" USING ("bunkers"::text::"Bunkers_new");
ALTER TYPE "Bunkers" RENAME TO "Bunkers_old";
ALTER TYPE "Bunkers_new" RENAME TO "Bunkers";
DROP TYPE "Bunkers_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "CasualtyStatus_new" AS ENUM ('Deceased', 'Injured', 'Deserter', 'MOB - Missing', 'MOB - Mortal Remains Recovered', 'MOB - Survived');
ALTER TABLE "Casualty" ALTER COLUMN "status" TYPE "CasualtyStatus_new" USING ("status"::text::"CasualtyStatus_new");
ALTER TYPE "CasualtyStatus" RENAME TO "CasualtyStatus_old";
ALTER TYPE "CasualtyStatus_new" RENAME TO "CasualtyStatus";
DROP TYPE "CasualtyStatus_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "ConditionType_new" AS ENUM ('Loaded', 'Partly Loaded', 'Ballast');
ALTER TABLE "Report" ALTER COLUMN "conditionLoadedBallast" TYPE "ConditionType_new" USING ("conditionLoadedBallast"::text::"ConditionType_new");
ALTER TYPE "ConditionType" RENAME TO "ConditionType_old";
ALTER TYPE "ConditionType_new" RENAME TO "ConditionType";
DROP TYPE "ConditionType_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "Education_new" AS ENUM ('10th', '12th', 'Graduation', 'Post Graduation');
ALTER TABLE "Casualty" ALTER COLUMN "education" TYPE "Education_new" USING ("education"::text::"Education_new");
ALTER TYPE "Education" RENAME TO "Education_old";
ALTER TYPE "Education_new" RENAME TO "Education";
DROP TYPE "Education_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "Flag_new" AS ENUM ('Panama', 'Liberia', 'Marshall Islands');
ALTER TABLE "Report" ALTER COLUMN "flag" TYPE "Flag_new" USING ("flag"::text::"Flag_new");
ALTER TYPE "Flag" RENAME TO "Flag_old";
ALTER TYPE "Flag_new" RENAME TO "Flag";
DROP TYPE "Flag_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "IncidentCategory_new" AS ENUM ('Personnel Related', 'Collision', 'Grounding', 'Fire/Explosion', 'Flooding', 'Beaching', 'Sinking', 'Hijacking/Piracy', 'Loss of Containment', 'Wilful Default', 'Fouling', 'Loss of Anchor/Rudder/Propeller', 'Steering Failure', 'Capsizing');
ALTER TABLE "Report" ALTER COLUMN "incidentCategory" TYPE "IncidentCategory_new" USING ("incidentCategory"::text::"IncidentCategory_new");
ALTER TYPE "IncidentCategory" RENAME TO "IncidentCategory_old";
ALTER TYPE "IncidentCategory_new" RENAME TO "IncidentCategory";
DROP TYPE "IncidentCategory_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "IncidentConsequence_new" AS ENUM ('Damage to Property', 'Environmental Damage', 'Personnel Matters');
ALTER TABLE "Report" ALTER COLUMN "incidentConsequences" TYPE "IncidentConsequence_new" USING ("incidentConsequences"::text::"IncidentConsequence_new");
ALTER TYPE "IncidentConsequence" RENAME TO "IncidentConsequence_old";
ALTER TYPE "IncidentConsequence_new" RENAME TO "IncidentConsequence";
DROP TYPE "IncidentConsequence_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "IncidentSubCategory_new" AS ENUM ('Death On Board', 'Man Overboard', 'Homicide On Board', 'Suicide On Board', 'Drug/Alcohol Abuse On Board', 'Sickness On Board', 'Death Ashore', 'Missing/Not Found', 'Mortal Remains Recovered', 'Injury On Board', 'Injury - Drug/Alcohol Abuse On Board', 'Injury Ashore');
ALTER TABLE "Casualty" ALTER COLUMN "incidentSubCategory" TYPE "IncidentSubCategory_new" USING ("incidentSubCategory"::text::"IncidentSubCategory_new");
ALTER TYPE "IncidentSubCategory" RENAME TO "IncidentSubCategory_old";
ALTER TYPE "IncidentSubCategory_new" RENAME TO "IncidentSubCategory";
DROP TYPE "IncidentSubCategory_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "LocationType_new" AS ENUM ('At Sea', 'In Port');
ALTER TABLE "Report" ALTER COLUMN "locationOfVessel" TYPE "LocationType_new" USING ("locationOfVessel"::text::"LocationType_new");
ALTER TYPE "LocationType" RENAME TO "LocationType_old";
ALTER TYPE "LocationType_new" RENAME TO "LocationType";
DROP TYPE "LocationType_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "Nationality_new" AS ENUM ('Indian', 'Foreign National');
ALTER TABLE "Casualty" ALTER COLUMN "nationality" TYPE "Nationality_new" USING ("nationality"::text::"Nationality_new");
ALTER TYPE "Nationality" RENAME TO "Nationality_old";
ALTER TYPE "Nationality_new" RENAME TO "Nationality";
DROP TYPE "Nationality_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "PersonalMatter_new" AS ENUM ('Death', 'Injury', 'Sickness', 'Desertion', 'Man Overboard-Survived');
ALTER TYPE "PersonalMatter" RENAME TO "PersonalMatter_old";
ALTER TYPE "PersonalMatter_new" RENAME TO "PersonalMatter";
DROP TYPE "PersonalMatter_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "RegistrationType_new" AS ENUM ('Foreign Flag', 'Foreign Going - Indian Flag', 'Coastal (ICV/RSV) - Indian Flag');
ALTER TABLE "Report" ALTER COLUMN "registrationType" TYPE "RegistrationType_new" USING ("registrationType"::text::"RegistrationType_new");
ALTER TYPE "RegistrationType" RENAME TO "RegistrationType_old";
ALTER TYPE "RegistrationType_new" RENAME TO "RegistrationType";
DROP TYPE "RegistrationType_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "SeverityType_new" AS ENUM ('Very Serious Marine Casualty', 'Marine Casualty', 'Other Casualty');
ALTER TABLE "Report" ALTER COLUMN "severityOfIncident" TYPE "SeverityType_new" USING ("severityOfIncident"::text::"SeverityType_new");
ALTER TYPE "SeverityType" RENAME TO "SeverityType_old";
ALTER TYPE "SeverityType_new" RENAME TO "SeverityType";
DROP TYPE "SeverityType_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "ShipType_new" AS ENUM ('Tug', 'RoRo', 'Passenger', 'OSV', 'AHTS', 'General Cargo', 'Oil Product Tanker', 'Crude Oil Tanker', 'VLCC', 'Bulk Carrier', 'Barge', 'Car Carrier', 'Pilot Boat', 'Fishing Boat', 'Drill Ship', 'MSV', 'Pleasure Yacht', 'Container Vessel', 'Chemical Tanker', 'LPG Tanker', 'CNG Tanker', 'LNG Tanker', 'Dredger', 'Transhipper', 'Offshore Multipurpose Survey Vessel', 'MODU', 'Dynamic PSV', 'FPSO', 'Survey Vessel', 'Cement Carrier', 'Livestock Carrier');
ALTER TABLE "Report" ALTER COLUMN "shipType" TYPE "ShipType_new" USING ("shipType"::text::"ShipType_new");
ALTER TYPE "ShipType" RENAME TO "ShipType_old";
ALTER TYPE "ShipType_new" RENAME TO "ShipType";
DROP TYPE "ShipType_old";
COMMIT;

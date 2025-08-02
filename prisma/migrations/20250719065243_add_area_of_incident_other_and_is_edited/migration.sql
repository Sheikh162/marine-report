-- AlterTable
ALTER TABLE "Report" ADD COLUMN     "areaOfIncidentOther" TEXT,
ADD COLUMN     "isEdited" BOOLEAN NOT NULL DEFAULT false;

import { z } from 'zod';

export const reportSchema = z.object({
  id: z.string().uuid().optional(),

  shipName: z.string(),
  imoNumber: z.string(),
  incidentDate: z.coerce.date(),
  reportedAt: z.coerce.date(),

  dpaName: z.string(),
  dpaPhone: z.string(),
  dpaMobile: z.string(),
  dpaEmail: z.string().email(),

  userId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),

  mediaUrls: z.array(z.string()),

  flag: z.string().nullable().optional(),
  shipType: z.string().nullable().optional(),
  registrationType: z.string().nullable().optional(),
  positionOfVessel: z.string().nullable().optional(),
  locationOfVessel: z.string().nullable().optional(),
  areaOfIncident: z.string().nullable().optional(),
  yearBuilt: z.number().nullable().optional(),
  deadweight: z.string().nullable().optional(),
  gt: z.string().nullable().optional(),
  maxDraft: z.string().nullable().optional(),
  classificationSociety: z.string().nullable().optional(),
  piClub: z.string().nullable().optional(),

  hullMachineryUnderwriters: z.string().nullable().optional(),
  totalCrewOnBoard: z.number().nullable().optional(),
  conditionLoadedBallast: z.string().nullable().optional(),
  severityOfIncident: z.string().nullable().optional(),

  lastPortOfCall: z.string().nullable().optional(),
  freeboard: z.string().nullable().optional(),
  cargoTypeQty: z.string().nullable().optional(),
  bunkers: z.string().nullable().optional(),
  ownershipType: z.string().nullable().optional(),

  techManagerName: z.string().nullable().optional(),
  techManagerAddress: z.string().nullable().optional(),
  techManagerPhone: z.string().nullable().optional(),
  techManagerEmail: z.string().email().nullable().optional(),

  rpsAgencyName: z.string().nullable().optional(),
  rpsAgencyContactName: z.string().nullable().optional(),
  rpsAgencyPhone: z.string().nullable().optional(),
  rpsAgencyEmail: z.string().email().nullable().optional(),

  localAgencyName: z.string().nullable().optional(),
  localAgencyContactName: z.string().nullable().optional(),
  localAgencyPhone: z.string().nullable().optional(),
  localAgencyEmail: z.string().email().nullable().optional(),

  incidentCategory: z.string().nullable().optional(),
  incidentConsequences: z.string().nullable().optional(),

  deaths: z.number().nullable().optional(),
  injured: z.number().nullable().optional(),
  deceasedDetails: z.string().nullable().optional(),

  summaryIncident: z.string().nullable().optional(),
  summaryAction: z.string().nullable().optional(),
  lessonsLearnt: z.string().nullable().optional(),

  sarRequired: z.string().nullable().optional(),
  oilPollutionExtent: z.string().nullable().optional(),
  weatherConditions: z.string().nullable().optional(),
  tidalConditions: z.string().nullable().optional(),
  oilSpilledVolume: z.string().nullable().optional(),
});

export type Report = z.infer<typeof reportSchema>;

/* import { z } from 'zod';

export const reportSchema = z.object({
  shipName: z.string(),
  imoNumber: z.string(),
  incidentDate: z.string(), // Expected as ISO string
  reportedAt: z.string(),

  dpaName: z.string(),
  dpaPhone: z.string(),
  dpaMobile: z.string(),
  dpaEmail: z.string(),

  userId: z.string(),
  mediaUrls: z.array(z.string()),

  // Optional fields
  id: z.string().optional(),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
  flag: z.string().optional(),
  shipType: z.string().optional(),
  registrationType: z.string().optional(),
  positionOfVessel: z.string().optional(),
  locationOfVessel: z.string().optional(),
  areaOfIncident: z.string().optional(),
  yearBuilt: z.number().optional(),
  deadweight: z.string().optional(),
  gt: z.string().optional(),
  maxDraft: z.string().optional(),
  classificationSociety: z.string().optional(),
  piClub: z.string().optional(),

  hullMachineryUnderwriters: z.string().optional(),
  totalCrewOnBoard: z.number().optional(),
  conditionLoadedBallast: z.string().optional(),
  severityOfIncident: z.string().optional(),

  lastPortOfCall: z.string().optional(),
  freeboard: z.string().optional(),
  cargoTypeQty: z.string().optional(),
  bunkers: z.string().optional(),
  ownershipType: z.string().optional(),

  techManagerName: z.string().optional(),
  techManagerAddress: z.string().optional(),
  techManagerPhone: z.string().optional(),
  techManagerEmail: z.string().optional(),

  rpsAgencyName: z.string().optional(),
  rpsAgencyContactName: z.string().optional(),
  rpsAgencyPhone: z.string().optional(),
  rpsAgencyEmail: z.string().optional(),

  localAgencyName: z.string().optional(),
  localAgencyContactName: z.string().optional(),
  localAgencyPhone: z.string().optional(),
  localAgencyEmail: z.string().optional(),

  incidentCategory: z.string().optional(),
  incidentConsequences: z.string().optional(),

  deaths: z.number().optional(),
  injured: z.number().optional(),
  deceasedDetails: z.string().optional(),

  summaryIncident: z.string().optional(),
  summaryAction: z.string().optional(),
  lessonsLearnt: z.string().optional(),

  sarRequired: z.string().optional(),
  oilPollutionExtent: z.string().optional(),
  weatherConditions: z.string().optional(),
  tidalConditions: z.string().optional(),
  oilSpilledVolume: z.string().optional(),
});

// Optional: export inferred type
export type Report = z.infer<typeof reportSchema>;
 */
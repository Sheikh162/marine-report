import { z } from "zod";

export const reportSchema = z.object({
  id: z.string().uuid().optional(), // usually auto-generated therefore optional

  shipName: z.string(),
  imoNumber: z.string(),
  incidentDate: z.coerce.date(),
  reportedAt: z.coerce.date(),

  dpaName: z.string(),
  dpaPhone: z.string(),
  dpaMobile: z.string(),
  dpaEmail: z.string().email(),

  userId: z.string(),
  mediaUrls: z.array(z.string()).catch([]),

  createdAt: z.coerce.date().optional(), // below 2 generated on own therefore optional
  updatedAt: z.coerce.date().optional(),

  flag: z.string().optional().nullable(),
  shipType: z.string().optional().nullable(),
  registrationType: z.string().optional().nullable(),
  positionOfVessel: z.string().optional().nullable(),
  locationOfVessel: z.string().optional().nullable(),
  areaOfIncident: z.string().optional().nullable(),
  yearBuilt: z.number().int().nullish().catch(null),
  deadweight: z.string().optional().nullable(),
  gt: z.string().optional().nullable(),
  maxDraft: z.string().optional().nullable(),
  classificationSociety: z.string().optional().nullable(),
  piClub: z.string().optional().nullable(),

  hullMachineryUnderwriters: z.string().optional().nullable(),
  totalCrewOnBoard: z.number().int().nullish().catch(null),

  conditionLoadedBallast: z.string().optional().nullable(),
  severityOfIncident: z.string().optional().nullable(),

  lastPortOfCall: z.string().optional().nullable(),
  freeboard: z.string().optional().nullable(),
  cargoTypeQty: z.string().optional().nullable(),
  bunkers: z.string().optional().nullable(),
  ownershipType: z.string().optional().nullable(),

  techManagerName: z.string().optional().nullable(),
  techManagerAddress: z.string().optional().nullable(),
  techManagerPhone: z.string().optional().nullable(),
  techManagerEmail: z.string().email().nullable().catch(null),

  rpsAgencyName: z.string().optional().nullable(),
  rpsAgencyContactName: z.string().optional().nullable(),
  rpsAgencyPhone: z.string().optional().nullable(),
  rpsAgencyEmail: z.string().email().optional().nullable(),

  localAgencyName: z.string().optional().nullable(),
  localAgencyContactName: z.string().optional().nullable(),
  localAgencyPhone: z.string().optional().nullable(),
  localAgencyEmail: z.string().email().optional().nullable(),

  incidentCategory: z.string().optional().nullable(),
  incidentConsequences: z.string().optional().nullable(),

  deaths: z.number().int().nullish().catch(null),
  injured: z.number().int().nullish().catch(null),
  deceasedDetails: z.string().optional().nullable(),

  summaryIncident: z.string().optional().nullable(),
  summaryAction: z.string().optional().nullable(),
  lessonsLearnt: z.string().optional().nullable(),

  sarRequired: z.string().optional().nullable(),
  oilPollutionExtent: z.string().optional().nullable(),
  weatherConditions: z.string().optional().nullable(),
  tidalConditions: z.string().optional().nullable(),
  oilSpilledVolume: z.string().optional().nullable(),
});



export type Report = z.infer<typeof reportSchema>;

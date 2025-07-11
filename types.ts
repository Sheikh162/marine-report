import { z } from "zod";

// enum for all selection menus

export enum IncidentClassification {
  // change the values after asking dad
  MarineCasualty="Marine Casualty",
  NonOperationalIncident="Non-operational Incidents"
}

export enum ShipType {
  Tug = "Tug",
  RoRo = "RoRo",
  Passenger = "Passenger",
  OSV = "OSV",
  AHTS = "AHTS",
  GenCargo = "General Cargo",
  OilProductTanker = "Oil Product Tanker",
  CrudeOilTanker = "Crude Oil Tanker",
  VLCC = "VLCC",
  BulkCarrier = "Bulk Carrier",
  Barge = "Barge",
  CarCarrier = "Car Carrier",
  PilotBoat = "Pilot Boat",
  FishingBoat = "Fishing Boat",
  DrillShip = "Drill Ship",
  MSV = "MSV",
  PleasureYacht = "Pleasure Yacht",
  ContainerVessel = "Container Vessel",
  ChemicalTanker = "Chemical Tanker",
  LPGTanker = "LPG Tanker",
  CNGTanker = "CNG Tanker",
  LNGTanker = "LNG Tanker",
  Dredger = "Dredger",
  Transhipper = "Transhipper",
  OffshoreMultipurposeSurveyVessel = "Offshore Multipurpose Survey Vessel",
  MODU = "MODU",
  DynamicPSV = "Dynamic PSV",
  FPSO = "FPSO",
  SurveyVessel = "Survey Vessel",
  CementCarrier = "Cement Carrier",
  LivestockCarrier = "Livestock Carrier",
  Others="Others"
}

export enum RegistrationType {
  ForeignFlag = "Foreign Flag",
  ForeignGoingIndianFlag = "Foreign Going - Indian Flag",
  CoastalIndianFlag = "Coastal (ICV/RSV) - Indian Flag",
  Others="Others"
}

export enum LocationType {
  AtSea = "At Sea",
  InPortAndAnchorage = "In Port and anchorage",
  CoastalWaters="Coastal Waters",
  ApproachesToPort="Approaches to port",
  StraitsNarrowChannels="Straits/Narrow channels",
  DryDockAndRepairBerth="Dry Dock and Repair Berth"
}

export enum AreaType {
  OutsideIndianWaters200nm = "Outside Indian Waters (200nm+)",
  IndianTerritorialWaters12nm = "Indian Territorial Waters (12nm)",
  IndianEEZ12_200nm = "Indian EEZ (12-200nm)"
}

export enum ConditionType {
  Loaded = "Loaded",
  PartlyLoaded = "Partly Loaded",
  Ballast = "Ballast"
}

export enum OwnershipType {
  Owned = "Owned",
  Leased = "Leased",
  Chartered = "Chartered"
}

export enum SeverityType {
  VerySeriousMarineCasualty = "Very Serious Marine Casualty",
  MarineCasualty = "Marine Casualty",
  OtherCasualty = "Other Casualty"
}

export enum IncidentCategory {
  PersonnelRelated = "Personnel Related",
  Collision = "Collision",
  Grounding = "Grounding",
  FireExplosion = "Fire/Explosion",
  Flooding = "Flooding",
  Beaching = "Beaching",
  Sinking = "Sinking",
  HijackingPiracy = "Hijacking/Piracy",
  LossOfContainment = "Loss of Containment",
  WilfulDefault = "Wilful Default",
  Fouling = "Fouling",
  LossOfAnchorRudderPropeller = "Loss of Anchor/Rudder/Propeller",
  SteeringFailure = "Steering Failure",
  Capsizing = "Capsizing"
}

export enum IncidentConsequences {
  DamageToProperty = "Damage to Property",
  EnvironmentalDamage = "Environmental Damage",
  PersonnelMatters = "Personnel Matters"
}

export enum PersonalMatter {
  Death="Death",
  Injury="Injury",
  Sickness="Sickness",
  Desertion="Desertion",
  ManOverboardSurvived="Man Overboard-Survived"
}

export enum IncidentSubCategory {  
  // For Death
  DeathOnBoard = "Death On Board",
  ManOverboard = "Man Overboard",
  HomicideOnBoard = "Homicide On Board",
  SuicideOnBoard = "Suicide On Board",
  DrugAlcoholAbuseOnBoard = "Drug/Alcohol Abuse On Board",
  DeathAshore = "Death Ashore",
  MissingNotFound = "Missing/Not Found",
  MortalRemainsRecovered = "Mortal Remains Recovered",
  
  // For Injury
  InjuryOnBoard = "Injury On Board",
  InjuryDrugAlcoholAbuseOnBoard = "Injury - Drug/Alcohol Abuse On Board",
  InjuryAshore = "Injury Ashore",

  // For Sickness
  SicknessOnBoard = "Sickness On Board",
  SicknessOnBoardMedevac = "Sickness on Board - Medevac",
  SicknessOnBoardDeathAshore = "Sickness On Board - Death Ashore", 

  // For Desertion
  Desertion= "Desertion",

  // For Anything
  NonOccupationalIncidentMedevac="Non Occupational Incident - Medevac",
  ArrestedAshoreAndIncidentAshore="Arrested ashore & Incident ashore"


}

export enum CasualtyStatus {
  Deceased = "Deceased",
  Injured = "Injured",
  Deserter = "Deserter",
  MOBMissing = "MOB - Missing",
  MOBMortalRemainsRecovered = "MOB - Mortal Remains Recovered",
  MOBSurvived = "MOB - Survived"
}

export enum Nationality {
  Indian = "Indian",
  ForeignNational = "Foreign National"
}

export enum MaritalStatus {
  Single = "Single",
  Married = "Married",
  Divorced = "Divorced",
  Widowed = "Widowed"
}

export enum Gender {
  Male = "Male",
  Female = "Female"
}

export enum Education {
  Tenth = "10th",
  Twelfth = "12th",
  Graduation = "Graduation",
  PostGraduation = "Post Graduation"
}

//vlsfo/hfo, vlsm/mgo/do, lo, lng, others in metric tonnes

// Bunkers enum (from your schema)
export enum Bunkers {
  VLSFOHFO = "VLSFO/HFO",
  VLSMMGODO = "VLSM/MGO/DO",
  LO = "LO",
  LNG = "LNG",
  OTHERS ="OTHERS"
}

// Flag enum (example countries from your schema)
export enum Flag {
  PANAMA = "Panama",
  LIBERIA = "Liberia",
  MARSHALL_ISLANDS = "Marshall Islands"
  // Add more countries as needed
}

// Helper function to create enum schemas from Prisma enums
// Enum factory with nullish (allows null or undefined)
//const createEnumSchema = <T extends Record<string, string>>(enumObj: T) =>z.nativeEnum(enumObj).nullish();


export const casualtySchema = z.object({
  id: z.string().uuid().optional(),
  reportId: z.string().optional(),

  incidentSubCategory: z.string(),
  name: z.string(),

  status: z.string(),
  nationality: z.string(),

  residentialAddress: z.string().nullable().catch(null),
  dateOfBirth: z.coerce.date().nullable().catch(null),
  age: z.number().int().nullable().catch(null),
  rank: z.string().nullable().catch(null),
  dateOfJoining: z.coerce.date().nullable().catch(null),

  maritalStatus: z.string().nullable().catch(null),
  gender: z.string(),
  education: z.string().nullable().catch(null),

  insuranceCover: z.string().nullable().catch(null),
  cdcNumber: z.string().nullable().catch(null),
  cdcPlaceOfIssue: z.string().nullable().catch(null),
  passportNumber: z.string().nullable().catch(null),
  passportPlaceOfIssue: z.string().nullable().catch(null),
  indosNumber: z.string().nullable().catch(null),
  cocNumber: z.string().nullable().catch(null),

  cocIssueDate: z.coerce.date().nullable().catch(null),
  cocPlaceOfIssue: z.string().nullable().catch(null),
  maritimeTraining: z.string().nullable().catch(null),
  collectiveBargaining: z.string().nullable().catch(null),
  nextOfKinDetails: z.string().nullable().catch(null),
  medicalReports: z.string().nullable().catch(null),
  mortalRemainsStatus: z.string().nullable().catch(null),

  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});


export const reportSchema = z.object({
  id: z.string().uuid().optional(),
  userId: z.string(),

  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),

  reportedAt: z.coerce.date().optional(),
  incidentDate: z.coerce.date(),

  incidentClassification: z.string().nullable().catch(null),
  shipName: z.string(),
  imoNumber: z.string(),

  flag: z.string(), // required
  shipType: z.string(), // required
  registrationType: z.string().nullable().catch(null),
  positionOfVessel: z.string(), // required
  locationOfVessel: z.string(), // required
  areaOfIncident: z.string().nullable().catch(null),

  deadweight: z.string().nullable().catch(null),
  yearBuilt: z.number().int().nullable().catch(null),
  gt: z.string(),
  draftBefore: z.string().nullable().catch(null),
  draftAft: z.string().nullable().catch(null),
  freeboard: z.string().nullable().catch(null),

  cargoTypeQty: z.string(),
  bunkers: z.string().nullable().catch(null),
  classificationSociety: z.string(),
  lastPortOfCall: z.string(),
  nextPortOfCall: z.string(),

  piClub: z.string(),
  hullMachineryUnderwriters: z.string().nullable().catch(null),

  conditionLoadedBallast: z.string().nullable().catch(null),
  totalCrewOnBoard: z.number().int(),

  ownershipType: z.string().nullable().catch(null),
  techManagerName: z.string(),
  techManagerAddress: z.string().nullable().catch(null),
  techManagerPhone: z.string(),
  techManagerEmail: z.string(),

  dpaName: z.string(),
  dpaPhone: z.string(),
  dpaMobile: z.string(),
  dpaEmail: z.string().email(),

  rpsAgencyName: z.string().nullable().catch(null),
  rpsAgencyAddress: z.string().nullable().catch(null),
  rpsAgencyPhone: z.string().nullable().catch(null),
  rpsAgencyEmail: z.string().email().nullable().catch(null),

  rpsAgencyContactName: z.string().nullable().catch(null),
  rpsAgencyContactPhone: z.string().nullable().catch(null),
  rpsAgencyContactEmail: z.string().email().nullable().catch(null),

  rpslNumber: z.string().nullable().catch(null),
  localAgencyName: z.string().nullable().catch(null),
  localAgencyAddress: z.string().nullable().catch(null),
  localAgencyPhone: z.string().nullable().catch(null),
  localAgencyEmail: z.string().email().nullable().catch(null),
  localAgencyContactName: z.string().nullable().catch(null),
  localAgencyContactPhone: z.string().nullable().catch(null),
  localAgencyContactEmail: z.string().email().nullable().catch(null),

  severityOfIncident: z.string().nullable().catch(null),
  incidentCategory: z.string(),
  incidentConsequences: z.array(z.string()).default([]).catch([]),


  deaths: z.number().int(), // in frontend, give deafult val to 0 for both
  injured: z.number().int(),
  sickness: z.number().int().nullable().catch(null),
  desertion: z.number().int().nullable().catch(null),
  manOverboardSurvived: z.number().int().nullable().catch(null),

  casualties: z.array(casualtySchema).default([]),

  causalFactors: z.string().nullable().catch(null),
  summaryIncident: z.string().nullable().catch(null),
  summaryAction: z.string().nullable().catch(null),
  lessonsLearnt: z.string().nullable().catch(null),

  sarRequired: z.boolean().nullable().catch(null),
  oilPollutionExtent: z.string().nullable().catch(null),
  oilSpilledVolume: z.string().nullable().catch(null),
  weatherConditions: z.string().nullable().catch(null),
  tidalConditions: z.string().nullable().catch(null),

  reportedBy: z.string(),
  companyName: z.string(),
  designation: z.string(),
  contactNumber: z.string(),
  lastUpdatedBy: z.string().nullable().catch(null),
  lastUpdatedAt: z.coerce.date().nullable().catch(null),

  mediaUrls: z.array(z.string()).default([]).catch([]),
});


// Sanitizer function
export function sanitizeForPrisma<T>(obj: T): T {
  return JSON.parse(
    JSON.stringify(obj, (_, v) => (v === undefined ? null : v))
  );
}

export type Report = z.infer<typeof reportSchema>;
export type Casualty = z.infer<typeof casualtySchema>;

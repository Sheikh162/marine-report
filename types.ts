import { z } from "zod";

// enum for all selection menus
export enum IncidentClassification {
  MarineCasualty="Marine Casualty",
  NonOperationalIncident="Non-operational Incidents"
}
// ... (all your other enums like ShipType, RegistrationType, etc. remain here)
export enum ShipType {
  Tug = "Tug", RoRo = "RoRo", Passenger = "Passenger", OSV = "OSV", AHTS = "AHTS", GenCargo = "General Cargo", OilProductTanker = "Oil Product Tanker", CrudeOilTanker = "Crude Oil Tanker", VLCC = "VLCC", BulkCarrier = "Bulk Carrier", Barge = "Barge", CarCarrier = "Car Carrier", PilotBoat = "Pilot Boat", FishingBoat = "Fishing Boat", DrillShip = "Drill Ship", MSV = "MSV", PleasureYacht = "Pleasure Yacht", ContainerVessel = "Container Vessel", ChemicalTanker = "Chemical Tanker", LPGTanker = "LPG Tanker", CNGTanker = "CNG Tanker", LNGTanker = "LNG Tanker", Dredger = "Dredger", Transhipper = "Transhipper", OffshoreMultipurposeSurveyVessel = "Offshore Multipurpose Survey Vessel", MODU = "MODU", DynamicPSV = "Dynamic PSV", FPSO = "FPSO", SurveyVessel = "Survey Vessel", CementCarrier = "Cement Carrier", LivestockCarrier = "Livestock Carrier", Others="Others"
}
export enum RegistrationType {
  ForeignFlag = "Foreign Flag", ForeignGoingIndianFlag = "Foreign Going - Indian Flag", CoastalIndianFlag = "Coastal (ICV/RSV) - Indian Flag", Others="Others"
}
export enum LocationType {
  AtSea = "At Sea", InPortAndAnchorage = "In Port and anchorage", CoastalWaters="Coastal Waters", ApproachesToPort="Approaches to port", StraitsNarrowChannels="Straits/Narrow channels", DryDockAndRepairBerth="Dry Dock and Repair Berth"
}
export enum AreaType {
  OutsideIndianWaters200nm = "Outside Indian Waters (200nm+)", IndianTerritorialWaters12nm = "Indian Territorial Waters (12nm)", IndianEEZ12_200nm = "Indian EEZ (12-200nm)"
}
export enum ConditionType {
  Loaded = "Loaded", PartlyLoaded = "Partly Loaded", Ballast = "Ballast"
}
export enum OwnershipType {
  Owned = "Owned", Leased = "Leased", Chartered = "Chartered"
}
export enum SeverityType {
  VerySeriousMarineCasualty = "Very Serious Marine Casualty", MarineCasualty = "Marine Casualty", OtherCasualty = "Other Casualty"
}
export enum IncidentCategory {
  PersonnelRelated = "Personnel Related", Collision = "Collision", Grounding = "Grounding", FireExplosion = "Fire/Explosion", Flooding = "Flooding", Beaching = "Beaching", Sinking = "Sinking", HijackingPiracy = "Hijacking/Piracy", LossOfContainment = "Loss of Containment", WilfulDefault = "Wilful Default", Fouling = "Fouling", LossOfAnchorRudderPropeller = "Loss of Anchor/Rudder/Propeller", SteeringFailure = "Steering Failure", Capsizing = "Capsizing"
}
export enum IncidentConsequences {
  DamageToProperty = "Damage to Property", EnvironmentalDamage = "Environmental Damage", PersonnelMatters = "Personnel Matters (Casualty)"
}
export enum CasualtyStatus {
  Deceased = "Deceased", Injured = "Injured", Deserter = "Deserter", MOBMissing = "MOB - Missing", MOBMortalRemainsRecovered = "MOB - Mortal Remains Recovered", MOBSurvived = "MOB - Survived"
}
export enum IncidentSubCategory {  
  DeathOnBoard = "Death On Board", ManOverboard = "Man Overboard", HomicideOnBoard = "Homicide On Board", SuicideOnBoard = "Suicide On Board", DrugAlcoholAbuseOnBoard = "Drug/Alcohol Abuse On Board", DeathAshore = "Death Ashore", MissingNotFound = "Missing/Not Found", MortalRemainsRecovered = "Mortal Remains Recovered", InjuryOnBoard = "Injury On Board", InjuryDrugAlcoholAbuseOnBoard = "Injury - Drug/Alcohol Abuse On Board", InjuryAshore = "Injury Ashore", SicknessOnBoard = "Sickness On Board", SicknessOnBoardMedevac = "Sickness on Board - Medevac", SicknessOnBoardDeathAshore = "Sickness On Board - Death Ashore", Desertion= "Desertion", NonOccupationalIncidentMedevac="Non Occupational Incident - Medevac", ArrestedAshoreAndIncidentAshore="Arrested ashore & Incident ashore"
}
export enum Nationality {
  AF = "Afghanistan", AL = "Albania", DZ = "Algeria", AD = "Andorra", AO = "Angola", AR = "Argentina", AM = "Armenia", AU = "Australia", AT = "Austria", BD = "Bangladesh", BE = "Belgium", BT = "Bhutan", BR = "Brazil", CA = "Canada", CN = "China", DK = "Denmark", EG = "Egypt", FI = "Finland", FR = "France", DE = "Germany", GR = "Greece", IN = "India", ID = "Indonesia", IE = "Ireland", IT = "Italy", JP = "Japan", MY = "Malaysia", NL = "Netherlands", NZ = "New Zealand", NO = "Norway", PK = "Pakistan", RU = "Russia", SA = "Saudi Arabia", SG = "Singapore", ZA = "South Africa", KR = "South Korea", ES = "Spain", LK = "Sri Lanka", SE = "Sweden", CH = "Switzerland", TH = "Thailand", AE = "United Arab Emirates", GB = "United Kingdom", US = "United States", VN = "Vietnam"
}
export enum MaritalStatus {
  Single = "Single", Married = "Married", Divorced = "Divorced", Widowed = "Widowed"
}
export enum Gender {
  Male = "Male", Female = "Female"
}
export enum Education {
  Tenth = "10th", Twelfth = "12th", Graduation = "Graduation", PostGraduation = "Post Graduation"
}
export enum Bunkers {
  VLSFOHFO = "VLSFO/HFO", VLSMMGODO = "VLSM/MGO/DO", LO = "LO", LNG = "LNG", OTHERS ="OTHERS"
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
  yearBuilt: z.coerce.date().optional(),//z.number().int().nullable().catch(null), // change this to date
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
  //incidentConsequences: z.array(z.string()).default([]).catch([]),
  incidentConsequences: z.array(z.nativeEnum(IncidentConsequences)).default([]).catch([]),


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


/* // types.ts
import { z } from "zod";

// --- ENUMS ---
// Enums are kept as they are, providing a single source of truth for selectable options.
export enum IncidentClassification {
  MarineCasualty="Marine Casualty",
  NonOperationalIncident="Non-operational Incidents"
}
export enum ShipType {
  Tug = "Tug", RoRo = "RoRo", Passenger = "Passenger", OSV = "OSV", AHTS = "AHTS", GenCargo = "General Cargo", OilProductTanker = "Oil Product Tanker", CrudeOilTanker = "Crude Oil Tanker", VLCC = "VLCC", BulkCarrier = "Bulk Carrier", Barge = "Barge", CarCarrier = "Car Carrier", PilotBoat = "Pilot Boat", FishingBoat = "Fishing Boat", DrillShip = "Drill Ship", MSV = "MSV", PleasureYacht = "Pleasure Yacht", ContainerVessel = "Container Vessel", ChemicalTanker = "Chemical Tanker", LPGTanker = "LPG Tanker", CNGTanker = "CNG Tanker", LNGTanker = "LNG Tanker", Dredger = "Dredger", Transhipper = "Transhipper", OffshoreMultipurposeSurveyVessel = "Offshore Multipurpose Survey Vessel", MODU = "MODU", DynamicPSV = "Dynamic PSV", FPSO = "FPSO", SurveyVessel = "Survey Vessel", CementCarrier = "Cement Carrier", LivestockCarrier = "Livestock Carrier", Others="Others"
}
export enum RegistrationType {
  ForeignFlag = "Foreign Flag", ForeignGoingIndianFlag = "Foreign Going - Indian Flag", CoastalIndianFlag = "Coastal (ICV/RSV) - Indian Flag", Others="Others"
}
export enum LocationType {
  AtSea = "At Sea", InPortAndAnchorage = "In Port and anchorage", CoastalWaters="Coastal Waters", ApproachesToPort="Approaches to port", StraitsNarrowChannels="Straits/Narrow channels", DryDockAndRepairBerth="Dry Dock and Repair Berth"
}
export enum AreaType {
  OutsideIndianWaters200nm = "Outside Indian Waters (200nm+)", IndianTerritorialWaters12nm = "Indian Territorial Waters (12nm)", IndianEEZ12_200nm = "Indian EEZ (12-200nm)"
}
export enum ConditionType {
  Loaded = "Loaded", PartlyLoaded = "Partly Loaded", Ballast = "Ballast"
}
export enum OwnershipType {
  Owned = "Owned", Leased = "Leased", Chartered = "Chartered"
}
export enum SeverityType {
  VerySeriousMarineCasualty = "Very Serious Marine Casualty", MarineCasualty = "Marine Casualty", OtherCasualty = "Other Casualty"
}
export enum IncidentCategory {
  PersonnelRelated = "Personnel Related", Collision = "Collision", Grounding = "Grounding", FireExplosion = "Fire/Explosion", Flooding = "Flooding", Beaching = "Beaching", Sinking = "Sinking", HijackingPiracy = "Hijacking/Piracy", LossOfContainment = "Loss of Containment", WilfulDefault = "Wilful Default", Fouling = "Fouling", LossOfAnchorRudderPropeller = "Loss of Anchor/Rudder/Propeller", SteeringFailure = "Steering Failure", Capsizing = "Capsizing"
}
export enum IncidentConsequences {
  DamageToProperty = "Damage to Property", EnvironmentalDamage = "Environmental Damage", PersonnelMatters = "Personnel Matters (Casualty)"
}
export enum CasualtyStatus {
  Deceased = "Deceased", Injured = "Injured", Deserter = "Deserter", MOBMissing = "MOB - Missing", MOBMortalRemainsRecovered = "MOB - Mortal Remains Recovered", MOBSurvived = "MOB - Survived"
}
export enum IncidentSubCategory {  
  DeathOnBoard = "Death On Board", ManOverboard = "Man Overboard", HomicideOnBoard = "Homicide On Board", SuicideOnBoard = "Suicide On Board", DrugAlcoholAbuseOnBoard = "Drug/Alcohol Abuse On Board", DeathAshore = "Death Ashore", MissingNotFound = "Missing/Not Found", MortalRemainsRecovered = "Mortal Remains Recovered", InjuryOnBoard = "Injury On Board", InjuryDrugAlcoholAbuseOnBoard = "Injury - Drug/Alcohol Abuse On Board", InjuryAshore = "Injury Ashore", SicknessOnBoard = "Sickness On Board", SicknessOnBoardMedevac = "Sickness on Board - Medevac", SicknessOnBoardDeathAshore = "Sickness On Board - Death Ashore", Desertion= "Desertion", NonOccupationalIncidentMedevac="Non Occupational Incident - Medevac", ArrestedAshoreAndIncidentAshore="Arrested ashore & Incident ashore"
}
export enum Nationality {
  AF = "Afghanistan", AL = "Albania", DZ = "Algeria", AD = "Andorra", AO = "Angola", AR = "Argentina", AM = "Armenia", AU = "Australia", AT = "Austria", BD = "Bangladesh", BE = "Belgium", BT = "Bhutan", BR = "Brazil", CA = "Canada", CN = "China", DK = "Denmark", EG = "Egypt", FI = "Finland", FR = "France", DE = "Germany", GR = "Greece", IN = "India", ID = "Indonesia", IE = "Ireland", IT = "Italy", JP = "Japan", MY = "Malaysia", NL = "Netherlands", NZ = "New Zealand", NO = "Norway", PK = "Pakistan", RU = "Russia", SA = "Saudi Arabia", SG = "Singapore", ZA = "South Africa", KR = "South Korea", ES = "Spain", LK = "Sri Lanka", SE = "Sweden", CH = "Switzerland", TH = "Thailand", AE = "United Arab Emirates", GB = "United Kingdom", US = "United States", VN = "Vietnam"
}
export enum MaritalStatus {
  Single = "Single", Married = "Married", Divorced = "Divorced", Widowed = "Widowed"
}
export enum Gender {
  Male = "Male", Female = "Female"
}
export enum Education {
  Tenth = "10th", Twelfth = "12th", Graduation = "Graduation", PostGraduation = "Post Graduation"
}
export enum Bunkers {
  VLSFOHFO = "VLSFO/HFO", VLSMMGODO = "VLSM/MGO/DO", LO = "LO", LNG = "LNG", OTHERS ="OTHERS"
}

// --- ZOD SCHEMAS ---

export const casualtySchema = z.object({
  id: z.string().uuid().optional(),
  reportId: z.string().optional(),
  name: z.string().min(1, "Full Name is required."),
  status: z.nativeEnum(CasualtyStatus),
  incidentSubCategory: z.nativeEnum(IncidentSubCategory),
  nationality: z.nativeEnum(Nationality),
  residentialAddress: z.string().optional().nullable(),
  dateOfBirth: z.date().optional().nullable(),
  age: z.number().int().positive("Age must be a positive number.").optional().nullable(),
  rank: z.string().optional().nullable(),
  dateOfJoining: z.date().optional().nullable(),
  maritalStatus: z.nativeEnum(MaritalStatus).optional().nullable(),
  gender: z.nativeEnum(Gender),
  education: z.nativeEnum(Education).optional().nullable(),
  insuranceCover: z.string().optional().nullable(),
  cdcNumber: z.string().optional().nullable(),
  cdcPlaceOfIssue: z.string().optional().nullable(),
  passportNumber: z.string().optional().nullable(),
  passportPlaceOfIssue: z.string().optional().nullable(),
  indosNumber: z.string().optional().nullable(),
  cocNumber: z.string().optional().nullable(),
  cocIssueDate: z.date().optional().nullable(),
  cocPlaceOfIssue: z.string().optional().nullable(),
  maritimeTraining: z.string().optional().nullable(),
  collectiveBargaining: z.string().optional().nullable(),
  nextOfKinDetails: z.string().optional().nullable(),
  medicalReports: z.string().optional().nullable(),
  mortalRemainsStatus: z.string().optional().nullable(),
});

export const reportSchema = z.object({
  id: z.string().uuid().optional(),
  userId: z.string(),//.optional(), // Often handled server-side
  
  // Section 1
  incidentClassification: z.nativeEnum(IncidentClassification).optional().nullable(),
  shipName: z.string().min(1, "Ship Name is required."),
  imoNumber: z.string().min(1, "IMO Number is required."),
  flag: z.string().min(1, "Flag is required."),
  shipType: z.nativeEnum(ShipType),
  registrationType: z.nativeEnum(RegistrationType).optional().nullable(),
  positionOfVessel: z.string().min(1, "Position is required."),
  locationOfVessel: z.nativeEnum(LocationType),
  areaOfIncident: z.nativeEnum(AreaType).optional().nullable(),
  deadweight: z.string().optional().nullable(),
  yearBuilt: z.date().optional().nullable(),
  gt: z.string().min(1, "Gross Tonnage is required."),
  draftBefore: z.string().optional().nullable(),
  draftAft: z.string().optional().nullable(),
  freeboard: z.string().optional().nullable(),
  cargoTypeQty: z.string().min(1, "Cargo Info is required."),
  bunkers: z.nativeEnum(Bunkers).optional().nullable(),
  classificationSociety: z.string().min(1, "Classification Society is required."),
  lastPortOfCall: z.string().min(1, "Last Port of Call is required."),
  nextPortOfCall: z.string().min(1, "Next Port of Call is required."),
  piClub: z.string().min(1, "P&I Club is required."),
  hullMachineryUnderwriters: z.string().optional().nullable(),
  conditionLoadedBallast: z.nativeEnum(ConditionType).optional().nullable(),
  totalCrewOnBoard: z.number().int().min(0, "Crew count cannot be negative."),
  incidentDate: z.date({ required_error: "Date of Incident is required." }),

  // Section 2
  ownershipType: z.nativeEnum(OwnershipType).optional().nullable(),
  techManagerName: z.string().min(1, "Manager Name is required."),
  techManagerAddress: z.string().optional().nullable(),
  techManagerPhone: z.string().min(1, "Manager Phone is required."),
  techManagerEmail: z.string().email(),
  dpaName: z.string().min(1, "DPA Name is required."),
  dpaPhone: z.string().min(1, "DPA Phone is required."),
  dpaMobile: z.string().min(1, "DPA Mobile is required."),
  dpaEmail: z.string().email(),
  
  // Section 3
  severityOfIncident: z.nativeEnum(SeverityType).optional().nullable(),
  incidentCategory: z.nativeEnum(IncidentCategory),
  incidentConsequences: z.array(z.nativeEnum(IncidentConsequences)).optional().default([]),
  deaths: z.number().int().min(0).default(0),
  injured: z.number().int().min(0).default(0),
  sickness: z.number().int().min(0).optional().nullable(),
  desertion: z.number().int().min(0).optional().nullable(),
  manOverboardSurvived: z.number().int().min(0).optional().nullable(),
  casualties: z.array(casualtySchema).optional().default([]),
  summaryIncident: z.string().optional().nullable(),
  summaryAction: z.string().optional().nullable(),
  causalFactors: z.string().optional().nullable(),
  lessonsLearnt: z.string().optional().nullable(),

  // Section 4
  sarRequired: z.boolean().optional().nullable(),
  oilPollutionExtent: z.string().optional().nullable(),
  oilSpilledVolume: z.string().optional().nullable(),
  weatherConditions: z.string().optional().nullable(),
  tidalConditions: z.string().optional().nullable(),
  //mediaUrls: z.array(z.string()).optional().default([]),
  mediaUrls: z.array(z.string()).default([]).catch([]),
  reportedBy: z.string().min(1, "Reported By is required."),
  companyName: z.string().min(1, "Company Name is required."),
  designation: z.string().min(1, "Designation is required."),
  contactNumber: z.string().min(1, "Contact Number is required."),
});

// Sanitizer function
export function sanitizeForPrisma<T>(obj: T): T {
  return JSON.parse(
    JSON.stringify(obj, (_, v) => (v === undefined ? null : v))
  );
}

export type Report = z.infer<typeof reportSchema>;
export type Casualty = z.infer<typeof casualtySchema>; */



/* export type Report = z.infer<typeof reportSchema>;
export type Casualty = z.infer<typeof casualtySchema>; */




/* 


// types.ts


// --- ENUMS ---
// It's a good practice to keep enums consistent. Let's use them directly.


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
  AF = "Afghanistan",
  AL = "Albania",
  DZ = "Algeria",
  AD = "Andorra",
  AO = "Angola",
  AR = "Argentina",
  AM = "Armenia",
  AU = "Australia",
  AT = "Austria",
  BD = "Bangladesh",
  BE = "Belgium",
  BT = "Bhutan",
  BR = "Brazil",
  CA = "Canada",
  CN = "China",
  DK = "Denmark",
  EG = "Egypt",
  FI = "Finland",
  FR = "France",
  DE = "Germany",
  GR = "Greece",
  IN = "India",
  ID = "Indonesia",
  IE = "Ireland",
  IT = "Italy",
  JP = "Japan",
  MY = "Malaysia",
  NL = "Netherlands",
  NZ = "New Zealand",
  NO = "Norway",
  PK = "Pakistan",
  RU = "Russia",
  SA = "Saudi Arabia",
  SG = "Singapore",
  ZA = "South Africa",
  KR = "South Korea",
  ES = "Spain",
  LK = "Sri Lanka",
  SE = "Sweden",
  CH = "Switzerland",
  TH = "Thailand",
  AE = "United Arab Emirates",
  GB = "United Kingdom",
  US = "United States",
  VN = "Vietnam"
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
  AF = "Afghanistan",
  AL = "Albania",
  DZ = "Algeria",
  AD = "Andorra",
  AO = "Angola",
  AR = "Argentina",
  AM = "Armenia",
  AU = "Australia",
  AT = "Austria",
  BD = "Bangladesh",
  BE = "Belgium",
  BT = "Bhutan",
  BR = "Brazil",
  CA = "Canada",
  CN = "China",
  DK = "Denmark",
  EG = "Egypt",
  FI = "Finland",
  FR = "France",
  DE = "Germany",
  GR = "Greece",
  IN = "India",
  ID = "Indonesia",
  IE = "Ireland",
  IT = "Italy",
  JP = "Japan",
  MY = "Malaysia",
  NL = "Netherlands",
  NZ = "New Zealand",
  NO = "Norway",
  PK = "Pakistan",
  RU = "Russia",
  SA = "Saudi Arabia",
  SG = "Singapore",
  ZA = "South Africa",
  KR = "South Korea",
  ES = "Spain",
  LK = "Sri Lanka",
  SE = "Sweden",
  CH = "Switzerland",
  TH = "Thailand",
  AE = "United Arab Emirates",
  GB = "United Kingdom",
  US = "United States",
  VN = "Vietnam"
}


// --- ZOD SCHEMAS ---

export const casualtySchema = z.object({
  id: z.string().uuid().optional(),
  reportId: z.string().optional(),
  name: z.string().min(1, "Full Name is required."),
  status: z.nativeEnum(CasualtyStatus),
  incidentSubCategory: z.nativeEnum(IncidentSubCategory),
  nationality: z.nativeEnum(Nationality),
  residentialAddress: z.string().optional().nullable(),
  dateOfBirth: z.date().optional().nullable(),
  age: z.number().int().positive().optional().nullable(),
  rank: z.string().optional().nullable(),
  dateOfJoining: z.date().optional().nullable(),
  maritalStatus: z.nativeEnum(MaritalStatus).optional().nullable(),
  gender: z.nativeEnum(Gender),
  education: z.nativeEnum(Education).optional().nullable(),
  insuranceCover: z.string().optional().nullable(),
  cdcNumber: z.string().optional().nullable(),
  cdcPlaceOfIssue: z.string().optional().nullable(),
  passportNumber: z.string().optional().nullable(),
  passportPlaceOfIssue: z.string().optional().nullable(),
  indosNumber: z.string().optional().nullable(),
  cocNumber: z.string().optional().nullable(),
  cocIssueDate: z.date().optional().nullable(),
  cocPlaceOfIssue: z.string().optional().nullable(),
  maritimeTraining: z.string().optional().nullable(),
  collectiveBargaining: z.string().optional().nullable(),
  nextOfKinDetails: z.string().optional().nullable(),
  medicalReports: z.string().optional().nullable(),
  mortalRemainsStatus: z.string().optional().nullable(),
});

export const reportSchema = z.object({
  // Section 1
  incidentClassification: z.nativeEnum(IncidentClassification),
  shipName: z.string().min(1, "Ship Name is required."),
  imoNumber: z.string().min(1, "IMO Number is required."),
  flag: z.string().min(1, "Flag is required."),
  shipType: z.nativeEnum(ShipType),
  registrationType: z.nativeEnum(RegistrationType).optional().nullable(),
  positionOfVessel: z.string().min(1, "Position is required."),
  locationOfVessel: z.nativeEnum(LocationType),
  areaOfIncident: z.nativeEnum(AreaType).optional().nullable(),
  deadweight: z.string().optional().nullable(),
  yearBuilt: z.date().optional().nullable(),
  gt: z.string().min(1, "Gross Tonnage is required."),
  draftBefore: z.string().optional().nullable(),
  draftAft: z.string().optional().nullable(),
  freeboard: z.string().optional().nullable(),
  cargoTypeQty: z.string().min(1, "Cargo Info is required."),
  bunkers: z.nativeEnum(Bunkers).optional().nullable(),
  classificationSociety: z.string().min(1, "Classification Society is required."),
  lastPortOfCall: z.string().min(1, "Last Port of Call is required."),
  nextPortOfCall: z.string().min(1, "Next Port of Call is required."),
  piClub: z.string().min(1, "P&I Club is required."),
  hullMachineryUnderwriters: z.string().optional().nullable(),
  conditionLoadedBallast: z.nativeEnum(ConditionType).optional().nullable(),
  totalCrewOnBoard: z.number().int().min(0, "Crew count cannot be negative."),
  incidentDate: z.date({ required_error: "Date of Incident is required." }),

  // Section 2
  ownershipType: z.nativeEnum(OwnershipType).optional().nullable(),
  techManagerName: z.string().min(1, "Manager Name is required."),
  techManagerAddress: z.string().optional().nullable(),
  techManagerPhone: z.string().min(1, "Manager Phone is required."),
  techManagerEmail: z.string().email(),
  dpaName: z.string().min(1, "DPA Name is required."),
  dpaPhone: z.string().min(1, "DPA Phone is required."),
  dpaMobile: z.string().min(1, "DPA Mobile is required."),
  dpaEmail: z.string().email(),
  // ... other optional agency fields
  
  // Section 3
  severityOfIncident: z.nativeEnum(SeverityType).optional().nullable(),
  incidentCategory: z.nativeEnum(IncidentCategory),
  incidentConsequences: z.array(z.nativeEnum(IncidentConsequences)).optional().default([]),
  deaths: z.number().int().min(0).default(0),
  injured: z.number().int().min(0).default(0),
  sickness: z.number().int().min(0).optional().nullable(),
  desertion: z.number().int().min(0).optional().nullable(),
  manOverboardSurvived: z.number().int().min(0).optional().nullable(),
  casualties: z.array(casualtySchema).optional().default([]),
  summaryIncident: z.string().optional().nullable(),
  summaryAction: z.string().optional().nullable(),
  causalFactors: z.string().optional().nullable(),
  lessonsLearnt: z.string().optional().nullable(),

  // Section 4
  sarRequired: z.boolean().default(false),
  oilPollutionExtent: z.string().optional().nullable(),
  oilSpilledVolume: z.string().optional().nullable(),
  weatherConditions: z.string().optional().nullable(),
  tidalConditions: z.string().optional().nullable(),
  mediaUrls: z.string().optional().nullable(), // Assuming single string for comma-separated
  reportedBy: z.string().min(1, "Reported By is required."),
  companyName: z.string().min(1, "Company Name is required."),
  designation: z.string().min(1, "Designation is required."),
  contactNumber: z.string().min(1, "Contact Number is required."),
});

export type Report = z.infer<typeof reportSchema>;
export type Casualty = z.infer<typeof casualtySchema>;
 */
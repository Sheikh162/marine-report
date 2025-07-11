import { prisma } from '@/lib/prisma';
import { reportSchema, IncidentClassification, IncidentConsequences } from '@/types';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import CasualtyDetails from '@/components/CasualtyDetails';

export default async function UserSingleReportPage({params}: { params: { reportId: string } }) {
  const reportId = params.reportId;
  const report = await prisma.report.findUnique({ 
    where: { id: reportId },
    include: {
      casualties: true
    }
  });

  if (!report) return notFound();
  
  const validatedReport = reportSchema.parse(report);
  const casualties = report.casualties;

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className='flex justify-between mb-4'>
        <h1 className="text-2xl font-bold text-black">Your Submitted Report</h1>
        <Link href={`/admin/${params.reportId}/edit`}>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Edit
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-white border rounded-lg p-6 mb-6">
        {/* Incident Classification */}
        <h2 className="col-span-full text-lg font-semibold text-gray-800 border-b pb-2 mb-2">
          0. Broad Classification of Incidents
        </h2>
        <Info label="Incident Classification" value={validatedReport.incidentClassification} />
        
        {/* Ship/Reporting Information */}
        <h2 className="col-span-full text-lg font-semibold text-gray-800 border-b pb-2 mb-2">
          1. Ship & Reporting Information
        </h2>
        <Info label="Created At" value={new Date(validatedReport.createdAt as Date).toLocaleString()} />
        <Info label="Updated At" value={new Date(validatedReport.updatedAt as Date).toLocaleString()} />
        <Info label="Reported At" value={new Date(validatedReport.reportedAt as Date).toLocaleString()} />
        <Info label="Incident Date" value={new Date(validatedReport.incidentDate).toLocaleString()} />
        <Info label="Ship Name" value={validatedReport.shipName} />
        <Info label="IMO Number" value={validatedReport.imoNumber} />
        <Info label="Flag" value={validatedReport.flag} />
        <Info label="Ship Type" value={validatedReport.shipType} />
        <Info label="Registration Type" value={validatedReport.registrationType} />
        <Info label="Position of Vessel" value={validatedReport.positionOfVessel} />
        <Info label="Location of Vessel" value={validatedReport.locationOfVessel} />
        <Info label="Area of Incident" value={validatedReport.areaOfIncident} />
        <Info label="Deadweight" value={validatedReport.deadweight} />
        <Info label="Year Built" value={validatedReport.yearBuilt?.toString()} />
        <Info label="Gross Tonnage (GT)" value={validatedReport.gt} />
        <Info label="Draft Before" value={validatedReport.draftBefore} />
        <Info label="Draft Aft" value={validatedReport.draftAft} />
        <Info label="Freeboard" value={validatedReport.freeboard} />
        <Info label="Cargo Type & Quantity" value={validatedReport.cargoTypeQty} />
        <Info label="Bunkers" value={validatedReport.bunkers} />
        <Info label="Classification Society" value={validatedReport.classificationSociety} />
        <Info label="Last Port of Call" value={validatedReport.lastPortOfCall} />
        <Info label="Next Port of Call" value={validatedReport.nextPortOfCall} />
        <Info label="P&I Club" value={validatedReport.piClub} />
        <Info label="Hull & Machinery Underwriters" value={validatedReport.hullMachineryUnderwriters} />
        <Info label="Condition Loaded/Ballast" value={validatedReport.conditionLoadedBallast} />
        <Info label="Total Crew On Board" value={validatedReport.totalCrewOnBoard?.toString()} />

        {/* Ownership/Management Information */}
        <h2 className="col-span-full text-lg font-semibold text-gray-800 border-b pb-2 mb-2 mt-4">
          2. Ownership & Management Information
        </h2>
        <Info label="Ownership Type" value={validatedReport.ownershipType} />
        <Info label="Technical Manager Name" value={validatedReport.techManagerName} />
        <Info label="Technical Manager Address" value={validatedReport.techManagerAddress} />
        <Info label="Technical Manager Phone" value={validatedReport.techManagerPhone} />
        <Info label="Technical Manager Email" value={validatedReport.techManagerEmail} />
        <Info label="DPA Name" value={validatedReport.dpaName} />
        <Info label="DPA Phone" value={validatedReport.dpaPhone} />
        <Info label="DPA Mobile" value={validatedReport.dpaMobile} />
        <Info label="DPA Email" value={validatedReport.dpaEmail} />
        <Info label="RPS Agency Name" value={validatedReport.rpsAgencyName} />
        <Info label="RPS Agency Address" value={validatedReport.rpsAgencyAddress} />
        <Info label="RPS Agency Phone" value={validatedReport.rpsAgencyPhone} />
        <Info label="RPS Agency Email" value={validatedReport.rpsAgencyEmail} />
        <Info label="RPS Contact Name" value={validatedReport.rpsAgencyContactName} />
        <Info label="RPS Contact Phone" value={validatedReport.rpsAgencyContactPhone} />
        <Info label="RPS Contact Email" value={validatedReport.rpsAgencyContactEmail} />
        <Info label="RPSL Number" value={validatedReport.rpslNumber} />
        <Info label="Local Agency Name" value={validatedReport.localAgencyName} />
        <Info label="Local Agency Address" value={validatedReport.localAgencyAddress} />
        <Info label="Local Agency Phone" value={validatedReport.localAgencyPhone} />
        <Info label="Local Agency Email" value={validatedReport.localAgencyEmail} />
        <Info label="Local Contact Name" value={validatedReport.localAgencyContactName} />
        <Info label="Local Contact Phone" value={validatedReport.localAgencyContactPhone} />
        <Info label="Local Contact Email" value={validatedReport.localAgencyContactEmail} />

        {/* Incident Details */}
        <h2 className="col-span-full text-lg font-semibold text-gray-800 border-b pb-2 mb-2 mt-4">
          3. Incident Details
        </h2>
        <Info label="Severity of Incident" value={validatedReport.severityOfIncident} />
        <Info label="Incident Category" value={validatedReport.incidentCategory} />
        <Info 
          label="Incident Consequences" 
          value={Array.isArray(validatedReport.incidentConsequences) 
            ? validatedReport.incidentConsequences.join(', ') 
            : validatedReport.incidentConsequences} 
        />
        <Info label="Deaths" value={validatedReport.deaths?.toString()} />
        <Info label="Injured" value={validatedReport.injured?.toString()} />
        <Info label="Sickness" value={validatedReport.sickness?.toString()} />
        <Info label="Desertion" value={validatedReport.desertion?.toString()} />
        <Info label="Man Overboard Survived" value={validatedReport.manOverboardSurvived?.toString()} />
        <Info label="Causal Factors" value={validatedReport.causalFactors} />
        <Info label="Summary of Incident" value={validatedReport.summaryIncident} />
        <Info label="Summary of Action" value={validatedReport.summaryAction} />
        <Info label="Lessons Learnt" value={validatedReport.lessonsLearnt} />

        {/* Additional Information */}
        <h2 className="col-span-full text-lg font-semibold text-gray-800 border-b pb-2 mb-2 mt-4">
          4. Additional Information
        </h2>
        <Info label="SAR Required" value={validatedReport.sarRequired ? 'Yes' : 'No'} />
        <Info label="Oil Pollution Extent" value={validatedReport.oilPollutionExtent} />
        <Info label="Oil Spilled Volume" value={validatedReport.oilSpilledVolume} />
        <Info label="Weather Conditions" value={validatedReport.weatherConditions} />
        <Info label="Tidal Conditions" value={validatedReport.tidalConditions} />
        <Info label="Reported By" value={validatedReport.reportedBy} />
        <Info label="Company Name" value={validatedReport.companyName} />
        <Info label="Designation" value={validatedReport.designation} />
        <Info label="Contact Number" value={validatedReport.contactNumber} />
        <Info label="Last Updated By" value={validatedReport.lastUpdatedBy} />
        <Info label="Last Updated At" value={validatedReport.lastUpdatedAt ? new Date(validatedReport.lastUpdatedAt).toLocaleString() : '—'} />
        <Info label="Media URLs" value={validatedReport.mediaUrls?.length ? validatedReport.mediaUrls.join(', ') : '—'} />
      </div>

      {/* Render casualties if Personnel Matters is selected */}
      {validatedReport.incidentConsequences?.includes(IncidentConsequences.PersonnelMatters) && (
        <CasualtyDetails casualties={casualties} />
      )}
    </div>
  );
}

function Info({ label, value }: { label: string; value?: string | string[] | boolean | null }) {
  const displayValue = Array.isArray(value) 
    ? value.join(', ') 
    : typeof value === 'boolean'
      ? value ? 'Yes' : 'No'
      : value?.toString() || '—';
    
  return (
    <div className="flex flex-col border-b pb-2">
      <span className="text-xs font-semibold text-gray-600">{label}</span>
      <span className="text-sm text-black break-words">{displayValue}</span>
    </div>
  );
}
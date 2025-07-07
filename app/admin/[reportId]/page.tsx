// app/user/dashboard/[id]/page.tsx
import { prisma } from '@/lib/prisma';
import { reportSchema } from '@/types';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export default async function UserSingleReportPage(props: { params: { reportId: string } }) {
  const params=await props.params
  const reportId=params.reportId
  const report = await prisma.report.findUnique({ where: { id: reportId } });

  if (!report) return notFound();
  const validatedReport = reportSchema.parse(report);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className='flex justify-between mb-4'>
        <h1 className="text-2xl font-bold text-black">Your Submitted Report</h1>
        <div className="">
          <Link href={`/admin/${params.reportId}/edit`}>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Edit
            </button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-white border rounded-lg p-6">
        <Info label="Ship Name" value={validatedReport.shipName} />
        <Info label="IMO Number" value={validatedReport.imoNumber} />
        <Info label="Incident Date" value={new Date(validatedReport.incidentDate).toLocaleString()} />
        <Info label="Reported At" value={new Date(validatedReport.reportedAt).toLocaleString()} />
        <Info label="Flag" value={validatedReport.flag} />
        <Info label="Ship Type" value={validatedReport.shipType} />
        <Info label="Registration Type" value={validatedReport.registrationType} />
        <Info label="Position of Vessel" value={validatedReport.positionOfVessel} />
        <Info label="Location of Vessel" value={validatedReport.locationOfVessel} />
        <Info label="Area of Incident" value={validatedReport.areaOfIncident} />
        <Info label="Year Built" value={validatedReport.yearBuilt?.toString()} />
        <Info label="Deadweight" value={validatedReport.deadweight} />
        <Info label="Gross Tonnage (GT)" value={validatedReport.gt} />
        <Info label="Maximum Draft" value={validatedReport.maxDraft} />
        <Info label="Classification Society" value={validatedReport.classificationSociety} />
        <Info label="P&I Club" value={validatedReport.piClub} />
        <Info label="Hull & Machinery Underwriters" value={validatedReport.hullMachineryUnderwriters} />
        <Info label="Total Crew On Board" value={validatedReport.totalCrewOnBoard?.toString()} />
        <Info label="Loaded/Ballast Condition" value={validatedReport.conditionLoadedBallast} />
        <Info label="Severity of Incident" value={validatedReport.severityOfIncident} />
        <Info label="Last Port of Call" value={validatedReport.lastPortOfCall} />
        <Info label="Freeboard" value={validatedReport.freeboard} />
        <Info label="Cargo Type & Quantity" value={validatedReport.cargoTypeQty} />
        <Info label="Bunkers" value={validatedReport.bunkers} />
        <Info label="Ownership Type" value={validatedReport.ownershipType} />
        <Info label="DPA Name" value={validatedReport.dpaName} />
        <Info label="DPA Phone" value={validatedReport.dpaPhone} />
        <Info label="DPA Mobile" value={validatedReport.dpaMobile} />
        <Info label="DPA Email" value={validatedReport.dpaEmail} />
        <Info label="Technical Manager Name" value={validatedReport.techManagerName} />
        <Info label="Technical Manager Address" value={validatedReport.techManagerAddress} />
        <Info label="Technical Manager Phone" value={validatedReport.techManagerPhone} />
        <Info label="Technical Manager Email" value={validatedReport.techManagerEmail} />
        <Info label="RPS Agency Name" value={validatedReport.rpsAgencyName} />
        <Info label="RPS Contact Name" value={validatedReport.rpsAgencyContactName} />
        <Info label="RPS Phone" value={validatedReport.rpsAgencyPhone} />
        <Info label="RPS Email" value={validatedReport.rpsAgencyEmail} />
        <Info label="Local Agency Name" value={validatedReport.localAgencyName} />
        <Info label="Local Contact Name" value={validatedReport.localAgencyContactName} />
        <Info label="Local Phone" value={validatedReport.localAgencyPhone} />
        <Info label="Local Email" value={validatedReport.localAgencyEmail} />
        <Info label="Incident Category" value={validatedReport.incidentCategory} />
        <Info label="Incident Consequences" value={validatedReport.incidentConsequences} />
        <Info label="Deaths" value={validatedReport.deaths?.toString()} />
        <Info label="Injuries" value={validatedReport.injured?.toString()} />
        <Info label="Deceased Details" value={validatedReport.deceasedDetails} />
        <Info label="Incident Summary" value={validatedReport.summaryIncident} />
        <Info label="Actions Taken" value={validatedReport.summaryAction} />
        <Info label="Lessons Learnt" value={validatedReport.lessonsLearnt} />
        <Info label="SAR Required" value={validatedReport.sarRequired} />
        <Info label="Oil Pollution Extent" value={validatedReport.oilPollutionExtent} />
        <Info label="Weather Conditions" value={validatedReport.weatherConditions} />
        <Info label="Tidal Conditions" value={validatedReport.tidalConditions} />
        <Info label="Oil Spilled Volume" value={validatedReport.oilSpilledVolume} />
      </div>

    </div>
  );
}

function Info({ label, value }: { label: string; value?: string | null }) {
  return (
    <div className="flex flex-col border-b pb-2">
      <span className="text-xs font-semibold text-gray-600">{label}</span>
      <span className="text-sm text-black">{value || '—'}</span>
    </div>
  );
}
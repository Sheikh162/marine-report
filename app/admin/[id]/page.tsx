//server component
import { prisma } from '@/lib/prisma';
import { reportSchema } from '@/types';
import { notFound } from 'next/navigation';
import React from 'react';

async function getReport(id: string) {
  const report = await prisma.report.findUnique({ where: { id } });
  if (!report) return null;
  return reportSchema.parse(report); // zod validation still valid
}


export default async function ReportDetailPage({ params }: { params: { id: string } }) {
  const {id}=await params
  const report = await getReport(params.id);

  if (!report) return notFound();

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-6 text-black">Casualty / Incident</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm bg-white border rounded-lg p-6">
        <Info label="Date & Time reported to DGCOMM" value={new Date(report.reportedAt).toLocaleString()} />
        <Info label="Incident Date" value={new Date(report.incidentDate).toLocaleString()} />
        <Info label="Ship's Name" value={report.shipName} />
        <Info label="IMO No." value={report.imoNumber} />
        <Info label="Flag" value={report.flag} />
        <Info label="Type of Ship" value={report.shipType} />
        <Info label="Type of Registration" value={report.registrationType} />
        <Info label="Position of Vessel at time of Incident" value={report.positionOfVessel} />
        <Info label="Location of Vessel at time of Incident" value={report.locationOfVessel} />
        <Info label="Area of the Incident" value={report.areaOfIncident} />
        <Info label="Deadweight" value={report.deadweight} />
        <Info label="Year Built" value={report.yearBuilt?.toString()} />
        <Info label="GT" value={report.gt} />
        <Info label="Maximum Draft" value={report.maxDraft} />
        <Info label="Classification Society" value={report.classificationSociety} />
        <Info label="P&I Club" value={report.piClub} />
        <Info label="Hull & Machinery Insurer" value={report.hullMachineryUnderwriters} />
        <Info label="Total Crew on Board" value={report.totalCrewOnBoard?.toString()} />
        <Info label="Condition - Loaded/Ballast" value={report.conditionLoadedBallast} />

        {/* Add rest similarly... */}
        <Info label="Name - Technical Manager" value={report.techManagerName} />
        <Info label="Phone - Technical Manager" value={report.techManagerPhone} />
        <Info label="Email - Technical Manager" value={report.techManagerEmail} />
        <Info label="DPA Name" value={report.dpaName} />
        <Info label="DPA Phone" value={report.dpaPhone} />
        <Info label="DPA Email" value={report.dpaEmail} />
        <Info label="RPS Agency Name" value={report.rpsAgencyName} />
        <Info label="Local Agency Name" value={report.localAgencyName} />
        <Info label="Incident Category" value={report.incidentCategory} />
        <Info label="Deaths" value={report.deaths?.toString()} />
        <Info label="Injuries" value={report.injured?.toString()} />
        <Info label="Summary of Incident" value={report.summaryIncident} />
        <Info label="Lessons Learnt" value={report.lessonsLearnt} />
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

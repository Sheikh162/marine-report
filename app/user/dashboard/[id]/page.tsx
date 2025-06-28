// app/user/dashboard/[id]/page.tsx
import { prisma } from '@/lib/prisma';
import { reportSchema } from '@/types';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export default async function UserSingleReportPage({ params }: { params: { id: string } }) {
  const report = await prisma.report.findUnique({ where: { id: params.id } });

  if (!report) return notFound();
  const validatedReport = reportSchema.parse(report);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-black">Your Submitted Report</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white border rounded-lg p-6">
        <Info label="Ship Name" value={validatedReport.shipName} />
        <Info label="Incident Category" value={validatedReport.incidentCategory} />
        <Info label="Reported At" value={new Date(validatedReport.reportedAt).toLocaleString()} />
        <Info label="Incident Date" value={new Date(validatedReport.incidentDate).toLocaleString()} />
        <Info label="Flag" value={validatedReport.flag} />
        <Info label="IMO Number" value={validatedReport.imoNumber} />
        <Info label="Ship Type" value={validatedReport.shipType} />
        <Info label="Area" value={validatedReport.areaOfIncident} />
        <Info label="Deaths" value={validatedReport.deaths?.toString()} />
        <Info label="Injuries" value={validatedReport.injured?.toString()} />
        <Info label="Summary" value={validatedReport.summaryIncident} />
        <Info label="Lessons Learnt" value={validatedReport.lessonsLearnt} />
      </div>

      <div className="mt-6">
        <Link href={`/user/dashboard/${params.id}/edit`}>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Edit
          </button>
        </Link>
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

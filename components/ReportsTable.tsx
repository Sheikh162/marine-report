// app/admin/reports/ReportsTable.tsx
'use client';

import { useRouter } from 'next/navigation';
import { Report } from '@/types';

interface ReportsTableProps {
  reports: Report[];
}

export default function ReportsTable({ reports }: ReportsTableProps) {
  const router = useRouter();

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-2 text-left text-xs font-medium text-black uppercase tracking-wider border">Ship's Name</th>
            <th className="px-4 py-2 text-left text-xs font-medium text-black uppercase tracking-wider border">IMO No.</th>
            <th className="px-4 py-2 text-left text-xs font-medium text-black uppercase tracking-wider border">Flag</th>
            <th className="px-4 py-2 text-left text-xs font-medium text-black uppercase tracking-wider border">Ship Type</th>
            <th className="px-4 py-2 text-left text-xs font-medium text-black uppercase tracking-wider border">Incident Category</th>
            <th className="px-4 py-2 text-left text-xs font-medium text-black uppercase tracking-wider border">Number of Deaths</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {reports.map((report) => (
            <tr 
              key={report.id} 
              onClick={() => router.push(`/admin/${report.id}`)}
              className="hover:bg-gray-50 cursor-pointer"
            >
              <td className="px-4 py-2 border text-black">{report.shipName}</td>
              <td className="px-4 py-2 border text-black">{report.imoNumber}</td>
              <td className="px-4 py-2 border text-black">{report.flag}</td>
              <td className="px-4 py-2 border text-black">{report.shipType}</td>
              <td className="px-4 py-2 border text-black">{report.incidentCategory}</td>
              <td className="px-4 py-2 border text-black">{report.deaths}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
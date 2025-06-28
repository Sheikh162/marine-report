'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import z from 'zod';
import { reportSchema } from '@/types';
import { useRouter } from 'next/navigation';
// import { useUser } from '@clerk/nextjs';

type ReportInput = z.input<typeof reportSchema>;

export default function UserDashboard() {
  const router = useRouter();
  const [reports, setReports] = useState<ReportInput[]>([]);

  useEffect(() => {
    const fetchReports = async () => {
      const res = await axios.get('/api/reports?userId=user-001'); // Replace with dynamic user ID when ready
      setReports(res.data);
    };

    fetchReports();
  }, []);

  return (
    <div className="min-h-screen bg-white text-black p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold">Your Reports</h1>
        <Link
          href="/user/submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Submit New Report
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border border-gray-300 shadow-sm">
          <thead className="bg-blue-100 text-black">
            <tr>
              <th className="px-4 py-3 border-b">Ship Name</th>
              <th className="px-4 py-3 border-b">Incident Category</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report) => (
              <tr
                key={report.id}
                className="hover:bg-blue-50 transition cursor-pointer"
                onClick={() => router.push(`/user/dashboard/${report.id}`)}
              >
                <td className="px-4 py-3 border-b">{report.shipName}</td>
                <td className="px-4 py-3 border-b">{report.incidentCategory}</td>
              </tr>
            ))}
            {reports.length === 0 && (
              <tr>
                <td colSpan={3} className="text-center px-4 py-6 text-gray-600">
                  No reports found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

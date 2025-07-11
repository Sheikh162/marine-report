'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import z from 'zod';
import { reportSchema } from '@/types';
import { useRouter } from 'next/navigation';
import { useUser } from '@clerk/nextjs';

type ReportInput = z.infer<typeof reportSchema>;

export default function UserDashboard() {
  const router = useRouter();
  const { user }=useUser()
  console.log(user?.id)
  const [reports, setReports] = useState<ReportInput[]>([]);
  const [loading, setLoading] =useState<Boolean>(true)

  useEffect(() => {
    const fetchReports = async () => {
      const res = await axios.get(`/api/me/reports`); // do i need to send user id here or not as req.param? can backend extract it
      console.log(res.data)
      if(res.data.length>0) setReports(res.data);
      setLoading(false)    
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
              <th className="px-4 py-3 border-b">Date reported to DGCOMM </th>
              <th className="px-4 py-3 border-b">Incident Date</th>
              <th className="px-4 py-3 border-b">Ship's Name</th>
              <th className="px-4 py-3 border-b">IMO No.</th>
              <th className="px-4 py-3 border-b">Flag</th>
              <th className="px-4 py-3 border-b">Ship Type</th>
              <th className="px-4 py-3 border-b">Category</th>
              <th className="px-4 py-3 border-b">Deaths</th>
              <th className="px-4 py-3 border-b">Injuries</th>
              <th className="px-4 py-3 border-b">Area</th>
              <th className="px-4 py-3 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={11} className="text-center px-4 py-6 text-gray-600">
                  Loading reports...
                </td>
              </tr>
            ) : reports.length === 0 ? (
              <tr>
                <td colSpan={11} className="text-center px-4 py-6 text-gray-600">
                  No reports found.
                </td>
              </tr>
            ) : (
              reports.map((report) => (
                <tr
                  key={report.id}
                  className="hover:bg-blue-50 transition cursor-pointer"
                  onClick={() => router.push(`/user/dashboard/${report.id}`)}
                >
                  <td className="px-4 py-3 border-b">
                    {new Date(report?.createdAt as Date).toLocaleDateString()}<br/>
                    <span className="text-xs text-gray-500">
                      {new Date(report?.createdAt as Date).toLocaleTimeString()}
                    </span>
                  </td>
                  <td className="px-4 py-3 border-b">
                    {new Date(report.incidentDate).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3 border-b font-medium">
                    {report.shipName}
                  </td>
                  <td className="px-4 py-3 border-b font-mono">
                    {report.imoNumber}
                  </td>
                  <td className="px-4 py-3 border-b">
                    {report.flag}
                  </td>
                  <td className="px-4 py-3 border-b">
                    {report.shipType}
                  </td>
                  <td className="px-4 py-3 border-b">
                    {report.incidentCategory}
                  </td>
                  <td className="px-4 py-3 border-b text-center">
                    <span className={`inline-block w-6 h-6 rounded-full ${
                      report.deaths > 0 ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {report.deaths || 0}
                    </span>
                  </td>
                  <td className="px-4 py-3 border-b text-center">
                    <span className={`inline-block w-6 h-6 rounded-full ${
                      report.injured > 0 ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {report.injured || 0}
                    </span>
                  </td>
                  <td className="px-4 py-3 border-b">
                    {report.areaOfIncident}
                  </td>
                  <td className="px-4 py-3 border-b">
                    <Link href={`/user/dashboard/${report.id}`} className="text-blue-600 hover:text-blue-800 mr-2">
                    View
                    </Link>

                    <Link href={`/user/dashboard/${report.id}/edit`} className="text-green-600 hover:text-green-800">
                    Edit
                    </Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

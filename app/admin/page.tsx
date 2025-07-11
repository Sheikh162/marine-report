/* 
1)add filteration, pagination in admin dashboard
2)need to fix seed.ts to fix the ability to add more reports and casualties in database.
3)add some phone number api, country dropdown api
*/

'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { reportSchema } from '@/types';
import z from 'zod';
import { useRouter } from 'next/navigation';
import Link from 'next/link';


type ReportInput = z.infer<typeof reportSchema>; // raw data from backend

export default function ReportsPage() {
  const router=useRouter()
  const [reports, setReports] = useState<ReportInput[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Filter form state
/*   const [filters, setFilters] = useState({
    incidentCategory: '',
    casualtyStatus: '',
    fromReportDate: '',
    toReportDate: '',
    flag: '',
    deaths: '',
    fromIncidentDate: '',
    toIncidentDate: '',
    shipType: '',
    injuries: '',
    area: ''
  }); */

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace with actual API call
        const response = await axios.get('/api/admin/reports');
        // setIncidents(response.data);
        
        // Mock data based on your screenshot
        setReports(response.data);
      } catch (err) {
        setError('Failed to load reports');
        alert('failed to get reports')
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

/*   const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement filter logic here
    console.log('Filters applied:', filters);
  }; */

  if (loading) return <div className="p-4 text-center text-black">Loading...</div>;
  if (error) return <div className="p-4 text-center text-red-600">{error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 text-black">CASUALTIES/INCIDENTS</h1>
      
      {/* Filter Form Section */}
{/*       <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <h2 className="text-lg font-semibold mb-4 text-black">Filters</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1 text-black">Ship's Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded text-black"
              placeholder="Enter ship name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-black">Incident Category</label>
            <select 
              name="incidentCategory"
              className="w-full p-2 border rounded text-black"
              onChange={handleFilterChange}
            >
              <option value="" className="text-black">Select a type</option>
              <option value="Personnel Related" className="text-black">Personnel Related</option>
              <option value="Fire & Explosion" className="text-black">Fire & Explosion</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-black">Casualty Status</label>
            <select 
              name="casualtyStatus"
              className="w-full p-2 border rounded text-black"
              onChange={handleFilterChange}
            >
              <option value="" className="text-black">Select Casualty Status</option>
              <option value="Open" className="text-black">Open</option>
              <option value="Closed" className="text-black">Closed</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-black">Date Reported - From</label>
            <input
              type="date"
              name="fromReportDate"
              className="w-full p-2 border rounded text-black"
              onChange={handleFilterChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-black">IMO No.</label>
            <input
              type="text"
              className="w-full p-2 border rounded text-black"
              placeholder="Enter IMO number"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-black">Number of Deaths</label>
            <input
              type="number"
              name="deaths"
              className="w-full p-2 border rounded text-black"
              onChange={handleFilterChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-black">Incident From Date</label>
            <input
              type="date"
              name="fromIncidentDate"
              className="w-full p-2 border rounded text-black"
              onChange={handleFilterChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-black">Date Reported - To</label>
            <input
              type="date"
              name="toReportDate"
              className="w-full p-2 border rounded text-black"
              onChange={handleFilterChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-black">Flag</label>
            <select 
              name="flag"
              className="w-full p-2 border rounded text-black"
              onChange={handleFilterChange}
            >
              <option value="" className="text-black">Select Flag</option>
              <option value="Liberia" className="text-black">Liberia</option>
              <option value="Panama" className="text-black">Panama</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-black">Number of Injuries</label>
            <input
              type="number"
              name="injuries"
              className="w-full p-2 border rounded text-black"
              onChange={handleFilterChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-black">Incident To Date</label>
            <input
              type="date"
              name="toIncidentDate"
              className="w-full p-2 border rounded text-black"
              onChange={handleFilterChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-black">Ship Type</label>
            <select 
              name="shipType"
              className="w-full p-2 border rounded text-black"
              onChange={handleFilterChange}
            >
              <option value="" className="text-black">Select Ship Type</option>
              <option value="Crude Oil Tanker" className="text-black">Crude Oil Tanker</option>
              <option value="Bulk Carrier" className="text-black">Bulk Carrier</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-black">Area of Incident</label>
            <select 
              name="area"
              className="w-full p-2 border rounded text-black"
              onChange={handleFilterChange}
            >
              <option value="" className="text-black">Select Area</option>
              <option value="Indian Waters" className="text-black">Indian Waters</option>
              <option value="Outside Indian Waters" className="text-black">Outside Indian Waters</option>
            </select>
          </div>

          <div className="flex items-end">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Search
            </button>
            <button
              type="button"
              className="ml-2 bg-gray-300 px-4 py-2 rounded hover:bg-gray-400 text-black"
              onClick={() => setFilters({
                incidentCategory: '',
                casualtyStatus: '',
                fromReportDate: '',
                toReportDate: '',
                flag: '',
                deaths: '',
                fromIncidentDate: '',
                toIncidentDate: '',
                shipType: '',
                injuries: '',
                area: ''
              })}
            >
              Reset
            </button>
          </div>
        </form>
      </div> */}

      
      {/* Incidents Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border border-gray-300 shadow-sm">
          <thead className="bg-blue-100 text-black">
            <tr>
              <th className="px-4 py-3 border-b">Date reported to DGCOMM</th>
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
                  onClick={() => router.push(`/admin/${report.id}`)}
                >
                  <td className="px-4 py-3 border-b">
                    {new Date(report?.reportedAt as Date).toLocaleDateString()}<br/>
                    <span className="text-xs text-gray-500">
                      {new Date(report?.reportedAt as Date).toLocaleTimeString()}
                    </span>
                  </td>
                  <td className="px-4 py-3 border-b">
                    {new Date(report.incidentDate).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3 border-b font-medium">{report.shipName}</td>
                  <td className="px-4 py-3 border-b font-mono">{report.imoNumber}</td>
                  <td className="px-4 py-3 border-b">{report.flag}</td>
                  <td className="px-4 py-3 border-b">{report.shipType}</td>
                  <td className="px-4 py-3 border-b">{report.incidentCategory}</td>
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
                  <td className="px-4 py-3 border-b">{report.areaOfIncident}</td>
                  <td className="px-4 py-3 border-b">
                    <Link href={`/admin/${report.id}`} className="text-blue-600 hover:text-blue-800 mr-2">
                      View
                    </Link>

                    <Link href={`/admin/${report.id}/edit`} className="text-green-600 hover:text-green-800">
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

/*
              <th className="px-4 py-2 text-left text-xs font-medium text-black uppercase tracking-wider border">Number of Injuries</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-black uppercase tracking-wider border">Area of the Incident</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-black uppercase tracking-wider border">Status</th>


                <td className="px-4 py-2 whitespace-nowrap text-sm border text-black">{report.injuries}</td>
                <td className="px-4 py-2 whitespace-nowrap text-sm border text-black">{report.area}</td>
                <td className="px-4 py-2 whitespace-nowrap text-sm border font-semibold text-black">{report.status}</td>
*/



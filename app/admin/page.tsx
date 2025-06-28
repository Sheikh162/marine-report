'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { reportSchema } from '@/types';
import z from 'zod';
import { useRouter } from 'next/navigation';


type ReportInput = z.input<typeof reportSchema>; // raw data from backend

export default function ReportsPage() {
  const router=useRouter()
  const [reports, setReports] = useState<ReportInput[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Filter form state
  const [filters, setFilters] = useState({
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
  });

  // Mock data - replace with your API call
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace with actual API call
        const response = await axios.get('/api/reports');
        // setIncidents(response.data);
        
        // Mock data based on your screenshot
        setReports(response.data);
      } catch (err) {
        setError('Failed to load reports');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement filter logic here
    console.log('Filters applied:', filters);
  };

  if (loading) return <div className="p-4 text-center text-black">Loading...</div>;
  if (error) return <div className="p-4 text-center text-red-600">{error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 text-black">CASUALTIES/INCIDENTS</h1>
      
      {/* Filter Form Section */}
      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <h2 className="text-lg font-semibold mb-4 text-black">Filters</h2>
        
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Row 1 */}
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
              {/* Add more options */}
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
          
          {/* Row 2 */}
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
          
          {/* Row 3 */}
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
              {/* Add more options */}
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
          
          {/* Row 4 */}
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
              {/* Add more options */}
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
      </div>
      
      {/* Incidents Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-50">
            <tr>
{/*               <th className="px-4 py-2 text-left text-xs font-medium text-black uppercase tracking-wider border">Date & Time reported to DOCOMM</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-black uppercase tracking-wider border">Incident Date</th> */}
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
              <tr key={report.id} onClick={()=>{router.push(`/admin/${report.id}`)}} className="hover:bg-gray-50 cursor-pointer">
{/*                 <td className="px-4 py-2 border text-black">{report.reportedAt}</td>
                <td className="px-4 py-2 border text-black">{report.incidentDate}</td> */}
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
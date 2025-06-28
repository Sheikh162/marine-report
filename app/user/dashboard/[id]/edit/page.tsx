// implement with react hook form and fix the api also
'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import axios from 'axios';
import { reportSchema } from '@/types';
import z from 'zod';

type ReportInput = z.infer<typeof reportSchema>; //z.infer or z.input?

export default function EditReportPage() {
  const params = useParams();
  const router = useRouter();
  const reportId = params.id as string;

  const [formData, setFormData] = useState<Partial<ReportInput>>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetchReport = async () => {
      try {
        const res = await axios.get(`/api/reports/${reportId}`);
        setFormData(res.data);
      } catch (error) {
        console.error('Error fetching report:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchReport();
  }, [reportId]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      await axios.put(`/api/reports/${reportId}`, formData);
      router.push(`/user/dashboard/${reportId}`);
    } catch (error) {
      console.error('Error updating report:', error);
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="p-6 text-black">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-2xl border border-blue-100">
      <h1 className="text-3xl font-semibold mb-6 text-black">Edit Report</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Ship Name */}
        <div>
          <label className="block text-sm font-medium text-black mb-1">Ship Name</label>
          <input
            name="shipName"
            value={formData.shipName || ''}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-blue-200 rounded-xl bg-blue-50 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Incident Category */}
        <div>
          <label className="block text-sm font-medium text-black mb-1">Incident Category</label>
          <input
            name="incidentCategory"
            value={formData.incidentCategory || ''}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-blue-200 rounded-xl bg-blue-50 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Summary */}
        <div>
          <label className="block text-sm font-medium text-black mb-1">Summary of Incident</label>
          <textarea
            name="summaryIncident"
            value={formData.summaryIncident || ''}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 border border-blue-200 rounded-xl bg-blue-50 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Lessons Learnt */}
        <div>
          <label className="block text-sm font-medium text-black mb-1">Lessons Learnt</label>
          <textarea
            name="lessonsLearnt"
            value={formData.lessonsLearnt || ''}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 border border-blue-200 rounded-xl bg-blue-50 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={saving}
            className={`px-6 py-2 font-semibold rounded-xl shadow transition ${
              saving
                ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            {saving ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </form>
    </div>
  );
}

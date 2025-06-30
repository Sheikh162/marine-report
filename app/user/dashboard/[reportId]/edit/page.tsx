// implement with react hook form and fix the api also
'use client';

/* import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import axios from 'axios';
import { reportSchema } from '@/types';
import z from 'zod'; */

//type ReportInput = z.infer<typeof reportSchema>; //z.infer or z.input?

/* export default function EditReportPage() {
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
        <div>
          <label className="block text-sm font-medium text-black mb-1">Ship Name</label>
          <input
            name="shipName"
            value={formData.shipName || ''}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-blue-200 rounded-xl bg-blue-50 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-black mb-1">Incident Category</label>
          <input
            name="incidentCategory"
            value={formData.incidentCategory || ''}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-blue-200 rounded-xl bg-blue-50 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

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
} */


'use client';
/* 
will have to render the previous info which was inserted.

use useparams to get the reportId

1)fetch the og report
2)fill in the respective fields
3)
*/
import React, { useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { useForm } from 'react-hook-form';
import { useRouter, useParams } from 'next/navigation';

import { zodResolver } from '@hookform/resolvers/zod';
import { reportSchema } from '@/types';
import axios from 'axios';
import { z } from 'zod';

const inputClass = 'w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-200';
const labelClass = 'block text-sm font-semibold text-gray-700 mb-1';
const errorClass = 'text-red-500 text-xs mt-1';
const requiredFieldClass = `${labelClass} after:content-['*'] after:ml-0.5 after:text-red-500`;

type ReportInput = z.input<typeof reportSchema>;

export default function CreateReportForm() {
  const { user } = useUser();

  const params = useParams();
  //console.log(params)
  const router = useRouter();
  const reportId = params.reportId as string;
  console.log(reportId)

  const [formData, setFormData] = useState<Partial<ReportInput>>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
/* 
  useEffect(() => {
    const fetchReport = async () => {
      try {
        const res = await axios.get(`/api/me/reports/${reportId}`);
        setFormData(res.data);
        console.log(res.data)
      } catch (error) {
        console.error('Error fetching report:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchReport();
  }, [reportId]); */

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ReportInput>({
    resolver: zodResolver(reportSchema),
    //mode: 'onBlur',
    //defaultValues:formData
    defaultValues: async()=>{
      console.log(reportId)
      const response=await axios.get(`/api/me/reports/${reportId}`)
      console.log(response.data)
      return response.data
    }
  });

  const onSubmit = async (data: ReportInput) => {
    console.log(data);
    try {
      await axios.put(`/api/me/reports/${reportId}`,data);
      alert('Report submitted successfully!');// fix the api
      router.push(`/user/dashboard/${reportId}`);
    } catch (err) {
      console.error(err);
      alert('Failed to submit report.');
    }
  };

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8 text-black">Create New Incident Report</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Ship Information */}
        <div className="md:col-span-2">
          <h2 className="text-xl font-semibold mb-4 text-black border-b pb-2">Ship Information</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="shipName" className={requiredFieldClass}>Ship's Name</label>
              <input id="shipName" {...register('shipName')} className={inputClass} />
              {errors.shipName && <p className={errorClass}>{errors.shipName.message}</p>}
            </div>

            <div>
              <label htmlFor="imoNumber" className={requiredFieldClass}>IMO Number</label>
              <input id="imoNumber" {...register('imoNumber')} className={inputClass} />
              {errors.imoNumber && <p className={errorClass}>{errors.imoNumber.message}</p>}
            </div>

            <div>
              <label htmlFor="flag" className={labelClass}>Flag</label>
              <input id="flag" {...register('flag')} className={inputClass} />
              {errors.flag && <p className={errorClass}>{errors.flag.message}</p>}
            </div>

            <div>
              <label htmlFor="shipType" className={labelClass}>Type of Ship</label>
              <input id="shipType" {...register('shipType')} className={inputClass} />
              {errors.shipType && <p className={errorClass}>{errors.shipType.message}</p>}
            </div>

            <div>
              <label htmlFor="registrationType" className={labelClass}>Registration Type</label>
              <input id="registrationType" {...register('registrationType')} className={inputClass} />
              {errors.registrationType && <p className={errorClass}>{errors.registrationType.message}</p>}
            </div>

            <div>
              <label htmlFor="positionOfVessel" className={labelClass}>Position of Vessel</label>
              <input id="positionOfVessel" {...register('positionOfVessel')} className={inputClass} />
              {errors.positionOfVessel && <p className={errorClass}>{errors.positionOfVessel.message}</p>}
            </div>

            <div>
              <label htmlFor="locationOfVessel" className={labelClass}>Location of Vessel</label>
              <input id="locationOfVessel" {...register('locationOfVessel')} className={inputClass} />
              {errors.locationOfVessel && <p className={errorClass}>{errors.locationOfVessel.message}</p>}
            </div>

            <div>
              <label htmlFor="areaOfIncident" className={labelClass}>Area of Incident</label>
              <input id="areaOfIncident" {...register('areaOfIncident')} className={inputClass} />
              {errors.areaOfIncident && <p className={errorClass}>{errors.areaOfIncident.message}</p>}
            </div>

            <div>
              <label htmlFor="yearBuilt" className={labelClass}>Year Built</label>
              <input id="yearBuilt" type="number"   {...register('yearBuilt', { valueAsNumber: true })} className={inputClass} />
              {errors.yearBuilt && <p className={errorClass}>{errors.yearBuilt.message}</p>}
            </div>

            <div>
              <label htmlFor="deadweight" className={labelClass}>Deadweight</label>
              <input id="deadweight" {...register('deadweight')} className={inputClass} />
              {errors.deadweight && <p className={errorClass}>{errors.deadweight.message}</p>}
            </div>

            <div>
              <label htmlFor="gt" className={labelClass}>Gross Tonnage (GT)</label>
              <input id="gt" {...register('gt')} className={inputClass} />
              {errors.gt && <p className={errorClass}>{errors.gt.message}</p>}
            </div>

            <div>
              <label htmlFor="maxDraft" className={labelClass}>Maximum Draft</label>
              <input id="maxDraft" {...register('maxDraft')} className={inputClass} />
              {errors.maxDraft && <p className={errorClass}>{errors.maxDraft.message}</p>}
            </div>

            <div>
              <label htmlFor="classificationSociety" className={labelClass}>Classification Society</label>
              <input id="classificationSociety" {...register('classificationSociety')} className={inputClass} />
              {errors.classificationSociety && <p className={errorClass}>{errors.classificationSociety.message}</p>}
            </div>

            <div>
              <label htmlFor="piClub" className={labelClass}>P&I Club</label>
              <input id="piClub" {...register('piClub')} className={inputClass} />
              {errors.piClub && <p className={errorClass}>{errors.piClub.message}</p>}
            </div>

            <div>
              <label htmlFor="hullMachineryUnderwriters" className={labelClass}>Hull & Machinery Insurer</label>
              <input id="hullMachineryUnderwriters" {...register('hullMachineryUnderwriters')} className={inputClass} />
              {errors.hullMachineryUnderwriters && <p className={errorClass}>{errors.hullMachineryUnderwriters.message}</p>}
            </div>

            <div>
              <label htmlFor="totalCrewOnBoard" className={labelClass}>Total Crew on Board</label>
              <input id="totalCrewOnBoard" type="number" {...register('totalCrewOnBoard', { valueAsNumber: true })} className={inputClass} />
              {errors.totalCrewOnBoard && <p className={errorClass}>{errors.totalCrewOnBoard.message}</p>}
            </div>

            <div>
              <label htmlFor="conditionLoadedBallast" className={labelClass}>Loaded / Ballast Condition</label>
              <input id="conditionLoadedBallast" {...register('conditionLoadedBallast')} className={inputClass} />
              {errors.conditionLoadedBallast && <p className={errorClass}>{errors.conditionLoadedBallast.message}</p>}
            </div>

            <div>
              <label htmlFor="severityOfIncident" className={labelClass}>Severity of Incident</label>
              <input id="severityOfIncident" {...register('severityOfIncident')} className={inputClass} />
              {errors.severityOfIncident && <p className={errorClass}>{errors.severityOfIncident.message}</p>}
            </div>
          </div>
        </div>

        {/* Incident Details */}
        <div className="md:col-span-2">
          <h2 className="text-xl font-semibold mb-4 text-black border-b pb-2">Incident Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="incidentDate" className={requiredFieldClass}>Incident Date</label>
              <input id="incidentDate" type="date" {...register('incidentDate')} className={inputClass} />
              {errors.incidentDate && <p className={errorClass}>{errors.incidentDate.message}</p>}
            </div>

            <div>
              <label htmlFor="reportedAt" className={requiredFieldClass}>Reported At</label>
              <input id="reportedAt" type="datetime-local" {...register('reportedAt')} className={inputClass} />
              {errors.reportedAt && <p className={errorClass}>{errors.reportedAt.message}</p>}
            </div>
          </div>
        </div>

        {/* Port & Cargo Details */}
        <div className="md:col-span-2">
          <h2 className="text-xl font-semibold mb-4 text-black border-b pb-2">Port & Cargo Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="lastPortOfCall" className={labelClass}>Last Port of Call</label>
              <input id="lastPortOfCall" {...register('lastPortOfCall')} className={inputClass} />
              {errors.lastPortOfCall && <p className={errorClass}>{errors.lastPortOfCall.message}</p>}
            </div>

            <div>
              <label htmlFor="freeboard" className={labelClass}>Freeboard</label>
              <input id="freeboard" {...register('freeboard')} className={inputClass} />
              {errors.freeboard && <p className={errorClass}>{errors.freeboard.message}</p>}
            </div>

            <div>
              <label htmlFor="cargoTypeQty" className={labelClass}>Cargo Type & Quantity</label>
              <input id="cargoTypeQty" {...register('cargoTypeQty')} className={inputClass} />
              {errors.cargoTypeQty && <p className={errorClass}>{errors.cargoTypeQty.message}</p>}
            </div>

            <div>
              <label htmlFor="bunkers" className={labelClass}>Bunkers</label>
              <input id="bunkers" {...register('bunkers')} className={inputClass} />
              {errors.bunkers && <p className={errorClass}>{errors.bunkers.message}</p>}
            </div>

            <div>
              <label htmlFor="ownershipType" className={labelClass}>Ownership Type</label>
              <input id="ownershipType" {...register('ownershipType')} className={inputClass} />
              {errors.ownershipType && <p className={errorClass}>{errors.ownershipType.message}</p>}
            </div>
          </div>
        </div>

        {/* Tech Manager Info */}
        <div className="md:col-span-2">
          <h2 className="text-xl font-semibold mb-4 text-black border-b pb-2">Tech Manager Info</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="techManagerName" className={labelClass}>Technical Manager Name</label>
              <input id="techManagerName" {...register('techManagerName')} className={inputClass} />
              {errors.techManagerName && <p className={errorClass}>{errors.techManagerName.message}</p>}
            </div>

            <div>
              <label htmlFor="techManagerAddress" className={labelClass}>Technical Manager Address</label>
              <input id="techManagerAddress" {...register('techManagerAddress')} className={inputClass} />
              {errors.techManagerAddress && <p className={errorClass}>{errors.techManagerAddress.message}</p>}
            </div>

            <div>
              <label htmlFor="techManagerPhone" className={labelClass}>Technical Manager Phone</label>
              <input id="techManagerPhone" {...register('techManagerPhone')} className={inputClass} />
              {errors.techManagerPhone && <p className={errorClass}>{errors.techManagerPhone.message}</p>}
            </div>

            <div>
              <label htmlFor="techManagerEmail" className={labelClass}>Technical Manager Email</label>
              <input id="techManagerEmail" type="email" {...register('techManagerEmail')} className={inputClass} />
              {errors.techManagerEmail && <p className={errorClass}>{errors.techManagerEmail.message}</p>}
            </div>
          </div>
        </div>

        {/* DPA Information */}
        <div className="md:col-span-2">
          <h2 className="text-xl font-semibold mb-4 text-black border-b pb-2">DPA Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="dpaName" className={requiredFieldClass}>DPA Name</label>
              <input id="dpaName" {...register('dpaName')} className={inputClass} />
              {errors.dpaName && <p className={errorClass}>{errors.dpaName.message}</p>}
            </div>

            <div>
              <label htmlFor="dpaPhone" className={requiredFieldClass}>DPA Phone</label>
              <input id="dpaPhone" {...register('dpaPhone')} className={inputClass} />
              {errors.dpaPhone && <p className={errorClass}>{errors.dpaPhone.message}</p>}
            </div>

            <div>
              <label htmlFor="dpaMobile" className={requiredFieldClass}>DPA Mobile</label>
              <input id="dpaMobile" {...register('dpaMobile')} className={inputClass} />
              {errors.dpaMobile && <p className={errorClass}>{errors.dpaMobile.message}</p>}
            </div>

            <div>
              <label htmlFor="dpaEmail" className={requiredFieldClass}>DPA Email</label>
              <input id="dpaEmail" type="email" {...register('dpaEmail')} className={inputClass} />
              {errors.dpaEmail && <p className={errorClass}>{errors.dpaEmail.message}</p>}
            </div>
          </div>
        </div>

        {/* Incident Info */}
        <div className="md:col-span-2">
          <h2 className="text-xl font-semibold mb-4 text-black border-b pb-2">Incident Info</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="incidentCategory" className={labelClass}>Incident Category</label>
              <input id="incidentCategory" {...register('incidentCategory')} className={inputClass} />
              {errors.incidentCategory && <p className={errorClass}>{errors.incidentCategory.message}</p>}
            </div>

            <div>
              <label htmlFor="incidentConsequences" className={labelClass}>Incident Consequences</label>
              <input id="incidentConsequences" {...register('incidentConsequences')} className={inputClass} />
              {errors.incidentConsequences && <p className={errorClass}>{errors.incidentConsequences.message}</p>}
            </div>

            <div>
              <label htmlFor="deaths" className={labelClass}>Deaths</label>
              <input id="deaths" type="number" {...register('deaths', { valueAsNumber: true })} className={inputClass} />
              {errors.deaths && <p className={errorClass}>{errors.deaths.message}</p>}
            </div>

            <div>
              <label htmlFor="injured" className={labelClass}>Injured</label>
              <input id="injured" type="number" {...register('injured', { valueAsNumber: true })} className={inputClass} />
              {errors.injured && <p className={errorClass}>{errors.injured.message}</p>}
            </div>

            <div>
              <label htmlFor="deceasedDetails" className={labelClass}>Details of Deceased</label>
              <input id="deceasedDetails" {...register('deceasedDetails')} className={inputClass} />
              {errors.deceasedDetails && <p className={errorClass}>{errors.deceasedDetails.message}</p>}
            </div>

            <div>
              <label htmlFor="summaryIncident" className={labelClass}>Incident Summary</label>
              <input id="summaryIncident" {...register('summaryIncident')} className={inputClass} />
              {errors.summaryIncident && <p className={errorClass}>{errors.summaryIncident.message}</p>}
            </div>

            <div>
              <label htmlFor="summaryAction" className={labelClass}>Actions Taken</label>
              <input id="summaryAction" {...register('summaryAction')} className={inputClass} />
              {errors.summaryAction && <p className={errorClass}>{errors.summaryAction.message}</p>}
            </div>

            <div>
              <label htmlFor="lessonsLearnt" className={labelClass}>Lessons Learnt</label>
              <input id="lessonsLearnt" {...register('lessonsLearnt')} className={inputClass} />
              {errors.lessonsLearnt && <p className={errorClass}>{errors.lessonsLearnt.message}</p>}
            </div>
          </div>
        </div>

        {/* SAR / Pollution */}
        <div className="md:col-span-2">
          <h2 className="text-xl font-semibold mb-4 text-black border-b pb-2">SAR / Pollution</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="sarRequired" className={labelClass}>SAR Required</label>
              <input id="sarRequired" {...register('sarRequired')} className={inputClass} />
              {errors.sarRequired && <p className={errorClass}>{errors.sarRequired.message}</p>}
            </div>

            <div>
              <label htmlFor="oilPollutionExtent" className={labelClass}>Oil Pollution Extent</label>
              <input id="oilPollutionExtent" {...register('oilPollutionExtent')} className={inputClass} />
              {errors.oilPollutionExtent && <p className={errorClass}>{errors.oilPollutionExtent.message}</p>}
            </div>

            <div>
              <label htmlFor="weatherConditions" className={labelClass}>Weather Conditions</label>
              <input id="weatherConditions" {...register('weatherConditions')} className={inputClass} />
              {errors.weatherConditions && <p className={errorClass}>{errors.weatherConditions.message}</p>}
            </div>

            <div>
              <label htmlFor="tidalConditions" className={labelClass}>Tidal Conditions</label>
              <input id="tidalConditions" {...register('tidalConditions')} className={inputClass} />
              {errors.tidalConditions && <p className={errorClass}>{errors.tidalConditions.message}</p>}
            </div>

            <div>
              <label htmlFor="oilSpilledVolume" className={labelClass}>Oil Spilled Volume</label>
              <input id="oilSpilledVolume" {...register('oilSpilledVolume')} className={inputClass} />
              {errors.oilSpilledVolume && <p className={errorClass}>{errors.oilSpilledVolume.message}</p>}
            </div>
          </div>
        </div>

        {/* User ID (hidden) */}
        <input type="hidden" {...register('userId')} value={user?.id || ''} />

        {/* Media URLs */}
        <div className="md:col-span-2">
          <label htmlFor="mediaUrls" className={labelClass}>Media URLs (comma-separated)</label>
          <input id="mediaUrls" {...register('mediaUrls')} className={inputClass} />
          {errors.mediaUrls && <p className={errorClass}>{errors.mediaUrls.message}</p>}
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2 flex justify-end mt-8">
          <button 
            type="submit" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition duration-200"
          >
            Submit Report
          </button>
        </div>
      </form>
    </div>
  );
}



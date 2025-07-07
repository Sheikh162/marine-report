'use client';
import React, { useEffect } from 'react';
import { useUser } from '@clerk/nextjs';
import { useForm } from 'react-hook-form';
import { useRouter, useParams } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { reportSchema } from '@/types';
import axios from 'axios';
import { z } from 'zod';

type ReportInput = z.input<typeof reportSchema>;

export default function CreateReportForm() {
  const { user } = useUser();
  const params = useParams();
  const router = useRouter();
  const reportId = params.reportId as string;

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ReportInput>({
    resolver: zodResolver(reportSchema),
    defaultValues: async () => {
      const response = await axios.get(`/api/me/reports/${reportId}`);
      return response.data;
    }
  });

    useEffect(() => {
      if (user?.id) {
        setValue('userId', user.id); // Automatically set when user loads
      }
    }, [user?.id, setValue]);

  const onSubmit = async (data: ReportInput) => {
    try {
      await axios.put(`/api/me/reports/${reportId}`, data);
      alert('Report updated successfully!');
      router.push(`/admin/${reportId}`);
    } catch (err) {
      console.error(err);
      alert('Failed to update report.');
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className='flex justify-between mb-6'>
        <h1 className="text-2xl font-bold text-black">Edit Incident Report</h1>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-white border rounded-lg p-6">
        {/* Ship Information */}
        <FormField label="Ship Name" name="shipName" register={register} errors={errors} required />
        <FormField label="IMO Number" name="imoNumber" register={register} errors={errors} required />
        <FormField label="Flag" name="flag" register={register} errors={errors} />
        <FormField label="Ship Type" name="shipType" register={register} errors={errors} />
        <FormField label="Registration Type" name="registrationType" register={register} errors={errors} />
        <FormField label="Position of Vessel" name="positionOfVessel" register={register} errors={errors} />
        <FormField label="Location of Vessel" name="locationOfVessel" register={register} errors={errors} />
        <FormField label="Area of Incident" name="areaOfIncident" register={register} errors={errors} />
        <FormField label="Year Built" name="yearBuilt" register={register} errors={errors} type="number" />
        <FormField label="Deadweight" name="deadweight" register={register} errors={errors} />
        <FormField label="Gross Tonnage (GT)" name="gt" register={register} errors={errors} />
        <FormField label="Maximum Draft" name="maxDraft" register={register} errors={errors} />
        <FormField label="Classification Society" name="classificationSociety" register={register} errors={errors} />
        <FormField label="P&I Club" name="piClub" register={register} errors={errors} />
        <FormField label="Hull & Machinery Underwriters" name="hullMachineryUnderwriters" register={register} errors={errors} />
        <FormField label="Total Crew On Board" name="totalCrewOnBoard" register={register} errors={errors} type="number" />
        <FormField label="Loaded/Ballast Condition" name="conditionLoadedBallast" register={register} errors={errors} />
        <FormField label="Severity of Incident" name="severityOfIncident" register={register} errors={errors} />

        {/* Incident Details */}
        <FormField label="Incident Date" name="incidentDate" register={register} errors={errors} required type="date" />
        <FormField label="Reported At" name="reportedAt" register={register} errors={errors} required type="datetime-local" />

        {/* Port & Cargo Details */}
        <FormField label="Last Port of Call" name="lastPortOfCall" register={register} errors={errors} />
        <FormField label="Freeboard" name="freeboard" register={register} errors={errors} />
        <FormField label="Cargo Type & Quantity" name="cargoTypeQty" register={register} errors={errors} />
        <FormField label="Bunkers" name="bunkers" register={register} errors={errors} />
        <FormField label="Ownership Type" name="ownershipType" register={register} errors={errors} />

        {/* DPA Information */}
        <FormField label="DPA Name" name="dpaName" register={register} errors={errors} required />
        <FormField label="DPA Phone" name="dpaPhone" register={register} errors={errors} required />
        <FormField label="DPA Mobile" name="dpaMobile" register={register} errors={errors} required />
        <FormField label="DPA Email" name="dpaEmail" register={register} errors={errors} required type="email" />

        {/* Technical Manager Info */}
        <FormField label="Technical Manager Name" name="techManagerName" register={register} errors={errors} />
        <FormField label="Technical Manager Address" name="techManagerAddress" register={register} errors={errors} />
        <FormField label="Technical Manager Phone" name="techManagerPhone" register={register} errors={errors} />
        <FormField label="Technical Manager Email" name="techManagerEmail" register={register} errors={errors} type="email" />

        {/* Incident Info */}
        <FormField label="Incident Category" name="incidentCategory" register={register} errors={errors} />
        <FormField label="Incident Consequences" name="incidentConsequences" register={register} errors={errors} />
        <FormField label="Deaths" name="deaths" register={register} errors={errors} type="number" />
        <FormField label="Injuries" name="injured" register={register} errors={errors} type="number" />
        <FormField label="Deceased Details" name="deceasedDetails" register={register} errors={errors} />
        <FormField label="Incident Summary" name="summaryIncident" register={register} errors={errors} />
        <FormField label="Actions Taken" name="summaryAction" register={register} errors={errors} />
        <FormField label="Lessons Learnt" name="lessonsLearnt" register={register} errors={errors} />

        {/* SAR / Pollution */}
        <FormField label="SAR Required" name="sarRequired" register={register} errors={errors} />
        <FormField label="Oil Pollution Extent" name="oilPollutionExtent" register={register} errors={errors} />
        <FormField label="Weather Conditions" name="weatherConditions" register={register} errors={errors} />
        <FormField label="Tidal Conditions" name="tidalConditions" register={register} errors={errors} />
        <FormField label="Oil Spilled Volume" name="oilSpilledVolume" register={register} errors={errors} />

        {/* Media URLs */}
        <FormField label="Media URLs (comma-separated)" name="mediaUrls" register={register} errors={errors} className="md:col-span-2" />

        {/* Submit Button */}
        <div className="md:col-span-4 flex justify-end mt-4">
          <button 
            type="submit" 
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Update Report
          </button>
        </div>
      </form>
    </div>
  );
}

type FormField = {
    label: string;
    name: keyof ReportInput;
    register: any;
    errors: any;
    required?: boolean;
    type?: string;
    className?: string;
  }

// Reusable form field component
const FormField=({label,name, register, errors, required = false, type = 'text',className = ''}: FormField)=>{
    return (
      <div className={`flex flex-col ${className}`}>
        <label className={`text-xs font-semibold text-gray-600 ${required ? "after:content-['*'] after:ml-0.5 after:text-red-500" : ''}`}>
          {label}
        </label>
        <input
          type={type}
          {...register(name)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm text-black focus:outline-none focus:ring-1 focus:ring-blue-200"
        />
        {errors[name] && <span className="text-red-500 text-xs mt-1">{errors[name].message}</span>}
      </div>
    );
  }
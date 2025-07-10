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
      setValue('userId', user.id);
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
        {/* Section 1: SHIP/REPORTING & INCIDENT TIME/TOTAL CREW ON BOARD DATA */}
        <h2 className="col-span-full text-lg font-semibold text-gray-800 border-b pb-2 mb-2">
          1. Ship & Reporting Information
        </h2>
        
        <FormField label="Ship Name" name="shipName" register={register} errors={errors} required />
        <FormField label="IMO Number" name="imoNumber" register={register} errors={errors} required />
        <FormField label="Flag" name="flag" register={register} errors={errors} />
        <FormField label="Ship Type" name="shipType" register={register} errors={errors} />
        <FormField label="Registration Type" name="registrationType" register={register} errors={errors} />
        <FormField label="Position of Vessel" name="positionOfVessel" register={register} errors={errors} />
        <FormField label="Location of Vessel" name="locationOfVessel" register={register} errors={errors} />
        <FormField label="Area of Incident" name="areaOfIncident" register={register} errors={errors} />
        <FormField label="Deadweight" name="deadweight" register={register} errors={errors} />
        <FormField label="Year Built" name="yearBuilt" register={register} errors={errors} type="number" />
        <FormField label="Gross Tonnage (GT)" name="gt" register={register} errors={errors} />
        <FormField label="Draft Before" name="draftBefore" register={register} errors={errors} />
        <FormField label="Draft Aft" name="draftAft" register={register} errors={errors} />
        <FormField label="Freeboard" name="freeboard" register={register} errors={errors} />
        <FormField label="Cargo Type & Quantity" name="cargoTypeQty" register={register} errors={errors} />
        <FormField label="Bunkers" name="bunkers" register={register} errors={errors} />
        <FormField label="Classification Society" name="classificationSociety" register={register} errors={errors} />
        <FormField label="Last Port of Call" name="lastPortOfCall" register={register} errors={errors} />
        <FormField label="Next Port of Call" name="nextPortOfCall" register={register} errors={errors} />
        <FormField label="P&I Club" name="piClub" register={register} errors={errors} />
        <FormField label="Hull & Machinery Underwriters" name="hullMachineryUnderwriters" register={register} errors={errors} />
        <FormField label="Loaded/Ballast Condition" name="conditionLoadedBallast" register={register} errors={errors} />
        <FormField label="Total Crew On Board" name="totalCrewOnBoard" register={register} errors={errors} type="number" />
        <FormField label="Incident Date" name="incidentDate" register={register} errors={errors} required type="datetime-local" />

        {/* Section 2: OWNERS/MANAGER/RPS DATA */}
        <h2 className="col-span-full text-lg font-semibold text-gray-800 border-b pb-2 mb-2 mt-4">
          2. Ownership & Management Information
        </h2>
        
        <FormField label="Ownership Type" name="ownershipType" register={register} errors={errors} />
        <FormField label="Technical Manager Name" name="techManagerName" register={register} errors={errors} />
        <FormField label="Technical Manager Address" name="techManagerAddress" register={register} errors={errors} />
        <FormField label="Technical Manager Phone" name="techManagerPhone" register={register} errors={errors} />
        <FormField label="Technical Manager Email" name="techManagerEmail" register={register} errors={errors} type="email" />
        <FormField label="DPA Name" name="dpaName" register={register} errors={errors} />
        <FormField label="DPA Phone" name="dpaPhone" register={register} errors={errors} />
        <FormField label="DPA Mobile" name="dpaMobile" register={register} errors={errors} />
        <FormField label="DPA Email" name="dpaEmail" register={register} errors={errors} type="email" />
        <FormField label="RPS Agency Name" name="rpsAgencyName" register={register} errors={errors} />
        <FormField label="RPS Agency Address" name="rpsAgencyAddress" register={register} errors={errors} />
        <FormField label="RPS Agency Phone" name="rpsAgencyPhone" register={register} errors={errors} />
        <FormField label="RPS Agency Email" name="rpsAgencyEmail" register={register} errors={errors} type="email" />
        <FormField label="RPS Agency Contact Name" name="rpsAgencyContactName" register={register} errors={errors} />
        <FormField label="RPS Agency Contact Phone" name="rpsAgencyContactPhone" register={register} errors={errors} />
        <FormField label="RPS Agency Contact Email" name="rpsAgencyContactEmail" register={register} errors={errors} type="email" />
        <FormField label="RPSL Number" name="rpslNumber" register={register} errors={errors} />
        <FormField label="Local Agency Name" name="localAgencyName" register={register} errors={errors} />
        <FormField label="Local Agency Address" name="localAgencyAddress" register={register} errors={errors} />
        <FormField label="Local Agency Phone" name="localAgencyPhone" register={register} errors={errors} />
        <FormField label="Local Agency Email" name="localAgencyEmail" register={register} errors={errors} type="email" />
        <FormField label="Local Agency Contact Name" name="localAgencyContactName" register={register} errors={errors} />
        <FormField label="Local Agency Contact Phone" name="localAgencyContactPhone" register={register} errors={errors} />
        <FormField label="Local Agency Contact Email" name="localAgencyContactEmail" register={register} errors={errors} type="email" />

        {/* Section 3: SEVERITY OF INCIDENT DATA */}
        <h2 className="col-span-full text-lg font-semibold text-gray-800 border-b pb-2 mb-2 mt-4">
          3. Incident Details
        </h2>
        
        <FormField label="Severity of Incident" name="severityOfIncident" register={register} errors={errors} />
        <FormField label="Incident Category" name="incidentCategory" register={register} errors={errors} />
        <FormField label="Incident Consequences" name="incidentConsequences" register={register} errors={errors} />
        <FormField label="Deaths" name="deaths" register={register} errors={errors} type="number" />
        <FormField label="Injuries" name="injured" register={register} errors={errors} type="number" />
        <FormField label="Sickness" name="sickness" register={register} errors={errors} type="number" />
        <FormField label="Desertion" name="desertion" register={register} errors={errors} type="number" />
        <FormField label="Man Overboard-Survived" name="manOverboardSurvived" register={register} errors={errors} type="number" />
        <FormField label="Brief Summary of Incident" name="summaryIncident" register={register} errors={errors} className="md:col-span-2" />
        <FormField label="Actions Taken" name="summaryAction" register={register} errors={errors} className="md:col-span-2" />
        <FormField label="Causal Factors" name="causalFactors" register={register} errors={errors} className="md:col-span-2" />
        <FormField label="Lessons Learnt" name="lessonsLearnt" register={register} errors={errors} className="md:col-span-2" />

        {/* Section 4: ADDITIONAL DATA */}
        <h2 className="col-span-full text-lg font-semibold text-gray-800 border-b pb-2 mb-2 mt-4">
          4. Additional Information
        </h2>
        
        <FormField label="SAR Required" name="sarRequired" register={register} errors={errors} type="checkbox" />
        <FormField label="Oil Pollution Extent" name="oilPollutionExtent" register={register} errors={errors} />
        <FormField label="Oil Spilled Volume" name="oilSpilledVolume" register={register} errors={errors} />
        <FormField label="Weather Conditions" name="weatherConditions" register={register} errors={errors} />
        <FormField label="Tidal Conditions" name="tidalConditions" register={register} errors={errors} />
        <FormField label="Media URLs (comma-separated)" name="mediaUrls" register={register} errors={errors} className="md:col-span-2" />
        <FormField label="Reported By" name="reportedBy" register={register} errors={errors} />
        <FormField label="Company Name" name="companyName" register={register} errors={errors} />
        <FormField label="Designation" name="designation" register={register} errors={errors} />
        <FormField label="Contact Number" name="contactNumber" register={register} errors={errors} />

        {/* Submit Button */}
        <div className="col-span-full flex justify-end mt-4">
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

type FormFieldProps = {
  label: string;
  name: keyof ReportInput;
  register: any;
  errors: any;
  required?: boolean;
  type?: string;
  className?: string;
}

const FormField = ({ label, name, register, errors, required = false, type = 'text', className = '' }: FormFieldProps) => {
  if (type === 'checkbox') {
    return (
      <div className={`flex items-center ${className}`}>
        <input
          type="checkbox"
          id={name}
          {...register(name)}
          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        <label htmlFor={name} className="ml-2 block text-xs font-semibold text-gray-600">
          {label}
        </label>
        {errors[name] && <span className="text-red-500 text-xs mt-1">{errors[name].message}</span>}
      </div>
    );
  }

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
};
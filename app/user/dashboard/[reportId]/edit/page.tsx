'use client';
import React, { useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { FormProvider, useForm, useWatch } from 'react-hook-form';
import { useRouter, useParams } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { z } from 'zod';
import { CasualtyForm } from '@/components/CasualtyForm';
import {
  reportSchema,
  Flag,
  ShipType,
  RegistrationType,
  LocationType,
  AreaType,
  Bunkers,
  ConditionType,
  OwnershipType,
  SeverityType,
  IncidentCategory,
  IncidentClassification,
  IncidentConsequences
} from '@/types';

type ReportInput = z.input<typeof reportSchema>;

export default function UpdateReportForm() {
  const { user } = useUser();
  const params = useParams();
  const router = useRouter();
  const reportId = params.reportId as string;
  const [casualtyComponent, setCasualtyComponent] = useState(false);

  const methods = useForm<ReportInput>({
    resolver: zodResolver(reportSchema),
    mode: 'onBlur',
    defaultValues: async () => {
      const response = await axios.get(`/api/me/reports/${reportId}`);
      const data = response.data;
      
      // Initialize casualties array if it doesn't exist
      if (!data.casualties) {
        data.casualties = [];
      }
      
      // Initialize incidentConsequences if it doesn't exist
      if (!data.incidentConsequences) {
        data.incidentConsequences = [];
      }
      
      // Set casualtyComponent based on initial data
      if (data.incidentConsequences?.includes(IncidentConsequences.PersonnelMatters)) {
        setCasualtyComponent(true);
      }
      
      return data;
    }
  });

  const { register, handleSubmit, setValue, formState: { errors }, control } = methods;
  
  const watchValues = useWatch({ control });
  const watchIncidentClassification = useWatch({ control, name: "incidentClassification" }) as IncidentClassification;
  const watchIncidentConsequences = useWatch({
    control,
    name: 'incidentConsequences',
    defaultValue: []
  }) as IncidentConsequences[];

  const broad = {
    [IncidentClassification.MarineCasualty]: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco.`,
    
    [IncidentClassification.NonOperationalIncident]: `Duis aute irure dolor in reprehenderit in voluptate velit esse. 
            Cillum dolore eu fugiat nulla pariatur excepteur sint occaecat. 
            Cupidatat non proident, sunt in culpa qui officia deserunt.`
  };

  useEffect(() => {
    if (user?.id) {
      setValue('userId', user.id);
    }
  }, [user?.id, setValue]);

  useEffect(() => {
    const isPersonnelMatters = watchIncidentConsequences?.includes(
      IncidentConsequences.PersonnelMatters
    );
    setCasualtyComponent(isPersonnelMatters);
  }, [watchIncidentConsequences]);

  const onSubmit = async (data: ReportInput) => {
    try {
      await axios.put(`/api/me/reports/${reportId}`, data);
      alert('Report updated successfully!');
      router.push(`/user/dashboard`);
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
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-white border rounded-lg p-6">
          
          {/* Section 0: INCIDENT CLASSIFICATION */}
          <h2 className="col-span-full text-lg font-semibold text-gray-800 border-b pb-2 mb-2">
            0. Broad Classification of Incidents
          </h2>
          <div className="flex justify-between col-span-full gap-x-16">
            <DropdownField 
              label="Incident Classification" 
              name="incidentClassification" 
              options={Object.values(IncidentClassification)} 
              register={register} 
              errors={errors} 
            />
            <div>
              {watchIncidentClassification && broad[watchIncidentClassification]}
            </div>
          </div>
         
          {/* Section 1: SHIP/REPORTING & INCIDENT TIME/TOTAL CREW ON BOARD DATA */}
          <h2 className="col-span-full text-lg font-semibold text-gray-800 border-b pb-2 mb-2">
            1. Ship & Reporting Information
          </h2>
          
          <FormField label="Ship Name" name="shipName" register={register} errors={errors} required />
          <FormField label="IMO Number" name="imoNumber" register={register} errors={errors} required />
          
          <DropdownField 
            label="Flag" 
            name="flag" 
            options={Object.values(Flag)} 
            register={register} 
            errors={errors} 
            required
          />
          
          <DropdownField 
            label="Ship Type" 
            name="shipType" 
            options={Object.values(ShipType)} 
            register={register} 
            errors={errors}
            required
          />
          
          <DropdownField 
            label="Registration Type" 
            name="registrationType" 
            options={Object.values(RegistrationType)} 
            register={register} 
            errors={errors} 
          />
          
          <FormField required label="Position of Vessel" name="positionOfVessel" register={register} errors={errors} />
          
          <DropdownField required
            label="Location of Vessel" 
            name="locationOfVessel" 
            options={Object.values(LocationType)} 
            register={register} 
            errors={errors} 
          />
          
          <DropdownField 
            label="Area of Incident" 
            name="areaOfIncident" 
            options={Object.values(AreaType)} 
            register={register} 
            errors={errors} 
          />
          
          <FormField label="Deadweight" name="deadweight" register={register} errors={errors} />
          <FormField label="Year Built" name="yearBuilt" register={register} errors={errors} type="number" />
          <FormField required label="Gross Tonnage (GT)" name="gt" register={register} errors={errors} />
          <FormField label="Draft Before" name="draftBefore" register={register} errors={errors} />
          <FormField label="Draft Aft" name="draftAft" register={register} errors={errors} />
          <FormField label="Freeboard" name="freeboard" register={register} errors={errors} />
          <FormField required label="Cargo Type & Quantity" name="cargoTypeQty" register={register} errors={errors} />
          
          <DropdownField 
            label="Bunkers" 
            name="bunkers" 
            options={Object.values(Bunkers)} 
            register={register} 
            errors={errors} 
          />
          
          <FormField required label="Classification Society" name="classificationSociety" register={register} errors={errors} />
          <FormField required label="Last Port of Call" name="lastPortOfCall" register={register} errors={errors} />
          <FormField required label="Next Port of Call" name="nextPortOfCall" register={register} errors={errors} />
          <FormField required label="P&I Club" name="piClub" register={register} errors={errors} />
          <FormField label="Hull & Machinery Underwriters" name="hullMachineryUnderwriters" register={register} errors={errors} />
          
          <DropdownField 
            label="Loaded/Ballast Condition" 
            name="conditionLoadedBallast" 
            options={Object.values(ConditionType)} 
            register={register} 
            errors={errors} 
          />
          
          <FormField
            required
            label="Total Crew On Board"
            name="totalCrewOnBoard"
            register={(name: keyof ReportInput) => register(name, { valueAsNumber: true })}
            errors={errors}
            type="number"
          />
          <FormField label="Incident Date" name="incidentDate" register={register} errors={errors} required type="datetime-local" />

          {/* Section 2: OWNERS/MANAGER/RPS DATA */}
          <h2 className="col-span-full text-lg font-semibold text-gray-800 border-b pb-2 mb-2 mt-4">
            2. Ownership & Management Information
          </h2>
          
          <DropdownField 
            label="Ownership Type" 
            name="ownershipType" 
            options={Object.values(OwnershipType)} 
            register={register} 
            errors={errors} 
          />
          
          <FormField required label="Technical Manager Name" name="techManagerName" register={register} errors={errors} />
          <FormField label="Technical Manager Address" name="techManagerAddress" register={register} errors={errors} />
          <FormField required label="Technical Manager Phone" name="techManagerPhone" register={register} errors={errors} />
          <FormField required label="Technical Manager Email" name="techManagerEmail" register={register} errors={errors} type="email" />
          
          <FormField required label="DPA Name" name="dpaName" register={register} errors={errors} />
          <FormField required label="DPA Phone" name="dpaPhone" register={register} errors={errors} />
          <FormField required label="DPA Mobile" name="dpaMobile" register={register} errors={errors} />
          <FormField required label="DPA Email" name="dpaEmail" register={register} errors={errors} type="email" />
          
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
          
          <DropdownField 
            label="Severity of Incident" 
            name="severityOfIncident" 
            options={Object.values(SeverityType)} 
            register={register} 
            errors={errors} 
          />
          
          <DropdownField 
            required
            label="Incident Category" 
            name="incidentCategory" 
            options={Object.values(IncidentCategory)} 
            register={register} 
            errors={errors} 
          />

          <CheckboxGroupField 
            required
            casualtyComponent={casualtyComponent}
            setCasualtyComponent={setCasualtyComponent}
            label="Incident Consequences" 
            name="incidentConsequences" 
            options={Object.values(IncidentConsequences)} 
            register={register} 
            errors={errors} 
            control={control}
          />
          
          {casualtyComponent && (
            <>
              <FormField
                required
                label="Deaths"
                name="deaths"
                register={(name: keyof ReportInput) => register(name, { valueAsNumber: true })}
                errors={errors}
                type="number"
              />

              <FormField
                required
                label="Injuries"
                name="injured"
                register={(name: keyof ReportInput) => register(name, { valueAsNumber: true })}
                errors={errors}
                type="number"
              />

              <FormField
                label="Sickness"
                name="sickness"
                register={(name: keyof ReportInput) => register(name, { valueAsNumber: true })}
                errors={errors}
                type="number"
              />

              <FormField
                label="Desertion"
                name="desertion"
                register={(name: keyof ReportInput) => register(name, { valueAsNumber: true })}
                errors={errors}
                type="number"
              />

              <FormField
                label="Man Overboard-Survived"
                name="manOverboardSurvived"
                register={(name: keyof ReportInput) => register(name, { valueAsNumber: true })}
                errors={errors}
                type="number"
              />
              <CasualtyForm />
            </>
          )}

          <FormField 
            label="Brief Summary of Incident" 
            name="summaryIncident" 
            register={register} 
            errors={errors} 
            className="md:col-span-2" 
          />
          <FormField 
            label="Actions Taken" 
            name="summaryAction" 
            register={register} 
            errors={errors} 
            className="md:col-span-2" 
          />
          <FormField 
            label="Causal Factors" 
            name="causalFactors" 
            register={register} 
            errors={errors} 
            className="md:col-span-2" 
          />
          <FormField 
            label="Lessons Learnt" 
            name="lessonsLearnt" 
            register={register} 
            errors={errors} 
            className="md:col-span-2" 
          />

          {/* Section 4: ADDITIONAL DATA */}
          <h2 className="col-span-full text-lg font-semibold text-gray-800 border-b pb-2 mb-2 mt-4">
            4. Additional Information
          </h2>
          
          <FormField label="SAR Required" name="sarRequired" register={register} errors={errors} type="checkbox" />
          <FormField label="Oil Pollution Extent" name="oilPollutionExtent" register={register} errors={errors} />
          <FormField label="Oil Spilled Volume" name="oilSpilledVolume" register={register} errors={errors} />
          <FormField label="Weather Conditions" name="weatherConditions" register={register} errors={errors} />
          <FormField label="Tidal Conditions" name="tidalConditions" register={register} errors={errors} />
          
          <FormField 
            label="Media URLs (comma-separated)" 
            name="mediaUrls" 
            register={register} 
            errors={errors} 
            className="md:col-span-2" 
          />
          
          <FormField required label="Reported By" name="reportedBy" register={register} errors={errors} />
          <FormField required label="Company Name" name="companyName" register={register} errors={errors} />
          <FormField required label="Designation" name="designation" register={register} errors={errors} />
          <FormField required label="Contact Number" name="contactNumber" register={register} errors={errors} />

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
      </FormProvider>
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

type DropdownFieldProps = {
  label: string;
  name: keyof ReportInput;
  options: string[];
  register: any;
  errors: any;
  required?: boolean;
  className?: string;
}

const DropdownField = ({ 
  label, 
  name, 
  options, 
  register, 
  errors, 
  required = false, 
  className = ''
}: DropdownFieldProps) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <label className={`text-xs font-semibold text-gray-600 ${required ? "after:content-['*'] after:ml-0.5 after:text-red-500" : ''}`}>
        {label}
      </label>
      <select
        {...register(name)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm text-black focus:outline-none focus:ring-1 focus:ring-blue-200"
      >
        <option value="">Select {label}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {errors[name] && <span className="text-red-500 text-xs mt-1">{errors[name].message}</span>}
    </div>
  );
};

type CheckboxGroupFieldProps = {
  casualtyComponent: boolean;
  setCasualtyComponent: (x: boolean) => void;
  label: string;
  name: keyof ReportInput;
  options: IncidentConsequences[];
  register: any;
  errors: any;
  control: any;
  required?: boolean;
  className?: string;
};

const CheckboxGroupField = ({ 
  casualtyComponent,
  setCasualtyComponent,
  label, 
  name, 
  options, 
  register, 
  errors, 
  control,
  required = false, 
  className = ''
}: CheckboxGroupFieldProps) => {
  const watchIncidentConsequences: IncidentConsequences[] = useWatch({
    control,
    name: 'incidentConsequences',
    defaultValue: []
  });

  useEffect(() => {
    const isPersonnelMatters = watchIncidentConsequences?.includes(
      IncidentConsequences.PersonnelMatters
    );
    setCasualtyComponent(isPersonnelMatters);
  }, [watchIncidentConsequences, setCasualtyComponent]);

  return (
    <div className={`flex flex-col ${className}`}>
      <label className={`text-xs font-semibold text-gray-600 ${required ? "after:content-['*'] after:ml-0.5 after:text-red-500" : ''}`}>
        {label}
      </label>
      
      <div className="space-y-2 mt-1">
        {options.map((option) => {
          return (
            <div key={option} className="flex items-center">
              <input
                type="checkbox"
                id={`${name}-${option}`}
                value={option}
                {...register(name)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor={`${name}-${option}`} className="ml-2 block text-sm text-gray-700">
                {option}
              </label>
            </div>
          );
        })}
      </div>

      {errors[name] && <span className="text-red-500 text-xs mt-1">{errors[name].message}</span>}
    </div>
  );
};
'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { reportSchema } from '@/types';
import axios from 'axios';
import z from 'zod';

const inputClass = 'w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-200';
const labelClass = 'block text-sm font-semibold text-gray-700 mb-1';
const errorClass = 'text-red-500 text-xs mt-1';

const sections: [string, (keyof z.input<typeof reportSchema>)[]][] = [
  ['Ship Information', ['shipName', 'imoNumber', 'incidentDate', 'reportedAt', 'flag', 'shipType', 'registrationType', 'positionOfVessel', 'locationOfVessel', 'areaOfIncident', 'yearBuilt', 'deadweight', 'gt', 'maxDraft', 'classificationSociety', 'piClub', 'hullMachineryUnderwriters', 'totalCrewOnBoard', 'conditionLoadedBallast', 'severityOfIncident']],
  ['Port & Cargo Details', ['lastPortOfCall', 'freeboard', 'cargoTypeQty', 'bunkers', 'ownershipType']],
  ['Tech Manager Info', ['techManagerName', 'techManagerAddress', 'techManagerPhone', 'techManagerEmail']],
  ['RPS Agency Info', ['rpsAgencyName', 'rpsAgencyContactName', 'rpsAgencyPhone', 'rpsAgencyEmail']],
  ['Local Agency Info', ['localAgencyName', 'localAgencyContactName', 'localAgencyPhone', 'localAgencyEmail']],
  ['DPA Info', ['dpaName', 'dpaPhone', 'dpaMobile', 'dpaEmail']],
  ['Incident Info', ['incidentCategory', 'incidentConsequences', 'deaths', 'injured', 'deceasedDetails', 'summaryIncident', 'summaryAction', 'lessonsLearnt']],
  ['SAR / Pollution', ['sarRequired', 'oilPollutionExtent', 'weatherConditions', 'tidalConditions', 'oilSpilledVolume']],
  ['System Metadata', ['userId', 'mediaUrls']]
];

const requiredFields: (keyof ReportInput)[] = [
  'shipName', 'imoNumber', 'incidentDate', 'reportedAt',
  'dpaName', 'dpaPhone', 'dpaMobile', 'dpaEmail', 'userId','mediaUrls'
];

const fieldLabels: Partial<Record<keyof ReportInput, string>> = {
  shipName: "Ship's Name",
  imoNumber: "IMO Number",
  incidentDate: "Incident Date",
  reportedAt: "Reported At",
  flag: "Flag",
  shipType: "Type of Ship",
  registrationType: "Registration Type",
  positionOfVessel: "Position of Vessel",
  locationOfVessel: "Location of Vessel",
  areaOfIncident: "Area of Incident",
  yearBuilt: "Year Built",
  deadweight: "Deadweight",
  gt: "Gross Tonnage (GT)",
  maxDraft: "Maximum Draft",
  classificationSociety: "Classification Society",
  piClub: "P&I Club",
  hullMachineryUnderwriters: "Hull & Machinery Insurer",
  totalCrewOnBoard: "Total Crew on Board",
  conditionLoadedBallast: "Loaded / Ballast Condition",
  severityOfIncident: "Severity of Incident",
  lastPortOfCall: "Last Port of Call",
  freeboard: "Freeboard",
  cargoTypeQty: "Cargo Type & Quantity",
  bunkers: "Bunkers",
  ownershipType: "Ownership Type",
  techManagerName: "Technical Manager Name",
  techManagerAddress: "Technical Manager Address",
  techManagerPhone: "Technical Manager Phone",
  techManagerEmail: "Technical Manager Email",
  rpsAgencyName: "RPS Agency Name",
  rpsAgencyContactName: "RPS Contact Name",
  rpsAgencyPhone: "RPS Phone",
  rpsAgencyEmail: "RPS Email",
  localAgencyName: "Local Agency Name",
  localAgencyContactName: "Local Contact Name",
  localAgencyPhone: "Local Phone",
  localAgencyEmail: "Local Email",
  dpaName: "DPA Name",
  dpaPhone: "DPA Phone",
  dpaMobile: "DPA Mobile",
  dpaEmail: "DPA Email",
  incidentCategory: "Incident Category",
  incidentConsequences: "Incident Consequences",
  deaths: "Deaths",
  injured: "Injured",
  deceasedDetails: "Details of Deceased",
  summaryIncident: "Incident Summary",
  summaryAction: "Actions Taken",
  lessonsLearnt: "Lessons Learnt",
  sarRequired: "SAR Required",
  oilPollutionExtent: "Oil Pollution Extent",
  weatherConditions: "Weather Conditions",
  tidalConditions: "Tidal Conditions",
  oilSpilledVolume: "Oil Spilled Volume",
  userId: "User ID",
  mediaUrls: "Media URLs (comma-separated)"
};



type ReportInput = z.input<typeof reportSchema>;

export default function CreateReportForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ReportInput>({
    resolver: zodResolver(reportSchema),
  });

  const onSubmit = async (data: ReportInput) => {
    try {
      await axios.post('/api/reports', data);
      alert('Report submitted successfully!');
    } catch (err) {
      console.error(err);
      alert('Failed to submit report.');
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-black">Create New Incident Report</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {sections.map(([title, fields]) => (
          <div key={title} className="bg-white border border-blue-100 rounded-2xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-black mb-4 bg-blue-50 p-2 rounded">{title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {fields.map((fieldName) => (
                <div key={fieldName}>
                  <label
                    htmlFor={fieldName}
                    className={`${labelClass} ${requiredFields.includes(fieldName) ? "after:content-['*'] after:ml-0.5 after:text-red-500" : ''}`}
                  >
                    {fieldLabels[fieldName] ?? fieldName}
                  </label>

                  <input
                    id={fieldName}
                    type={['incidentDate', 'reportedAt'].includes(fieldName) ? 'date' : 'text'} // instead of this do the deepseek stuff
                    {...register(fieldName)}
                    className={inputClass}
                  />
                  {errors[fieldName] && (
                    <p className={errorClass}>
                      {(errors[fieldName] as any)?.message}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="flex justify-end mt-8">
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

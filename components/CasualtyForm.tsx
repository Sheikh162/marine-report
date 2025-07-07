'use client';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { 
  CasualtyStatus,
  Nationality,
  MaritalStatus,
  Gender,
  Education,
  IncidentSubCategory,
  casualtySchema
} from '@/types';
import { z } from 'zod';

type CasualtyInput = z.input<typeof casualtySchema>;

export function CasualtyForm() {
  const { control, register, formState: { errors } } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'casualties',
  });

  const defaultCasualty: CasualtyInput = {
    name: '',
    status: '' as CasualtyStatus,
    incidentSubCategory: '' as IncidentSubCategory,
    nationality: '' as Nationality,
    residentialAddress: '',
    dateOfBirth: undefined,
    age: undefined,
    rank: '',
    dateOfJoining: undefined,
    maritalStatus: '' as MaritalStatus,
    gender: '' as Gender,
    education: '' as Education,
    insuranceCover: '',
    cdcNumber: '',
    cdcPlaceOfIssue: '',
    passportNumber: '',
    passportPlaceOfIssue: '',
    indosNumber: '',
    cocNumber: '',
    cocIssueDate: undefined,
    cocPlaceOfIssue: '',
    maritimeTraining: '',
    collectiveBargaining: '',
    nextOfKinDetails: '',
    medicalReports: '',
    mortalRemainsStatus: '',
  };

  const addCasualty = () => {
    append(defaultCasualty);  // appending default casualty to the casualties array 
  };
 
  const renderInputField = (
    index: number,
    fieldName: keyof CasualtyInput,
    label: string,
    required = false,
    type = 'text'
  ) => (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">
        {label}{required && '*'}
      </label>
      <input
        type={type}
        {...register(`casualties.${index}.${fieldName}`, { required })}
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      />
{/*       {errors?.casualties?.[index]?.[fieldName] && (
        <p className="mt-1 text-sm text-red-600">{label} is required</p>
      )} */}
    </div>
  );

  const renderDateField = (
    index: number,
    fieldName: keyof CasualtyInput,
    label: string,
    required = false
  ) => (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">
        {label}{required && '*'}
      </label>
      <input
        type="date"
        {...register(`casualties.${index}.${fieldName}`, { required })}
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      />
{/*       {errors?.casualties?.[index]?.[fieldName] && (
        <p className="mt-1 text-sm text-red-600">{label} is required</p>
      )} */}
    </div>
  );

  const renderSelectField = (
    index: number,
    fieldName: keyof CasualtyInput,
    label: string,
    options: Record<string, string>,
    required = false
  ) => (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">
        {label}{required && '*'}
      </label>
      <select
        {...register(`casualties.${index}.${fieldName}`, { required })}
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      >
        <option value="">Select {label}</option>
        {Object.entries(options).map(([value, label]) => (
          <option key={value} value={value}>{label}</option>
        ))}
      </select>
{/*       {errors?.casualties?.[index]?.[fieldName] && (
        <p className="mt-1 text-sm text-red-600">{label} is required</p>
      )} */}
    </div>
  );

  return (
    <div className="col-span-4 lg:w-5xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Casualty Details</h2>
        <button
          type="button"
          onClick={addCasualty}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Add Casualty
        </button>
      </div>

      {fields.map((field, index) => (
      <div key={field.id} className="mb-8 p-6 border rounded-lg bg-gray-50">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium">Casualty #{index + 1}</h3>
          <button
            type="button"
            onClick={() => remove(index)}
            className="text-red-600 hover:text-red-800 transition-colors"
          >
            Remove
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {/* Personal Information - Horizontal Layout */}
          <div className="space-y-2">
            <h4 className="font-medium text-gray-700">Personal Information</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {renderInputField(index, 'name', 'Full Name', true)}
              {renderSelectField(
                index,
                'status',
                'Status',
                Object.fromEntries(Object.values(CasualtyStatus).map(v => [v, v])),
                true
              )}
              {renderSelectField(
                index,
                'incidentSubCategory',
                'Incident Sub Category',
                Object.fromEntries(Object.values(IncidentSubCategory).map(v => [v, v])),
                true
              )}
              {renderSelectField(
                index,
                'nationality',
                'Nationality',
                Object.fromEntries(Object.values(Nationality).map(v => [v, v])),
                true
              )}
            </div>
            <div className="md:col-span-2">
              {renderInputField(index, 'residentialAddress', 'Residential Address')}
            </div>
          </div>

          {/* Demographic Information - Horizontal Layout */}
          <div className="space-y-2">
            <h4 className="font-medium text-gray-700">Demographic Information</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {renderDateField(index, 'dateOfBirth', 'Date of Birth')}
              {renderInputField(index, 'age', 'Age', false, 'number')}
              {renderSelectField(
                index,
                'maritalStatus',
                'Marital Status',
                Object.fromEntries(Object.values(MaritalStatus).map(v => [v, v]))
              )}
              {renderSelectField(
                index,
                'gender',
                'Gender',
                Object.fromEntries(Object.values(Gender).map(v => [v, v])),
                true
              )}
              {renderSelectField(
                index,
                'education',
                'Education',
                Object.fromEntries(Object.values(Education).map(v => [v, v]))
              )}
            </div>
          </div>

          {/* Professional Information - Horizontal Layout */}
          <div className="space-y-2">
            <h4 className="font-medium text-gray-700">Professional Information</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {renderInputField(index, 'rank', 'Rank/Designation')}
              {renderDateField(index, 'dateOfJoining', 'Date of Joining')}
            </div>
          </div>

          {/* Documentation - Horizontal Layout */}
          <div className="space-y-2">
            <h4 className="font-medium text-gray-700">Documentation</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {renderInputField(index, 'insuranceCover', 'Insurance Cover')}
              {renderInputField(index, 'cdcNumber', 'CDC Number')}
              {renderInputField(index, 'cdcPlaceOfIssue', 'CDC Place of Issue')}
              {renderInputField(index, 'passportNumber', 'Passport Number')}
              {renderInputField(index, 'passportPlaceOfIssue', 'Passport Place of Issue')}
              {renderInputField(index, 'indosNumber', 'INDOS Number')}
              {renderInputField(index, 'cocNumber', 'COC Number')}
              {renderDateField(index, 'cocIssueDate', 'COC Issue Date')}
              {renderInputField(index, 'cocPlaceOfIssue', 'COC Place of Issue')}
              {renderInputField(index, 'maritimeTraining', 'Maritime Training')}
              {renderInputField(index, 'collectiveBargaining', 'Collective Bargaining')}
              {renderInputField(index, 'nextOfKinDetails', 'Next of Kin Details')}
              {renderInputField(index, 'medicalReports', 'Medical Reports')}
              {renderInputField(index, 'mortalRemainsStatus', 'Mortal Remains Status')}
            </div>
          </div>
        </div>
      </div>
))}
    </div>
  );
}
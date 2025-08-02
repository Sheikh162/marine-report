// components/CasualtyForm.tsx
'use client';

import { useFieldArray, useFormContext, Controller } from 'react-hook-form';
import { 
  CasualtyStatus,
  Nationality,
  MaritalStatus,
  Gender,
  Education,
  IncidentSubCategory,
  casualtySchema,
  Report
} from '@/types';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FormField } from './ui/form/FormField';
import { SelectField } from './ui/form/SelectField';
import { DatePickerField } from './ui/form/DatePickerField';
import { Trash2 } from 'lucide-react';

type CasualtyInput = z.input<typeof casualtySchema>;

const defaultCasualty: CasualtyInput = {
    name: '',
    status: CasualtyStatus.Injured,
    incidentSubCategory: IncidentSubCategory.InjuryOnBoard,
    nationality: Nationality.IN,
    gender: Gender.Male,
    residentialAddress: '',
    dateOfBirth: undefined,
    age: undefined,
    rank: '',
    dateOfJoining: undefined,
    maritalStatus: MaritalStatus.Single,
    education: Education.Tenth,
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

export function CasualtyForm() {
  const { control, register, formState: { errors } } = useFormContext<Report>();
  
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'casualties',
  });

  const addCasualty = () => {
    append(defaultCasualty);
  };
 
  return (
    <div className="space-y-6 col-span-full">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">Casualty Details</h3>
        <Button
          type="button"
          onClick={addCasualty}
        >
          Add Casualty
        </Button>
      </div>

      {fields.map((field, index) => (
        <Card key={field.id} className="relative border-border">
            <CardHeader>
                <CardTitle>Casualty #{index + 1}</CardTitle>
                <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => remove(index)}
                    className="absolute top-4 right-4 text-destructive hover:bg-destructive/10"
                >
                    <Trash2 className="h-4 w-4" />
                </Button>
            </CardHeader>
            <CardContent className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                    <h4 className="font-medium text-muted-foreground">Personal Information</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <FormField label="Full Name" name={`casualties.${index}.name`} register={register(`casualties.${index}.name`)} error={errors.casualties?.[index]?.name} required />
                        <Controller name={`casualties.${index}.status`} control={control} render={({ field }) => ( <SelectField label="Status" name={field.name} options={Object.values(CasualtyStatus)} onValueChange={field.onChange} defaultValue={field.value} error={errors.casualties?.[index]?.status} required /> )} />
                        <Controller name={`casualties.${index}.incidentSubCategory`} control={control} render={({ field }) => ( <SelectField label="Incident Sub Category" name={field.name} options={Object.values(IncidentSubCategory)} onValueChange={field.onChange} defaultValue={field.value} error={errors.casualties?.[index]?.incidentSubCategory} required /> )} />
                        <Controller name={`casualties.${index}.nationality`} control={control} render={({ field }) => ( <SelectField label="Nationality" name={field.name} options={Object.values(Nationality)} onValueChange={field.onChange} defaultValue={field.value} error={errors.casualties?.[index]?.nationality} required /> )} />
                        <FormField label="Residential Address" name={`casualties.${index}.residentialAddress`} register={register(`casualties.${index}.residentialAddress`)} error={errors.casualties?.[index]?.residentialAddress} className="col-span-full" />
                    </div>
                </div>

                {/* Demographic Information - IMPROVED LAYOUT */}
                <div className="space-y-4">
                    <h4 className="font-medium text-muted-foreground">Demographic Information</h4>
                    {/* Using a more flexible grid with 6 columns on larger screens */}
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 items-start">
                        <Controller 
                            name={`casualties.${index}.dateOfBirth`} 
                            control={control} 
                            render={({ field }) => ( 
                                <DatePickerField 
                                    label="Date of Birth" 
                                    date={field.value} 
                                    setDate={field.onChange} 
                                    error={errors.casualties?.[index]?.dateOfBirth}
                                    className="lg:col-span-2" // Date picker takes more space
                                /> 
                            )} 
                        />
                        <FormField 
                            label="Age" 
                            name={`casualties.${index}.age`} 
                            register={register(`casualties.${index}.age`, { valueAsNumber: true })} 
                            error={errors.casualties?.[index]?.age} 
                            type="number" 
                            className="lg:col-span-1" // Age field takes less space
                        />
                        <Controller name={`casualties.${index}.maritalStatus`} control={control} render={({ field }) => ( <SelectField label="Marital Status" name={field.name} options={Object.values(MaritalStatus)} onValueChange={field.onChange} defaultValue={field.value} error={errors.casualties?.[index]?.maritalStatus} /> )} />
                        <Controller name={`casualties.${index}.gender`} control={control} render={({ field }) => ( <SelectField label="Gender" name={field.name} options={Object.values(Gender)} onValueChange={field.onChange} defaultValue={field.value} error={errors.casualties?.[index]?.gender} required /> )} />
                        <Controller name={`casualties.${index}.education`} control={control} render={({ field }) => ( <SelectField label="Education" name={field.name} options={Object.values(Education)} onValueChange={field.onChange} defaultValue={field.value} error={errors.casualties?.[index]?.education} /> )} />
                    </div>
                </div>

                {/* Professional Information */}
                <div className="space-y-4">
                    <h4 className="font-medium text-muted-foreground">Professional Information</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField label="Rank/Designation" name={`casualties.${index}.rank`} register={register(`casualties.${index}.rank`)} error={errors.casualties?.[index]?.rank} />
                        <Controller name={`casualties.${index}.dateOfJoining`} control={control} render={({ field }) => (<DatePickerField label="Date of Joining" date={field.value} setDate={field.onChange} error={errors.casualties?.[index]?.dateOfJoining} /> )} />
                    </div>
                </div>

                {/* Documentation */}
                <div className="space-y-4">
                    <h4 className="font-medium text-muted-foreground">Documentation</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <FormField label="Insurance Cover" name={`casualties.${index}.insuranceCover`} register={register(`casualties.${index}.insuranceCover`)} error={errors.casualties?.[index]?.insuranceCover} />
                        <FormField label="CDC Number" name={`casualties.${index}.cdcNumber`} register={register(`casualties.${index}.cdcNumber`)} error={errors.casualties?.[index]?.cdcNumber} />
                        <FormField label="CDC Place of Issue" name={`casualties.${index}.cdcPlaceOfIssue`} register={register(`casualties.${index}.cdcPlaceOfIssue`)} error={errors.casualties?.[index]?.cdcPlaceOfIssue} />
                        <FormField label="Passport Number" name={`casualties.${index}.passportNumber`} register={register(`casualties.${index}.passportNumber`)} error={errors.casualties?.[index]?.passportNumber} />
                        <FormField label="Passport Place of Issue" name={`casualties.${index}.passportPlaceOfIssue`} register={register(`casualties.${index}.passportPlaceOfIssue`)} error={errors.casualties?.[index]?.passportPlaceOfIssue} />
                        <FormField label="INDOS Number" name={`casualties.${index}.indosNumber`} register={register(`casualties.${index}.indosNumber`)} error={errors.casualties?.[index]?.indosNumber} />
                        <FormField label="COC Number" name={`casualties.${index}.cocNumber`} register={register(`casualties.${index}.cocNumber`)} error={errors.casualties?.[index]?.cocNumber} />
                        <Controller name={`casualties.${index}.cocIssueDate`} control={control} render={({ field }) => (<DatePickerField label="COC Issue Date" date={field.value} setDate={field.onChange} error={errors.casualties?.[index]?.cocIssueDate} /> )} />
                        <FormField label="COC Place of Issue" name={`casualties.${index}.cocPlaceOfIssue`} register={register(`casualties.${index}.cocPlaceOfIssue`)} error={errors.casualties?.[index]?.cocPlaceOfIssue} />
                        <FormField label="Maritime Training" name={`casualties.${index}.maritimeTraining`} register={register(`casualties.${index}.maritimeTraining`)} error={errors.casualties?.[index]?.maritimeTraining} />
                        <FormField label="Collective Bargaining" name={`casualties.${index}.collectiveBargaining`} register={register(`casualties.${index}.collectiveBargaining`)} error={errors.casualties?.[index]?.collectiveBargaining} />
                        <FormField label="Next of Kin Details" name={`casualties.${index}.nextOfKinDetails`} register={register(`casualties.${index}.nextOfKinDetails`)} error={errors.casualties?.[index]?.nextOfKinDetails} />
                        <FormField label="Medical Reports" name={`casualties.${index}.medicalReports`} register={register(`casualties.${index}.medicalReports`)} error={errors.casualties?.[index]?.medicalReports} />
                        <FormField label="Mortal Remains Status" name={`casualties.${index}.mortalRemainsStatus`} register={register(`casualties.${index}.mortalRemainsStatus`)} error={errors.casualties?.[index]?.mortalRemainsStatus} />
                    </div>
                </div>
            </CardContent>
        </Card>
      ))}
    </div>
  );
}

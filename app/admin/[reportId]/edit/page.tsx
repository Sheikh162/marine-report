// app/admin/[reportId]/edit/page.tsx
'use client';

import { useForm, Controller, FormProvider, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useRouter, useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import { FormField } from '@/components/ui/form/FormField';
import { SelectField } from '@/components/ui/form/SelectField';
import { DatePickerField } from '@/components/ui/form/DatePickerField';
import { CheckboxField } from '@/components/ui/form/CheckboxField';
import { CheckboxGroupField } from '@/components/ui/form/CheckboxGroupField';
import { TextareaField } from '@/components/ui/form/TextareaField';
import { PageHeader } from '@/components/ui/layout/PageHeader';
import { countryList } from '@/lib/countryList';
import { 
    reportSchema,
    IncidentClassification,
    ShipType,
    RegistrationType,
    LocationType,
    AreaType,
    Bunkers,
    ConditionType,
    OwnershipType,
    SeverityType,
    IncidentCategory,
    IncidentConsequences,
    casualtySchema,
    CasualtyStatus,
    Education,
    Gender,
    IncidentSubCategory,
    MaritalStatus,
    Nationality
} from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CasualtyForm } from '@/components/CasualtyForm';
import { toast } from 'sonner';

type ReportInput = z.input<typeof reportSchema>;
type CasualtyInput = z.input<typeof casualtySchema>;

const defaultCasualty: CasualtyInput = {
  name: '',
  status: CasualtyStatus.Injured,
  incidentSubCategory: IncidentSubCategory.InjuryOnBoard,
  nationality: Nationality.IN,
  gender: Gender.Male,
  
  // Newly added fields
  age: null,
  dateOfBirth: null,
  
  // Existing fields
  residentialAddress: null,
  rank: null,
  dateOfJoining: null,
  maritalStatus: MaritalStatus.Single,
  education: Education.Tenth,
  insuranceCover: null,
  cdcNumber: null,
  cdcPlaceOfIssue: null,
  passportNumber: null,
  passportPlaceOfIssue: null,
  indosNumber: null,
  cocNumber: null,
  cocIssueDate: null,
  cocPlaceOfIssue: null,
  maritimeTraining: null,
  collectiveBargaining: null,
  nextOfKinDetails: null,
  medicalReports: null,
  mortalRemainsStatus: null,
};
export default function AdminEditPage() {
  const router = useRouter();
  const params = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(true);
  const reportId = params.reportId as string;

  const methods = useForm<ReportInput>({
    resolver: zodResolver(reportSchema)
    // Default values are now set asynchronously via the `reset` function in useEffect
  });
  
  const { register, handleSubmit, control, formState: { errors }, watch, getValues, reset, setValue } = methods;
   // We now control the field array from the parent component
   const { fields, append, remove } = useFieldArray({
    control,
    name: "casualties",
  });

  // Watch the values of deaths and injured
  const deaths = watch("deaths");
  const injured = watch("injured");

  // This useEffect is the core of the solution.
  // It synchronizes the number of casualty forms with the death/injury count.
  useEffect(() => {
    const totalCasualties = (Number(deaths) || 0) + (Number(injured) || 0);
    const currentCasualtyCount = fields.length;

    if (totalCasualties > currentCasualtyCount) {
      // Add new casualty forms if the total increases
      const diff = totalCasualties - currentCasualtyCount;
      for (let i = 0; i < diff; i++) {
        // You should define a complete defaultCasualty object here or import it
        append(defaultCasualty);
      }
    } else if (totalCasualties < currentCasualtyCount) {
      // Remove casualty forms if the total decreases
      const diff = currentCasualtyCount - totalCasualties;
      const indicesToRemove = Array.from({ length: diff }, (_, i) => currentCasualtyCount - 1 - i);
      remove(indicesToRemove);
    }
  }, [deaths, injured, fields.length, append, remove]);

  //const showCasualtyComponent = (Number(deaths) || 0) + (Number(injured) || 0) > 0;
  useEffect(() => {
    const fetchReportData = async () => {
      if (!reportId) return;
      try {
        const response = await axios.get(`/api/me/reports/${reportId}`);
        const data = response.data;
        console.log(data)
        // The reset method is the standard way to populate a form with fetched data.
        reset({
          ...data,
          incidentDate: new Date(data.incidentDate),
          yearBuilt: data.yearBuilt ? new Date(data.yearBuilt) : undefined,
          casualties: data.casualties || [],
        });
      } catch (error) {
        console.error("Failed to fetch report data:", error);
        toast.error("Could not load report data for editing.");
      } finally {
        setIsFetching(false);
      }
    };

    fetchReportData();
  }, [reportId, reset]);


  const incidentConsequencesValue = watch("incidentConsequences");
  const showCasualtyComponent = Array.isArray(incidentConsequencesValue) && incidentConsequencesValue.includes(IncidentConsequences.PersonnelMatters);

  // This effect synchronizes the casualties array with the "Personnel Matters" checkbox.
  useEffect(() => {
    // If "Personnel Matters" is unchecked, this effect will clear the casualties array.
    if (!showCasualtyComponent) {
        setValue('casualties', []);
    }
  }, [showCasualtyComponent, setValue]);

  const onSubmit = async (data: ReportInput) => {
    setIsLoading(true);
    const toastId = toast.loading("Submitting report...");
    try {
      await axios.put(`/api/me/reports/${reportId}`, data);
      toast.success("The report has been updated successfully.",{id:toastId});
      router.push('/admin');
      router.refresh();
    } catch (error) {
      console.error("Failed to update report:", error);
      toast.error("Failed to update the report. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if(isFetching){
    return <div className="container mx-auto py-8 text-center">Loading report data...</div>;
  }

  
  return (
    <div className="container mx-auto py-8">
      <PageHeader title="Edit Incident Report" />
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          
          <Card>
            <CardHeader>
              <CardTitle>0. Broad Classification of Incident</CardTitle>
            </CardHeader>
            <CardContent>
              <Controller name="incidentClassification" control={control} render={({ field }) => ( <SelectField label="Incident Classification" name={field.name} options={Object.values(IncidentClassification)} onValueChange={field.onChange} defaultValue={field.value} error={errors.incidentClassification} /> )} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>1. Ship & Reporting Information</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <FormField label="Ship Name" name="shipName" register={register('shipName')} error={errors.shipName} required />
              <FormField label="IMO Number" name="imoNumber" register={register('imoNumber')} error={errors.imoNumber} required />
              <Controller name="flag" control={control} render={({ field }) => (<SelectField label="Flag" name={field.name} options={countryList} onValueChange={field.onChange} defaultValue={field.value} error={errors.flag} required />)} />
              <Controller name="shipType" control={control} render={({ field }) => (<SelectField label="Ship Type" name={field.name} options={Object.values(ShipType)} onValueChange={field.onChange} defaultValue={field.value} error={errors.shipType} required />)} />
              <Controller name="registrationType" control={control} render={({ field }) => (<SelectField label="Registration Type" name={field.name} options={Object.values(RegistrationType)} onValueChange={field.onChange} defaultValue={field.value} error={errors.registrationType} />)} />
              <FormField label="Position of Vessel" name="positionOfVessel" register={register('positionOfVessel')} error={errors.positionOfVessel} required />
              <Controller name="locationOfVessel" control={control} render={({ field }) => (<SelectField label="Location of Vessel" name={field.name} options={Object.values(LocationType)} onValueChange={field.onChange} defaultValue={field.value} error={errors.locationOfVessel} required />)} />
              <Controller name="areaOfIncident" control={control} render={({ field }) => (<SelectField label="Area of Incident" name={field.name} options={Object.values(AreaType)} onValueChange={field.onChange} defaultValue={field.value} error={errors.areaOfIncident} />)} />
              <FormField label="Deadweight" name="deadweight" register={register('deadweight')} error={errors.deadweight} type="number" />
              <FormField label="Year Built" name="yearBuilt" register={register('yearBuilt', { valueAsNumber: true })} error={errors.deadweight} type="number" />
              <FormField label="Gross Tonnage (GT)" name="gt" register={register('gt')} error={errors.gt} required type="number" />
              <FormField label="Draft Before (in meters)" name="draftBefore" register={register('draftBefore')} error={errors.draftBefore} />
              <FormField label="Draft Aft (in meters)" name="draftAft" register={register('draftAft')} error={errors.draftAft} />
              <FormField label="Freeboard" name="freeboard" register={register('freeboard')} error={errors.freeboard} />
              <FormField label="Cargo Type & Quantity" name="cargoTypeQty" register={register('cargoTypeQty')} error={errors.cargoTypeQty} required />
              <Controller name="bunkers" control={control} render={({ field }) => (<SelectField label="Bunkers" name={field.name} options={Object.values(Bunkers)} onValueChange={field.onChange} defaultValue={field.value} error={errors.bunkers} />)} />
              <FormField label="Classification Society" name="classificationSociety" register={register('classificationSociety')} error={errors.classificationSociety} required />
              <FormField label="Last Port of Call" name="lastPortOfCall" register={register('lastPortOfCall')} error={errors.lastPortOfCall} required />
              <FormField label="Next Port of Call" name="nextPortOfCall" register={register('nextPortOfCall')} error={errors.nextPortOfCall} required />
              <FormField label="P&I Club" name="piClub" register={register('piClub')} error={errors.piClub} required />
              <FormField label="Hull & Machinery Underwriters" name="hullMachineryUnderwriters" register={register('hullMachineryUnderwriters')} error={errors.hullMachineryUnderwriters} />
              <Controller name="conditionLoadedBallast" control={control} render={({ field }) => (<SelectField label="Loaded/Ballast Condition" name={field.name} options={Object.values(ConditionType)} onValueChange={field.onChange} defaultValue={field.value} error={errors.conditionLoadedBallast} />)} />
              <FormField label="Total Crew On Board" name="totalCrewOnBoard" register={register('totalCrewOnBoard', { valueAsNumber: true })} error={errors.totalCrewOnBoard} type="number" required />
              <Controller name="incidentDate" control={control} render={({ field }) => (<DatePickerField label="Date of Incident" date={field.value} setDate={field.onChange} error={errors.incidentDate} required/>)} />
            </CardContent>
          </Card>

          <Card>
              <CardHeader><CardTitle>2. Ownership & Management Information</CardTitle></CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Controller name="ownershipType" control={control} render={({ field }) => (<SelectField label="Ownership Type" name={field.name} options={Object.values(OwnershipType)} onValueChange={field.onChange} defaultValue={field.value} error={errors.ownershipType} />)} />
                  <FormField label="Technical Manager Name" name="techManagerName" register={register('techManagerName')} error={errors.techManagerName} required />
                  <FormField label="Technical Manager Address" name="techManagerAddress" register={register('techManagerAddress')} error={errors.techManagerAddress} />
                  <FormField label="Technical Manager Phone" name="techManagerPhone" register={register('techManagerPhone')} error={errors.techManagerPhone} required />
                  <FormField label="Technical Manager Email" name="techManagerEmail" register={register('techManagerEmail')} error={errors.techManagerEmail} type="email" required />
                  <FormField label="DPA Name" name="dpaName" register={register('dpaName')} error={errors.dpaName} required />
                  <FormField label="DPA Phone" name="dpaPhone" register={register('dpaPhone')} error={errors.dpaPhone} required />
                  <FormField label="DPA Mobile" name="dpaMobile" register={register('dpaMobile')} error={errors.dpaMobile} required />
                  <FormField label="DPA Email" name="dpaEmail" register={register('dpaEmail')} error={errors.dpaEmail} type="email" required />
              </CardContent>
          </Card>

          <Card>
              <CardHeader><CardTitle>3. Incident Details</CardTitle></CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Controller name="severityOfIncident" control={control} render={({ field }) => (<SelectField label="Severity of Incident" name={field.name} options={Object.values(SeverityType)} onValueChange={field.onChange} defaultValue={field.value} error={errors.severityOfIncident} />)} />
                  <Controller name="incidentCategory" control={control} render={({ field }) => (<SelectField label="Incident Category" name={field.name} options={Object.values(IncidentCategory)} onValueChange={field.onChange} defaultValue={field.value} error={errors.incidentCategory} required />)} />
                  <Controller name="incidentConsequences" control={control} render={({ field }) => (<CheckboxGroupField className="col-span-full" label="Incident Consequences" options={Object.values(IncidentConsequences)} value={field.value || []} onChange={field.onChange} error={errors.incidentConsequences} required />)} />
                  
                  {showCasualtyComponent && (
                    <>
                      <FormField label="Deaths" name="deaths" register={register('deaths', { valueAsNumber: true })} error={errors.deaths} type="number" required />
                      <FormField label="Injuries" name="injured" register={register('injured', { valueAsNumber: true })} error={errors.injured} type="number" required />
                      <FormField label="Sickness" name="sickness" register={register('sickness', { valueAsNumber: true })} error={errors.sickness} type="number" />
                      <FormField label="Desertion" name="desertion" register={register('desertion', { valueAsNumber: true })} error={errors.desertion} type="number" />
                      <FormField label="Man Overboard-Survived" name="manOverboardSurvived" register={register('manOverboardSurvived', { valueAsNumber: true })} error={errors.manOverboardSurvived} type="number" />
                      <div className="col-span-full"><CasualtyForm fields={fields} remove={remove} /></div>
                    </>
                  )}
                  
                  <TextareaField label="Brief Summary of Incident" name="summaryIncident" register={register('summaryIncident')} error={errors.summaryIncident} className="md:col-span-2 lg:col-span-3" />
                  <TextareaField label="Actions Taken" name="summaryAction" register={register('summaryAction')} error={errors.summaryAction} className="md:col-span-2 lg:col-span-3" />
                  <TextareaField label="Causal Factors" name="causalFactors" register={register('causalFactors')} error={errors.causalFactors} className="md:col-span-2 lg:col-span-3" />
                  <TextareaField label="Lessons Learnt" name="lessonsLearnt" register={register('lessonsLearnt')} error={errors.lessonsLearnt} className="md:col-span-2 lg:col-span-3" />
              </CardContent>
          </Card>
          
          <Card>
              <CardHeader><CardTitle>4. Additional Information</CardTitle></CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Controller name="sarRequired" control={control} render={({ field }) => (<CheckboxField label="SAR Required" name={field.name} checked={!!field.value} onCheckedChange={field.onChange} error={errors.sarRequired} />)} />
                  <FormField label="Oil Pollution Extent (area of spread)" name="oilPollutionExtent" register={register('oilPollutionExtent')} error={errors.oilPollutionExtent} />
                  <FormField label="Oil Spilled Volume (in cubic meters)" name="oilSpilledVolume" register={register('oilSpilledVolume')} error={errors.oilSpilledVolume} type="number"/>
                  <FormField label="Weather Conditions" name="weatherConditions" register={register('weatherConditions')} error={errors.weatherConditions} />
                  <FormField label="Tidal Conditions" name="tidalConditions" register={register('tidalConditions')} error={errors.tidalConditions} />
                  <TextareaField label="Media URLs (comma-separated)" name="mediaUrls" register={register('mediaUrls')} error={errors.mediaUrls} className="md:col-span-2 lg:col-span-3" />
                  <FormField label="Reported By" name="reportedBy" register={register('reportedBy')} error={errors.reportedBy} required />
                  <FormField label="Company Name" name="companyName" register={register('companyName')} error={errors.companyName} required />
                  <FormField label="Designation" name="designation" register={register('designation')} error={errors.designation} required />
                  <FormField label="Contact Number" name="contactNumber" register={register('contactNumber')} error={errors.contactNumber} required />
              </CardContent>
          </Card>

          <Button type="submit" disabled={isLoading} onClick={()=>{
            getValues()
          }}>
            {isLoading ? 'Updating...' : 'Update Report'}
          </Button>
        </form>
      </FormProvider>
    </div>
  );
}






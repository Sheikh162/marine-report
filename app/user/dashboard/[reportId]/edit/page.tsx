'use client';
import { useForm, Controller, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
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
import { AreaType, Bunkers, ConditionType, IncidentCategory, IncidentClassification, IncidentConsequences, LocationType, OwnershipType, RegistrationType, reportSchema, SeverityType, ShipType } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CasualtyForm } from '@/components/CasualtyForm';
import { useUser } from '@clerk/nextjs';

type ReportInput = z.input<typeof reportSchema>;

export default function UpdateReportForm() {
  const router = useRouter();
  const params = useParams();
  const { user } = useUser();
  const [isLoading, setIsLoading] = useState(false);
  const [casualtyComponent, setCasualtyComponent] = useState(false);
  const reportId = params.reportId as string;

  const methods = useForm<ReportInput>({
    resolver: zodResolver(reportSchema),
    defaultValues: async () => {
      const response = await axios.get(`/api/me/reports/${reportId}`);
      const data = response.data;
      
      if (!data.casualties) data.casualties = [];
      if (!data.incidentConsequences) data.incidentConsequences = [];
      
      if (data.incidentConsequences?.includes(IncidentConsequences.PersonnelMatters)) {
        setCasualtyComponent(true);
      }
      
      return data;
    }
  });

  const { register, handleSubmit, control, formState: { errors }, watch, setValue } = methods;
  
  const watchIncidentConsequences = watch("incidentConsequences") as any[]
  const watchIncidentClassification = watch("incidentClassification");

/*   const broad = {
    [IncidentClassification.MarineCasualty]: `An incident involving damage to a ship, injury or loss of life, or environmental harm occurring during vessel operations.`,
    [IncidentClassification.NonOperationalIncident]: `An event not directly related to ship operations but impacting personnel, equipment, or processes within the shipping department.`
  }; */

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
    setIsLoading(true);
    try {
      await axios.put(`/api/me/reports/${reportId}`, data);
      router.push('/user/dashboard');
      router.refresh();
    } catch (error) {
      console.error("Failed to update report:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <PageHeader title="Edit Marine Report" />
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          
          <Card>
            <CardHeader>
              <CardTitle>0. Broad Classification of Incident</CardTitle>
            </CardHeader>
            <CardContent>
              <Controller name="incidentClassification" control={control} render={({ field }) => (
                <div className="space-y-2">
                  <SelectField label="Incident Classification" name="incidentClassification" options={Object.values(IncidentClassification)} onValueChange={field.onChange} defaultValue={field.value} error={errors.incidentClassification} placeholder={field.value as string} />
{/*                   {watchIncidentClassification && <p className="text-sm text-muted-foreground">{broad[watchIncidentClassification]}</p>}
 */}                </div>
              )} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>1. Ship & Reporting Information</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <FormField label="Ship Name" name="shipName" register={register('shipName')} error={errors.shipName} required />
              <FormField label="IMO Number" name="imoNumber" register={register('imoNumber')} error={errors.imoNumber} required />
              <Controller name="flag" control={control} render={({ field }) => (
                <SelectField label="Flag" name="flag" options={countryList} onValueChange={field.onChange} defaultValue={field.value} error={errors.flag} required placeholder={field.value as string} />
              )} />
              <Controller name="shipType" control={control} render={({ field }) => (
                <SelectField label="Ship Type" name="shipType" options={Object.values(ShipType)} onValueChange={field.onChange} defaultValue={field.value} error={errors.shipType} required placeholder={field.value as string} />
              )} />
              <Controller name="registrationType" control={control} render={({ field }) => (
                <SelectField label="Registration Type" name="registrationType" options={Object.values(RegistrationType)} onValueChange={field.onChange} defaultValue={field.value} error={errors.registrationType} placeholder={field.value as string} />
              )} />
              <FormField label="Position of Vessel" name="positionOfVessel" register={register('positionOfVessel')} error={errors.positionOfVessel} required />
              <Controller name="locationOfVessel" control={control} render={({ field }) => (
                <SelectField label="Location of Vessel" name="locationOfVessel" options={Object.values(LocationType)} onValueChange={field.onChange} defaultValue={field.value} error={errors.locationOfVessel} required placeholder={field.value as string} />
              )} />
              <Controller name="areaOfIncident" control={control} render={({ field }) => (
                <SelectField label="Area of Incident" name="areaOfIncident" options={Object.values(AreaType)} onValueChange={field.onChange} defaultValue={field.value} error={errors.areaOfIncident} placeholder={field.value as string} />
              )} />
              <FormField label="Deadweight" name="deadweight" register={register('deadweight')} error={errors.deadweight} type="number" />
              <Controller name="yearBuilt" control={control} render={({ field }) => (
                <DatePickerField label="Year Built" date={field.value} setDate={field.onChange} error={errors.yearBuilt} />
              )} />
              <FormField label="Gross Tonnage (GT)" name="gt" register={register('gt')} error={errors.gt} required type="number" />
              <FormField label="Draft Before" name="draftBefore" register={register('draftBefore')} error={errors.draftBefore} />
              <FormField label="Draft Aft" name="draftAft" register={register('draftAft')} error={errors.draftAft} />
              <FormField label="Freeboard" name="freeboard" register={register('freeboard')} error={errors.freeboard} />
              <FormField label="Cargo Type & Quantity" name="cargoTypeQty" register={register('cargoTypeQty')} error={errors.cargoTypeQty} required />
              <Controller name="bunkers" control={control} render={({ field }) => (
                <SelectField label="Bunkers" name="bunkers" options={Object.values(Bunkers)} onValueChange={field.onChange} defaultValue={field.value} error={errors.bunkers} placeholder={field.value as string} />
              )} />
              <FormField label="Classification Society" name="classificationSociety" register={register('classificationSociety')} error={errors.classificationSociety} required />
              <FormField label="Last Port of Call" name="lastPortOfCall" register={register('lastPortOfCall')} error={errors.lastPortOfCall} required />
              <FormField label="Next Port of Call" name="nextPortOfCall" register={register('nextPortOfCall')} error={errors.nextPortOfCall} required />
              <FormField label="P&I Club" name="piClub" register={register('piClub')} error={errors.piClub} required />
              <FormField label="Hull & Machinery Underwriters" name="hullMachineryUnderwriters" register={register('hullMachineryUnderwriters')} error={errors.hullMachineryUnderwriters} />
              <Controller name="conditionLoadedBallast" control={control} render={({ field }) => (
                <SelectField label="Loaded/Ballast Condition" name="conditionLoadedBallast" options={Object.values(ConditionType)} onValueChange={field.onChange} defaultValue={field.value} error={errors.conditionLoadedBallast} placeholder={field.value as string} />
              )} />
              <FormField label="Total Crew On Board" name="totalCrewOnBoard" register={register('totalCrewOnBoard', { valueAsNumber: true })} error={errors.totalCrewOnBoard} type="number" required />
              <Controller name="incidentDate" control={control} render={({ field }) => (
                <DatePickerField label="Date of Incident" date={field.value} setDate={field.onChange} error={errors.incidentDate} required />
              )} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Ownership & Management Information</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Controller name="ownershipType" control={control} render={({ field }) => (
                <SelectField label="Ownership Type" name="ownershipType" options={Object.values(OwnershipType)} onValueChange={field.onChange} defaultValue={field.value as string|undefined} error={errors.ownershipType} placeholder={field.value as string} />
              )} />
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
            <CardHeader>
              <CardTitle>3. Incident Details</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Controller name="severityOfIncident" control={control} render={({ field }) => (
                <SelectField label="Severity of Incident" name="severityOfIncident" options={Object.values(SeverityType)} onValueChange={field.onChange} defaultValue={field.value} error={errors.severityOfIncident} placeholder={field.value as string} />
              )} />
              <Controller name="incidentCategory" control={control} render={({ field }) => (
                <SelectField label="Incident Category" name="incidentCategory" options={Object.values(IncidentCategory)} onValueChange={field.onChange} defaultValue={field.value} error={errors.incidentCategory} required placeholder={field.value as string} />
              )} />
              <Controller name="incidentConsequences" control={control} render={({ field }) => (
                <CheckboxGroupField className="col-span-full" label="Incident Consequences" options={Object.values(IncidentConsequences)} value={field.value || []} onChange={field.onChange} error={errors.incidentConsequences} required />
              )} />
              
              {casualtyComponent && (
                <>
                  <FormField label="Deaths" name="deaths" register={register('deaths', { valueAsNumber: true })} error={errors.deaths} type="number" required />
                  <FormField label="Injuries" name="injured" register={register('injured', { valueAsNumber: true })} error={errors.injured} type="number" required />
                  <FormField label="Sickness" name="sickness" register={register('sickness', { valueAsNumber: true })} error={errors.sickness} type="number" />
                  <FormField label="Desertion" name="desertion" register={register('desertion', { valueAsNumber: true })} error={errors.desertion} type="number" />
                  <FormField label="Man Overboard-Survived" name="manOverboardSurvived" register={register('manOverboardSurvived', { valueAsNumber: true })} error={errors.manOverboardSurvived} type="number" />
                  <div className="col-span-full"><CasualtyForm /></div>
                </>
              )}
              
              <TextareaField label="Brief Summary of Incident" name="summaryIncident" register={register('summaryIncident')} error={errors.summaryIncident} className="md:col-span-2 lg:col-span-3" />
              <TextareaField label="Actions Taken" name="summaryAction" register={register('summaryAction')} error={errors.summaryAction} className="md:col-span-2 lg:col-span-3" />
              <TextareaField label="Causal Factors" name="causalFactors" register={register('causalFactors')} error={errors.causalFactors} className="md:col-span-2 lg:col-span-3" />
              <TextareaField label="Lessons Learnt" name="lessonsLearnt" register={register('lessonsLearnt')} error={errors.lessonsLearnt} className="md:col-span-2 lg:col-span-3" />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>4. Additional Information</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Controller name="sarRequired" control={control} render={({ field }) => (
                <CheckboxField label="SAR Required" name="sarRequired" checked={field.value} onCheckedChange={field.onChange} error={errors.sarRequired} />
              )} />
              <FormField label="Oil Pollution Extent" name="oilPollutionExtent" register={register('oilPollutionExtent')} error={errors.oilPollutionExtent} />
              <FormField label="Oil Spilled Volume" name="oilSpilledVolume" register={register('oilSpilledVolume')} error={errors.oilSpilledVolume} type="number" />
              <FormField label="Weather Conditions" name="weatherConditions" register={register('weatherConditions')} error={errors.weatherConditions} />
              <FormField label="Tidal Conditions" name="tidalConditions" register={register('tidalConditions')} error={errors.tidalConditions} />
              <FormField label="Media URLs (comma-separated)" name="mediaUrls" register={register('mediaUrls')} error={errors.mediaUrls} className="md:col-span-2 lg:col-span-3" />
              <FormField label="Reported By" name="reportedBy" register={register('reportedBy')} error={errors.reportedBy} required />
              <FormField label="Company Name" name="companyName" register={register('companyName')} error={errors.companyName} required />
              <FormField label="Designation" name="designation" register={register('designation')} error={errors.designation} required />
              <FormField label="Contact Number" name="contactNumber" register={register('contactNumber')} error={errors.contactNumber} required />
            </CardContent>
          </Card>

          <Button type="submit" disabled={isLoading}>
            {isLoading ? 'Updating...' : 'Update Report'}
          </Button>
        </form>
      </FormProvider>
    </div>
  );
}
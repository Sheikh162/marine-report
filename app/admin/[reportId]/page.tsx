// app/admin/[reportId]/page.tsx

  import { prisma } from '@/lib/prisma';
  import { reportSchema, IncidentConsequences } from '@/types';
  import { notFound } from 'next/navigation';
  import Link from 'next/link';
  import CasualtyDetails from '@/components/CasualtyDetails';
  import { PageHeader } from '@/components/ui/layout/PageHeader';
  import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
  import { DetailItem } from '@/components/ui/data-display/DetailItem';
  import { Button } from '@/components/ui/button';
  
  // Correctly type the params object. It is not a promise.
  export default async function AdminSingleReportPage({ params }: { params: Promise<{ reportId: string }> }) {
    const reportId = (await params).reportId;
    
    const report = await prisma.report.findUnique({ 
      where: { id: reportId },
      include: {
        casualties: true
      }
    });
  
    if (!report) {
      return notFound();
    }
    
    // Zod will validate and infer the correct types, including converting dates.
    const validatedReport = reportSchema.parse(report);
  
    return (
      <div className="container mx-auto py-8">
        <PageHeader title="Review Submitted Report"/>
          <Button asChild>
            <Link href={`/admin/${reportId}/edit`}>
              Edit Report
            </Link>
          </Button>
  
        <div className="space-y-8">
          {/* Section 0: Broad Classification */}
          <Card>
            <CardHeader>
              <CardTitle>0. Broad Classification of Incident</CardTitle>
            </CardHeader>
            <CardContent>
              <DetailItem label="Incident Classification" value={validatedReport.incidentClassification} />
            </CardContent>
          </Card>
          
          {/* Section 1: Ship & Reporting Information */}
          <Card>
            <CardHeader>
              <CardTitle>1. Ship & Reporting Information</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <DetailItem label="Ship Name" value={validatedReport.shipName} />
              <DetailItem label="IMO Number" value={validatedReport.imoNumber} />
              <DetailItem label="Flag" value={validatedReport.flag} />
              <DetailItem label="Ship Type" value={validatedReport.shipType} />
              <DetailItem label="Registration Type" value={validatedReport.registrationType} />
              <DetailItem label="Position of Vessel" value={validatedReport.positionOfVessel} />
              <DetailItem label="Location of Vessel" value={validatedReport.locationOfVessel} />
              <DetailItem label="Area of Incident" value={validatedReport.areaOfIncident} />
              <DetailItem label="Deadweight" value={validatedReport.deadweight} />
              <DetailItem label="Year Built" value={validatedReport.yearBuilt?.toString()} />
              <DetailItem label="Gross Tonnage (GT)" value={validatedReport.gt} />
              <DetailItem label="Draft Before" value={validatedReport.draftBefore} />
              <DetailItem label="Draft Aft" value={validatedReport.draftAft} />
              <DetailItem label="Freeboard" value={validatedReport.freeboard} />
              <DetailItem label="Cargo Type & Quantity" value={validatedReport.cargoTypeQty} />
              <DetailItem label="Bunkers" value={validatedReport.bunkers} />
              <DetailItem label="Classification Society" value={validatedReport.classificationSociety} />
              <DetailItem label="Last Port of Call" value={validatedReport.lastPortOfCall} />
              <DetailItem label="Next Port of Call" value={validatedReport.nextPortOfCall} />
              <DetailItem label="P&I Club" value={validatedReport.piClub} />
              <DetailItem label="Hull & Machinery Underwriters" value={validatedReport.hullMachineryUnderwriters} />
              <DetailItem label="Loaded/Ballast Condition" value={validatedReport.conditionLoadedBallast} />
              <DetailItem label="Total Crew On Board" value={validatedReport.totalCrewOnBoard?.toString()} />
              <DetailItem label="Incident Date" value={validatedReport.incidentDate?.toLocaleString()} />
              <DetailItem label="Reported At" value={report.reportedAt?.toLocaleString()} />
            </CardContent>
          </Card>
  
          {/* Section 2: Ownership & Management */}
          <Card>
              <CardHeader><CardTitle>2. Ownership & Management Information</CardTitle></CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <DetailItem label="Ownership Type" value={validatedReport.ownershipType} />
                  <DetailItem label="Technical Manager Name" value={validatedReport.techManagerName} />
                  <DetailItem label="Technical Manager Address" value={validatedReport.techManagerAddress} />
                  <DetailItem label="Technical Manager Phone" value={validatedReport.techManagerPhone} />
                  <DetailItem label="Technical Manager Email" value={validatedReport.techManagerEmail} />
                  <DetailItem label="DPA Name" value={validatedReport.dpaName} />
                  <DetailItem label="DPA Phone" value={validatedReport.dpaPhone} />
                  <DetailItem label="DPA Mobile" value={validatedReport.dpaMobile} />
                  <DetailItem label="DPA Email" value={validatedReport.dpaEmail} />
              </CardContent>
          </Card>
  
          {/* Section 3: Incident Details */}
          <Card>
              <CardHeader><CardTitle>3. Incident Details</CardTitle></CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <DetailItem label="Severity of Incident" value={validatedReport.severityOfIncident} />
                  <DetailItem label="Incident Category" value={validatedReport.incidentCategory} />
                  <DetailItem label="Incident Consequences" value={validatedReport.incidentConsequences?.join(', ')} />
                  <DetailItem label="Deaths" value={validatedReport.deaths?.toString()} />
                  <DetailItem label="Injuries" value={validatedReport.injured?.toString()} />
                  <DetailItem label="Sickness" value={validatedReport.sickness?.toString()} />
                  <DetailItem label="Desertion" value={validatedReport.desertion?.toString()} />
                  <DetailItem label="Man Overboard-Survived" value={validatedReport.manOverboardSurvived?.toString()} />
                  <DetailItem label="Brief Summary of Incident" value={validatedReport.summaryIncident} className="col-span-full"/>
                  <DetailItem label="Actions Taken" value={validatedReport.summaryAction} className="col-span-full"/>
                  <DetailItem label="Causal Factors" value={validatedReport.causalFactors} className="col-span-full"/>
                  <DetailItem label="Lessons Learnt" value={validatedReport.lessonsLearnt} className="col-span-full"/>
              </CardContent>
          </Card>
  
          {/* Section 4: Additional Information */}
          <Card>
              <CardHeader><CardTitle>4. Additional Information</CardTitle></CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <DetailItem label="SAR Required" value={validatedReport.sarRequired?.toString()} />
                  <DetailItem label="Oil Pollution Extent (area of spread)" value={validatedReport.oilPollutionExtent} />
                  <DetailItem label="Oil Spilled Volume (in cubic meters)" value={validatedReport.oilSpilledVolume} />
                  <DetailItem label="Weather Conditions" value={validatedReport.weatherConditions} />
                  <DetailItem label="Tidal Conditions" value={validatedReport.tidalConditions} />
                  <DetailItem label="Reported By" value={validatedReport.reportedBy} />
                  <DetailItem label="Company Name" value={validatedReport.companyName} />
                  <DetailItem label="Designation" value={validatedReport.designation} />
                  <DetailItem label="Contact Number" value={validatedReport.contactNumber} />
              </CardContent>
          </Card>
  
          {validatedReport.casualties && validatedReport.casualties.length > 0 && (
            <CasualtyDetails casualties={validatedReport.casualties} />
          )}
        </div>
      </div>
    );
  }
  

// components/CasualtyDetails.tsx
'use client';

import { Casualty } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DetailItem } from './ui/data-display/DetailItem';

export default function CasualtyDetails({ casualties }: { casualties?: Casualty[] }) {
  if (!casualties || casualties.length === 0) {
    return (
      <Card className="mt-6">
        <CardContent className="p-6">
          <p className="text-muted-foreground">No casualties reported</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="mt-6 space-y-6">
      <h2 className="text-xl font-bold">Casualty Details</h2>
      {casualties.map((casualty) => (
        <Card key={casualty.id}>
          <CardHeader>
            <CardTitle>{casualty.name}</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <DetailItem label="Status" value={casualty.status} />
            <DetailItem label="Nationality" value={casualty.nationality} />
            <DetailItem label="Age" value={casualty.age?.toString()} />
            <DetailItem label="Gender" value={casualty.gender} />
            <DetailItem label="Rank" value={casualty.rank} />
            <DetailItem label="Marital Status" value={casualty.maritalStatus} />
            <DetailItem label="Education" value={casualty.education} />
            <DetailItem label="Date of Birth" value={casualty.dateOfBirth?.toLocaleDateString()} />
            <DetailItem label="Date of Joining" value={casualty.dateOfJoining?.toLocaleDateString()} />
            <DetailItem label="Passport Number" value={casualty.passportNumber} />
            <DetailItem label="CDC Number" value={casualty.cdcNumber} />
            <DetailItem label="INDOS Number" value={casualty.indosNumber} />
            <DetailItem label="COC Number" value={casualty.cocNumber} />
            <DetailItem label="COC Issue Date" value={casualty.cocIssueDate?.toLocaleDateString()} />
            <DetailItem label="Insurance Cover" value={casualty.insuranceCover} />
            <DetailItem label="Medical Reports" value={casualty.medicalReports} />
            <DetailItem label="Next of Kin" value={casualty.nextOfKinDetails} />
            <DetailItem label="Residential Address" value={casualty.residentialAddress} />
            <DetailItem label="Incident Subcategory" value={casualty.incidentSubCategory} />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

// components/CasualtyDetails.tsx
'use client';

import { Casualty } from '@/types';

export default function CasualtyDetails({ casualties }: { casualties: any[] }) {
  if (!casualties || casualties.length === 0) {
    return (
      <div className="p-4 bg-gray-50 rounded-lg">
        <p className="text-gray-500">No casualties reported</p>
      </div>
    );
  }

  return (
    <div className="mt-6 ">
      <h2 className="text-xl font-bold mb-4">Casualty Details</h2>
      <div className="grid grid-cols-1 gap-4">
        {casualties.map((casualty) => (
          <div key={casualty.id} className="border rounded-lg p-4 bg-white">
            <h3 className="font-bold text-lg mb-2">{casualty.name}</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            <Info label="Status" value={casualty.status} />
              <Info label="Nationality" value={casualty.nationality} />
              <Info label="Age" value={casualty.age?.toString()} />
              <Info label="Gender" value={casualty.gender} />
              <Info label="Rank" value={casualty.rank} />
              <Info label="Marital Status" value={casualty.maritalStatus} />
              <Info label="Education" value={casualty.education} />
              <Info label="Date of Birth" value={casualty.dateOfBirth?.toLocaleDateString()} />
              <Info label="Date of Joining" value={casualty.dateOfJoining?.toLocaleDateString()} />
              <Info label="Passport Number" value={casualty.passportNumber} />
              <Info label="CDC Number" value={casualty.cdcNumber} />
              <Info label="INDOS Number" value={casualty.indosNumber} />
              <Info label="COC Number" value={casualty.cocNumber} />
              <Info label="COC Issue Date" value={casualty.cocIssueDate?.toLocaleDateString()} />
              <Info label="Insurance Cover" value={casualty.insuranceCover} />
              <Info label="Medical Reports" value={casualty.medicalReports} />
              <Info label="Next of Kin" value={casualty.nextOfKinDetails} />
              <Info label="Residential Address" value={casualty.residentialAddress} />
              <Info label="Incident Subcategory" value={casualty.incidentSubCategory} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Info({ label, value }: { label: string; value?: string | null }) {
  return (
    <div className="flex flex-col">
      <span className="text-xs font-semibold text-gray-600">{label}</span>
      <span className="text-sm text-black">{value || '—'}</span>
    </div>
  );
}
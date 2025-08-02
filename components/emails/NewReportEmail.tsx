// components/emails/NewReportEmail.tsx
import { Report } from '@/types';
import * as React from 'react';

interface NewReportEmailProps {
  report: any//Report;
}

export const NewReportEmail: React.FC<Readonly<NewReportEmailProps>> = ({ report }) => (
  <div>
    <h1>New Marine Incident Report Submitted</h1>
    <p>A new report has been submitted and requires review.</p>
    <hr />
    <h2>Report Details:</h2>
    <ul>
      <li><strong>Ship Name:</strong> {report.shipName}</li>
      <li><strong>IMO Number:</strong> {report.imoNumber}</li>
      <li><strong>Incident Date:</strong> {new Date(report.incidentDate).toLocaleDateString()}</li>
      <li><strong>Incident Category:</strong> {report.incidentCategory}</li>
      <li><strong>Reported By:</strong> {report.reportedBy}</li>
    </ul>
    <p>Please log in to the admin dashboard to view the full report.</p>
  </div>
);
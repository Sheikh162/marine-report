// app/admin/[reportId]/edit/page.tsx
import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import { EditReportForm } from './_components/EditReportForm';
import { PageHeader } from '@/components/ui/layout/PageHeader';

// This is an async Server Component, which is the best practice for data fetching.
export default async function AdminEditReportPage({ params }: { params: Promise<{ reportId: string }> }) {
  const reportId = (await params).reportId;

  // 1. Fetch the report data on the server.
  const report = await prisma.report.findUnique({
    where: { id: reportId },
    include: {
      casualties: true, // Include related casualties in the query
    },
  });

  // 2. Handle the case where the report does not exist.
  if (!report) {
    return notFound();
  }

  // 3. Render the client component, passing the fetched data as a prop.
  return (
    <div className="container mx-auto py-8">
      <PageHeader title="Edit Incident Report" />
      <EditReportForm report={report} />
    </div>
  );
}

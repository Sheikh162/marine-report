// ✅ admin/reports/[id]/route.ts
import { prisma } from '@/lib/prisma';
import { reportSchema } from '@/types';
import { NextResponse } from 'next/server';

export async function GET(_: Request, {params}: { params: Promise<{ reportId: string }> }) {

  const report = await prisma.report.findUnique({ where: { id: (await params).reportId } });
  if (!report) return NextResponse.json({ error: 'Not found' }, { status: 404 });

  return NextResponse.json(report);
}

/* export async function PUT(req: Request, {params}: { params: Promise<{ reportId: string }> }) {
  const body = await req.json();
  const parsed = reportSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: 'Validation failed' }, { status: 400 });
  }

  // include casualties like in the /me route
  const updated = await prisma.report.update({
    where: { id: (await params).reportId },
    data: {
      ...parsed.data,
      incidentDate: new Date(parsed.data.incidentDate),
      reportedAt: new Date(parsed.data.reportedAt),
    },
  });

  return NextResponse.json(updated);
} */

export async function DELETE(_: Request, {params}: { params: Promise<{ reportId: string }> }) {
  await prisma.report.delete({ where: { id: (await params).reportId } });
  return NextResponse.json({ success: true });
}
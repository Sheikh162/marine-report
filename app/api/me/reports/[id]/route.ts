// ✅ me/reports/[id]/route.ts
import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { reportSchema } from '@/types';
import { auth } from '@clerk/nextjs/server';

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const report = await prisma.report.findFirst({
    where: { id: params.id, userId },
  });

  if (!report) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(report);
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const body = await request.json();
  const parsed = reportSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid data' }, { status: 400 });
  }

  const existing = await prisma.report.findFirst({
    where: { id: params.id, userId },
  });

  if (!existing) {
    return NextResponse.json({ error: 'Not allowed' }, { status: 403 });
  }

  const updated = await prisma.report.update({
    where: { id: params.id },
    data: {
      ...parsed.data,
      incidentDate: new Date(parsed.data.incidentDate),
      reportedAt: new Date(parsed.data.reportedAt),
    },
  });

  return NextResponse.json(updated);
}
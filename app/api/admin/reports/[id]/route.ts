import { prisma } from '@/lib/prisma';
import { reportSchema } from '@/types';
import { NextResponse } from 'next/server';
import { getAuthUser } from '@/lib/clerk';

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const { role } = getAuthUser();
  if (role !== 'admin') return NextResponse.json({ error: 'Forbidden' }, { status: 403 });

  const report = await prisma.report.findUnique({ where: { id: params.id } });
  if (!report) return NextResponse.json({ error: 'Not found' }, { status: 404 });

  return NextResponse.json(report);
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const { role } = getAuthUser();
  if (role !== 'admin') return NextResponse.json({ error: 'Forbidden' }, { status: 403 });

  const body = await req.json();
  const parsed = reportSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: 'Validation failed' }, { status: 400 });
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

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  const { role } = getAuthUser();
  if (role !== 'admin') return NextResponse.json({ error: 'Forbidden' }, { status: 403 });

  await prisma.report.delete({ where: { id: params.id } });
  return NextResponse.json({ success: true });
}

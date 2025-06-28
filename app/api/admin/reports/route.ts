import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { getAuthUser } from '@/lib/clerk';

export async function GET(req: Request) {
  const { role } = getAuthUser();
  if (role !== 'admin') return NextResponse.json({ error: 'Forbidden' }, { status: 403 });

  const { searchParams } = new URL(req.url);
  const category = searchParams.get('category');

  const reports = await prisma.report.findMany({
    where: category ? { incidentCategory: category } : undefined,
    orderBy: { createdAt: 'desc' },
  });

  return NextResponse.json(reports);
}

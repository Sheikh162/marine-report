// ✅ admin/reports/route.ts
import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get('category');

  const reports = await prisma.report.findMany({
    where: category ? { incidentCategory: category } : undefined,
    orderBy: { createdAt: 'desc' },
  });

  return NextResponse.json(reports);
}

export async function POST(req: Request) {
  const data = await req.json();

  if (!Array.isArray(data)) {
    return NextResponse.json({ error: 'Expected an array for bulk import' }, { status: 400 });
  }

  const reports = await prisma.report.createMany({ data });
  return NextResponse.json(reports);
}
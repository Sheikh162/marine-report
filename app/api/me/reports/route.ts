// File: api/me/reports/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { reportSchema } from '@/types';
import { auth } from '@/lib/auth'; // hypothetical auth util

export async function GET(request: Request) {
  const user = await auth(request);
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    const reports = await prisma.report.findMany({
      where: { userId: user.id },
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(reports);
  } catch (error) {
    console.error('GET /me/reports error:', error);
    return NextResponse.json({ error: 'Failed to fetch reports' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const user = await auth(request);
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    const body = await request.json();
    const parsed = reportSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid data' }, { status: 400 });
    }

    const data = parsed.data;
    const report = await prisma.report.create({
      data: {
        ...data,
        userId: user.id,
        incidentDate: new Date(data.incidentDate),
        reportedAt: new Date(data.reportedAt),
      },
    });

    return NextResponse.json(report);
  } catch (err) {
    console.error('POST /me/reports error:', err);
    return NextResponse.json({ error: 'Failed to create report' }, { status: 500 });
  }
}

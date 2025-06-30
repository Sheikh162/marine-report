// ✅ me/reports/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { reportSchema } from '@/types';
import { auth } from '@clerk/nextjs/server';

// get all the reports of that specific user
export async function GET() {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    const reports = await prisma.report.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(reports);
  } catch (error) {
    console.error('GET /me/reports error:', error);
    return NextResponse.json({ error: 'Failed to fetch reports' }, { status: 500 });
  }
}

// post a single new report
export async function POST(request: Request) {
  console.log("verified")
  try {
    const body = await request.json();
    const parsed = reportSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid data' }, { status: 400 });
    }

    const data = parsed.data;
    console.log(data)
    const report = await prisma.report.create({
      data: {
        ...data,
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


/* 
in my frontend also imm sending userId and in my backend also im using userId which is wrong

also when converting to string after json.stringify, is probably why we get that error
*/
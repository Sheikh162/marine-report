// ✅ me/reports/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { reportSchema,sanitizeForPrisma } from '@/types';
import { auth } from '@clerk/nextjs/server';
import { Prisma } from '@prisma/client';

// get all the reports of that specific user
export async function GET() {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    const reports = await prisma.report.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      include:{
        casualties:true
      }
    });
    return NextResponse.json(reports);
  } catch (error) {
    console.error('GET /me/reports error:', error);
    return NextResponse.json({ error: 'Failed to fetch reports' }, { status: 500 });
  }
}



export async function POST(request: Request) {  // new single report to be created
  try {
    const body = await request.json();
    const parsed = reportSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid data" }, { status: 400 });
    }

    const safeData = sanitizeForPrisma(parsed.data); // sanitize before anytype of creation , updation i.e whenever going to add data

    // Extract casualties and remove from safeData
    const { casualties = [], ...reportData } = safeData

    const report = await prisma.report.create({
      data: {
        ...reportData,
        casualties: {
          create: casualties, 
        },
      },
    });

    return NextResponse.json(report);
  } catch (err) {
    console.error("POST /me/reports error:", err);
    return NextResponse.json({ error: "Failed to create report" }, { status: 500 });
  }
}

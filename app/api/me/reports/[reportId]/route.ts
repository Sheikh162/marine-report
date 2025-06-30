// ✅ me/reports/[id]/route.ts
import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { reportSchema } from '@/types';
import { auth } from '@clerk/nextjs/server';


// instead of using params, get the param passed by user

//get a single report of a specific user
export async function GET(_: Request, props : { params: { reportId: string } }) {
  const params=await props.params
  const reportId=params.reportId

  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const report = await prisma.report.findFirst({
    where: { id: reportId, userId },
  });

  if (!report) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(report);
}// this route has no purpose, since it is handles from server component /user/dashboard[reportId]

export async function PUT(request: Request, props: { params: { reportId: string } }) {// this is the params im passing from frontend i guess
  const { userId } = await auth();
  const params=await props.params
  const reportId=params.reportId

  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const body = await request.json();
  const parsed = reportSchema.safeParse(body);


  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid data' }, { status: 400 });
  }

  
  const existing = await prisma.report.findFirst({
    where: { id: reportId, userId },
  });

  console.log(existing)
  if (!existing) {
    return NextResponse.json({ error: 'Not allowed' }, { status: 403 });
  }

  const updated = await prisma.report.update({
    where: { id: reportId },
    data: {
      ...parsed.data,
      incidentDate: new Date(parsed.data.incidentDate),
      reportedAt: new Date(parsed.data.reportedAt),
    },
  });

  return NextResponse.json(updated);
}
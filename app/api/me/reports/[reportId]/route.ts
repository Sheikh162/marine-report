// ✅ me/reports/[id]/route.ts
import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { reportSchema } from '@/types';
import { auth } from '@clerk/nextjs/server';


export async function PUT(request: Request, {params}: { params: Promise<{ reportId: string }> }) {// this is the params im passing from frontend i guess
  const reportId=(await params).reportId
  // why dont we need userId? because reportId is unique for each report, so that is enough
/*   const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 }); */

  const body = await request.json();
  const parsed = reportSchema.safeParse(body);


  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid data' }, { status: 400 });
  }
  
  const existing = await prisma.report.findFirst({
    where: { id: reportId }, // can get casualties here also, kinda better to be honest cause acid property
    include: { casualties: true }
  });

  if (!existing) {
    return NextResponse.json({ error: 'Not allowed' }, { status: 403 });
  }

  const { casualties=[], ...restOfReport } = parsed.data;
  
  const updated = await prisma.report.update({
    where: { id: reportId },
    data: {
      ...restOfReport,
      updatedAt: new Date(),
      casualties: {
        //deleteMany: {}, // optional: deletes all and recreates, or filter if needed
        update: casualties.filter(c => c.id)  // update has array of all casualty objects to be updated
        .map(c => ({
            where: { id: c.id },
            data: {
              name: c.name,
              status: c.status,
              nationality: c.nationality,
              residentialAddress: c.residentialAddress,
              dateOfBirth: c.dateOfBirth ? new Date(c.dateOfBirth) : undefined,
              age: c.age,
              rank: c.rank,
              dateOfJoining: c.dateOfJoining ? new Date(c.dateOfJoining) : undefined,
              maritalStatus: c.maritalStatus,
              gender: c.gender,
              education: c.education,
              insuranceCover: c.insuranceCover,
              cdcNumber: c.cdcNumber,
              cdcPlaceOfIssue: c.cdcPlaceOfIssue,
              passportNumber: c.passportNumber,
              passportPlaceOfIssue: c.passportPlaceOfIssue,
              indosNumber: c.indosNumber,
              cocNumber: c.cocNumber,
              cocIssueDate: c.cocIssueDate ? new Date(c.cocIssueDate) : undefined,
              cocPlaceOfIssue: c.cocPlaceOfIssue,
              maritimeTraining: c.maritimeTraining,
              collectiveBargaining: c.collectiveBargaining,
              nextOfKinDetails: c.nextOfKinDetails,
              medicalReports: c.medicalReports,
              mortalRemainsStatus: c.mortalRemainsStatus,
              incidentSubCategory: c.incidentSubCategory,
            }
          })),
        create: casualties?.filter(c => !c.id) // those casualties which arent in the array
          .map(c => ({
            name: c.name,
            status: c.status,
            nationality: c.nationality,
            residentialAddress: c.residentialAddress,
            dateOfBirth: c.dateOfBirth ? new Date(c.dateOfBirth) : undefined,
            age: c.age,
            rank: c.rank,
            dateOfJoining: c.dateOfJoining ? new Date(c.dateOfJoining) : undefined,
            maritalStatus: c.maritalStatus,
            gender: c.gender,
            education: c.education,
            insuranceCover: c.insuranceCover,
            cdcNumber: c.cdcNumber,
            cdcPlaceOfIssue: c.cdcPlaceOfIssue,
            passportNumber: c.passportNumber,
            passportPlaceOfIssue: c.passportPlaceOfIssue,
            indosNumber: c.indosNumber,
            cocNumber: c.cocNumber,
            cocIssueDate: c.cocIssueDate ? new Date(c.cocIssueDate) : undefined,
            cocPlaceOfIssue: c.cocPlaceOfIssue,
            maritimeTraining: c.maritimeTraining,
            collectiveBargaining: c.collectiveBargaining,
            nextOfKinDetails: c.nextOfKinDetails,
            medicalReports: c.medicalReports,
            mortalRemainsStatus: c.mortalRemainsStatus,
            incidentSubCategory: c.incidentSubCategory,
          }))
      }
    },
    include:{
      casualties:true
    }
  })

  return NextResponse.json(updated);
}

// instead of using params, get the param passed by user

//get a single report of a specific user    // this route has no purpose, since it is handles from server component /user/dashboard[reportId]
export async function GET(_: Request, {params}: { params: Promise<{ reportId: string }> }) {
  const reportId=(await params).reportId

  //const { userId } = await auth();
  //if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const report = await prisma.report.findFirst({
    where: { id: reportId },
    include:{
      casualties:true
    }
  });

  if (!report) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(report);
}

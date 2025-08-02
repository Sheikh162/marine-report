// ✅ me/reports/route.ts
import { Resend } from 'resend';
import { NewReportEmail } from '@/components/emails/NewReportEmail';
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { reportSchema,sanitizeForPrisma } from '@/types';
import { auth } from '@clerk/nextjs/server';
import { Prisma } from '@prisma/client';
import { ReactNode } from 'react';
import { ReactElement } from 'react';
import { renderToBuffer,DocumentProps } from '@react-pdf/renderer';
import { ReportPDFTemplate } from '@/components/pdf/ReportPDFTemplate';


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

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {  // new single report to be created
  try {
    const body = await request.json();
    const parsed = reportSchema.safeParse(body); // parsing error
    console.log(body)
    console.log(parsed)

    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid data" }, { status: 400 });
    }

    const safeData = sanitizeForPrisma(parsed.data); // sanitize before anytype of creation , updation i.e whenever going to add data

    // Extract casualties and remove from safeData
    const { casualties = [], ...reportData } = safeData

    console.log(safeData)
    const newReport = await prisma.report.create({
      data: {
        ...reportData,
        casualties: {
          create: casualties, 
        },
      },
    });

    // 1. Generate the PDF using @react-pdf/renderer
    let pdfBuffer: Buffer | undefined;
    try {
        const pdfElement = ReportPDFTemplate({ report: newReport }) //as ReactElement<DocumentProps>;
        pdfBuffer = await renderToBuffer(pdfElement as ReactElement<DocumentProps>);
    } catch (error) {
        console.error("Failed to generate PDF:", error);
    }


    try {
      await resend.emails.send({
        from: 'Marine Reporting System <onboarding@resend.dev>', // Must be a verified domain in Resend
        to: ['sheikhabdullah.aka@gmail.com'], // A list of admin emails
        subject: `New Incident Report Submitted: ${newReport.shipName}`,
        react: NewReportEmail({ report: newReport}) as ReactNode,
        attachments: pdfBuffer ? [
          {
            filename: `report-${newReport.shipName}-${newReport.id}.pdf`,
            content: pdfBuffer,
          },
        ] : [],
      });
    } catch (error) {
      console.error("Failed to send email:", error);
      // You might want to log this error but not fail the whole request
    }
  
    //return new Response(JSON.stringify(newReport), { status: 201 });

    return NextResponse.json(newReport);
  } catch (err) {
    console.error("POST /me/reports error:", err);
    return NextResponse.json({ error: "Failed to create report" }, { status: 500 });
  }
}

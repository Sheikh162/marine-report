import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'
import { reportSchema } from '@/types';

// in this endpoint, get all the reports submitted by the particular user

/* 
/api/me/reports            // GET, POST
/api/me/reports/:id        // GET, PUT

*/  

export async function GET(request:Request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');

    const reports = await prisma.report.findMany({
      where:userId?{userId}:undefined
    });  // Fetch all records
    console.log(reports)
    return NextResponse.json(reports);  // Return the records in the response
  } catch (error) {
    console.error("Error fetching reports:", error);
    return NextResponse.json({ error: "Failed to fetch records" }, { status: 500 });
  }
}

   
  //ill get the report here from frontend, and then have to put it in backend.

  export async function PUT(request: Request) {
    // Parse the request body
    const body = await request.json();
    console.log('📦 Received in API:', body);
    const {data,success}=reportSchema.safeParse(body)
    if(!success){
        return NextResponse.json({
            msg:"schema not validated"
        })
    }
    const newReport=await prisma.report.create({
        data: {
            ...data,
            incidentDate: new Date(data.incidentDate),
            reportedAt: new Date(data.reportedAt),
            //userId: data.userId, // ← Add this when using clerk
          },
    })
   
    return NextResponse.json(newReport);
  }








  
  
  
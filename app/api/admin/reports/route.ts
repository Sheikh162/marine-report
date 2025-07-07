// ✅ admin/reports/route.ts
import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

/* export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get('category');

  const reports = await prisma.report.findMany({
    where: category ? { incidentCategory: category } : undefined,
    orderBy: { createdAt: 'desc' },
  });

  return NextResponse.json(reports);
} */

 interface ReportFilters {
  incidentCategory?: string;
  casualtyStatus?: string;
  fromReportDate?: string;
  toReportDate?: string;
  flag?: string;
  deaths?: string;
  fromIncidentDate?: string;
  toIncidentDate?: string;
  shipType?: string;
  injuries?: string;
  area?: string;
  shipName?: string;
  imoNumber?: string;
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    
    // Extract all possible filter parameters
    const filters: ReportFilters = {
      incidentCategory: searchParams.get('incidentCategory') || undefined,
      casualtyStatus: searchParams.get('casualtyStatus') || undefined,
      fromReportDate: searchParams.get('fromReportDate') || undefined,
      toReportDate: searchParams.get('toReportDate') || undefined,
      flag: searchParams.get('flag') || undefined,
      deaths: searchParams.get('deaths') || undefined,
      fromIncidentDate: searchParams.get('fromIncidentDate') || undefined,
      toIncidentDate: searchParams.get('toIncidentDate') || undefined,
      shipType: searchParams.get('shipType') || undefined,
      injuries: searchParams.get('injuries') || undefined,
      area: searchParams.get('area') || undefined,
      shipName: searchParams.get('shipName') || undefined,
      imoNumber: searchParams.get('imoNumber') || undefined,
    };

    // Build Prisma where clause
    const where: any = {};

    // Text filters
    if (filters.incidentCategory) where.incidentCategory = filters.incidentCategory;
    if (filters.casualtyStatus) where.casualtyStatus = filters.casualtyStatus;
    if (filters.flag) where.flag = filters.flag;
    if (filters.shipType) where.shipType = filters.shipType;
    if (filters.area) where.areaOfIncident = filters.area;
    if (filters.shipName) where.shipName = { contains: filters.shipName };
    if (filters.imoNumber) where.imoNumber = filters.imoNumber;

    // Numeric filters
    if (filters.deaths) where.deaths = { gte: parseInt(filters.deaths) };
    if (filters.injuries) where.injured = { gte: parseInt(filters.injuries) };

    // Date filters
    if (filters.fromReportDate || filters.toReportDate) {
      where.reportedAt = {};
      if (filters.fromReportDate) where.reportedAt.gte = new Date(filters.fromReportDate);
      if (filters.toReportDate) where.reportedAt.lte = new Date(filters.toReportDate);
    }

    if (filters.fromIncidentDate || filters.toIncidentDate) {
      where.incidentDate = {};
      if (filters.fromIncidentDate) where.incidentDate.gte = new Date(filters.fromIncidentDate);
      if (filters.toIncidentDate) where.incidentDate.lte = new Date(filters.toIncidentDate);
    }

    const reports = await prisma.report.findMany({
      where,
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(reports);
  } catch (error) {
    console.error('Error fetching reports:', error);
    return NextResponse.json(
      { error: 'Failed to fetch reports' },
      { status: 500 }
    );
  }
}
 

export async function POST(req: Request) {
  const data = await req.json();

  if (!Array.isArray(data)) {
    return NextResponse.json({ error: 'Expected an array for bulk import' }, { status: 400 });
  }

  const reports = await prisma.report.createMany({ data });
  return NextResponse.json(reports);
}
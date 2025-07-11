// components/DetailedReport.tsx
'use client';

import { FC } from 'react';
import { reportSchema } from '@/types';
import { z } from 'zod';

type Report = z.infer<typeof reportSchema>;

interface Props {
  report: Report;
}

const DetailedReport: FC<Props> = ({ report }) => {
  return (
    <tr className="hover:bg-gray-50">
      <td className="px-4 py-2 whitespace-nowrap text-sm border text-black">
        {new Date(report.createdAt as Date).toLocaleDateString()}
      </td>
      <td className="px-4 py-2 whitespace-nowrap text-sm border text-black">
        {new Date(report.incidentDate).toLocaleDateString()}
      </td>
      <td className="px-4 py-2 whitespace-nowrap text-sm border text-black">{report.shipName}</td>
      <td className="px-4 py-2 whitespace-nowrap text-sm border text-black">{report.imoNumber}</td>
      <td className="px-4 py-2 whitespace-nowrap text-sm border text-black">{report.flag || '-'}</td>
      <td className="px-4 py-2 whitespace-nowrap text-sm border text-black">{report.shipType || '-'}</td>
      <td className="px-4 py-2 whitespace-nowrap text-sm border text-black">{report.incidentCategory || '-'}</td>
      <td className="px-4 py-2 whitespace-nowrap text-sm border text-black">{report.deaths ?? '-'}</td>
    </tr>
  );
};

export default DetailedReport;

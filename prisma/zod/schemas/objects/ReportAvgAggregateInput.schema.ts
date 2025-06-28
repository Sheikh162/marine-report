import { z } from 'zod';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.ReportAvgAggregateInputType> = z
  .object({
    yearBuilt: z.literal(true).optional(),
    totalCrewOnBoard: z.literal(true).optional(),
    deaths: z.literal(true).optional(),
    injured: z.literal(true).optional(),
  })
  .strict();

export const ReportAvgAggregateInputObjectSchema = Schema;

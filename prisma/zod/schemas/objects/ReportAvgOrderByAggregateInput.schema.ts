import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.ReportAvgOrderByAggregateInput> = z
  .object({
    yearBuilt: z.lazy(() => SortOrderSchema).optional(),
    totalCrewOnBoard: z.lazy(() => SortOrderSchema).optional(),
    deaths: z.lazy(() => SortOrderSchema).optional(),
    injured: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const ReportAvgOrderByAggregateInputObjectSchema = Schema;

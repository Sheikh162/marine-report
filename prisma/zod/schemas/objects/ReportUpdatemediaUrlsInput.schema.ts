import { z } from 'zod';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.ReportUpdatemediaUrlsInput> = z
  .object({
    set: z.string().array().optional(),
    push: z.union([z.string(), z.string().array()]).optional(),
  })
  .strict();

export const ReportUpdatemediaUrlsInputObjectSchema = Schema;

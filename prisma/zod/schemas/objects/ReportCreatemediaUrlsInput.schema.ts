import { z } from 'zod';

import type { Prisma } from '../../../../generated/prisma';

const Schema: z.ZodType<Prisma.ReportCreatemediaUrlsInput> = z
  .object({
    set: z.string().array(),
  })
  .strict();

export const ReportCreatemediaUrlsInputObjectSchema = Schema;

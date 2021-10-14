import { z } from "zod";

export const RetrieveCurrencyByRatesDTOSchema = z.object({
  from: z.string(),
  to: z.string(),
});

export type RetrieveCurrencyByRatesDTO = z.infer<typeof RetrieveCurrencyByRatesDTOSchema>;
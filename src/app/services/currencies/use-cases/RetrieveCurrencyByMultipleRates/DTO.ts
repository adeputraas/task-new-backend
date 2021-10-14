import { z } from "zod";

export const RetrieveCurrencyByMultipleRatesDTOSchema = z.object({
  from: z.string(),
});

export type RetrieveCurrencyByMultipleRatesDTO = z.infer<typeof RetrieveCurrencyByMultipleRatesDTOSchema>;

import { z } from "zod";

export const OPTIONAL_RATES = z.enum(['IDR', 'USD', 'EUR'])

export const CURRENCY_SCHEMA = z.object({
  base: z.string(),
  date: z.string(),
  rates: z.object({
      IDR: z.number().optional(),
      AUD: z.number().optional(),
      GBP: z.number().optional(),
      USD: z.number().optional(),
      EUR: z.number().optional(),
      KRW: z.number().optional(),
      MYR: z.number().optional(),
      HKD: z.number().optional(),
      SGD: z.number().optional(),
  }).optional()
});

export type CurrencyProps = z.infer<typeof CURRENCY_SCHEMA>;

export class Currency {
    constructor(public props: CurrencyProps){}

    static create(props: CurrencyProps){
        const currency = CURRENCY_SCHEMA.parse(props);
        return new Currency(currency);
    }
}
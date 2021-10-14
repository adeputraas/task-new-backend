import { z } from "zod";

const props = {
    success: true,
    timestamp: 1634227580,
    base: 'IDR',
    date: '2021-10-14',
    rates: { USD: 0.000060626381310000006 }
  }

const CURRENCY_SCHEMA = z.object({
    base: z.string(),
    date: z.string(),
    rates: z.object({
        USD: z.number().optional(),
        EUR: z.number().optional()
    })
  });

  const currency = CURRENCY_SCHEMA.parse(props);
  
  console.log(currency,'ha')
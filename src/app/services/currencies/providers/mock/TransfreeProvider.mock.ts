import { Currency } from "../../entities/Currency";
import { ICurrencyProvider } from "../ICurrencyProvider";

export class TransfreeProvider implements ICurrencyProvider {
  constructor(private url: string) {}
  async retrieveByRates(from: string, to: string): Promise<Currency | undefined> {
    try {
      if (from === "BRUH" || to === "BRUH") {
        return undefined;
      }

      const response = {
        base: "IDR",
        date: "2021-10-15",
        rates: {
          USD: 0.00007034797341,
        },
      };
      const currency = Currency.create(response);
      return currency;
    } catch (error) {
      return undefined;
    }
  }

  async retrieveByMultipleRates(from: string): Promise<Currency | undefined> {
    try {
      if (from === "BRUH") {
        return undefined;
      }
      const response = {
        base: "IDR",
        date: "2021-10-15",
        rates: {
          IDR: 1,
          AUD: 0.00009484135650000001,
          GBP: 0.000051246450089999996,
          USD: 0.00007035047316000001,
          EUR: 0.000060621183810000004,
          KRW: 0.08320158000000001,
          MYR: 0.00029205,
          HKD: 0.00054747,
          SGD: 0.00009486128421,
        },
      };
      const currency = Currency.create(response);
      return currency;
    } catch (error) {
      return undefined;
    }
  }
}

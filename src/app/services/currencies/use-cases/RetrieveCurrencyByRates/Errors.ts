export namespace RetrieveCurrencyByRatesErrors {
    export class CurrencyNotFound extends Error {
      constructor(from: string, to: string) {
        super(`Rates From ${from} To ${to} is Not Found!`);
      }
    }
  }
  
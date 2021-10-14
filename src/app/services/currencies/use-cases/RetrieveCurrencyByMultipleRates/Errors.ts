export namespace RetrieveCurrencyByMultipleRatesErrors {
  export class CurrencyNotFound extends Error {
    constructor(from: string) {
      super(`Rates From ${from} is Not Found!`);
    }
  }
}

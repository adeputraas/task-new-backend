import { ICurrencyProvider } from "../../providers/ICurrencyProvider";
import { RetrieveCurrencyByMultipleRatesDTO, RetrieveCurrencyByMultipleRatesDTOSchema } from "./DTO";
import { RetrieveCurrencyByMultipleRatesErrors } from "./Errors";

export class RetrieveCurrencyByMultipleRatesUseCase {
  constructor(private currencyProvider: ICurrencyProvider) {}

  public async execute(props: RetrieveCurrencyByMultipleRatesDTO) {
    try {
      const dto = await RetrieveCurrencyByMultipleRatesDTOSchema.parseAsync(props);
      const currency = await this.currencyProvider.retrieveByMultipleRates(dto.from);

      if (!currency) {
        throw new RetrieveCurrencyByMultipleRatesErrors.CurrencyNotFound(dto.from);
      }
      return currency;
    } catch (error) {
      throw error;
    }
  }
}

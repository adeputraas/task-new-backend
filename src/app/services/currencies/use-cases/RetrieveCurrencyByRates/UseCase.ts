import { ICurrencyProvider } from "../../providers/ICurrencyProvider";
import { RetrieveCurrencyByRatesDTO, RetrieveCurrencyByRatesDTOSchema } from "./DTO";
import { RetrieveCurrencyByRatesErrors } from "./Errors";

export class RetrieveCurrencyByRatesUseCase {
  constructor(private currencyProvider: ICurrencyProvider) {}

  public async execute(props: RetrieveCurrencyByRatesDTO) {
    try {
      const dto = await RetrieveCurrencyByRatesDTOSchema.parseAsync(props);
      const currency = await this.currencyProvider.retrieveByRates(dto.from, dto.to);

      if (!currency) {
        throw new RetrieveCurrencyByRatesErrors.CurrencyNotFound(dto.from, dto.to);
      }
      return currency;
    } catch (error) {
      throw error;
    }
  }
}

import { ZodError } from "zod";
import config from "../../../config";
import { TransfreeProvider } from "../providers/mock/TransfreeProvider.mock";
import { RetrieveCurrencyByRatesErrors } from "../use-cases/RetrieveCurrencyByRates/Errors";
import { RetrieveCurrencyByRatesUseCase } from "../use-cases/RetrieveCurrencyByRates/UseCase";

const transfreeProvider = new TransfreeProvider(config.url);
const retrieveCurrencyByRatesUseCase = new RetrieveCurrencyByRatesUseCase(transfreeProvider);

test("Get Currency By Rates - Success", async () => {
  const result = await retrieveCurrencyByRatesUseCase.execute({
    from: "IDR",
    to:"USD"
  });
  expect(result.props).toBeTruthy();
});

test("Get Currency By Rates - Error Request", async () => {
  try {
    const result = await retrieveCurrencyByRatesUseCase.execute({
      from: "BRUH",
      to:"BRUH"
    });
  } catch (error) {
    expect(error).toBeInstanceOf(RetrieveCurrencyByRatesErrors.CurrencyNotFound);
  }
});

test("Get Currency By Rates - Error Validator", async () => {
  try {
    const result = await retrieveCurrencyByRatesUseCase.execute({
      from: null as any,
      to: null as any
    });
  } catch (error) {
    expect(error).toBeInstanceOf(ZodError);
  }
});

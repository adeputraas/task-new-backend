import { ZodError } from "zod";
import config from "../../../config";
import { TransfreeProvider } from "../providers/mock/TransfreeProvider.mock";
import { RetrieveCurrencyByMultipleRatesErrors } from "../use-cases/RetrieveCurrencyByMultipleRates/Errors";
import { RetrieveCurrencyByMultipleRatesUseCase } from "../use-cases/RetrieveCurrencyByMultipleRates/UseCase";

const transfreeProvider = new TransfreeProvider(config.url);
const retrieveCurrencyByMultipleRatesUseCase = new RetrieveCurrencyByMultipleRatesUseCase(transfreeProvider);

test("Get Currency By Multiple Rates - Success", async () => {
  const result = await retrieveCurrencyByMultipleRatesUseCase.execute({
    from: "IDR",
  });
  expect(result.props).toBeTruthy();
});

test("Get Currency By Multiple Rates - Error Request", async () => {
  try {
    const result = await retrieveCurrencyByMultipleRatesUseCase.execute({
      from: "BRUH",
    });
  } catch (error) {
    expect(error).toBeInstanceOf(RetrieveCurrencyByMultipleRatesErrors.CurrencyNotFound);
  }
});

test("Get Currency By Multiple Rates - Error Validator", async () => {
  try {
    const result = await retrieveCurrencyByMultipleRatesUseCase.execute({
      from: 1 as any,
    });
  } catch (error) {
    expect(error).toBeInstanceOf(ZodError);
  }
});

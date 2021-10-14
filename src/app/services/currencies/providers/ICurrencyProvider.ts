import { Currency } from "../entities/Currency";

export interface ICurrencyProvider {
    retrieveByRates(from: string, to: string): Promise <Currency | undefined>;
    retrieveByMultipleRates(from: string): Promise <Currency | undefined>;
}
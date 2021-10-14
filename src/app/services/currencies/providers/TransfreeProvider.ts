import axios from "axios";
import { Currency } from "../entities/Currency";
import { ICurrencyProvider } from "./ICurrencyProvider";

export class TransfreeProvider implements ICurrencyProvider {
    constructor(private url: string){};
    async retrieveByRates(from: string, to: string): Promise<Currency | undefined> {
        try {
            const response = await axios.get(`${this.url}/v1/getRates?from=${from}&to=${to}`).then(response => response.data);
            if (response?.Response === "False") {
                return undefined;
              }
              const currency = Currency.create(response);
              return currency;

        } catch (error) {
            return undefined;
        }
    }

    async retrieveByMultipleRates(from: string): Promise<Currency | undefined> {
        try {
            const response = await axios.get(`${this.url}/v1/getMultipleRates?from=${from}`).then(response => response.data);
            if (response?.Response === "False") {
                return undefined;
              }
              const currency = Currency.create(response);
              return currency;

        } catch (error) {
            return undefined;
        }
    }
}
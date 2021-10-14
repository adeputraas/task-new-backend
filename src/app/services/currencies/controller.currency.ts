import { Request, Response, NextFunction } from "express";
import config from "../../config";
import { TransfreeProvider } from "./providers/TransfreeProvider";
import { RetrieveCurrencyByMultipleRatesErrors } from "./use-cases/RetrieveCurrencyByMultipleRates/Errors";
import { RetrieveCurrencyByMultipleRatesUseCase } from "./use-cases/RetrieveCurrencyByMultipleRates/UseCase";
import { RetrieveCurrencyByRatesErrors } from "./use-cases/RetrieveCurrencyByRates/Errors";
import { RetrieveCurrencyByRatesUseCase } from "./use-cases/RetrieveCurrencyByRates/UseCase";

const transfreeProvider = new TransfreeProvider(config.url);
const retrieveCurrencyByRatesUseCase = new RetrieveCurrencyByRatesUseCase(transfreeProvider);
const retrieveCurrencyByMultipleRatesUseCase = new RetrieveCurrencyByMultipleRatesUseCase(transfreeProvider);

export class CurrencyController { 
    async getRates(req: Request, res: Response, next: NextFunction){
        try{
            const results = await retrieveCurrencyByRatesUseCase.execute({
                from: req.query.from as string,
                to: req.query.to as string
            })
            res.json(results.props);
        }catch(error){
            if(error instanceof RetrieveCurrencyByRatesErrors.CurrencyNotFound){
                return res.status(400).json(error.message);
            }
            next(error);
        }
    }

    async getMultipleRates(req: Request, res: Response, next: NextFunction){
        try{
            const results = await retrieveCurrencyByMultipleRatesUseCase.execute({
                from: req.query.from as string,
            })
            res.json(results.props);
        }catch(error){
            if(error instanceof RetrieveCurrencyByMultipleRatesErrors.CurrencyNotFound){
                return res.status(400).json(error.message);
            }
            next(error);
        }
    }
}
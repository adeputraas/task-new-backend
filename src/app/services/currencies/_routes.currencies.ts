import { Router } from "express";
import { CurrencyController } from "./controller.currency";

const router = Router();
const controller = new CurrencyController();

router.get("/getRates", controller.getRates);
router.get("/getMultipleRates", controller.getMultipleRates);

export default router;
import { Router } from "express";
import currencies from "../services/currencies/_routes.currencies";
const router = Router();

export default{
    movie: router.use(currencies)
}
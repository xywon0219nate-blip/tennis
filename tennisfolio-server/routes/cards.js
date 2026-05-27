import express from "express";
import * as controller from "../controller/cards.js";

const router = express.Router();

router.post("/cards", controller.getCards);

export default router;

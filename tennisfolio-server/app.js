import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import loginRouter from "./routes/login.js";
import cardsRouter from "./routes/cards.js";

dotenv.config();

const PORT = process.env.SERVER_PORT || 9000;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/login", loginRouter);
app.use("/cards", cardsRouter);

app.listen(PORT, () => {
	console.log(`semi-project server ✅ :: ${PORT}`);
});

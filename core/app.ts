import express, { Express, NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import { userRoutes } from "../routes/userRoutes";
import {
  generalErrorMiddleware,
  notFoundMiddleware,
} from "../middleware/authMiddleware";

dotenv.config();

const app: Express = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(userRoutes);

app.use(notFoundMiddleware);

app.use(generalErrorMiddleware);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

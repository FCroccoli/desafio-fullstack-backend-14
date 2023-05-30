import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { errorHandler } from "./error/errors";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.use(errorHandler);

export default app;

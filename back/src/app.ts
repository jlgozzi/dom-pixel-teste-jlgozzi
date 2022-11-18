import express from "express";
import { appRoutes } from "./routes";
import { errorMiddleware } from "./middlewares/errorHandler.middleware";
import { Request, Response } from "express";
import "express-async-errors";
import cors from "cors";

const app = express();

app.use(cors());

app.use(express.json());

appRoutes(app);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "API Fullstack Job Test - DomPixel running",
  });
});

app.use(errorMiddleware);

app.listen(3000);

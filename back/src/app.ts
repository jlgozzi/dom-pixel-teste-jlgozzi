import express from "express";
import { appRoutes } from "./routes";
import { errorMiddleware } from "./middlewares/errorHandler.middleware";
import { Request, Response } from "express";

const app = express();

app.use(express.json());

appRoutes(app);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "API Fullstack Job Test - DomPixel running",
  });
});

app.use(errorMiddleware);

app.listen(3000);

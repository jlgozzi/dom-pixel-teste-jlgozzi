import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors";

const verifyApiKey = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const key = req.headers.api_key;
  if (key !== process.env.API_KEY) {
    throw new AppError("Access not authorized.", 403);
  }
  next();
};

export default verifyApiKey;

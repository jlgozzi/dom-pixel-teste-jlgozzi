import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors";

const verifyRequestData = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, category, price } = req.body;
  if (!name || !category || !price) {
    throw new AppError("Must have name, category and price", 400);
  }
  next();
};

export default verifyRequestData;

import { Request, Response } from "express";
import createProductService from "../services/createProduct.service";

const createProductController = async (req: Request, res: Response) => {
  const { name, category, price } = req.body;

  const newProduct = await createProductService({ name, category, price });

  res.status(201).json({ message: "Product created.", product: newProduct });
};

export default createProductController;

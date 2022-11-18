import { Request, Response } from "express";
import listProductsService from "../services/listProducts.service";

const listProductsController = async (req: Request, res: Response) => {
  const products = await listProductsService();
  res.status(200).json(products);
};

export default listProductsController;

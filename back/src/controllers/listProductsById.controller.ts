import { Request, Response } from "express";
import listProductsByIdService from "../services/listProductsById.service";

const listProductsByIdController = async (req: Request, res: Response) => {
  const id = req.params.productId;

  const product = await listProductsByIdService(id);

  res.status(200).json(product);
};

export default listProductsByIdController;

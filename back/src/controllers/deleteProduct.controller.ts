import { Request, Response } from "express";
import deleteProductService from "../services/deleteProduct.service";

const deleteProductController = async (req: Request, res: Response) => {
  const id = req.params.productId;

  const message = await deleteProductService(id);

  return res.status(204).json({ message });
};

export default deleteProductController;

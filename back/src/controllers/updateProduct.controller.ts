import { Request, Response } from "express";
import updateProductService from "../services/updateProduct.service";

const updateProductController = async (req: Request, res: Response) => {
  const { name, price, category } = req.body;
  const id: string = req.params.productId;

  console.log(id, { name, price, category });

  const updatedProduct = await updateProductService(id, {
    name,
    price,
    category,
  });

  return res.status(200).json({
    message: "Product updated.",
    product: updatedProduct,
  });
};
export default updateProductController;

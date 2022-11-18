import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Product } from "../entities/product.entity";
import { AppError } from "../errors";

const listProductsByIdService = async (id: string) => {
  const database = AppDataSource.getRepository(Product);

  const product = await database.findOneBy({ id: id });

  if (!product) {
    throw new AppError("Product not found.", 404);
  }

  return { product };
};

export default listProductsByIdService;

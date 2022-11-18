import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Product } from "../entities/product.entity";

const listProductsService = async () => {
  const database = AppDataSource.getRepository(Product);

  const products = await database.find();

  return { products };
};

export default listProductsService;

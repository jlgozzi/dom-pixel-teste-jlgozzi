import { AppDataSource } from "../data-source";
import { Product } from "../entities/product.entity";
import { AppError } from "../errors";
import { ICreateProductRequest } from "../interfaces";

const createProductService = async ({
  name,
  category,
  price,
}: ICreateProductRequest) => {
  const database = AppDataSource.getRepository(Product);

  const newProduct = database.create({
    name,
    category,
    price,
  });

  await database.save(newProduct);

  return newProduct;
};

export default createProductService;

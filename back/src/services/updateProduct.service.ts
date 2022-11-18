import { AppDataSource } from "../data-source";
import { Product } from "../entities/product.entity";
import { AppError } from "../errors";
import { ICreateProductRequest } from "../interfaces";

const updateProductService = async (
  id: string,
  { name, category, price }: ICreateProductRequest
) => {
  const database = AppDataSource.getRepository(Product);

  const findProduct = await database.findOneBy({ id: id });

  if (!findProduct) {
    throw new AppError("Product not found", 404);
  }
  await database.update(id, { name, category, price });

  const updatedUser = await database.findOneBy({ id });

  return updatedUser!;
};

export default updateProductService;

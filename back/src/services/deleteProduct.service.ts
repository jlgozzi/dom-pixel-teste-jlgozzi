import { AppDataSource } from "../data-source";
import { Product } from "../entities/product.entity";
import { AppError } from "../errors";

const deleteProductService = async (id: string) => {
  const database = AppDataSource.getRepository(Product);

  const product = await database.findOneBy({ id: id });

  if (!product) {
    throw new AppError("Product not found.");
  }

  await database.delete({ id: id });

  return "user deleted";
};

export default deleteProductService;

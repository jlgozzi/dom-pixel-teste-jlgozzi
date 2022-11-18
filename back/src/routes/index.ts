import { Express } from "express";
import { Router } from "express";
import createProductController from "../controllers/createProduct.controller";
import deleteProductController from "../controllers/deleteProduct.controller";
import listProductsController from "../controllers/listProducts.controller";
import listProductsByIdController from "../controllers/listProductsById.controller";
import updateProductController from "../controllers/updateProduct.controller";
import verifyApiKey from "../middlewares/verifyApiKey.middleware";
import verifyRequestData from "../middlewares/verifyRequestData.middleware";

export const appRoutes = (app: Express) => {
  const routes = Router();

  routes.get("/products", listProductsController);
  routes.get("/products/:productId", listProductsByIdController);
  routes.post("/products", verifyRequestData, createProductController);
  routes.delete("/products/:productId", deleteProductController);
  routes.put(
    "/products/:productId",
    verifyRequestData,
    updateProductController
  );

  app.use(routes);
};

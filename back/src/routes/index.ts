import { Express } from "express";
import { Router } from "express";

export const appRoutes = (app: Express) => {
  const routes = Router();

  routes.get("/");

  app.use(routes);
};

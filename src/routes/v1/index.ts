import { Router } from "express";
import appRouter from "./app.router";

export default () => {
  const router = Router();

  router.use("/", appRouter());

  return router;
};

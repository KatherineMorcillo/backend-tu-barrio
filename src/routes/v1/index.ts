import { Router } from "express";
import appRouter from "./app.router";
import administrators from "./administrators";
import stores from "./stores";

export default () => {
  const router = Router();

  router.use("/", appRouter());
  router.use("/administrators", administrators());
  router.use("/stores", stores());

  return router;
};

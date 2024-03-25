import { Router } from "express";
import appRouter from "./app.router";
import administrators from "./administrators";

export default () => {
  const router = Router();

  router.use("/", appRouter());
  router.use("/administrators", administrators());

  return router;
};

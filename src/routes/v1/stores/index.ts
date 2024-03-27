import { Router } from "express";
import authenticationRouter from "./authentication.router";

export default () => {
  const router = Router();

  router.use("/authentication", authenticationRouter);
  return router;
};

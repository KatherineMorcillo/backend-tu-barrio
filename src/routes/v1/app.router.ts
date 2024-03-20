import { Router } from "express";
import { appController } from "../../controllers/v1";

export default () => {
  const router = Router();

  router.get("/generate-access-token", appController.generateAccessToken);

  return router;
};

import { Router } from "express";
import { administratorAuthenticatorController } from "../../../controllers/v1";

export default () => {
  const router = Router();

  router.post("/", administratorAuthenticatorController.authentication);

  return router;
};

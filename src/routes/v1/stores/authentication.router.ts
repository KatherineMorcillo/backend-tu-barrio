import { Router } from "express";
import { userAuthenticationController } from "../../../controllers/v1";

export default () => {
  const router = Router();

  router.post("/", userAuthenticationController.authenticationuser);

  return router;
};

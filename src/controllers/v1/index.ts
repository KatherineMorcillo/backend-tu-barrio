import { AdministratorAuthenticatorController } from "./administrators/authentication.controller";
import { AppController } from "./app.controller";
import { UserAuthenticationController } from "./users/authentication.controllers";

export const appController = new AppController();
export const administratorAuthenticatorController =
  new AdministratorAuthenticatorController();
export const userAuthenticationController = new UserAuthenticationController();

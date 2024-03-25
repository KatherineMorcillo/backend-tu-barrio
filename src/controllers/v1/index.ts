import { AdministratorAuthenticatorController } from "./administrators/authentication.controller";
import { AppController } from "./app.controller";

export const appController = new AppController();
export const administratorAuthenticatorController =
  new AdministratorAuthenticatorController();

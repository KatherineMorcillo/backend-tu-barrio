import { Request, Response } from "express";

export class AdministratorAuthenticatorController {
  authentication = (req: Request, res: Response) => {
    return res.json({ message: "Login desde el administrador" });
  };
}

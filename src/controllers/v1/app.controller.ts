import { Request, Response } from "express";

export class AppController {
  generateAccessToken = (req: Request, res: Response) => {
    return res.json({ message: "mundo" });
  };
}

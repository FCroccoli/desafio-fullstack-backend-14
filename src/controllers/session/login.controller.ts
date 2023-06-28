import { Request, Response } from "express";
import { userLoginService } from "../../services/session/login.service";

export const loginController = async (req: Request, res: Response) => {
  const token = await userLoginService(req.body);

  return res.status(200).json(token);
};

import { Request, Response } from "express";
import { createUserService } from "../../services/user/createUser.service";

export const createUserController = async (req: Request, res: Response) => {
  const data = await createUserService(req.body);

  res.status(201).json(data);
};

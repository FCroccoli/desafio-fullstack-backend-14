import { Request, Response, NextFunction } from "express";
import { AppError } from "../error/errors";
import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";

export const verifyUserIsActive = async (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  const userRepo = AppDataSource.getRepository(User);

  const foundUser = await userRepo.findOneBy({ email: req.email });

  if (foundUser!.isActive === false) {
    throw new AppError("Usuário inativo", 400);
  }

  return next();
};

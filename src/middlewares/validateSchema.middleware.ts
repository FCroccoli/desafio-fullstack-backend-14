import { Request, Response, NextFunction } from "express";
import { AnySchema } from "yup";
import { AppError } from "../error/errors";

export const validateSchema =
  (serializer: AnySchema) =>
  async (req: Request, _res: Response, next: NextFunction) => {
    try {
      const validatedBody = await serializer.validate(req.body, {
        stripUnknown: true,
        abortEarly: true,
      });

      req.body = validatedBody;

      return next();
    } catch (error) {
      throw new AppError("Invalid Input!", 400);
    }
  };

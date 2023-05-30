import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.middleware";
import { createUserSerializer } from "../serializers/user";
import { createUserController } from "../controllers/user/createUser.controller";

const userRoutes = Router();

userRoutes.post("", validateSchema(createUserSerializer), createUserController);

export default userRoutes;

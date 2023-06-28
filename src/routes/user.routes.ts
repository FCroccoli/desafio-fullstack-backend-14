import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.middleware";
import {
  createUserSerializer,
  updateUserSerializer,
} from "../serializers/user";
import { createUserController } from "../controllers/user/createUser.controller";
import { getUserController } from "../controllers/user/getUser.controller";
import { deleteUserController } from "../controllers/user/deleteUser.controller";
import { validateToken } from "../middlewares/validateToken.middleware";
import { verifyUserIsActive } from "../middlewares/verifyUserIsActive.middleware";

const userRoutes = Router();

userRoutes.post("", validateSchema(createUserSerializer), createUserController);

userRoutes.get("", validateToken, getUserController);

userRoutes.delete("", validateToken, verifyUserIsActive, deleteUserController);

userRoutes.patch(
  "",
  validateToken,
  verifyUserIsActive,
  validateSchema(updateUserSerializer),
  updateUserController
);

export default userRoutes;

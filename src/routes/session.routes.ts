import { Router } from "express";
import { loginController } from "../controllers/session/login.controller";

const sessionRoutes = Router();

sessionRoutes.post("", loginController);

export default sessionRoutes;

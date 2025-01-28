import { Router } from "express";
import authController from "./authController";

const authRouter = Router();

authRouter.post("/login", authController.loginUser);

export default authRouter;

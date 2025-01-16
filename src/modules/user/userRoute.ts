import { Router } from "express";
import userController from "./userController";

const router = Router();

router.get("/", userController.getUsers);

export default router;

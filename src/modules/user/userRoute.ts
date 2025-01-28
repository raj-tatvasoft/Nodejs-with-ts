import { Router } from "express";
import userController from "./userController";

const router = Router();

router.get("/", userController.getUsers);
router.post("/", userController.createUsers);
// router.post(
//    "/",
//    (req, res, next) => validateRequest(CreateUserDTO, req, res, next),
//    userController.createUsers,
// );

export default router;

import { Router } from "express";
import userController from "./userController";
import { RoleMiddleware } from "middleware/RoleMiddleware";

const router = Router();

router.use(RoleMiddleware("Admin")); // global role authorization
router.get("/", RoleMiddleware("Admin"), userController.getUsers); //specific route authorization
router.post("/", userController.createUsers);
// router.post(
//    "/",
//    (req, res, next) => validateRequest(CreateUserDTO, req, res, next),
//    userController.createUsers,
// );

export default router;

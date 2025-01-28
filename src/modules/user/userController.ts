import { NextFunction, Request, Response } from "express";
import { User } from "./dtos/userModel";
import { BaseController } from "@modules/generic/baseController";
import { validateRequest } from "utils/validateRequest";
import { CreateUserDTO } from "./dtos/createUserDTO";

const users: User[] = [
   { id: 1, name: "John Doe", email: "john@example.com" },
   { id: 2, name: "Jane Smith", email: "jane@example.com" },
];

class UserController extends BaseController {
   getUsers = (req: Request, res: Response): void => {
      this.sendSuccessResponse(res, users);
   };

   createUsers = async (req: Request, res: Response, next: NextFunction) => {
      await validateRequest(CreateUserDTO, req, res, next);
      const newUser = req.body;
      users.push(newUser);
      this.sendSuccessResponse(res, null, "Record saved successfully");
   };
}

const userController = new UserController();
export default userController;

import { Request, Response } from "express";
import { User } from "./dtos/userModel";
import { BaseController } from "@modules/generic/baseController";

const users: User[] = [
   { id: 1, name: "John Doe", email: "john@example.com" },
   { id: 2, name: "Jane Smith", email: "jane@example.com" },
];

class UserController extends BaseController {
   getUsers = (req: Request, res: Response): void => {
      console.log("---------rajlogres.body", res, users);
      this.sendSuccessResponse(res, users);
   };
}

const userController = new UserController();
export default userController;

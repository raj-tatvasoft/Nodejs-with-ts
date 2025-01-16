import { Request, Response } from "express";
import { User } from "./dtos/userModel";

let users: User[] = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
];

class UserController {
  getUsers = (req: Request, res: Response): void => {
    console.log("---------rajlogres.body", res);
    res.json(users);
  };
}

const userController = new UserController();
export default userController;

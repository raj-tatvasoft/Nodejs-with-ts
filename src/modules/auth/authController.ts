import { users } from "@modules/user/userController";
import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import { BaseController } from "@modules/generic/baseController";
import { validateRequest } from "utils/validateRequest";
import { LoginDTO } from "./dtos/loginDTO";

export class AuthController extends BaseController {
   loginUser = async (req: Request, res: Response, next: NextFunction) => {
      await validateRequest(LoginDTO, req, res, next);
      const user = users[0];
      // Create a JWT token
      const token = jwt.sign(
         { id: user.id, username: user.name },
         process.env.SECRET_KEY!,
         {
            expiresIn: "1Years",
         },
      );

      return this.sendSuccessResponse(res, { token }, "Login Success");
   };
}

const authController = new AuthController();
export default authController;

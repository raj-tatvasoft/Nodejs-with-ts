// src/middleware/authMiddleware.ts
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { CustomException } from "./GlobalExceptionHandler";
import { StatusCodes } from "http-status-codes";

export const AuthMiddleware = (
   req: Request,
   res: Response,
   next: NextFunction,
): any => {
   const token = req.headers["authorization"]?.split(" ")[1]; // 'Bearer <token>'
   if (!token) {
      throw new CustomException("No token provided.", StatusCodes.UNAUTHORIZED);
   }

   jwt.verify(token, process.env.SECRET_KEY!, (err, decoded) => {
      if (err) {
         throw new CustomException(
            "Invalid or expired token.",
            StatusCodes.UNAUTHORIZED,
         );
      }
      // Attach the decoded user info to the request object
      (req as any).user = decoded;
      next();
   });
};

// src/middleware/roleMiddleware.ts
import { Request, Response, NextFunction } from "express";
import { CustomException } from "./GlobalExceptionHandler";
import { StatusCodes } from "http-status-codes";
import { User } from "@modules/user/dtos/userModel";

export const RoleMiddleware = (requiredRole: string | string[]) => {
   return (
      req: Request & { user?: User },
      res: Response,
      next: NextFunction,
   ) => {
      if (!req.user) {
         throw new CustomException(
            "No token provided.",
            StatusCodes.UNAUTHORIZED,
         );
      }

      if (
         (Array.isArray(requiredRole) &&
            requiredRole.includes(req.user?.role)) ||
         req.user?.role !== requiredRole
      ) {
         throw new CustomException(
            "Access denied. Insufficient permissions.",
            StatusCodes.FORBIDDEN,
         );
      }

      next();
   };
};

import { validate } from "class-validator";
import { plainToInstance } from "class-transformer";
import { Request, Response, NextFunction } from "express";
import { CustomException } from "middleware/GlobalExceptionHandler";

export async function validateRequest<T>(
   dtoClass: new () => T,
   req: Request,
   res: Response,
   next: NextFunction,
) {
   const instance = plainToInstance(dtoClass, req.body);
   const errors = await validate(instance as any);

   if (errors.length > 0) {
      const errorMessages = errors.map((error) => {
         console.log("error", error, Object.values(error.constraints || {}));
         return Object.values(error.constraints || {}).join(", ");
      });

      const summary = errorMessages.join("; ");

      throw new CustomException(summary);
   }

   next();
}

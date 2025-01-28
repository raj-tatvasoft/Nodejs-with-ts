import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { IApiResponse } from "types/genericType";

export class CustomException extends Error {
   statusCode: number;
   message: string;

   constructor(message: string, statusCode?: number) {
      super(message);
      this.statusCode = statusCode
         ? statusCode
         : StatusCodes.INTERNAL_SERVER_ERROR;
      this.message = message;
   }
}

export const GlobalExceptionHandling = (
   err: any,
   req: Request,
   res: Response,
   next: any,
) => {
   if (!err) {
      return next();
   }

   const errApiRes: IApiResponse<null> = {
      statusCode: err.statusCode
         ? err.statusCode
         : StatusCodes.INTERNAL_SERVER_ERROR,
      success: false,
      messages: err.message,
   };
   return res.status(errApiRes.statusCode).send(errApiRes);
};

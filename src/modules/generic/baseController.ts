import { Response } from "express";
import { StatusCodes } from "http-status-codes";
import { IApiResponse } from "types/genericType";

export class BaseController {
   sendSuccessResponse<T>(
      res: Response,
      data?: T,
      message?: string | string[],
   ) {
      const response: IApiResponse<T> = {
         statusCode: StatusCodes.OK,
         success: true,
         messages: message
            ? typeof message === "string"
               ? message
               : message?.join(", ")
            : "",
         data,
      };
      res.status(StatusCodes.OK).json(response);
   }

   sendErrorResponse(
      res: Response,
      message?: string | string[],
      error?: string,
   ) {
      const response: IApiResponse<null> = {
         statusCode: StatusCodes.BAD_REQUEST,
         success: false,
         messages: message
            ? typeof message === "string"
               ? message
               : message?.join(", ")
            : "",
         error,
      };
      res.status(StatusCodes.BAD_REQUEST).json(response);
   }
}

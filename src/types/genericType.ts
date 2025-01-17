export type IApiResponse<T> = {
   success: boolean;
   statusCode: number;
   messages?: string | string[];
   data?: T;
   error?: any;
};

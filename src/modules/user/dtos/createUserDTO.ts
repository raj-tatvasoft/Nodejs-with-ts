import { IsNotEmpty, Length, IsEmail, IsOptional } from "class-validator";

export class CreateUserDTO {
   @IsNotEmpty()
   id!: number;

   @IsNotEmpty()
   @Length(2, 50)
   name!: string;

   @IsEmail()
   email!: string;

   @IsOptional()
   @Length(6, 20)
   password?: string;
}

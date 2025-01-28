import { IsNotEmpty, Length, IsEmail } from "class-validator";

export class LoginDTO {
   @IsEmail()
   @IsNotEmpty()
   email!: string;

   @IsNotEmpty()
   @Length(6, 20)
   password?: string;
}

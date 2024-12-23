import { IsEmail, IsNotEmpty } from 'class-validator';

export class PostHelloDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}

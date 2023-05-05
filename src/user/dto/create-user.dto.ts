import { IsEmail, Length } from 'class-validator';

export class CreateUserDto {
  userName: string;

  @IsEmail(undefined, { message: 'неверная почта' })
  email: string;

  @Length(6, 32, { message: 'password must be at least 6 characters' })
  password?: string;
}

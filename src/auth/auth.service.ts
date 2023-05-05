import { Repository } from 'typeorm';
import {HttpException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserEntity } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,

    @InjectRepository(UserEntity)
    private repository: Repository<UserEntity>
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findByCond({
      email,
      password,
    });
    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  generateJWTToken(data: { id: number; email: string }) {
    const payload = { email: data.email, sub: data.id };
    return this.jwtService.sign(payload);
  }
  async login(user: UserEntity) {
    const { password, ...userData } = user;
    return {
      ...userData,
      access_token: this.generateJWTToken(userData),
    };
  }

  async register(dto: CreateUserDto) {
    try {
      const { password,...user } = await this.usersService.create(dto);
      return {
        ...user,
        access_token: this.generateJWTToken(user),
      };
    } catch (err) {
      const find = await this.repository.findOneBy({ email: dto.email });

      if (find) throw new HttpException("Пользователь с таким email уже существует", 400)

      throw new HttpException("Поля/поле неверно", 400, { cause: new Error("Some Error") }) 
    }
  }
}

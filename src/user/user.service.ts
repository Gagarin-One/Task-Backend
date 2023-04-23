import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(UserEntity)
    private repository: Repository<UserEntity>
  ){}

  create(dto: CreateUserDto) {
    return this.repository.save(dto);
  }

  findAll() {
    return `This action returns all user`;
  }

  async findOne(id: number) {
    const find = await this.repository.findOneBy({ id: id });

    if (!find) throw new NotFoundException('пользователь не найден')

    return this.repository.findOneBy({ id: id });
  }

  update(id: number, dto: UpdateUserDto) {
    return this.repository.update(id, dto);
  }

}

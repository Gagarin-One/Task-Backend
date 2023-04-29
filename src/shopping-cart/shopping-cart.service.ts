import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateShoppingCartDto } from './dto/create-shopping-cart.dto';
import { UpdateShoppingCartDto } from './dto/update-shopping-cart.dto';
import { CartEntity } from './entities/shopping-cart.entity';

@Injectable()
export class ShoppingCartService {

  constructor(
    @InjectRepository(CartEntity)
    private repository: Repository<CartEntity>
  ){}

  create(dto: CreateShoppingCartDto) {
    return this.repository.save(dto)
  }

  async getCarts(id: number){
    const qb = this.repository.createQueryBuilder('p')


    id && qb.andWhere(`p.userId ILIKE :id`)

    qb.setParameters({
      userId:id
    })
    const [items,total] = await qb.getManyAndCount()
    return {items,total}
  }


  remove(id: number) {
    return this.repository.delete(id);
  }
}

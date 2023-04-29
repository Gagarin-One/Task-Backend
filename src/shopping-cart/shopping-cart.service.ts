import { Injectable } from '@nestjs/common';
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

  create(createShoppingCartDto: CreateShoppingCartDto) {
    return 'This action adds a new shoppingCart';
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} shoppingCart`;
  }

  update(id: number, updateShoppingCartDto: UpdateShoppingCartDto) {
    return `This action updates a #${id} shoppingCart`;
  }

  remove(id: number) {
    return `This action removes a #${id} shoppingCart`;
  }
}

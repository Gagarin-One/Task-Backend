import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrderEntity } from './entities/order.entity';

@Injectable()
export class OrderService {

  constructor(
    @InjectRepository(OrderEntity)
    private repository: Repository<OrderEntity>
  ){}

  create(dto: CreateOrderDto) {
    return this.repository.save(dto)
  }


  async findAll(id: number){
    const qb = this.repository.createQueryBuilder('p')


    id && qb.andWhere(`p.userId ILIKE :id`)

    qb.setParameters({
      userId:id
    })
    const [items,total] = await qb.getManyAndCount()
    return {items,total}
  }

}

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductEntity } from './entities/product.entity';

@Injectable()
export class ProductsService {

  constructor(
    @InjectRepository(ProductEntity)
    private repository: Repository<ProductEntity>
  ){}

  create(dto: CreateProductDto) {
    return this.repository.save(dto)
  }

  findAll() {
    return this.repository.find()
  }

  async findOne(id: number) {
    const find = await this.repository.findOneBy({id: id})

    if (!find) throw new NotFoundException('Товар не найден')

    return this.repository.findOneBy({id: id})
  }

}

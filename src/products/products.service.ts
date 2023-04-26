import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Db, Repository } from 'typeorm';
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

  async search(dto:CreateProductDto){
    const qb = this.repository.createQueryBuilder('p')


    dto.category && qb.andWhere(`p.category ILIKE :category`)

    qb.setParameters({
      category:dto.category
    })
    const [items,total] = await qb.getManyAndCount()
    return {items,total}
  }

  async findOne(id: number) {
    const find = await this.repository.findOneBy({id: id})

    if (!find) throw new NotFoundException('Товар не найден')

    return this.repository.findOneBy({id: id})
  }

}

import { Controller, Get, Post, Body, Param, Query} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('product')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() dto: CreateProductDto) {
    return this.productsService.create(dto);
  }

  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Get('/category')
  findByCategory(@Query() dto: CreateProductDto) {
    return this.productsService.search(dto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {

    return this.productsService.findOne(+id);
  }
}

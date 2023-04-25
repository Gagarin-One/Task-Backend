import { IsNotEmpty } from "class-validator"
import { ProductEntity } from "src/products/entities/product.entity"

export class CreateShoppingCartDto {
  @IsNotEmpty()
  userId: number

  products:number

}

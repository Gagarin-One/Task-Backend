import { IsNotEmpty } from "class-validator"
import { ProductEntity } from "src/products/entities/product.entity"

export class CreateShoppingCartDto {
  quantity: number

  @IsNotEmpty()
  userId:number

  total:number

  @IsNotEmpty()
  productId:number

}

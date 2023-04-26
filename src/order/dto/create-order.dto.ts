import { ProductEntity } from "src/products/entities/product.entity";
import { UserEntity } from "src/user/entities/user.entity";

export class CreateOrderDto {

  id: number;
  user:number;
  createdAt: Date;
}

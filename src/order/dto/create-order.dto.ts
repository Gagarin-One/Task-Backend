import { ProductEntity } from "src/products/entities/product.entity";
import { UserEntity } from "src/user/entities/user.entity";

export class CreateOrderDto {

  id: number;
  title: string;
  total: number;
  userId:number;
  createdAt: Date;
}

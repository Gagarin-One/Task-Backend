import { CartEntity } from "src/shopping-cart/entities/shopping-cart.entity";

export class CreateProductDto {
  title: string;
  image: string;
  price: number;
  description: string;
  category: string;
}

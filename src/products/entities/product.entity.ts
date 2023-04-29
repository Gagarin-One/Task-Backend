import { OrderEntity } from 'src/order/entities/order.entity';
import { CartEntity } from 'src/shopping-cart/entities/shopping-cart.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, JoinTable, ManyToMany } from 'typeorm';


@Entity('products')
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  price: number;

  @Column()
  image: string;

  @Column()
  description: string;

  @Column()
  category: string;


}
import { CartEntity } from 'src/shopping-cart/entities/shopping-cart.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';


@Entity('products')
export class ProductEntity {
  @PrimaryGeneratedColumn('uuid')
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

  @OneToMany(type => CartEntity, cart => cart.id)
  @JoinColumn()
  cart: CartEntity[];
}
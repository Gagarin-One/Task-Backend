import { ProductEntity } from 'src/products/entities/product.entity';
import { UserEntity } from 'src/user/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, CreateDateColumn } from 'typeorm';


@Entity('cart')
export class CartEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  total:number

  @Column()
  quantity: number;

  @ManyToOne(type => ProductEntity, product=> product.id)
  @JoinColumn()
  item: ProductEntity

  @ManyToOne(type => UserEntity, user => user.id)
  @JoinColumn()
  user: UserEntity

}
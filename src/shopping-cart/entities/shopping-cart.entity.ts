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

  @ManyToOne(() => ProductEntity)
  @JoinColumn({name:'productId'})
  product: ProductEntity

  @ManyToOne(() => UserEntity)
  @JoinColumn({name:'userId'})
  user: UserEntity

}
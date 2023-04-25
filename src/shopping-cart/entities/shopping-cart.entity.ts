import { ProductEntity } from 'src/products/entities/product.entity';
import { UserEntity } from 'src/user/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, CreateDateColumn } from 'typeorm';


@Entity('shoppingCart')
export class ShoppingCartEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(()=>UserEntity, {nullable:false})
  @JoinColumn({name:'userId'})
  user: UserEntity

  @Column()
  product: number

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
  createdAt:Date
}
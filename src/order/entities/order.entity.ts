import { ProductEntity } from 'src/products/entities/product.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, CreateDateColumn, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { UserEntity } from '../../user/entities/user.entity';

@Entity('order')
export class OrderEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  title: string;

  @Column()
  total: number;


  @ManyToOne(() => UserEntity)
  @JoinColumn({name:'userId'})
  user: UserEntity;


  @ManyToMany(() => ProductEntity)
  @JoinTable()
  products: ProductEntity[]

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
  createdAt:Date
}
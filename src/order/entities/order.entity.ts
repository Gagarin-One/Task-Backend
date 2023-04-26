import { ProductEntity } from 'src/products/entities/product.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, CreateDateColumn, OneToMany } from 'typeorm';
import { UserEntity } from '../../user/entities/user.entity';

@Entity('order')
export class OrderEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  title: string;

  @Column()
  total: number;


  @ManyToOne(type => UserEntity , user => user.id)
  @JoinColumn()
  user: UserEntity;

  @OneToMany(type => ProductEntity , product => product.id)
  @JoinColumn()
  product: ProductEntity[];

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
  createdAt:Date
}
import { UserEntity } from 'src/user/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';


@Entity('shoppingCart')
export class ShoppingCart {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(()=>UserEntity, {nullable:false})//перенести
  @JoinColumn({name:'userId'})
  user: UserEntity

  @Column()
  category: string;

}
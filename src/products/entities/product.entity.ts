import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


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
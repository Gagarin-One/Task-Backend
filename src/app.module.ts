import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user/entities/user.entity';
import { ProductEntity } from './products/entities/product.entity';
import { ProductsModule } from './products/products.module';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';
import { OrderModule } from './order/order.module';
import { CartEntity } from './shopping-cart/entities/shopping-cart.entity';
import { OrderEntity } from './order/entities/order.entity';
import { AuthModule } from './auth/auth.module';



@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'Miha1052003',
    database: 'socnet',
    entities: [UserEntity, ProductEntity,CartEntity,OrderEntity],
    synchronize: true,
  }),
   UserModule,
   ProductsModule,
   ShoppingCartModule,
   OrderModule,
   AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

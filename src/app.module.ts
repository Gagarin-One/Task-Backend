import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user/entities/user.entity';
import { ProductEntity } from './products/entities/product.entity';
import { ProductsModule } from './products/products.module';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'Miha1052003',
    database: 'socnet',
    entities: [UserEntity, ProductEntity],
    synchronize: true,
  }),
   UserModule,
   ProductsModule,
   ShoppingCartModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

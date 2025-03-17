import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductService } from './product.service';
import { ConfigModule } from '@nestjs/config';
import { ProductController } from './product.controller';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, ProductController],
  providers: [AppService, ProductService],
})
export class AppModule {}

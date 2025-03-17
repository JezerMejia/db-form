import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { ProductService } from './product.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly productService: ProductService,
  ) {}

  @Get()
  @Render('index')
  async root() {
    const products = await this.productService.getProducts();
    return { products };
  }
}

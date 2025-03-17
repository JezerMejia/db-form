import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ProductService } from './product.service';
import NewProduct from './types/NewProduct';

@Controller('/products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async getProducts(): Promise<string> {
    const products = await this.productService.getProducts();
    return JSON.stringify(products);
  }

  @Post()
  async addProduct(@Body() newProduct: NewProduct): Promise<string> {
    const result = await this.productService.addProduct(newProduct);
    return 'Rows affected: ' + result;
  }

  @Patch(':id')
  async updateProduct(
    @Param('id') id: number,
    @Body() newProduct: NewProduct,
  ): Promise<string> {
    const exists = await this.productService.existsProduct(id);

    if (!exists) {
      throw new NotFoundException('Product does not exist');
    }

    const result = await this.productService.addProduct(newProduct);
    return 'Rows affected: ' + result;
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: number): Promise<string> {
    const result = await this.productService.deleteProduct(id);
    return 'Rows affected: ' + result;
  }
}

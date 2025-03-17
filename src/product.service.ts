import { Injectable } from '@nestjs/common';
import { createPoolConnection } from './core/database';
import Product from './types/Product';
import NewProduct from './types/NewProduct';

@Injectable()
export class ProductService {
  async getProducts(): Promise<Product[]> {
    const pool = await createPoolConnection();
    if (!pool) {
      return [];
    }
    const result = await pool.request().query<Product>('SELECT * FROM Product');

    void pool.close();
    return result.recordsets[0];
  }

  async existsProduct(id: number) {
    const pool = await createPoolConnection();
    if (!pool) {
      return -1;
    }

    const result = await pool
      .request()
      .input('id', id)
      .query<Product>('SELECT id FROM Product WHERE id = @id');

    void pool.close();

    return result.rowsAffected[0] == 1;
  }

  async addProduct(newProduct: NewProduct) {
    const pool = await createPoolConnection();
    if (!pool) {
      return -1;
    }
    const result = await pool
      .request()
      .input('name', newProduct.name)
      .input('description', newProduct.description)
      .input('price', newProduct.price)
      .query<Product>(
        'INSERT INTO Product (name, description, price) VALUES(@name, @description, @price)',
      );

    void pool.close();
    return result.rowsAffected[0];
  }

  async updateProduct(id: number, newProduct: NewProduct) {
    const pool = await createPoolConnection();
    if (!pool) {
      return -1;
    }
    const result = await pool
      .request()
      .input('id', id)
      .input('name', newProduct.name)
      .input('description', newProduct.description)
      .input('price', newProduct.price)
      .query<Product>(
        'UPDATE Product SET name = @name, description = @description, price = @price WHERE id = @id',
      );

    void pool.close();
    return result.rowsAffected[0];
  }

  async deleteProduct(id: number) {
    const pool = await createPoolConnection();
    if (!pool) {
      return -1;
    }
    const result = await pool
      .request()
      .input('id', id)
      .query<Product>('DELETE FROM Product WHERE id = @id');

    void pool.close();
    return result.rowsAffected[0];
  }
}

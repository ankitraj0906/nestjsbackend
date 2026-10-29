import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  private products = [
    { id: 1, name: 'Tablet', price: 10000 },
    { id: 2, name: 'Mobile', price: 15000 },
    { id: 3, name: 'Laptop', price: 20000 },
  ];
  getAllProducts() {
    return this.products;
  }
  getProductById(id: number) {
    return this.products.find((product) => product.id === id);
  }
}

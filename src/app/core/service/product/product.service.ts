import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/app/Product';
import { LoggerService } from '../log/logger.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private loggerService: LoggerService) {
    this.loggerService.log("Product Service Constructed");
  }

  public getProducts() {
    this.loggerService.log("getProducts called");
    let products: Product[];

    products = [
      new Product(1, 'Memory Card', 500),
      new Product(1, 'Pen Drive', 750),
      new Product(1, 'Power Bank', 100)
    ];

    return products;
  }

  public getProduct(id:number) {
    let products: Product[] = this.getProducts();
    return products.find(p => p.productID == id);
  }
}

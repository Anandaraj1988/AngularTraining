import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Product';
import { ProductService } from 'src/app/Product.Service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
  providers: [ProductService]
})
export class ProductsListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService:ProductService) { }

  getProducts() {
    this.products = this.productService.getProducts();
  }

  ngOnInit(): void {
  }

}

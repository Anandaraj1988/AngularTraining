import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/service/product/product.service';
import { Product } from 'src/app/Product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
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

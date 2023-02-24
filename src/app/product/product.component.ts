import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from "../core/model/product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  title: string = "welcome 4se "
  listProduct!: Product[]
  test: boolean = true
  priceMax!: number;

  constructor(private productService: ProductService) {

  }
  ngOnInit(): void {
    this.listProduct=this.productService.productList;

  }
  decremente(i: number) {

    this.listProduct[i].quantity--;
  }
  incremente(i: number) {
    this.listProduct[i].like++;
  }
}

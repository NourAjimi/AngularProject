import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from "../core/model/product";
import { MethodePartageService } from '../services/methode-partage.service';

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
  number!: number;

  constructor(private productService: ProductService, private serviceMethodePartage: MethodePartageService) {
  }
  ngOnInit(): void {
    this.listProduct = this.productService.productList;
    this.number = this.serviceMethodePartage.getNumberOf(this.listProduct, 'quantity', 0);
  }
  decremente(i: number) {

    this.listProduct[i].quantity--;
  }
  incremente(i: number) {
    this.listProduct[i].like++;
  }
}

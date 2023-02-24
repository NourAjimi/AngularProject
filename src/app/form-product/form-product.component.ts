import { ProductService } from './../services/product.service';
import { Product } from './../core/model/product';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {
  product!: Product;

  constructor(private productService: ProductService, private route: Router) {
  }

  ngOnInit(): void {
    this.product = new Product();
  }

  ajouter(product: Product) {
    this.productService.addProduct(this.product);
    this.route.navigateByUrl('/products');
  }

}

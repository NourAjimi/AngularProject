import { Product } from './../core/model/product';
import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {

  id!: number;
  product!: Product;

  //AcitivatedRoute is a service 
  constructor(private route: ActivatedRoute, private productService: ProductService) {

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.product = this.productService.productList[this.id - 1];
  }






}

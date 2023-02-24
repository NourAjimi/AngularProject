import { Product } from './../core/model/product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  productList: Product[] = [
    { id: 1, title: "T-shirt1", price: 18, quantity: 0, like: 0 },
    { id: 2, title: "T-shirt2", price: 21, quantity: 10, like: 0 },
    { id: 3, title: "T-shirt3", price: 16, quantity: 8, like: 0 },]

  addProduct(product: Product) {
    this.productList.push(product);
  }


  constructor() { }





}

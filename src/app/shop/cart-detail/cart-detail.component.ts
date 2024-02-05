import { Component, OnInit } from '@angular/core';
import { Cart } from '../../model/cart.model';
import { Product } from '../../model/product.model';

@Component({
  selector: 'cart-detail',
  templateUrl: './cart-detail.component.html',
  
})
export class CartDetailComponent implements OnInit {

  constructor(public cart: Cart) { }

 


  callUpdateQuantity(product: Product, quantity: number) {
    this.cart.updateQuantity(product, quantity);
  }

  ngOnInit() {
    
  }

}

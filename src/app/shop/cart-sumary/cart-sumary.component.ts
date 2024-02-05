import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Cart } from '../../model/cart.model';



@Component({
  selector: 'cart-sumary',
  templateUrl: './cart-sumary.component.html',
  styleUrl: './cart-sumary.component.css'
})
export class CartSumaryComponent implements OnInit {

  constructor(public cart: Cart) { }

  ngOnInit() {
    
  }

}

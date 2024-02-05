import { Component, Input } from '@angular/core';
import { Product } from '../../model/product.model';
import { Router } from '@angular/router';
import { Cart } from '../../model/cart.model';
@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})


export class ProductListComponent {

 @Input() products: Product[] = [];
 selectedProduct: Product | undefined;

 constructor(private cart: Cart, private router: Router) {
   
 }


 addProducToCart(product: Product) {
  this.cart.addItem(product,1);
  this.router.navigateByUrl('/cart');
}

disPlayDetails(product: Product) {
  this.selectedProduct = product;
}

hideDetails(){
  this.selectedProduct = undefined;
}
}

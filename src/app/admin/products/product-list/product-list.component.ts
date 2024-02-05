import { Component } from '@angular/core';

import { Product } from '../../../model/product.model';
import { ProductRepository } from '../../../model/product.repository';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  
  constructor(private productRepository:ProductRepository) { }


  getProducts(): Product[] {
    const products = this.productRepository.getProducts();
    console.log('Products:', products);
    return products;
  }
}  

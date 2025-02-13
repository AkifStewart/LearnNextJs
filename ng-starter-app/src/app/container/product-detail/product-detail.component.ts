import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/Product';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'product-detail',
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
 
 // product : Product;

  @Input() productListComponent: ProductListComponent = undefined ;
  product : Product;
  ngOnInit() {
    this.product = this.productListComponent.selectedProduct;
  }
  
}

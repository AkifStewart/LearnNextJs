import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  //name = "Akif Irfan"
  addToCart: Number = 0;
  product = {
    name: "iPhone 14",
    price: 894,
    color: "Black",
    discount: 9,
    inStock: 10,
    pImage: "./images/iphone.jpg"
  }

  getDiscountedPrice(){
    return this.product.price - (this.product.price * this.product.discount / 100 )
  }

  onTextChanged(event: any){
  //  this.name = event.target.value
  } 
}

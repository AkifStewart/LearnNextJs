import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from "./search/search.component";
import { ProductListComponent } from "./product-list/product-list.component";

@Component({
  selector: 'app-container',
  imports: [CommonModule, SearchComponent, ProductListComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  //name = "Akif Irfan"
  addToCart: number = 0;
  product = {
    name: "iPhone 14",
    price: 894,
    color: "Black",
    discount: 9,
    inStock: 10,
    pImage: "./images/iphone.jpg"
  }

  //list: Array<any> = [1,5,4,5,4,8,4,9,5,5]

  getDiscountedPrice(){
    return this.product.price - (this.product.price * this.product.discount / 100 )
  }

  onTextChanged(event: any){
  //  this.name = event.target.value
  } 
  decrementCartValue(){
    if(this.addToCart > 0)
      this.addToCart --
  }

  incrementCartValue(){
    if(this.addToCart < this.product.inStock)
    this.addToCart ++
  }
}

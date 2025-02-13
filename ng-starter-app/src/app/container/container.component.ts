import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from "./search/search.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";

@Component({
  selector: 'app-container',
  imports: [CommonModule, SearchComponent, ProductListComponent, ProductDetailComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  searchText:string='';

  @ViewChild(ProductListComponent) productListComponent:ProductListComponent;

  setSearchText(sText:string){
    this.searchText = sText;
  }
}

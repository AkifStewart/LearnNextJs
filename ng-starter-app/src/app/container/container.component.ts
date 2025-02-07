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
  searchText:string='';

  setSearchText(sText:string){
    this.searchText = sText;
  }
}

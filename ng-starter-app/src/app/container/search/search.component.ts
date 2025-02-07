import { Component, EventEmitter, Output } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-prod-search',
  imports: [FormsModule, CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchText: string = '';

  //1. Create an event
  @Output()
  searchTextChangedEvent:EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChanged(){
    //2. Emit the event
    this.searchTextChangedEvent.emit(this.searchText);
  }
}

import { Component, Input, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  imports: [FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  @Input()
  all: number = 0;
  @Input()
  inStock: number = 0;
  @Input()
  outOfStock: number = 0;
  @Output()
  selectedRadioButtonChangedEvent: EventEmitter<string>= new EventEmitter<string>();

  selectedRadioButton : string = 'all'

  onSelectedRadioButtonChanged(){
    this.selectedRadioButtonChangedEvent.emit(this.selectedRadioButton);
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'main-menu',
  imports: [CommonModule],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.css'
})
export class MainMenuComponent { 
  mainMenuItems: string[] = ['Home', 'Products', 'About', 'Contact'];
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { TopHeaderComponent } from "./top-header/top-header.component";
import { ContainerComponent } from "./container/container.component"

@Component({
  selector: 'app-root',
  imports: [CommonModule, HeaderComponent, TopHeaderComponent, ContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-starter-app';
}

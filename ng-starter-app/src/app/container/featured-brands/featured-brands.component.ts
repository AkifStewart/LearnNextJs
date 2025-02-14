import { Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'featured-brands',
  imports: [],
  templateUrl: './featured-brands.component.html',
  styleUrl: './featured-brands.component.css'
})
export class FeaturedBrandsComponent {

  @ContentChild('title') titleText: ElementRef;

  showTitleText(){
    console.log(this.titleText);
  }
}

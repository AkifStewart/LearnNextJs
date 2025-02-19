import { Component, ContentChild, ContentChildren, ElementRef, QueryList } from '@angular/core';

@Component({
  selector: 'featured-brands',
  imports: [],
  templateUrl: './featured-brands.component.html',
  styleUrl: './featured-brands.component.css'
})
export class FeaturedBrandsComponent {

  @ContentChild('title') titleText: ElementRef;
  
  @ContentChildren('title') titleTexts: QueryList<ElementRef>;

  showTitleText(){
 //   console.log(this.titleText);

    this.titleTexts.forEach((t) => {console.log(t.nativeElement)})
  }
}

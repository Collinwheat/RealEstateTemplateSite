import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css'],
    standalone: false
})
export class FooterComponent {

  constructor(private viewportScroller: ViewportScroller){
    this.viewportScroller = viewportScroller;
  }

  scrollTo(componentToScrollTo: string) {
    console.log(componentToScrollTo);
    this.viewportScroller.scrollToAnchor(componentToScrollTo);
  }

}

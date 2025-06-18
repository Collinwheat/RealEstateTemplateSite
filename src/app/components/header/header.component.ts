import { ViewportScroller } from '@angular/common';
import { Component, inject } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    standalone: false
})
export class HeaderComponent {

  isModalVisible = false;

  constructor(private viewportScroller: ViewportScroller) {
    this.viewportScroller = viewportScroller
  }

  openNewListing() {
	this.isModalVisible = true;
  }

  hideModal() {
	this.isModalVisible = false;
  }

  scrollTo(componentToScrollTo: string) {
    console.log(componentToScrollTo);
    this.viewportScroller.scrollToAnchor(componentToScrollTo);
  }

}

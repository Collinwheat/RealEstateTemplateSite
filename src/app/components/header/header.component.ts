import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    standalone: false
})
export class HeaderComponent {

  isModalVisible = false;

  constructor(private viewportScroller: ViewportScroller, public auth: AuthService) {
    this.viewportScroller = viewportScroller;
  }

  openNewListing() {
	this.isModalVisible = true;
  }

  hideModal() {
	this.isModalVisible = false;
  }

  scrollTo(componentToScrollTo: string) {
    this.viewportScroller.scrollToAnchor(componentToScrollTo);
  }

}

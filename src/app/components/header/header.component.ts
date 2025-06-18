import { Component, inject } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    standalone: false
})
export class HeaderComponent {

  isModalVisible = false;

  openNewListing() {
	this.isModalVisible = true;
  }

  hideModal() {
	this.isModalVisible = false;
  }

}

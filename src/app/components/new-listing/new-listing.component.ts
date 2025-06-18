import { Component, EventEmitter, Output } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio'

@Component({
  selector: 'app-new-listing',
  standalone: true,
  imports: [MatRadioModule],
  templateUrl: './new-listing.component.html',
  styleUrl: './new-listing.component.css'
})
export class NewListingComponent {

  @Output() close = new EventEmitter<void>();

  closeModal(): void {
	this.close.emit();
  }

}

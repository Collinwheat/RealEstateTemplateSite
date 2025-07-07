import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio'
import { Listing } from 'src/app/models/listing/listing';

@Component({
  selector: 'app-new-listing',
  standalone: true,
  imports: [MatRadioModule],
  templateUrl: './new-listing.component.html',
  styleUrl: './new-listing.component.css'
})
export class NewListingComponent implements OnInit{

  @Output() close = new EventEmitter<void>();
  listing: Listing = new Listing();
  newListingForm: FormGroup | undefined;

  ngOnInit(): void {
      this.newListingForm = new FormGroup({
        address: new FormControl('', Validators.required),
        price: new FormControl('', Validators.required),
        bedrooms: new FormControl('', Validators.required),
        bathrooms: new FormControl('', Validators.required),
        linkToListing: new FormControl('', Validators.required),
        status: new FormControl('', Validators.required),
        listingImage: new FormControl(''),
      })
  }

  closeModal(): void {
	this.close.emit();
  }

  submitNewListing() {

  }

}

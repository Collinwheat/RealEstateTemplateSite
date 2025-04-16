import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { Listing } from 'src/app/models/listing/listing';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CarouselModule, ButtonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  listings: Listing[] = [
    {id: 1, name: "123 fake street", imageSource: "../../assets/listing.jpg", price: 1200000, listingLink: "", status: "active"},
    {id: 1, name: "123 fake street", imageSource: "../../assets/listing.jpg", price: 1200000, listingLink: "", status: "active"},
    {id: 1, name: "123 fake street", imageSource: "../../assets/listing.jpg", price: 1200000, listingLink: "", status: "active"},
    {id: 1, name: "123 fake street", imageSource: "../../assets/listing.jpg", price: 1200000, listingLink: "", status: "active"},
    {id: 1, name: "123 fake street", imageSource: "../../assets/listing.jpg", price: 1200000, listingLink: "", status: "active"},
  ];

  responsiveOptions: any[] | undefined;

  constructor() {}

  ngOnInit() {

    this.responsiveOptions = [
          {
              breakpoint: '1400px',
              numVisible: 2,
              numScroll: 1
          },
          {
              breakpoint: '1199px',
              numVisible: 3,
              numScroll: 1
          },
          {
              breakpoint: '767px',
              numVisible: 2,
              numScroll: 1
          },
          {
              breakpoint: '575px',
              numVisible: 1,
              numScroll: 1
          }
      ]
  }
}

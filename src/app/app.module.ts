import { ButtonModule } from 'primeng/button';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactComponent } from './components/contact/contact.component';
import { CarouselComponent } from "./components/carousel/carousel.component";
import { MatButtonModule } from "@angular/material/button";
import { MatTabsModule } from '@angular/material/tabs';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Material from '@primeng/themes/aura';
import { CarouselModule } from 'primeng/carousel';
import { ProcessComponent } from './components/process/process.component';
import { DisclosuresComponent } from "./components/process/disclosures/disclosures.component";
import { MortgageComponent } from "./components/process/mortgage/mortgage.component";
import { ClosingComponent } from "./components/process/closing/closing.component";
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import { StoryComponent } from "./components/story/story.component";
import { NeighborhoodGuideComponent } from "./components/neighborhood-guide/neighborhood-guide.component";
import { MarketingComponent } from "./components/marketing/marketing.component";
import { NewListingComponent } from "./components/new-listing/new-listing.component";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    ProcessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    BrowserAnimationsModule,
    ButtonModule,
    CarouselModule,
    CarouselComponent,
    MatButtonModule,
    MatTabsModule,
    MortgageComponent,
    ClosingComponent,
    MatListModule,
    DisclosuresComponent,
    MatTableModule,
    StoryComponent,
    NeighborhoodGuideComponent,
    MarketingComponent,
    NewListingComponent
],
  providers: [
    provideAnimationsAsync(),
    providePrimeNG({
      ripple: true,
      theme: {
          preset: Material,
          options: {
              prefix: 'p',
              darkModeSelector: 'system',
              cssLayer: true
          }
      }
  })],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

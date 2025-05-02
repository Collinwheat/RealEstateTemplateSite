import { MatStepperModule } from '@angular/material/stepper';
import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-disclosures',
  standalone: true,
  imports: [MatListModule, MatStepperModule, MatCardModule],
  templateUrl: './disclosures.component.html',
  styleUrl: './disclosures.component.css'
})
export class DisclosuresComponent {

}

import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';

@Component({
  selector: 'app-mortgage',
  standalone: true,
  imports: [MatListModule, MatStepperModule, MatCardModule],
  templateUrl: './mortgage.component.html',
  styleUrl: './mortgage.component.css'
})
export class MortgageComponent {

}

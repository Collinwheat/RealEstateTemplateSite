import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';

@Component({
  selector: 'app-closing',
  standalone: true,
  imports: [MatListModule, MatStepperModule, MatCardModule],
  templateUrl: './closing.component.html',
  styleUrl: './closing.component.css'
})
export class ClosingComponent {

}

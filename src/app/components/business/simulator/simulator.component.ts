import { Component } from '@angular/core';
import {FormsModule,  NgForm } from '@angular/forms';

@Component({
  selector: 'app-simulator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './simulator.component.html',
  styleUrl: './simulator.component.css'
})
export class SimulatorComponent {
  feeAmount : number = 200;
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {FormsModule,  NgForm } from '@angular/forms';

@Component({
  selector: 'app-simulator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './simulator.component.html',
  styleUrl: './simulator.component.css'
})
export class SimulatorComponent {
  feeAmount : number = 170;
  constructor(private router: Router) {}

  goPage(opt: number) {
    console.log(opt);
    this.router.navigate(['/list']);

  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SimulatorComponent } from "../simulator/simulator.component";

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [SimulatorComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  isServerRunning = true;
    constructor(private router: Router) {}
  
  goPage() {
    this.router.navigate(['/home']);
  }
}

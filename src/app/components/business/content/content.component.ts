import { Component } from '@angular/core';
import { SimulatorComponent } from "../simulator/simulator.component";

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [SimulatorComponent,],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

}

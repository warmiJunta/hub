import { Component } from '@angular/core';
import { ExplorerComponent } from "../explorer/explorer.component";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ExplorerComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

}

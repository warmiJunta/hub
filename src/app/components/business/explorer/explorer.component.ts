import { Component } from '@angular/core';
import { JuntaService } from '../../../services/junta/junta.service';

@Component({
  selector: 'app-explorer',
  standalone: true,
  imports: [],
  templateUrl: './explorer.component.html',
  styleUrl: './explorer.component.css'
})
export class ExplorerComponent {
  // juntas = [
  //   { id: 1, montoTotal: 600, aporte: 100, frecuencia: "Mensual", duracion: "6 meses", miembros: "04 / 06", reputacion: 4.8, acceso: "Libre" },
  //   { id: 2, montoTotal: 800, aporte: 100, frecuencia: "Mensual", duracion: "6 meses", miembros: "04 / 06", reputacion: 4.8, acceso: "Libre" },
  //   { id: 3, montoTotal: 600, aporte: 100, frecuencia: "Mensual", duracion: "6 meses", miembros: "04 / 06", reputacion: 4.8, acceso: "Libre" }
  // ];
  juntas: any = [];

  constructor(private juntaService: JuntaService) { }

  ngOnInit(): void {
    this.getDataFromService(); 
  }

  private getDataFromService():void{
    this.juntaService.getJuntas()
    .subscribe((data) => {
      console.log(data);
      console.log('servicio junta');
      if (data?.length){
        console.log(data);
        console.log('hay data');
        this.juntas = data;  
      } else {
        console.log('NO hay data');

        this.juntas = [];
      }
    });
  } 
}

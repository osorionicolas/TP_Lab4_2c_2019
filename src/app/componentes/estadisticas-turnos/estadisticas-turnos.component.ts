import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/servicios/DataApi.service';

@Component({
  selector: 'app-estadisticas-turnos',
  templateUrl: './estadisticas-turnos.component.html',
  styleUrls: ['./estadisticas-turnos.component.scss']
})
export class EstadisticasTurnosComponent implements OnInit {

  data:any;
  mejoresComentarios: Array<string> = new Array<string>();
  peoresComentarios: Array<string> = new Array<string>();
  porCliente: any;
  porRecepcionista: any;
  constructor(private dataApi: DataApiService) { }

  ngOnInit() {
    this.dataApi.TraerTodos('turnos').subscribe(turnos => {
      this.data = turnos;
      this.mejoresComentarios = this.data.filter(turno => {
        if(turno.Encuesta != null){
          return turno.Encuesta.PuntuacionClinica >= 5;
        }
      })

      this.peoresComentarios = this.data.filter(turno => {
        if(turno.Encuesta != null){
          return turno.Encuesta.PuntuacionClinica <= 4;
        }
      })

      this.porCliente = this.data.filter(turno => {
        return turno.CreadoPorCliente == true;
      })

      this.porRecepcionista = this.data.filter(turno => {
        return turno.CreadoPorCliente == false;
      })
    });
  }

}

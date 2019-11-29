import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/servicios/DataApi.service';

@Component({
  selector: 'app-estadisticas-empleados',
  templateUrl: './estadisticas-empleados.component.html',
  styleUrls: ['./estadisticas-empleados.component.scss']
})
export class EstadisticasEmpleadosComponent implements OnInit {

  constructor(private dataApi: DataApiService ) { }
  data: any;

  ngOnInit() {
    this.dataApi.TraerTodos('logs').subscribe(logs => {
      this.data = logs;
    });
  }

}

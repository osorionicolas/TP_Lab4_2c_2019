import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/servicios/DataApi.service';
import { TurnoInterface, EstadoTurno } from 'src/app/clases/Turno';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { UsuarioService } from 'src/app/servicios/Usuario.service';
import { map, take } from 'rxjs/operators';
import { Perfil } from 'src/app/clases/Usuario';
import { EncuestaInterface } from 'src/app/clases/Encuesta';
import { NotificationsService } from 'angular2-notifications';
import { EstadoConsultorio } from 'src/app/clases/Sala';

@Component({
  selector: 'app-turno-lista',
  templateUrl: './turno-lista.component.html',
  styleUrls: ['./turno-lista.component.scss']
})
export class TurnoListaComponent implements OnInit {

  private columsCliente: string[] = ['NombreEspecialista', 'Especialidad', 'Fecha', 'Estado', 'Encuesta', 'Consultorio'];
  private columsRecepcionista: string[] = ['NombreEspecialista', 'Especialidad', 'NombreCliente', 'Fecha', 'Estado', 'Consultorio', 'CancelarTurno'];
  private columsEspecialista: string[] = ['NombreCliente', 'Fecha', 'Estado', 'Consultorio', 'FinalizarTurno'];

  private perfil;
  private turnos: TurnoInterface[];
  private dataSource = new MatTableDataSource(this.turnos);
  private noData = this.dataSource.connect().pipe(map((data: any[]) => data.length === 0));

  constructor(private dataApi: DataApiService, private usuarioService: UsuarioService, private dialog: MatDialog, private ns: NotificationsService) {
    this.perfil = this.usuarioService.usuario.Perfil;
  }

  ngOnInit() {
    this.dataApi.TraerTodos('turnos')
      .subscribe(turnos => {
        if (this.perfil == Perfil.Cliente)
          this.turnos = turnos.filter(x => x.UidCliente == this.usuarioService.usuario.Uid);
        else if (this.perfil == Perfil.Recepcionista) {
          this.turnos = turnos;
        }
        else if (this.perfil == Perfil.Especialista)
          this.turnos = turnos.filter(x => x.UidEspecialista == this.usuarioService.usuario.Uid);;

        this.dataSource = new MatTableDataSource(this.turnos);
        this.noData = this.dataSource.connect().pipe(map((data: any[]) => data.length === 0));
      });
  }

  cancelarTurno(turno) {
    turno.Estado = EstadoTurno.Cancelado;
    this.dataApi.ModificarUno(turno, 'turnos');
  }

  realizarEncuesta(turno) {
    alert("Observaciones del especialista: " + turno.ObservacionesEspecialista);
    var encuesta: EncuestaInterface = {
      NombreCliente: turno.NombreCliente,
      NombreEspecialista: turno.NombreEspecialista,
      UidCliente: turno.UidCliente,
      UidEspecialista: turno.UidEspecialista,
      PuntuacionClinica: 0,
      PuntuacionEspecialista: 0,
      Opinion: ""
    }

    var puntuacionClinica = prompt("Puntuación para la clinica. Ingrese un valor de 0 a 10");
    if(isNaN(+puntuacionClinica) || puntuacionClinica == null){
      this.ns.error("Dato ingresado no es un número");
      return;
    }
    else if(+puntuacionClinica < 0 || +puntuacionClinica > 10){
      this.ns.error("Dato ingresado fuera de los límites establecidos");
      return;
    }
    else{
      encuesta.PuntuacionClinica = +puntuacionClinica;
    }

    var puntuacionEspecialista = prompt("Puntuación para el especialista. Ingrese un valor de 0 a 10");
    if(isNaN(+puntuacionEspecialista) || puntuacionEspecialista == null){
      this.ns.error("Dato ingresado no es un número");
      return;
    }
    else if(+puntuacionEspecialista < 0 || +puntuacionEspecialista > 10){
      this.ns.error("Dato ingresado fuera de los límites establecidos");
      return;
    }
    else{
      encuesta.PuntuacionEspecialista = +puntuacionEspecialista;
    }

    var opinion = prompt("Opiniones o sugerencias");
    encuesta.Opinion = opinion;

    turno.Encuesta = encuesta;
    this.dataApi.ModificarUno(turno, 'turnos');
  }

  finalizarTurno(turno) {

    this.dataApi.TraerUno(turno.ConsultorioId, 'consultorios').pipe(take(1)).subscribe(consultorio => {
      consultorio.Estado = EstadoConsultorio.Libre;
      this.dataApi.ModificarUno(consultorio, "consultorios");
    });

    var reseña = prompt("Ingrese la reseña para el cliente");

    turno.ObservacionesEspecialista = reseña;
    turno.Estado = EstadoTurno.Finalizado;
    this.dataApi.ModificarUno(turno, 'turnos');
    this.ns.success("Se envió la reseña exitosamente");

  }
}

import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/Usuario.service';
import { DataApiService } from 'src/app/servicios/DataApi.service';
import { take } from 'rxjs/operators';
import { Perfil } from 'src/app/clases/Usuario';
import { HttpClient } from '@angular/common/http';
import { NotificationsService } from 'angular2-notifications';
import { faSignOutAlt, faChartBar, faUsersCog } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss']
})
export class CabeceraComponent implements OnInit {

  faUsersCog = faUsersCog;
  faChartBar = faChartBar;
  faSignOutAlt = faSignOutAlt;
  public estaLogeado: boolean;
  administrador = false;
  recepcionista = false;
  cliente = false;
  especialista = false;

  imagenUrl = '';
  nombre = '';
  perfil: Perfil;

  constructor(
    private usuarioService: UsuarioService,
    private dataApi: DataApiService
  ) { }

  ngOnInit() {
    this.TraerUsuarioActual();
  }

  TraerUsuarioActual() {
    this.usuarioService.EstaLogeado().subscribe(user => {
      if (user) {
        this.dataApi.TraerUno(user.uid, 'usuarios').pipe(take(1)).subscribe(userx => {

          if (userx) {
            if (userx.Activo) {
              this.usuarioService.usuario = userx;

              this.imagenUrl = userx.ImagenUrl;
              this.nombre = userx.Nombre;
              this.perfil = userx.Perfil;
              this.estaLogeado = true;
            }
            else {
              this.imagenUrl = "";
              this.nombre = "";
              this.estaLogeado = false;
              this.perfil = null;
            }
          }

        });
      }
      else {
        this.imagenUrl = "";
        this.nombre = "";
        this.estaLogeado = false;
        this.perfil = null;
      }
    });
  }

  Desloguearse() {
    this.imagenUrl = "";
    this.nombre = "";
    this.usuarioService.DesloguearUsuario();
    this.perfil = null;
  }
}

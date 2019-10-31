import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { Error404Component } from './componentes/error404/error404.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { AuthGuardService } from './servicios/AuthGuard.service';
import { ListaUsuariosComponent } from './componentes/lista-usuarios/lista-usuarios.component';
import { TurnoComponent } from './componentes/turno/turno.component';
import { ListaSalasComponent } from './componentes/lista-salas/lista-salas.component';
import { EstadisticasComponent } from './componentes/estadisticas/estadisticas.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'loguearse', component: LoginComponent, canActivate: [AuthGuardService] },
  { path: 'registrarse', component: RegistroComponent, canActivate: [AuthGuardService] },
  { path: 'saladeespera', component: ListaSalasComponent, canActivate: [AuthGuardService] },
  { path: 'turnos', component: TurnoComponent, canActivate: [AuthGuardService] },
  {
    path: 'estadisticas',
    component: EstadisticasComponent,
    canActivate: [AuthGuardService],
    children:
      [
        { path: 'empleados', component: InicioComponent },
        { path: 'turnos', component: InicioComponent },
        { path: 'especialidades', component: InicioComponent }
      ]
  },
  { path: 'administracion', component: ListaUsuariosComponent, canActivate: [AuthGuardService] },
  { path: '404', component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
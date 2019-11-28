import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';

import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppComponent } from './app.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { LoginComponent } from './componentes/login/login.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { Error404Component } from './componentes/error404/error404.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuardService } from './servicios/AuthGuard.service';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { ListaUsuariosComponent } from './componentes/lista-usuarios/lista-usuarios.component';
import { TurnoComponent } from './componentes/turno/turno.component';

import { RecaptchaModule } from 'ng-recaptcha';
import { ListaSalasComponent } from './componentes/lista-salas/lista-salas.component';
import { EstadisticasComponent } from './componentes/estadisticas/estadisticas.component';
import { HttpClientModule } from '@angular/common/http';
import { BotonSeleccionadoDirective } from './directivas/boton-seleccionado.directiva';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EstadisticasEspecialidadesComponent } from './componentes/estadisticas-especialidades/estadisticas-especialidades.component';
import { EstadisticasEmpleadosComponent } from './componentes/estadisticas-empleados/estadisticas-empleados.component';
import { EstadisticasTurnosComponent } from './componentes/estadisticas-turnos/estadisticas-turnos.component';
import { TurnoCreacionComponent } from './componentes/turno-creacion/turno-creacion.component';
import { TurnoListaComponent } from './componentes/turno-lista/turno-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    CabeceraComponent,
    LoginComponent,
    InicioComponent,
    Error404Component,
    RegistroComponent,
    ListaUsuariosComponent,
    TurnoComponent,
    ListaSalasComponent,
    EstadisticasComponent,
    BotonSeleccionadoDirective,
    EstadisticasEspecialidadesComponent,
    EstadisticasEmpleadosComponent,
    EstadisticasTurnosComponent,
    TurnoCreacionComponent,
    TurnoListaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    MaterialModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    SimpleNotificationsModule.forRoot({
      position: ['top', 'right'],
      timeOut: 4000,
      showProgressBar: true,
      pauseOnHover: true,
      clickToClose: true
    }),
    RecaptchaModule,
    HttpClientModule
  ],
  exports: [
    MaterialModule,
    SimpleNotificationsModule
  ],
  entryComponents: [
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }

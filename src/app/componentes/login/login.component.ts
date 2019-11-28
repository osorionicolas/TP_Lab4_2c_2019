import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/servicios/Usuario.service';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  emailModel: string;
  passwordModel: string;

  constructor(private usuarioService: UsuarioService, private router: Router, private ns: NotificationsService) {
    this.emailModel = "";
    this.passwordModel = "";
  }

  ngOnInit() { }

  loguearse() {
    this.usuarioService.loguearUsuario(this.emailModel, this.passwordModel);
  }

  testAdmin() {
    this.emailModel = "nosorio@nosorio.com";
    this.passwordModel = "nosorio";
  }

  testRecepcionista() {
    this.emailModel = "recepcionista@gmail.com";
    this.passwordModel = "123456";
  }

  testCliente() {
    this.emailModel = "cliente@gmail.com";
    this.passwordModel = "cliente";
  }

  testEspecialista() {
    this.emailModel = "especialista@gmail.com";
    this.passwordModel = "123456";
  }

}

import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/servicios/DataApi.service';
import { UsuarioInterface } from 'src/app/clases/Usuario';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.scss']
})
export class ListaUsuariosComponent implements OnInit {

  displayedColumns: string[] = ['Imágen', 'Nombre', 'Email', 'Perfil', 'Activo'];
  private usuarios: UsuarioInterface[];
  dataSource;

  constructor(private dataApi: DataApiService) { }

  ngOnInit() {
    this.dataApi.TraerTodos('usuarios')
      .subscribe(users => {
        this.usuarios = users;
        this.dataSource = new MatTableDataSource(this.usuarios);
      });
  }

  activarDesactivar(uid: string) {

    let usuario = this.usuarios.filter(x => x.Uid == uid)[0];

    if (usuario) {
      usuario.Activo = usuario.Activo ? false : true;

      this.dataApi.ModificarUno(usuario, 'usuarios');
      this.usuarios.find(x => x.Uid == uid).Activo = usuario.Activo;
    }
  }

}

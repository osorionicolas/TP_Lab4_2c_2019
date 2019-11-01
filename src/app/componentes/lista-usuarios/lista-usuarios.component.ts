import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/servicios/DataApi.service';
import { UsuarioInterface } from 'src/app/clases/Usuario';
import { MatTableDataSource } from '@angular/material';
import * as json2csv  from 'json2csv';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.scss']
})
export class ListaUsuariosComponent implements OnInit {

  displayedColumns: string[] = ['Imágen', 'Nombre', 'Email', 'Perfil', 'Activo'];
  private usuarios: UsuarioInterface[];
  dataSource;
  public csvFileName = 'Usuarios.csv';

  constructor(
    private dataApi: DataApiService,
  ) { }

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

  exportar(){
    return this.generateCSVDownloadLink({
      data: this.usuarios,
      columns: [
        'Nombre',
        'Email',
        'Perfil',
        'Activo'
      ],
    });
  }

  public generateCSVDownloadLink(options: { data: any[], columns: string[] }) {
    const fields = options.columns;
    const csv = json2csv.parse(options.data, { fields });
    var blob = new Blob([csv], {type: 'text/csv' });
    saveAs(blob, this.csvFileName);
  }
}

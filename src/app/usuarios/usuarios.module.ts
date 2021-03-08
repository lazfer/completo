import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosComponent } from './usuarios.component';
import { UsuarioListadoComponent } from './usuario-listado/usuario-listado.component';
import { UsuarioDetalleComponent } from './usuario-detalle/usuario-detalle.component';


@NgModule({
  declarations: [UsuariosComponent, 
    UsuarioListadoComponent, 
    UsuarioDetalleComponent],
  imports: [
    CommonModule,
    UsuariosRoutingModule
  ]
})
export class UsuariosModule { }

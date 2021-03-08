import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioDetalleComponent } from './usuario-detalle/usuario-detalle.component';
import { UsuarioListadoComponent } from './usuario-listado/usuario-listado.component';
import { UsuariosComponent } from './usuarios.component';

const routes: Routes = [
  {path: 'usuarios', component: UsuariosComponent, 
children: [
  {path: '', component: UsuarioListadoComponent},
  {path: ':id', component: UsuarioDetalleComponent}]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }

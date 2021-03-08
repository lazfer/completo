import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddContactoComponent } from './add-contacto/add-contacto.component';
import { AgendaComponent } from './agenda.component';
import { ListaContactoComponent } from './lista-contacto/lista-contacto.component';

const routes: Routes = [
  {path: 'agenda', component: AgendaComponent,
    children: [
      {path: '', component: ListaContactoComponent},
      {path: 'add-contacto', component: AddContactoComponent},
      {path: 'lista-contacto', component: ListaContactoComponent},
      {path: '**', pathMatch:'full', redirectTo: 'lista-contacto'}

    ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgendaRoutingModule { }

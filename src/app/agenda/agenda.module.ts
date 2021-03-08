import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgendaRoutingModule } from './agenda-routing.module';
import { AgendaComponent } from './agenda.component';
import { AddContactoComponent } from './add-contacto/add-contacto.component';
import { ListaContactoComponent } from './lista-contacto/lista-contacto.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AgendaComponent, 
    AddContactoComponent, 
    ListaContactoComponent],
  imports: [
    CommonModule,
    AgendaRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class AgendaModule { }

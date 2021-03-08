import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularfireRoutingModule } from './angularfire-routing.module';
import { InicioComponent } from './pages/inicio/inicio.component';
import { GotyComponent } from './pages/goty/goty.component';
import { ComponentesafireModule } from './componentesafire/componentesafire.module';


@NgModule({
  declarations: [InicioComponent, 
    GotyComponent],
  imports: [
    CommonModule,
    ComponentesafireModule,
    AngularfireRoutingModule,
  ]
})
export class AngularfireModule { }

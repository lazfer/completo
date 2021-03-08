import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViajeRoutingModule } from './viaje-routing.module';
import { ListContriesComponent } from './list-contries/list-contries.component';


@NgModule({
  declarations: [ListContriesComponent],
  imports: [
    CommonModule,
    ViajeRoutingModule
  ]
})
export class ViajeModule { }

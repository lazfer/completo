import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViajeRoutingModule } from './viaje-routing.module';
import { ListContriesComponent } from './list-contries/list-contries.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  declarations: [ListContriesComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ViajeRoutingModule,
    MatSelectModule,
    FormsModule,
    BrowserAnimationsModule,
    DragDropModule,
    GoogleMapsModule
    
  ]
})
export class ViajeModule { }

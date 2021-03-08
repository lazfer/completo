import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraficaBarraHorComponent } from './grafica-barra-hor/grafica-barra-hor.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [GraficaBarraHorComponent],
  exports: [GraficaBarraHorComponent],
  imports: [
    CommonModule,
    NgxChartsModule,
    BrowserAnimationsModule 
  ]
})
export class ComponentesafireModule { }

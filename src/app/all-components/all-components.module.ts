import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllComponentsRoutingModule } from './all-components-routing.module';
import { PipeComponent } from './pipe/pipe.component';
import { PromesasComponent } from './promesas/promesas.component';
import { ObservablesComponent } from './observables/observables.component';


@NgModule({
  declarations: [PipeComponent, PromesasComponent, ObservablesComponent],
  imports: [
    CommonModule,
    AllComponentsRoutingModule
  ]
})
export class AllComponentsModule { }

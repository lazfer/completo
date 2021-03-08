import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllComponentsComponent } from './all-components.component';
import { ObservablesComponent } from './observables/observables.component';
import { PipeComponent } from './pipe/pipe.component';
import { PromesasComponent } from './promesas/promesas.component';

const routes: Routes = [
  { path: 'componentes', component: AllComponentsComponent, children: 
  [{ path: 'pipe', component: PipeComponent },
  { path: 'promesas', component: PromesasComponent},
  {path: 'observables', component: ObservablesComponent},
   { path: '**', pathMatch: 'full', redirectTo: 'componentes'}
  ]}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllComponentsRoutingModule { }

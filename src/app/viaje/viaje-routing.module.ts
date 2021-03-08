import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListContriesComponent } from './list-contries/list-contries.component';
import { ViajeComponent } from './viaje.component';

const routes: Routes = [
  { path: 'viaje', component: ViajeComponent, children:
[ {path: '', component: ListContriesComponent },
  {path: 'list-contries', component: ListContriesComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'list-contries' }] },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViajeRoutingModule { }

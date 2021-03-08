import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { TaksAllComponent } from './taks-all.component';

const routes: Routes = [
 {path: 'listaTarea', component: TaksAllComponent , children:[
   {path: '', component: ListComponent},
   {path:'list', component: ListComponent},
   { path: '**', pathMatch: 'full', redirectTo: 'list'}
 ]} 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaksAllRoutingModule { }

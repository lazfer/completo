import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularfireComponent } from './angularfire.component';
import { GotyComponent } from './pages/goty/goty.component';
import { InicioComponent } from './pages/inicio/inicio.component';

const routes: Routes = [
  {path: 'angularfire', component: AngularfireComponent, children: [
  {path: '', component: InicioComponent},
  {path: 'inicioafire', component: InicioComponent},
  {path: 'goty', component: GotyComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'inicioafire'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularfireRoutingModule { }

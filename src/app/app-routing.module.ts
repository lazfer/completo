import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanicoComponent } from './panico/panico.component';
import { PipeComponent } from './all-components/pipe/pipe.component';

const routes: Routes = [
  {path: 'panico', component: PanicoComponent, outlet: 'popup'},
  {path: '', redirectTo: '/usuarios', pathMatch: 'full'},
  {path: '**', redirectTo: '/usuarios', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

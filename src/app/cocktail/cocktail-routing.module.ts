import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CocktailComponent } from './cocktail.component';
import { DetalleCocktailComponent } from './detalle-cocktail/detalle-cocktail.component';
import { ListCocktailComponent } from './list-cocktail/list-cocktail.component';

const routes: Routes = [
{path: 'cocktail', component: CocktailComponent, children:
[{ path: '', component: ListCocktailComponent},
{ path: 'list-cocktail', component: ListCocktailComponent},
{ path: 'detail-cocktail/:id', component: DetalleCocktailComponent},
{ path: '**', pathMatch: 'full', redirectTo: 'list-cocktail'}] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CocktailRoutingModule { }

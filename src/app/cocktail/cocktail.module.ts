import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CocktailRoutingModule } from './cocktail-routing.module';
import { ListCocktailComponent } from './list-cocktail/list-cocktail.component';
import { DetalleCocktailComponent } from './detalle-cocktail/detalle-cocktail.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [ListCocktailComponent, DetalleCocktailComponent],
  imports: [
    CommonModule,
    CocktailRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ]
})
export class CocktailModule { }

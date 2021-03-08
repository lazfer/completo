import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaksAllRoutingModule } from './taks-all-routing.module';
import { TaksAllComponent } from './taks-all.component';
import { ListComponent } from './list/list.component';
import { ViewTaksComponent } from './view-taks/view-taks.component';


@NgModule({
  declarations: [TaksAllComponent ,
  ListComponent,
  ViewTaksComponent],
  imports: [
    CommonModule,
    TaksAllRoutingModule
  ]
})
export class TaksAllModule { }

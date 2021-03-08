import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { WebAPIService } from './services/web-api.service';
import { PipeTextoPipe } from './all-components/pipe/pipe-texto.pipe';
import { UsuariosModule } from './usuarios/usuarios.module';
import { PostModule } from './usuarios/post/post.module';
import { PanicoComponent } from './panico/panico.component';
import { TaksAllModule } from './taks-all/taks-all.module';
import { AgendaModule } from './agenda/agenda.module';
import { CocktailComponent } from './cocktail/cocktail.component';
import { CocktailModule } from './cocktail/cocktail.module';
import { AngularfireComponent } from './angularfire/angularfire.component';
import { AngularfireModule } from './angularfire/angularfire.module';
import { AllComponentsComponent } from './all-components/all-components.component';
import { AllComponentsModule } from './all-components/all-components.module';
import { ViajeComponent } from './viaje/viaje.component';
import { ViajeModule } from './viaje/viaje.module';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PipeTextoPipe,
    PanicoComponent,
    CocktailComponent,
    AngularfireComponent,
    AllComponentsComponent,
    ViajeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    UsuariosModule,
    PostModule,
    TaksAllModule,
    AgendaModule,
    CocktailModule,
    AngularfireModule,
    AllComponentsModule,
    ViajeModule,
    AppRoutingModule
   
  ],
  providers: [WebAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }

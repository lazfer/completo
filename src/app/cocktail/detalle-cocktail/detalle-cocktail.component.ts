import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cocktail } from 'src/app/models/cocktail';
import { CocktailService } from 'src/app/services/cocktail.service';

@Component({
  selector: 'app-detalle-cocktail',
  templateUrl: './detalle-cocktail.component.html',
  styleUrls: ['./detalle-cocktail.component.css']
})
export class DetalleCocktailComponent implements OnInit {

  public cocktail: any;
  public loader: boolean;

  constructor(private _cocktailService : CocktailService,
    private route: ActivatedRoute) { 
      this.cocktail = {};
      this.loader = false;
    }
 
  ngOnInit(): void {
this.route.params.subscribe(
  params => {
   let id = params.id
    this._cocktailService.getCocktailById(id).subscribe(
      resp => {
        this.cocktail = resp;
        this.loader = true;
      }  
    )
  }
);
    
  }



}

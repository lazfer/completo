import { Component, OnInit } from '@angular/core';
import { IFilter } from 'src/app/interfaces/ifilter';
import { Cocktail } from 'src/app/models/cocktail';
import { CocktailService } from 'src/app/services/cocktail.service';

@Component({
  selector: 'app-list-cocktail',
  templateUrl: './list-cocktail.component.html',
  styleUrls: ['./list-cocktail.component.css']
})
export class ListCocktailComponent implements OnInit {
  public showFilter: boolean;
  public filter: IFilter;
  public listCocktail:Cocktail[];
  public loader:boolean;
  public items:number;
  public page:number;
  public showMessage: boolean;
  constructor(private _cocktailService: CocktailService ) { 
    this.showFilter = false;
    this.filter = {
      searchBy: 'name',
      value: ''
    }
    this.listCocktail = [];
    this.loader = false;
    this.items = 6;
    this.page = 1;
    this.showMessage = false;
  }
 

  ngOnInit(): void {
  }

  hideShowFilter(){
    this.showFilter = !this.showFilter;
  }
  filterData(){
    this.loader = true;
this._cocktailService.getCocktailFilter(this.filter).subscribe(
resp => {
  if(resp.length === 0){
    this.loader = false;
    this.showMessage = true;
  } else {
    this.loader = false;
    this.listCocktail = resp;
  }
  
}

)
  }

}

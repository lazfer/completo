import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICocktail } from '../interfaces/icocktail';
import { IFilter } from '../interfaces/ifilter';
import { Observable } from 'rxjs';
import {get, forEach} from 'lodash-es';
import { Cocktail } from '../models/cocktail';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor(private http: HttpClient) { }

  getCocktailFilter(filter: IFilter):Observable<any>{
    const urlBase = 'https://www.thecocktaildb.com/api/json/v1/1/';
    let additionalUrl = '';

    if(filter.searchBy === 'name'){
      additionalUrl = 'search.php?s=';
    } else if (filter.searchBy === 'glass') {
      additionalUrl = 'filter.php?g=';
    } else if (filter.searchBy === 'category') {
      additionalUrl = 'filter.php?c=';
    } else {
      additionalUrl = 'filter.php?i=';
    }

    const url = urlBase + additionalUrl + filter.value;
    return this.http.get<any>(url).pipe(
      map ( data => this.parseData(get(data, 'drinks')))
      )
  }

  getCocktailById(id:number){
    return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + id).
    pipe( map ( data => {
       const list = this.parseData(get(data,'drinks'));
       return list[0];
    }))

  }
  private parseData(listCocktail: Cocktail) {
     let newList: object[] = [];
forEach(listCocktail, elem => {
let cocktail = new Cocktail(elem);
newList.push(cocktail);
});
return newList;
}


}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ICountry } from '../interfaces/icountry';
import { IRegion } from '../interfaces/iregion';
import { Country } from '../models/country';
import { Region } from '../models/region';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

private urlBase: string;
  constructor(private http: HttpClient) {
    this.urlBase = 'https://restcountries.eu/rest/v2/regionalbloc/';
   }

  getContries(region:string):Observable<ICountry[]>{
    return this.http.get<ICountry[]>(`${this.urlBase}${region}`).
    pipe( 
      map((data => data.map(country => new Country(country))))
    )
  }

  getRegion():Observable<IRegion[]>{
    return this.http.get<IRegion[]>('./assets/data/region.json').pipe(
     map( data => data.map( region => new Region(region)))
    )
  }
}

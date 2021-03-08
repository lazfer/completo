import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

private urlBase: string;
  constructor(private http: HttpClient) {
    this.urlBase = 'https://restcountries.eu/rest/v2/regionalbloc/';
   }

  getContries(region:string):Observable<any>{
    return this.http.get(`${this.urlBase}${region}`);
  }
}

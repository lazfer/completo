import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {

  public _getUser: Subscription;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {

this._getUser = this.getUser().subscribe(
  res => console.log(res))

  }

  // Take Extrae n veces de las llamadas
  // Filter filtra la respuesta con una condicion
  // Map mapea la data; 
  getUser(): Observable<number>{
   return interval(1000).
     pipe(
       take(20),
       filter( res => res %2 === 0),
       map( res => res + 1)
     )
  }

  ngOnDestroy(): void {
   this._getUser.unsubscribe();
  }
}

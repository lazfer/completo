import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { Observable } from 'rxjs';
import { filter, map, retry, take } from 'rxjs/operators';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css']
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {


    this.getUsuarios().then(
      resp => console.log(resp)).
      catch( error => console.log(error))
  }

  //Promesa con fetch
  getUsuarios(){
  return new Promise( (resolve, reject) => {
       fetch('https://reqres.in/api/users').
       then( res => res.json()).
       then( data => resolve(data.data)).
       catch( error => reject(error))
  });
  
  }

  



  



}
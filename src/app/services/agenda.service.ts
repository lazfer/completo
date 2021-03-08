import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contacto } from '../interfaces/contacto';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {
private _listadoContactos: Contacto[];
  constructor(private http: HttpClient) { 
    this._listadoContactos = [];
  }

  get listadoContacto(){
    return this._listadoContactos;
  }
  addContacto(contacto: Contacto){
        this._listadoContactos.push(contacto);
  }

  getContacto(url: string){
    return this.http.get<Contacto[]>(url).pipe(map(
     list => {
       this._listadoContactos = list;
       return list;
     }
    ))
  }

}

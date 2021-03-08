import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post } from '../interfaces/post';
import { Usuarios } from '../interfaces/usuarios';

@Injectable({
  providedIn: 'root'
})
export class WebAPIService {

public urlUsuarios = `${environment.apiURL}users`;
public urlPosts = `${environment.apiURL}posts`;

constructor(private http: HttpClient) { }

getUsuarios(): Observable<Usuarios[]>{
  return this.http.get<Usuarios[]>(this.urlUsuarios);
}
getPost(): Observable<Post[]> {
  return this.http.get<Post[]>(this.urlPosts);
}
getUsuarioId(id:any): Observable<Usuarios[]>{
  return this.http.get<Usuarios[]>(`${this.urlUsuarios}/${id}/posts`);
}

}

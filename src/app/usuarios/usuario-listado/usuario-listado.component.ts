import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuarios } from 'src/app/interfaces/usuarios';
import { WebAPIService } from 'src/app/services/web-api.service';

@Component({
  selector: 'app-usuario-listado',
  templateUrl: './usuario-listado.component.html',
  styleUrls: ['./usuario-listado.component.css']
})
export class UsuarioListadoComponent implements OnInit {
  public usuarios: Usuarios[] = [];
  constructor(private router: Router,
    private serUsuario: WebAPIService) { }

  ngOnInit(): void {
    this.serUsuario.getUsuarios().subscribe( (res: Usuarios[]) => {
      this.usuarios = res;
    },
    error => { console.log(error)});
  }

  goPost(id: number){
   this.router.navigate(['/usuarios',id,'post']);
  }


}

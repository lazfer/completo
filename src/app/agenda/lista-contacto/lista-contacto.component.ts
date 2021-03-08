import { Component, OnInit } from '@angular/core';
import { Contacto } from 'src/app/interfaces/contacto';
import { AgendaService } from 'src/app/services/agenda.service';

@Component({
  selector: 'app-lista-contacto',
  templateUrl: './lista-contacto.component.html',
  styleUrls: ['./lista-contacto.component.css']
})
export class ListaContactoComponent implements OnInit {
public listaContacto: Contacto [];
  constructor(private agendaService: AgendaService) { }
   
  ngOnInit(): void {
   this.listaContacto = [];
    if(this.agendaService.listadoContacto.length > 0){
      console.log('aqui');
      this.listaContacto = this.agendaService.listadoContacto;
    } else {
     this.agendaService.getContacto('./assets/data/contactos.json')
     .subscribe( listado => {
       this.listaContacto = listado;
     })
    }
   

  }

}

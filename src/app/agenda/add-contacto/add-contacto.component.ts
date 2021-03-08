import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contacto } from 'src/app/interfaces/contacto';
import { AgendaService } from 'src/app/services/agenda.service';

@Component({
  selector: 'app-add-contacto',
  templateUrl: './add-contacto.component.html',
  styleUrls: ['./add-contacto.component.css']
})
export class AddContactoComponent implements OnInit {
  public contacto: Contacto;
  constructor(private agendaService: AgendaService,
    private route: Router) { }

  ngOnInit(): void {
    this.contacto = {
      nombre: '',
      apellido: '',
      descripcion: '',
      sexo: '',
      email: '',
      telefono: '',
      compania: ''
    }
  }
  addContacto(){
  this.agendaService.addContacto(this.contacto);
  this.route.navigate(['agenda/lista-contacto']);
 }
}

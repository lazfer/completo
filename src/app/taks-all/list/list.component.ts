import { Component, OnInit } from '@angular/core';
import { LiskTaks } from 'src/app/interfaces/lisk-taks';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
public tareasPendientes: LiskTaks[];
public tareasCompletadas: LiskTaks[];
public verInputTarea: boolean;
public errorInputTarea: boolean;
public mostrarCompletadas: boolean;
  constructor() {
    this.tareasPendientes = [];
    this.tareasCompletadas = [];
    this.verInputTarea = false;
    this.errorInputTarea = false;
    this.mostrarCompletadas = true;
   }

  ngOnInit(): void {
  }

  guardarTarea(des: any){
    if(des){
      const tarea: LiskTaks = {
        'fecha': new Date(),
        descripcion: des,
        completado: false
      } 
      this.tareasPendientes.push(tarea);
     this.verInputTarea = false;
     this.errorInputTarea = false;
    } else {
      this.errorInputTarea = true;
    }
  }

  removetaksemit($event:any){
    this.tareasPendientes.splice($event,1);
  }

  addtaksemit($event:any){
    const oldTaks = this.tareasPendientes[$event];
    const newTaks = {
      fecha: new Date(),
      descripcion: oldTaks.descripcion,
      completado: true
    }
    this.tareasCompletadas.push(newTaks);
    this.removetaksemit($event);
    console.log(  this.tareasCompletadas );
   }

cambiarMostrarTarea(){
  this.mostrarCompletadas = ! this.mostrarCompletadas;
}

}

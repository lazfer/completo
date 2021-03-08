import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
  nombres: string[] = [];
  nombre: string = "";
  constructor() { }

  ngOnInit(): void {
  }

  addNombre(){
  this.nombres.push(this.nombre);
  console.log(this.nombres);
  }

  valor(e: any){
  this.nombre = e.target.value;
  }

}

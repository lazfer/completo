import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panico',
  templateUrl: './panico.component.html',
  styleUrls: ['./panico.component.css']
})
export class PanicoComponent implements OnInit {
   public enviado = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  cerrar(){
    this.router.navigate([{outlets: { popup: null }}]);
  }

}

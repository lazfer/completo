import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { LiskTaks } from 'src/app/interfaces/lisk-taks';

@Component({
  selector: 'app-view-taks',
  templateUrl: './view-taks.component.html',
  styleUrls: ['./view-taks.component.css']
})
export class ViewTaksComponent implements OnInit {
  @Input() taksp: LiskTaks;
  @Input() index: number;
  @Output() removetaks: EventEmitter<number>;
  @Output() addtaks: EventEmitter<number>;

  constructor() {
   this.removetaks = new EventEmitter<number>();
   this.addtaks = new EventEmitter<number>();
   }

  ngOnInit(): void {
  }

  checkTaks(id:number){
this.addtaks.emit(id);
  }
  removeTaks(id:number){
   this.removetaks.emit(id);
  }

}

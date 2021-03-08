import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { differenceBy } from 'lodash';
import { forkJoin } from 'rxjs';
import { Country } from 'src/app/models/country';
import { Region } from 'src/app/models/region';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-list-contries',
  templateUrl: './list-contries.component.html',
  styleUrls: ['./list-contries.component.css']
})
export class ListContriesComponent implements OnInit {

  public listCountries:Country[];
  public listRegions:Region[];
  public listCountriesToVisit:Country[];
  public load:boolean;
  public regionSelect: string;
  public zoom: number;
  public markers: any[];

  constructor(private _countryService: CountryService) {
    this.load = false;
    this.listCountries = [];
    this.listRegions = [];
    this.listCountriesToVisit = [];
    this.regionSelect = 'eu';
    this.zoom = 2;
    this.markers = [];

   }

  ngOnInit(): void {
    
    forkJoin(this._countryService.getContries('eu'),
    this._countryService.getRegion()
    ).subscribe(
      res => {
        this.listCountries = res[0];
        console.log(this.listCountries);
        this.listRegions = res[1];
        console.log(this.listRegions);
        this.load = true;
      }, error => {
         this.load = true;
         console.log(`Error: ${error}`);
      }
    )
  }

  filterContries(event:any){
  this.load = false;
  this._countryService.getContries(event.value).subscribe(
  // Utiliza lodash para compara listas y quitar un elemento del otro para 
  // que no esten repetidos 
  res =>  { this.listCountries = differenceBy(res, this.listCountriesToVisit, c => c.name)
  this.load = true;}
 )
  }

  drop(event:CdkDragDrop<Country[]>){
    // Permite mover entre elementos de una misma lista
   if (event.previousContainer === event.container) {
    moveItemInArray(this.listCountries, event.previousIndex, event.currentIndex);
  } else {
    // Pasa el elemento a la otra lista
    transferArrayItem(event.previousContainer.data,
                      event.container.data,
                      event.previousIndex,
                      event.currentIndex);
    if(event.container.id === 'visit'){
      //Agrega marcador
     let cont = event.container.data[event.currentIndex];
     this.markers.push(
       {
         position: {
           lat: cont.latlng[0],
           lng: cont.latlng[1]
         },
         label: {
           color: 'black',
           text: cont.name
         }
       }
     )
    } else {
      // Elimina marcado
      let cont = event.container.data[event.currentIndex];
      let index = this.markers.findIndex(marker => marker.label.text === cont.name);
      this.markers.splice(index,1);
    }                 
  }
  }

}

import { Component, OnDestroy, OnInit,  } from '@angular/core';

@Component({
  selector: 'app-grafica-barra-hor',
  templateUrl: './grafica-barra-hor.component.html',
  styleUrls: ['./grafica-barra-hor.component.css']
})
export class GraficaBarraHorComponent implements OnDestroy{

  results: any[] = [
    {
      "name": "Germany",
      "value": 8940000
    },
    {
      "name": "USA",
      "value": 5000000
    },
    {
      "name": "France",
      "value": 7200000
    },

    {
      "name": "Mexico",
      "value": 5000000
    }
  ];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';

  colorScheme = 'nightLights'

  interval: any;

  constructor() {

    this.interval = setInterval( () => {
      const newResult = [...this.results];
      for(let val in newResult){
      newResult[val].value = Math.round(Math.random() * 500)
      }
      this.results = [...newResult];
    },1500);
    
  }

  onSelect(event:any) {
    console.log(event);
  }

  ngOnDestroy(): void {
  clearInterval(this.interval);
  }
}

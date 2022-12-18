import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: []
})
export class ProgressComponent {

  progreso1: number = 0;
  progreso2: number = 0;

  get getPorcentaje1(){
    return `${ this.progreso1 }%`;
  }

  get getPorcentaje2(){
    return `${ this.progreso2 }%`;
  }
}

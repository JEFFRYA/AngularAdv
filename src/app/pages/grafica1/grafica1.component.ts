import { Component } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styleUrls: []
})

export class Grafica1Component {

  public label1: string[] = ['Fallidas','Exitosas', 'Pendientes'];
  public data1: any[] = [10, 15, 40];
}

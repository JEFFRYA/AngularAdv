import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-grafica-dona',
  templateUrl: './grafica-dona.component.html',
  styleUrls: []
})

export class GraficaDonaComponent implements OnInit {

  @Input() title: string = 'Sin titulo';
  @Input() labels: string[] = [ 'Label1', 'Label2', 'Label3' ];
  @Input('data') data = [ 10, 750, 50 ];

  public doughnutChartLabels: string[] = this.labels;
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { 
        data: this.data, 
        backgroundColor: [ '#fabfb7', '#a3ffac', '#cce5ff'] 
      }
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';

  ngOnInit() {

    console.log(this.labels);
    console.log(this.data);

    this.doughnutChartLabels = this.labels;
    this.doughnutChartData = {
      labels: this.doughnutChartLabels,
      datasets: [
        { 
          data: this.data, 
          backgroundColor: [ '#fabfb7', '#a3ffac', '#cce5ff'] 
        }
      ]
    };

    console.log(this.doughnutChartLabels);
    console.log(this.doughnutChartData);

  }
}

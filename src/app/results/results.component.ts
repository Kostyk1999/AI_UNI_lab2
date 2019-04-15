import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ChartDataSets, ChartOptions, ChartType} from "chart.js";
import {BaseChartDirective, Label} from "ng2-charts";
import * as pluginDataLabels from 'chartjs-plugin-datalabels';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  @Input() results: number[];

  public lineChartData: ChartDataSets[] = [];
  public lineChartLabels: Label[] = ['50', '55', '60', '65', '70', '75', '80', '90', '100'];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
          ticks: {
            max: 0.4
          }
        }
      ]
    },
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: 'March',
          borderColor: 'orange',
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: 'orange',
            content: 'LineAnno'
          }
        },
      ],
    },
  };

  public lineChartLegend = true;
  public lineChartType = 'line';

  @ViewChild(BaseChartDirective) chart: BaseChartDirective;

  constructor() {
  }

  ngOnInit() {
    this.lineChartData = [];
    this.lineChartData.push({data: this.results, label: 'Fuzzy sets relations'});
  }

  ngOnDestroy() {
    console.log("destroy");
  }

}

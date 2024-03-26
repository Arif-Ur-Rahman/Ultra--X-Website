import { Component, OnInit, AfterViewInit, ViewChild, ViewEncapsulation  } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import DataLabelsPlugin from '../../../../../node_modules/chartjs-plugin-datalabels';
// import DatalabelsPlugin from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  //Chart 1

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10
      }
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end'
      }
    }
  };

  // bar chart
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [
    DataLabelsPlugin
  ];

  public barChartData: ChartData<'bar'> = {
    labels: [ '2019', '2020', '2021', '2022'],
    datasets: [
      { data: [ 15, 20, 30, 40], label: 'Completed Project' },
      // { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B' }
    ],
    
    
  };




//Chart 2

  public barChartOptions2: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 0
      }
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end'
      }
    }
  };

  // bar chart
  public barChartType2: ChartType = 'bar';
  public barChartPlugins2 = [
    DataLabelsPlugin
  ];

  public barChartData2: ChartData<'bar'> = {
    labels: [ 'Smart Office', 'ETTMS', 'EAMS', 'AMS'],
    datasets: [
      { data: [ 4, 3, 5, 4], label: 'Assigned Member' },
      // { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B' }
    ],
    
    
  };

//Chart 3

public barChartOptions3: ChartConfiguration['options'] = {
  responsive: true,
  // We use these empty structures as placeholders for dynamic theming.
  scales: {
    x: {},
    y: {
      min: 0
    }
  },
  plugins: {
    legend: {
      display: true,
    },
    datalabels: {
      anchor: 'end',
      align: 'end'
    }
  }
};

// bar chart
public barChartType3: ChartType = 'bar';
public barChartPlugins3 = [
  DataLabelsPlugin
];

public barChartData3: ChartData<'bar'> = {
  labels: [ '2019', '2020', '2021','2022'],
  datasets: [
    { data: [ 4, 3, 5, 10], label: 'Completed' },
    { data: [ 10, 15, 40, 20 ], label: 'Running' },
    { data: [ 15, 25, 40, 50 ], label: 'Pending' }
  ],
  
  
};





//Chart 4

public barChartOptions4: ChartConfiguration['options'] = {
  responsive: true,
  // We use these empty structures as placeholders for dynamic theming.
  scales: {
    x: {},
    y: {
      min: 0
    }
  },
  plugins: {
    legend: {
      display: true,
    },
    datalabels: {
      anchor: 'end',
      align: 'end'
    }
  }
};

// bar chart
public barChartType4: ChartType = 'bar';
public barChartPlugins4 = [
  DataLabelsPlugin
];

public barChartData4: ChartData<'bar'> = {
  labels: [ 'C++', 'Angular', 'React','PHP', 'Linux'],
  datasets: [
    { data: [ 4, 3, 5, 10, 8], label: 'Projects' },
    // { data: [ 10, 15, 40, 20 ], label: 'Running' },
    // { data: [ 15, 25, 40, 50 ], label: 'Pending' }
  ],
  
  
};





















  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    this.barChartData.datasets[0].data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.round(Math.random() * 100),
      56,
      Math.round(Math.random() * 100),
      40 ];

    this.chart?.update();
  }

  
}


import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import {
  Chart,
  ChartConfiguration,
  ChartData,
  ChartEvent,
  ChartType,
} from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import DataLabelsPlugin from '../../../../../node_modules/chartjs-plugin-datalabels';
import DatalabelsPlugin from 'chartjs-plugin-datalabels';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // Setting the Bar chart for employees joining, resigning, current by Arif
    const myChart = new Chart('myChart', {
      type: 'bar',
      data: {
        labels: ['2019', '2020', '2021', '2022'],
        datasets: [
          {
            label: '# of NewJoin',
            data: [6, 5, 10, 10],
            backgroundColor: 'Green',
            borderColor: 'Black',
            borderWidth: 2,
          },
          {
            label: '# of Resigned',
            data: [2, 0, 6, 2],
            backgroundColor: 'Blue',
            borderColor: 'Black',
            borderWidth: 2,
          },
          {
            label: '# of Current',
            data: [4, 9, 17, 22],
            backgroundColor: 'Black',
            borderColor: 'Black',
            borderWidth: 2,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    // Setting the Bar chart for employees catagory by Arif
    const catagoryChart = new Chart('catagoryChart', {
      type: 'bar',
      data: {
        labels: [ // The names of the technologies. By Arif
          'C++',
          'Java',
          'JavaScript',
          'UEFI',
          'Angular',
          'React',
          'IoT',
          'iOS',
        ],
        datasets: [
          {
            label: '# of Stack',
            data: [12, 3, 17, 5, 4, 9, 6, 22],
            backgroundColor: '#184650',
            borderColor: 'Black',
            borderWidth: 2,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    const experienceChart = new Chart('experienceChart', {
      type: 'bar',
      data: {
        labels: ['1 Year', '2 Yeasr', '3 Years', '4 Years'],
        datasets: [
          {
            label: '# Employee Experience',
            data: [10, 7, 2, 8],
            backgroundColor: '#001253',
            borderColor: 'Black',
            borderWidth: 2,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    const designationChart = new Chart('designationChart', {
      type: 'bar',
      data: {
        labels: ['CEO', 'CTO', 'HR', 'Manager', 'Leader', 'Software Engineer', 'Senior Software Engineer', 'Advisor', 'Lawyer', 'Divisional Manager'],
        datasets: [
          {
            label: '# of Designation',
            data: [1, 2, 4, 2, 3, 12, 1, 2, 1, 8],
            backgroundColor: '#3D0000',
            borderColor: 'Black',
            borderWidth: 2,
          },
          
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end',
      },
    },
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [DataLabelsPlugin];

  public barChartData: ChartData<'bar'> = {
    labels: ['2019', '2020', '2021', '2022'],
    datasets: [
      { data: [65, 59, 80, 81], label: 'Bangladesh' },
      { data: [28, 48, 40, 19], label: 'Japan' },
    ],
  };

  // events
  public chartClicked({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: {}[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: {}[];
  }): void {
    console.log(event, active);
  }

  // Pie
  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      datalabels: {
        formatter: (value, ctx) => {
          if (ctx.chart.data.labels) {
            return ctx.chart.data.labels[ctx.dataIndex];
          }
        },
      },
    },
  };
  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: [['Label A'], ['Label B'], 'Label C', 'Label D', 'Label E'],
    datasets: [
      {
        data: [300, 500, 400, 300, 200],
      },
    ],
  };
  public pieChartType: ChartType = 'pie';
  public pieChartPlugins = [DatalabelsPlugin];

  // Line chart

  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40],
        label: 'Series A',
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      },
      {
        data: [28, 48, 40, 19, 86, 27, 90],
        label: 'Series B',
        backgroundColor: 'rgba(77,83,96,0.2)',
        borderColor: 'rgba(77,83,96,1)',
        pointBackgroundColor: 'rgba(77,83,96,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(77,83,96,1)',
        fill: 'origin',
      },
      {
        data: [180, 480, 770, 90, 1000, 270, 400],
        label: 'Series C',
        yAxisID: 'y-axis-1',
        backgroundColor: 'rgba(255,0,0,0.3)',
        borderColor: 'red',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      },
    ],
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  };

  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.5,
      },
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      x: {},
      'y-axis-0': {
        position: 'left',
      },
      'y-axis-1': {
        position: 'right',
        grid: {
          color: 'rgba(255,0,0,0.3)',
        },
        ticks: {
          color: 'red',
        },
      },
    },
  };

  public lineChartType: ChartType = 'line';

  //   @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  private static generateNumber(i: number): number {
    return Math.floor(Math.random() * (i < 2 ? 100 : 1000) + 1);
  }
}

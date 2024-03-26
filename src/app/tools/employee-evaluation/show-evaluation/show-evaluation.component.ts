import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { EvaluationService } from '../../../service/evaluation/evaluation.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

//
import { EmployeeService } from '../../../service/employee/employee.service';
import { CookieService } from 'ngx-cookie-service';
//

@Component({
  selector: 'app-show-evaluation',
  templateUrl: './show-evaluation.component.html',
  styleUrls: ['./show-evaluation.component.css']
})

export class ShowEvaluationComponent implements AfterViewInit {

  access_token = this.cookieService.get('access_token');


  displayedColumns: string[] = ['employee_id', 'evaluation_date', 'employee_autonomous', 'employee_humble', 'employee_passionate',
    'employee_honest', 'employee_relible', 'employee_creative', 'employee_confident', 'employee_eager', 'employee_positive',
    'developing_part', 'spoke_up', 'activity_vocal', 'information_shared', 'helped_others', 'skill_improved', 'developing_on_schedule',
    'leadership_ability', 'punctional_employee', 'frequently_dose_off', 'hearts_someone', 'unnecessary_talks', 'unnecessary_activities',
    'keep_equipment_good'
  ];
  // dataSource: MatTableDataSource<any>;


  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(private employee: EmployeeService, private cookieService: CookieService, private evaluation: EvaluationService) {
    // this.dataSource.sort = this.sort;
    // this.dataSource.paginator = this.paginator;
  }


  evaluations: any = [];
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
  //
  evaluation_date: [];
  //
  options:any = [];
  //------------------//
  // all_option:any = [];

  // const createEvaluationDate = dataSource.map(date =>{

  // })

  ngAfterViewInit(): void {
    this.evaluation.showEvaluation({ 'access_token': this.access_token }).subscribe(results => {
      this.evaluations = results;
      // console.log(this.evaluations);
      // console.log(this.evaluations[1].employee_autonomous);
      this.dataSource = new MatTableDataSource<any>(this.evaluations);
    });

    //-------
    // this.evaluation.showAllOption({ 'access_token': this.access_token }).subscribe(results =>{
    //   this.all_option = results;
    //   console.log("All options are:", this.all_option);
    // });

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}


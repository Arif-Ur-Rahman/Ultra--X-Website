import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {CookieService} from 'ngx-cookie-service';
import { ProjectService } from 'src/app/service/project/project.service';
import { EmployeeService } from 'src/app/service/employee/employee.service';
import {BehaviorSubject } from 'rxjs';
import {switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-edit-details-project-dialog',
  templateUrl: './edit-details-project-dialog.component.html',
  styleUrls: ['./edit-details-project-dialog.component.css']
})

export class EditDetailsProjectDialogComponent implements OnInit {

  statuss:any;
  employees: any;
  message: boolean;
  access_token = this.cookieService.get('access_token');

  technologies: any;
  priorities: any;
  statuses: any;

  refreshPage = new BehaviorSubject<boolean>(true);

  constructor(private Project: ProjectService, private cookieService: CookieService, private employee: EmployeeService) {

    Project.show_all_technology({}).subscribe((result) => {
      // console.log(result);
      if(result.status == 200){
        this.technologies = result.body;
      }
    });

    Project.show_all_priority({}).subscribe((result) => {
      // console.log(result);
      if(result.status == 200){
        this.priorities = result.body;
      }
    });

    Project.show_status({}).subscribe((result) => {
      // console.log(result.body);
      if(result.status == 200){
        this.statuses = result.body;
      }
    });
   }

  ngOnInit(): void { }

  toppings = new FormControl();
  toppingList: string[] = ['Arif', 'Siam', 'Gopal', 'Jamal', 'Shezan', 'Rahiful'];

  csvInputChange(fileInputEvent: any) {
    console.log(fileInputEvent.target.files[0]);
  }

  addProject(data:any){
    
    console.log(data.project_title)
   
    this.Project.create_project({"title":data.project_title, "description":data.summary, "current_version":data.version, "current_status":data.project_status,
      "schedule_link":data.schedule_link, "git_link":data.git_link, "start_date": data.start_date, "end_date": data.end_date,  "states": " ", 
      "priority_level": data.priority, "technologies": data.technology, "assign_members": []}).subscribe((result)=>{
        // console.log(result)
        if(result.status == 200){
          this.message = true;
          window.location.reload();
        }
    });
  }
}

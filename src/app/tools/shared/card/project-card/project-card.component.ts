import { Component, OnInit, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { MatDialog } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteConfirmationDialogComponent } from '../../dialog/delete-confirmation-dialog/delete-confirmation-dialog.component';
import { EditDetailsProjectDialogComponent } from '../../dialog/edit-details-project-dialog/edit-details-project-dialog.component';
import { ViewDetailsProjectDialogComponent } from '../../dialog/view-details-project-dialog/view-details-project-dialog.component';
import { UpdateProjectComponent } from '../../dialog/update-project/update-project.component';
import { AddMemberDialogComponent } from '../../dialog/add-member-dialog/add-member-dialog.component';

import {ProjectService} from '../../../../service/project/project.service';
import { EmployeeService } from 'src/app/service/employee/employee.service';
import {CookieService} from 'ngx-cookie-service';


@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {
  @Input() myProject;

  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'buffer';
  value = 30;
  bufferValue = 70;
  projects: any;
  access_token = this.cookieService.get('access_token');
  employees: any;
  roles:any;

  module_id = "62c2b440827d955c1423fd2d"; // ata dynamically asbe
  
  constructor(public dialog: MatDialog, private project: ProjectService, private cookieService: CookieService,
            private modalService: NgbModal, private employee:EmployeeService) { 
    
  }

  ngOnInit(): void {
    if(this.myProject == 0){
      this.project.show_all_project({}).subscribe((result)=>{
        this.projects = result.body;
        // console.log(this.myProject);
      });
    }
    else if(this.myProject == 1){
      this.project.show_my_project({}).subscribe((result)=>{
        this.projects = result.body;
        console.log(this.myProject);
      });
    }
    
    this.employee.get_all_employee({}).subscribe((result)=>{
      this.employees = result.body;
    });
    
    this.project.get_all_role({"module_id":this.module_id}).subscribe((result)=>{
      this.roles = result.body;
    })
  }

  csvInputChange(fileInputEvent: any) {
    console.log(fileInputEvent.target.files[0]);
  }

  openViewDialog(id:any) {
    const dialogRef = this.dialog.open(ViewDetailsProjectDialogComponent,
      {
        data: {
          project: id
        }
      });
  }

  openEditDialog(project_id:any, index:number) {
    // console.log(this.projects[index]);
    // console.log(index);
    let project = this.projects[index];
    const dialogRef = this.dialog.open(UpdateProjectComponent,
      {
        data: {
          id : project_id, project: project
        }
      });
  }

  openDeleteDialog(project_id:any, index) {
    console.log(project_id);
    const dialogRef = this.dialog.open(DeleteConfirmationDialogComponent,
      {
        data: {
          id : project_id, status: 4, projects: this.projects, index:index
        }
      });
  }


  openAddMemberDialog(id:any){ 
    const dialogRef = this.dialog.open(AddMemberDialogComponent, {
      data:{
        module_id : id
      }
    });
  }







  openLg(content : any) {
    this.modalService.open(content, { size: 'lg' });
  }

  openVerticallyCentered(content : any) {
    this.modalService.open(content, { centered: true });
  }

  addMember(data:any){
    console.log("Ok Rabby Vai");
    console.log(data);
  }

}

import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import { ProjectService } from 'src/app/service/project/project.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DeleteConfirmationDialogComponent } from '../../shared/dialog/delete-confirmation-dialog/delete-confirmation-dialog.component';
import { CreateRolePriorityTechComponent } from '../../shared/dialog/create-role-priority-tech/create-role-priority-tech.component';
import { UpdateRolePriorityTechComponent } from '../../shared/dialog/update-role-priority-tech/update-role-priority-tech.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  access_token = this.cookieService.get('access_token');

  id = '632bce9992f84e13697a2e5b';

  roles : any = [];
  priorities: any = [];
  technologies: any = [];

  constructor(
    private project: ProjectService, 
    private cookieService: CookieService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.project.show_all_role({"id":this.id}).subscribe((result)=>{
      if(result.status == 200){
        this.roles = result.body;
      }
    });

    this.project.show_all_priority({"token": this.access_token}).subscribe((result) =>{
      if(result.status == 200){
        this.priorities = result.body;
      }
    });

    this.project.show_all_technology({"token": this.access_token}).subscribe((result) =>{
      if(result.status == 200){
        this.technologies = result.body;
      }
    });
  }

  openRoleDeleteDialog(role_id, index): void{
    console.log(index)
    const dialogRef = this.dialog.open(DeleteConfirmationDialogComponent, {
      width: '350px',
      data: {id: role_id, status: 1, roles: this.roles, index: index}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  openPriorityDeleteDialog(priority_id, index){
    console.log(priority_id);
    //  this.dialog.open(DeleteConfirmationDialogComponent);
    const dialogRef = this.dialog.open(DeleteConfirmationDialogComponent, {
      width: '350px',
      data: {id: priority_id, status: 2, priorities: this.priorities, index: index}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  openTechDeleteDialog(tech_id, index){
    console.log(tech_id);
    const dialogRef = this.dialog.open(DeleteConfirmationDialogComponent, {
      width: '350px',
      data: {id: tech_id, status: 3, technologies: this.technologies, index: index}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

 

  openAddROleDialog(){
    // this.dialog.open(CreateRolePriorityTechComponent);
    const dialogRef = this.dialog.open(CreateRolePriorityTechComponent, {
      width: '350px',
      data: {title:'Role' ,status: 1, card: this.roles}
    });
  }

  openAddPriorityDialog(){
    const dialogRef = this.dialog.open(CreateRolePriorityTechComponent, {
      width: '350px',
      data: {title:'Priority' ,status: 2, card: this.priorities}
    });
  }

  openAddTechDialog(){
    const dialogRef = this.dialog.open(CreateRolePriorityTechComponent, {
      width: '350px',
      data: {title:'Technology' ,status: 3, card: this.technologies}
    });
  }





  openUpdateROleDialog(id, old_title){
    // this.dialog.open(CreateRolePriorityTechComponent);
    const dialogRef = this.dialog.open(UpdateRolePriorityTechComponent, {
      width: '350px',
      data: {title:'Role' ,status: 1, card: this.roles, update_id: id, old_title : old_title}
    });
  }
  openUpdatePriorityDialog(id, old_title){
    // this.dialog.open(CreateRolePriorityTechComponent);
    const dialogRef = this.dialog.open(UpdateRolePriorityTechComponent, {
      width: '350px',
      data: {title:'Priority' ,status: 2, card: this.priorities, update_id: id, old_title : old_title}
    });
  }
  openUpdateTechDialog(id, old_title){
    // this.dialog.open(CreateRolePriorityTechComponent);
    const dialogRef = this.dialog.open(UpdateRolePriorityTechComponent, {
      width: '350px',
      data: {title:'Technology', status: 3, card: this.technologies, update_id: id, old_title : old_title}
    });
  }

}

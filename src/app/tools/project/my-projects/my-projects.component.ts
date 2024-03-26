import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditDetailsProjectDialogComponent } from '../../shared/dialog/edit-details-project-dialog/edit-details-project-dialog.component';
import {ProjectService} from '../../../service/project/project.service';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.css']
})

export class MyProjectsComponent implements OnInit {

  isClicked: string = "Create a Project";
  projects: any;
  access_token = this.cookieService.get('access_token');
  showSpinner = true;


  constructor(public dialog: MatDialog, private project: ProjectService, private cookieService: CookieService) {
    this.showSpinner = true; 


  }

  ngOnInit(): void {
  }

  createProjectDialogOpen(data:any){
    if(data == "open_modal"){
      const dialogRef = this.dialog.open(EditDetailsProjectDialogComponent);
    }
  }

}

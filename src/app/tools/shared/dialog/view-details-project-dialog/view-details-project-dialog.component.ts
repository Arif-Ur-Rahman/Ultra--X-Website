import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import { ProjectService } from 'src/app/service/project/project.service';

@Component({
  selector: 'app-view-details-project-dialog',
  templateUrl: './view-details-project-dialog.component.html',
  styleUrls: ['./view-details-project-dialog.component.css']
})
export class ViewDetailsProjectDialogComponent implements OnInit {

  access_token = this.cookieService.get('access_token');
  project_id = this.data.project;
  projects: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private cookieService: CookieService, private project: ProjectService) { 
    // console.log(this.project_id + this.access_token);
  }

  ngOnInit(): void {
    this.project.get_single_project({"project_id":this.project_id,"access_token": this.access_token}).subscribe((result)=>{
      this.projects = result.body;
      console.log(this.projects);
    });
  }

}

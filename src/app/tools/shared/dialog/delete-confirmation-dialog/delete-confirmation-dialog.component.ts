import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import { ProjectService } from 'src/app/service/project/project.service';
import { Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData { }

@Component({
  selector: 'app-delete-confirmation-dialog',
  templateUrl: './delete-confirmation-dialog.component.html',
  styleUrls: ['./delete-confirmation-dialog.component.css']
})
export class DeleteConfirmationDialogComponent implements OnInit {

  access_token = this.cookieService.get('access_token');
  id = this.data['id'];
  index = this.data['index'];
  status = this.data["status"];

  roles = this.data["roles"] ;
  priorities = this.data["priorities"];
  technologies = this.data["technologies"];

  projects = this.data["projects"];
  

  constructor(
    public dialogRef: MatDialogRef<DeleteConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private project: ProjectService,
    private cookieService: CookieService

    ) {console.log(this.index) }

  ngOnInit(): void {
   
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  delete(){
    if(this.status == 1){
      this.project.delete_Role({"id":this.id}).subscribe((result) =>{
        if(result.status == 200){
          this.roles.splice(this.index, 1);
        }
      })
    }
    else if(this.status == 2){
      this.project.delete_Priority({"id":this.id}).subscribe((result) =>{
        if(result.status == 200){
          this.priorities.splice(this.index, 1)
        }
      })
    }
    else if(this.status == 3){
      this.project.delete_Technology({"id":this.id}).subscribe((result) =>{
        if(result.status == 200){
          this.technologies.splice(this.index, 1)
        }
      })
    }
    else if(this.status == 4){
      this.project.delete_project({"id":this.id}).subscribe((result) =>{
        if(result.status == 200){
          this.projects.splice(this.index, 1)
        }
      })
    }


  }

}

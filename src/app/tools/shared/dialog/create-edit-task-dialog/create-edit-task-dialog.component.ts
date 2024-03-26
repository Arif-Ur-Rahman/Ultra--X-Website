import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProjectService } from 'src/app/service/project/project.service';
import {CookieService} from 'ngx-cookie-service';
@Component({
  selector: 'app-create-edit-task-dialog',
  templateUrl: './create-edit-task-dialog.component.html',
  styleUrls: ['./create-edit-task-dialog.component.css']
})
export class CreateEditTaskDialogComponent implements OnInit {

  access_token = this.cookieService.get('access_token');
  state_id = this.data.index;
  add_task_flag:boolean;

  createTaskForm = new FormGroup({
    task_title: new FormControl(''),
    description: new FormControl('')
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private task: ProjectService,private cookieService: CookieService) {
    
   }

  ngOnInit(): void {
    
  }


  create_Task(){
    console.log(this.state_id);
    

    var task_title = this.createTaskForm.controls['task_title'].value;
    var description = this.createTaskForm.controls['description'].value;

    // console.log(task_title);
    // console.log(description);


    this.task.create_task({"state_id":this.state_id,"title":task_title, "description":description ,"access_token": this.access_token}).subscribe((result)=>{
      // console.log(result);
      if(result.status == 200){
        this.add_task_flag = true;
        window.location.reload();
      }
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormControlName  } from '@angular/forms';
import { ProjectService } from 'src/app/service/project/project.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';

export interface DialogData { }


@Component({
  selector: 'app-update-role-priority-tech',
  templateUrl: './update-role-priority-tech.component.html',
  styleUrls: ['./update-role-priority-tech.component.css']
})
export class UpdateRolePriorityTechComponent implements OnInit {

  status = this.data["status"];
  title = this.data["title"];
  update_id = this.data["update_id"];
  old_title = this.data["old_title"];

  module_id = "632bce9992f84e13697a2e5b"; 

  updateForm = new FormGroup({
    title: new FormControl('')
  })

  constructor(
    private projectService: ProjectService,
    public dialogRef: MatDialogRef<UpdateRolePriorityTechComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    ) { }

  ngOnInit(): void {
    console.log(this.update_id);
  }

  Update(){
    if(this.status == 1){
      let title = this.updateForm.value.title;
      this.projectService.update_Role({"id": this.update_id, "module": this.module_id, "title": title}).subscribe((result) =>{
        if(result.status == 200){
          location.reload();
        }
      });
    }
    else if(this.status == 2){
      let title = this.updateForm.value.title;
      this.projectService.update_Priority({"id": this.update_id,"title": title}).subscribe((result) =>{
        if(result.status == 200){
          location.reload();
        }
      });
    }
    else if(this.status == 3){
      let title = this.updateForm.value.title;
      this.projectService.update_Tech({"id": this.update_id,"title": title}).subscribe((result) =>{
        if(result.status == 200){
          location.reload();
        }
      });
    }
    
  }


}

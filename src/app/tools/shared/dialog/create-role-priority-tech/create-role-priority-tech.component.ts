import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormControlName  } from '@angular/forms';
import { ProjectService } from 'src/app/service/project/project.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';

export interface DialogData { }

@Component({
  selector: 'app-create-role-priority-tech',
  templateUrl: './create-role-priority-tech.component.html',
  styleUrls: ['./create-role-priority-tech.component.css']
})
export class CreateRolePriorityTechComponent implements OnInit {

  status = this.data["status"];
  title = this.data["title"];

  // card = this.data["card"] ;
  // length = this.card.length;

  module_id = "632bce9992f84e13697a2e5b";

  createRoleForm = new FormGroup({
    title: new FormControl('')
  })

  constructor(
    private projectService: ProjectService,
    public dialogRef: MatDialogRef<CreateRolePriorityTechComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    ) { }

  ngOnInit(): void {

  }


  Create(){
    if(this.status == 1){
      console.log(this.createRoleForm.value)
      let input_title = this.createRoleForm.value.title;
      console.log("Role Create "+ input_title);
      this.projectService.add_Role({"module": this.module_id, "title": input_title}).subscribe((result) =>{
        if(result.status == 200){
          location.reload();
        }
      });
    }

    else if(this.status == 2){
      // console.log("Add Priority");
      let title = this.createRoleForm.value.title;
      this.projectService.add_Priority({"title": title}).subscribe((result) =>{
        if(result.status == 200){
          location.reload();
        }
      });
    }

    else if(this.status == 3){
      // console.log("Addd Tech");
      let title = this.createRoleForm.value.title;
      this.projectService.add_Tech({"title": title}).subscribe((result) =>{
        if(result.status == 200){
          location.reload();
        }
      });
    }


    
  }

}

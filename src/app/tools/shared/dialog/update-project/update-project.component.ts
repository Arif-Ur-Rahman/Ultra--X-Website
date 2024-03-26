import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/service/project/project.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { IDropdownSettings, } from 'ng-multiselect-dropdown';

export interface DialogData { }

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.css']
})
export class UpdateProjectComponent implements OnInit {

  dropdownList = [];
  dropdownSettings:IDropdownSettings={};

  id = this.data["id"];
  project = this.data["project"];

  technologies: any;
  priorities: any;
  statuses: any;

  constructor(
    private projectService: ProjectService,
    public dialogRef: MatDialogRef<UpdateProjectComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) 
  { 
    projectService.show_all_technology({}).subscribe((result) => {
      // console.log(result.body);
      if(result.status == 200){
        this.technologies = result.body;
      }
    });

    projectService.show_all_priority({}).subscribe((result) => {
      // console.log(result.body);
      if(result.status == 200){
        this.priorities = result.body;
      }
    });

    projectService.show_status({}).subscribe((result) => {
      // console.log(result.body);
      if(result.status == 200){
        this.statuses = result.body;
      }
    });
  }

  ngOnInit(): void {
    this.dropdownList = [
      { item_id: 1, item_text: 'Item1' },
      { item_id: 2, item_text: 'Item2' },
      { item_id: 3, item_text: 'Item3' },
      { item_id: 4, item_text: 'Item4' },
      { item_id: 5, item_text: 'Item5' }
    ];
    this.dropdownSettings = {
      idField: 'item_id',
      textField: 'item_text',
    };

  }

  updateProject(data:any){
    console.log(data);
  }

}

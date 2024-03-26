import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, FormControlName  } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ProjectService } from 'src/app/service/project/project.service';
import { EmployeeService } from 'src/app/service/employee/employee.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-add-member-dialog',
  templateUrl: './add-member-dialog.component.html',
  styleUrls: ['./add-member-dialog.component.css']
})
export class AddMemberDialogComponent implements OnInit {



  addMemberForm = new FormGroup({
    member_id : new FormControl(''),
    role_id : new FormControl(''),
  })

  roles: any;
  employees: any;
  id = '632bce9992f84e13697a2e5b';
  

  constructor( 
    private projectService: ProjectService, 
    private employeeService: EmployeeService,
    public dialogRef: MatDialogRef<AddMemberDialogComponent>,) {
    
   }

  ngOnInit(): void {
    this.projectService.show_all_role({"id":this.id}).subscribe((result) =>{
      console.log(result.body);
      if(result.status == 200){
        this.roles = result.body;
      }
    });
    this.employeeService.show_all_emp({}).subscribe((result) =>{
      console.log(result.body);
      if(result.status == 200){
        this.employees = result.body;
      }
    });
  }

  Create(){
    // console.log(this.addMemberForm.value.role_id);
    let member_id = this.addMemberForm.value.member_id;
    let role_id = this.addMemberForm.value.role_id;

    

  }









 

}

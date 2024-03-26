import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { EditDetailsProjectDialogComponent } from '../../shared/dialog/edit-details-project-dialog/edit-details-project-dialog.component';
import { AddEmployeeComponent } from '../../shared/dialog/add-employee/add-employee.component';
import {EmployeeService} from '../../../service/employee/employee.service'; 
import {CookieService} from 'ngx-cookie-service';
import { Names } from 'src/app/enum/names';


@Component({
  selector: 'app-all-employee',
  templateUrl: './all-employee.component.html',
  styleUrls: ['./all-employee.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class AllEmployeeComponent implements OnInit {
  base_url = Names.db_name;

  isClicked: string = "Add New Employee";

  content : any;

  employees: any;

  departments:[];

  access_token = this.cookieService.get('access_token');

  id = this.cookieService.get('id');

  showSpinner = false;

  img = "32832.66308470842_1666242098613_nature.jpg";
  
  constructor(
    public dialog: MatDialog, 
    config: NgbModalConfig, 
    private modalService: NgbModal, 
    private employeeService: EmployeeService, 
    private cookieService: CookieService) {
      config.backdrop = 'static';
      config.keyboard = false; 
      this.showSpinner = true;
   }

  ngOnInit(): void {
    
    // console.log(this.showSpinner);



    console.log("Ami akhnae "+ this.employees);

    // this.employeeService.get_all_employee({"access_token": this.access_token}).subscribe((result)=>{
    //   this.employees = result.body;
    //   if(this.employees){
    //     // setTimeout(()=>{
    //       this.showSpinner = false;
    //     // }, 5000);
        
    //   }




    // });

    // this.employeeService.show_all_dept({"title":"Engineering Department", "access_token": this.access_token}).subscribe((result)=>{
    //   this.departments = result.body;
    // });
   this.employeeService.get_all_employee({"access_token": this.access_token}).subscribe(data => {
    console.log(data)
   })

    this.employeeService.show_all_emp({"access_token": this.access_token}).subscribe((result) => {
      this.employees = result.body;
      console.log(this.employees[2].image);
      if(this.employees){
            setTimeout(()=>{
            this.showSpinner = false;
        }, );
      }
      // console.log(result.body);
    })
  }

  open(content : any) {
    this.modalService.open(content);
  }


createProjectDialogOpen(data:any){
  if(data == "open_modal"){
    const dialogRef = this.dialog.open(AddEmployeeComponent);
  }
}

}

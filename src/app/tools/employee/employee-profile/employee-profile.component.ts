import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {CookieService} from 'ngx-cookie-service';
import {EmployeeService} from '../../../service/employee/employee.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css']
})
export class EmployeeProfileComponent implements OnInit {

  profile: any;
  emp_id:any;
  access_token = this.cookieService.get('access_token');
  update_flag: boolean;
  showSpinner = false;

  constructor(private activateRoute:ActivatedRoute, private modalService: NgbModal, private cookieService: CookieService,  private employee: EmployeeService, private router: Router) {
    activateRoute.params.subscribe(
      (params) => {
        this.emp_id = params['id'];
    });

    this.showSpinner = true;
   }

  ngOnInit(): void {
    this.employee.show_emp_profile({"id":this.emp_id, "access_token": this.access_token}).subscribe((result)=>{
      this.profile = result.body;
      if(this.profile){
        this.showSpinner = false;
        // console.log("Okkk")
      }
    });
  }

  // update employee function

  updateEmpData(data:any){
    if(data.name == ""){
      data.name = this.profile.name;
    }
    if(data.email == ""){
      data.email = this.profile.email;
    }

    if(data.Password == ""){
      data.Password = this.profile.password;
    }
    if(data.Update_Number == ""){
      data.Update_Number = this.profile.contect_number;
    }
    if(data.Update_Address == ""){
      data.Update_Address = this.profile.address;
    }
    if(data.Description == ""){
      data.Description = this.profile.description;
    }

    let id = this.profile._id;

    console.log(data.Update_Number);

    this.employee.update_employee({"id":id,"name":data.name,"email":data.email,"password":data.password,"address":data.Update_Address,
    "contect_number":data.Update_Number,"description":data.Description, "access_token":this.access_token}).subscribe((result)=>{
      console.log(result);
      if(result.status == 200){
        this.update_flag = true;
        window.location.reload();
      }
     
      
    });


  }

  openLg(content : any) {
    this.modalService.open(content, { size: 'lg' });
  }

  openSm(content : any) {
    this.modalService.open(content, { size: 'sm' });
  }

  delete_emp(id: any){
      this.employee.delete_employee({"id":id, "access_token": this.access_token}).subscribe((result)=>{
        if(result.status == 200){
          this.router.navigate(['/tools/employee/all-employee']);
        }
      });
      
  }

}

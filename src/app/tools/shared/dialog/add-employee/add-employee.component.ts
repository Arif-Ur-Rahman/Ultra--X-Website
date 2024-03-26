import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../../../../service/employee/employee.service';
import {CookieService} from 'ngx-cookie-service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators  } from '@angular/forms';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  departments:any;
  designations:any;
  add_emp_flag: boolean;
  selectedFile =null;
  file:any;
  access_token = this.cookieService.get('access_token');

  addEmpForm : FormGroup;

  onFileSelected(event:any){
    this.file = event.target.files[0];
    console.log(this.file);
  }

  // getFile(event:any) {

  //   let extensionAllowed = {"png":true,"jpeg":true,"jpg":true};
  //   console.log(event.target.files);
  //   if (event.target.files[0].size / 1024 / 1024 > 20) {
  //     alert("File size should be less than 20MB")
  //     return;
  //   }
  //   if (extensionAllowed) {
  //     var nam = event.target.files[0].name.split('.').pop();
  //     if (!extensionAllowed[nam]) {
  //       alert("Please upload " + Object.keys(extensionAllowed) + " file.")
  //       return;
  //     }
  //   }
  //   this.addEmpForm.controls["employeeImage"].setValue(event.target.files[0]);
  // }

  constructor(private employee: EmployeeService, private cookieService: CookieService, private router: Router, private http: HttpClient,
    private route: ActivatedRoute) {

    const access_token = this.cookieService.get('access_token');

    employee.show_all_dept({"title":"Engineering Department", "access_token": access_token}).subscribe((result)=>{
      this.departments = result.body;
    });

    employee.show_all_designation({"access_token": access_token}).subscribe((result)=>{
      this.designations = result.body;
    });
  }

  ngOnInit(): void {
    // this.addEmpForm = new FormGroup({
    //   'name': new FormControl('', [Validators.required]),
    //   'email': new FormControl('', [Validators.required]),
    //   'password': new FormControl('', [Validators.required]),
    //   'contect_number': new FormControl('', [Validators.required]),
    //   'address': new FormControl('', [Validators.required]),
    //   'description': new FormControl('', [Validators.required]),
    //   'designation_id': new FormControl('', [Validators.required]),
    //   'department_id': new FormControl('', [Validators.required]),
    //   'employeeImage': new FormControl('', [Validators.required]),
    // })
   }


  //  addEmp(){
  //   console.log(this.addEmpForm.value);
  //  }


  addEmpData(data:any){
    console.log(this.file);

    this.employee.create_emp({
    "name":data.name, 
    "department_id":data.department,
    "designation_id":data.role, 
    "email":data.email,
    "contect_number":data.contact_number,
    "address":data.address, 
    "description":data.description, 
    "password":data.password, 
    "admin": true,
    "active_status":true, 
    // "employeeImage": this.file,
    "access_token": this.access_token}).subscribe((result)=>{
      // console.log("Result" , result);

      if(result.status == 200){
        this.add_emp_flag = true;
        // this.router.navigate(['/tools/employee/all-employee']);
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate(['/tools/employee/all-employee'],{
          relativeTo: this.route
        })
      }
    });


  }

}

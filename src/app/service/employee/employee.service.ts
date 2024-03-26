// const dotenv = require("dotenv");
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Names } from 'src/app/enum/names';
import {CookieService} from 'ngx-cookie-service';
// import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  access_token = this.cookieService.get('access_token');

  base_url = Names.db_name;
  
  get_all_emp_url = `${this.base_url}/api/routes/employee/user/showAllEmployees`;

  show_emp_profile_url = `${this.base_url}/api/routes/employee/user/viewUserProfile`;

  show_all_department_url = `${this.base_url}/api/routes/department/user/showAllDepartments`;
  // show_all_designation_url = `${this.base_url}/api/routes/designation/user/showAllDesignations`;

  create_emp_url = `${this.base_url}/api/routes/employee/admin/createNewEmployee`;

  update_emp_url =`${this.base_url}/api/routes/employee/admin/updateEmployee`;

  delete_emp_url = `${this.base_url}/api/routes/employee/admin/deleteAnEmployee`;


  show_all_emp_url = `${this.base_url}/api/users/showActiveUsers`;
  show_all_designation_url = `${this.base_url}/api/users/showActiveUsers`;


  constructor(private http:HttpClient, private cookieService: CookieService ) { }

  

  get_all_employee(data: any) {
    return this.http.post<any>(this.get_all_emp_url, data);
  }

  show_emp_profile(data: any) {
    return this.http.post<any>(this.show_emp_profile_url, data);
  }

  show_all_dept(data: any){
    return this.http.post<any>(this.show_all_department_url, data);
  }

  show_all_designation(data: any){
    return this.http.post<any>(this.show_all_designation_url, data);
  }

  create_emp(data: any){
    return this.http.post<any>(this.create_emp_url, data);
  }

  delete_employee(data: any){
    return this.http.post<any>(this.delete_emp_url, data);
  }

  update_employee(data: any){
    return this.http.post<any>(this.update_emp_url, data);
  }

  show_all_emp(data: any){
    const httpHeaders = new HttpHeaders().set("Authorization", "Bearer "+ this.access_token);
    return this.http.post<any>(this.show_all_emp_url, data, {headers: httpHeaders});
  }

  

















}

import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse  } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators';
import { Names } from 'src/app/enum/names';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  base_url = Names.db_name;
  
  login_url = `${this.base_url}/api/users/login`;

  get_all_emp_url = `${this.base_url}/api/routes/employee/user/showAllEmployees`;

  constructor(private http:HttpClient) { }

  get_all_emp(data:any){
    return this.http.post<any>(this.get_all_emp_url,data);
  }

  loginUser(data:any): Observable<any>{
    return this.http.post<any>(this.login_url, data)
    .pipe(catchError(this.handleError));
  }


  handleError(error:HttpErrorResponse  ){
    return throwError(error.message || "Server Error");
  }
}


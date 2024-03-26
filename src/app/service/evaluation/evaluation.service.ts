import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Names } from 'src/app/enum/names';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {
  base_url = Names.db_name;

  postEvaluationAPI = `http://localhost:3000/api/routes/evaluation/user/createEvaluation/`;
  showEvaluationAPI = `http://localhost:3000/api/routes/evaluation/user/createEvaluation/showData/`;
  showOptionAPI = `http://localhost:3000/api/routes/evaluation/user/options/showOptions`;

  constructor(private http: HttpClient) { }

  createEvaluation(data: any) {
    return this.http.post<any>(this.postEvaluationAPI, data);
  }

  // createEvaluation(data:any): Observable<any>{
  //   return this.http.post<any>(this.postEvaluationAPI, data)
  //   .pipe(catchError(this.handleError));
  // }

  // handleError(error:HttpErrorResponse  ){
  //   return throwError(error.message || "Server Error");
  // }


  showEvaluation(data: any) {
    return this.http.post<any>(this.showEvaluationAPI, data);
  }

  showAllOption(data: any) {
    return this.http.post<any>(this.showOptionAPI, data);
  }

}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Names } from 'src/app/enum/names';

@Injectable({
  providedIn: 'root'
})
export class WebsiteApiService {

  get_product_url = Names.db_name+"/api/website/products/showAllProducts";
  get_seminar_url = Names.db_name+"/api/website/seminar/showAllSeminar";
  get_news_url = Names.db_name+"/api/website/news/showAllNews";
  get_notice_url = Names.db_name+"/api/website/notice/showAllNotice";
  get_employee_url = Names.db_name+"/api/employee/showAllEmployee";
  get_job_url = Names.db_name+"/api/website/jobs/showAllJobs";

  constructor(private http:HttpClient) { }

  get_product(data: any) {
    return this.http.post(this.get_product_url, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  get_seminar(data: any) {
    return this.http.post(this.get_seminar_url, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  get_news(data: any) {
    return this.http.post(this.get_news_url, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  get_notice(data: any) {
    return this.http.post(this.get_notice_url, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
  get_employee(data: any) {
    return this.http.post(this.get_employee_url, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
  get_job(data: any) {
    return this.http.post(this.get_job_url, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}

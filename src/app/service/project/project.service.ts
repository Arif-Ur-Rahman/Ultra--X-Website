import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Names } from 'src/app/enum/names';
import {CookieService} from 'ngx-cookie-service';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  base_url = Names.db_name;
  
  access_token = this.cookieService.get('access_token');

  show_all_project_url = `${this.base_url}/api/project/showActiveProject`;
  my_project_url = `${this.base_url}/api/project/showIndividualProject`;
  delete_project_url = `${this.base_url}/api/project/deleteProject`;
  create_project_url = `${this.base_url}/api/project/createProject`;

  show_all_status_url = `${this.base_url}/api/routes/settings/status/user/showAllStatusesForSelectedModule`;
  get_single_project_url = `${this.base_url}/api/routes/project/user/showSingleProjectDetails`;
  create_task_url = `${this.base_url}/api/routes/project/user/createNewTask`;
  get_all_role_url = `${this.base_url}/api/routes/role/user/showAllRolesForSelectedModule`;
  add_member_url =  `${this.base_url}/api/routes/project/user/assignNewMember`;

  show_all_role_url = `${this.base_url}/api/roles/showActiveRoles`;
  show_all_priority_url = `${this.base_url}/api/priorities/showActivePriorities`;
  show_all_technology_url = `${this.base_url}/api/technology/showActiveTechnologys`;
  
  delete_role_url = `${this.base_url}/api/roles/deleteRole`;
  delete_technology_url = `${this.base_url}/api/technology/deleteTechnology`;
  delete_priority_url = `${this.base_url}/api/priorities/deletePriority`;
  
  add_role_url = `${this.base_url}/api/roles/createRole`;
  add_priority_url = `${this.base_url}/api/priorities/createPriority`;
  add_tech_url = `${this.base_url}/api/technology/createTechnology`;
  
  update_role_url = `${this.base_url}/api/roles/updateRole`;
  update_priority_url = `${this.base_url}/api/priorities/updatePriority`;
  update_tech_url = `${this.base_url}/api/technology/updateTechnology`;

  show_status_url = `${this.base_url}/api/status/showActiveStatus`;

  
  
  constructor(private http:HttpClient, private cookieService: CookieService) { }

  show_all_role(data: any) {
    // let id = data.id;
    const httpHeaders = new HttpHeaders().set("Authorization", "Bearer "+ this.access_token)
    return this.http.post<any>(this.show_all_role_url, data, {headers: httpHeaders});
  }
  
  show_all_priority(data:any) {
    // let token = data.token;
    const httpHeaders = new HttpHeaders().set("Authorization", "Bearer "+ this.access_token);
    return this.http.post<any>(this.show_all_priority_url, data, {headers: httpHeaders});
  }

  show_all_technology(data:any) {
    // let token = data.token;
    const httpHeaders = new HttpHeaders().set("Authorization", "Bearer "+ this.access_token);
    return this.http.post<any>(this.show_all_technology_url, data, {headers: httpHeaders});
  }

  delete_Role(data:any) {
    let id = data.id;
    console.log("Service " + id + " token  " + this.access_token);
    const httpHeaders = new HttpHeaders().set("Authorization", "Bearer "+ this.access_token);
    return this.http.post<any>(this.delete_role_url, data, {headers: httpHeaders});
  }

  delete_Priority(data:any) {
    let id = data.id;
    console.log("Service " + id + " token  " + this.access_token);
    const httpHeaders = new HttpHeaders().set("Authorization", "Bearer "+ this.access_token);
    return this.http.post<any>(this.delete_priority_url, data, {headers: httpHeaders});
  }

  delete_Technology(data:any) {
    let id = data.id;
    console.log("Service " + id + " token  " + this.access_token);
    const httpHeaders = new HttpHeaders().set("Authorization", "Bearer "+ this.access_token);
    return this.http.post<any>(this.delete_technology_url, data, {headers: httpHeaders});
  }


  add_Role(data:any) {
    const httpHeaders = new HttpHeaders().set("Authorization", "Bearer "+ this.access_token);
    return this.http.post<any>(this.add_role_url, data, {headers: httpHeaders});
  }

  add_Priority(data:any) {
    const httpHeaders = new HttpHeaders().set("Authorization", "Bearer "+ this.access_token);
    return this.http.post<any>(this.add_priority_url, data, {headers: httpHeaders});
  }

  add_Tech(data:any) {
    const httpHeaders = new HttpHeaders().set("Authorization", "Bearer "+ this.access_token);
    return this.http.post<any>(this.add_tech_url, data, {headers: httpHeaders});
  }


  update_Role(data:any) {
    const httpHeaders = new HttpHeaders().set("Authorization", "Bearer "+ this.access_token);
    return this.http.post<any>(this.update_role_url, data, {headers: httpHeaders});
  }

  update_Priority(data:any) {
    const httpHeaders = new HttpHeaders().set("Authorization", "Bearer "+ this.access_token);
    return this.http.post<any>(this.update_priority_url, data, {headers: httpHeaders});
  }

  update_Tech(data:any) {
    const httpHeaders = new HttpHeaders().set("Authorization", "Bearer "+ this.access_token);
    return this.http.post<any>(this.update_tech_url, data, {headers: httpHeaders});
  }

  show_status(data:any) {
    const httpHeaders = new HttpHeaders().set("Authorization", "Bearer "+ this.access_token);
    return this.http.post<any>(this.show_status_url, data, {headers: httpHeaders});
  }










































  show_all_project(data: any) {
    const httpHeaders = new HttpHeaders().set("Authorization", "Bearer "+ this.access_token);
    return this.http.post<any>(this.show_all_project_url, data, {headers: httpHeaders});
    // return this.http.post<any>(this.show_all_project_url, data);
  }

  show_my_project(data: any) {
    const httpHeaders = new HttpHeaders().set("Authorization", "Bearer "+ this.access_token);
    return this.http.post<any>(this.my_project_url, data, {headers: httpHeaders});
    // return this.http.post<any>(this.show_all_project_url, data);
  }


  delete_project(data: any) {
    const httpHeaders = new HttpHeaders().set("Authorization", "Bearer "+ this.access_token);
    return this.http.post<any>(this.delete_project_url, data, {headers: httpHeaders});
    // return this.http.post<any>(this.delete_project_url, data);
  }
  
  create_project(data: any) {
    const httpHeaders = new HttpHeaders().set("Authorization", "Bearer "+ this.access_token);
    return this.http.post<any>(this.create_project_url, data, {headers: httpHeaders});
    // return this.http.post<any>(this.create_project_url, data);
  }
  

  show_all_status(data: any) {
    return this.http.post<any>(this.show_all_status_url, data);
  }


  get_single_project(data: any) {
    return this.http.post<any>(this.get_single_project_url, data);
  }

  create_task(data: any) {
    return this.http.post<any>(this.create_task_url, data);
  }

  get_all_role(data: any) {
    return this.http.post<any>(this.get_all_role_url, data);
  }

  add_member(data: any) {
    return this.http.post<any>(this.add_member_url, data);
  }


}

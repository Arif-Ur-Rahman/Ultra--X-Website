import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {CookieService} from 'ngx-cookie-service';
import {EmployeeService} from '../../../service/employee/employee.service';


@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  profile: any;
  showSpinner = false;

  access_token = this.cookieService.get('access_token');
  id = this.cookieService.get('id');

  constructor(private modalService: NgbModal, private cookieService: CookieService,  private employee: EmployeeService) {

    

   }

  ngOnInit(): void {
    this.employee.show_emp_profile({"id":this.id, "access_token": this.access_token}).subscribe((result)=>{
      this.profile = result.body;
    });
  }

  updateEmpData(data:any){
    console.log(data);
  }

  openLg(content : any) {
    this.modalService.open(content, { size: 'lg' });
  }

  openSm(content : any) {
    this.modalService.open(content, { size: 'sm' });
  }

}


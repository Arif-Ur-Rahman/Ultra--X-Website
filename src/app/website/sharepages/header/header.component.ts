import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {LoginService } from '../../../service/login/login.service';
import {CookieService} from 'ngx-cookie-service';
import { catchError } from 'rxjs/operators';
import { Names } from 'src/app/enum/names';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class HeaderComponent implements OnInit {
  public leftbarOpen: boolean = false;
  login_error:boolean;
  

  // for side nav 

  menuOpenBtn = document.querySelector(".navbar .menu_icon");
  closeOpenBtn = document.querySelector(".navbar .nav-links .close_icon");
  navLinks = document.querySelector(".nav-links");


  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  constructor(private userData:LoginService, config: NgbModalConfig, private modalService: NgbModal, private router: Router, private cookieService: CookieService) { 
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {}

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }

  open(content: any) {
    this.modalService.open(content);
  }

  // login function

  getUserLoginData(data:any){
    console.log(data);
    this.userData.loginUser(data).subscribe((result)=>{
      // console.log(result);
      // console.log(result.access_token)
      if(result.status == 200){
        this.cookieService.set('access_token', result.access_token);
        this.cookieService.set('id', result.id);
        this.router.navigate(['/tools']); 
      }
    },
    (error) => {
      this.login_error = true;
    })
  }

  clickEvent(){
    this.leftbarOpen = !this.leftbarOpen;
  }

}

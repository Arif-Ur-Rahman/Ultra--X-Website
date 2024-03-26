import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit {

  current_url : any;

  closeResult: string| any;

  isExpanded: boolean = true;

  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  public showContainerBox: boolean = false;

  constructor(private modalService: NgbModal, private router: Router, private cookieService: CookieService) {

    let url = this.router.url;

    // console.log(url);

    let splitted_url = url.split("/")[1];
    let splitted_url_2 = url.split("/")[2];
    
    this.current_url = splitted_url;

    this.current_url = this.router.url;

    // console.log(splitted_url);
    // console.log(splitted_url_2);

    if(splitted_url == 'tools' && splitted_url_2 =='website-dashboard'){
      // console.log('website Dashboard sidebar');
      this.current_url = "Website Dashboard";
    }

    else if(splitted_url == 'tools' && splitted_url_2 =='ToDo'){
      // console.log('ToDo module sidebar');
      this.current_url = "ToDo";
    }

    else if(splitted_url == 'tools' && splitted_url_2 =='notes'){
      // console.log('Notes module sidebar');
      this.current_url = "Notes";
    }

    else if(splitted_url == 'tools' && splitted_url_2 =='idea'){
      // console.log('idea module sidebar');
      this.current_url = "Idea";
    }

    else if(splitted_url == 'tools' && splitted_url_2 =='asset'){
      // console.log('asset module sidebar');
      this.current_url = "Asset";
    }

    else if(splitted_url == 'tools' && splitted_url_2 =='whiteBoard'){
      // console.log('whiteBoard module sidebar');
      this.current_url = "White Board";
    }

    else if(splitted_url == 'tools' && splitted_url_2 =='leave'){
      // console.log('leave module sidebar');
      this.current_url = "Leave";
    } 

    else if(splitted_url == 'tools' && splitted_url_2 =='health'){
      // console.log('health module sidebar');
      this.current_url = "Health";
    }

    else if(splitted_url == 'tools' && splitted_url_2 =='employee'){
      // console.log('employee module sidebar');
      this.current_url = "Employee";
    }

    else if(splitted_url == 'tools' && splitted_url_2 =='discussion'){
      // console.log('discussion module sidebar');
      this.current_url = "Discussion";
    }

    else if(splitted_url == 'tools' && splitted_url_2 =='project'){
      // console.log('project module sidebar');
      this.current_url = "Project";
    }

    else if(splitted_url == 'tools' && splitted_url_2 =='attendance'){
      // console.log('attendance module sidebar');
      this.current_url = "Attendance";
    }
   
    
    else if(splitted_url == 'tools' && splitted_url_2 =='rules-regulations'){
      // console.log('rules-regulations module sidebar');
      this.current_url = "Rules & Regulations";
    }

    else if(splitted_url == 'tools' && splitted_url_2 =='employyeeEvaluation'){
      // console.log('employyeeEvaluation module sidebar');
      this.current_url = "employyeeEvaluation";
    }


    else{
      // console.log('tools Dashboard sidebar');
      this.current_url = "Smart Office Management System";
    }
   }

  ngOnInit(): void {
  }

  handleContainerBox(): void {
    this.showContainerBox = !this.showContainerBox;
  }

  openLg(content : any) {
    this.modalService.open(content, { size: 'lg' });
  }

  // for modal view

  openMd(content : any) {
    this.modalService.open(content, { size: 'md' });
  }

  logout(){

    this.cookieService.delete('id');

    this.cookieService.delete('access_token');

    this.router.navigate(['/']);

    // window.location.reload();
  }



}

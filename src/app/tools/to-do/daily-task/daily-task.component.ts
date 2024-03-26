import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-daily-task',
  templateUrl: './daily-task.component.html',
  styleUrls: ['./daily-task.component.css']
})
export class DailyTaskComponent implements OnInit {

  @ViewChild('add')

  public add : TemplateRef<any> | undefined;

  isClicked: string = "Add Task";
  
  
  important: boolean = true;
  

  constructor(private modalService: NgbModal) {
  
   }

  ngOnInit(): void {
  }

  toggleImportant(): void {
    this.important= !this.important
  }

  openXl(content : any) {
    this.modalService.open(content, { size: 'md' });
  }

  openSm(content : any) {
    this.modalService.open(content, { size: 'sm' });
  }

  GetChildData(data:any){
    // alert(data);
    if(data == "open_modal"){
      this.modalService.open(this.add);
    }
  }

}

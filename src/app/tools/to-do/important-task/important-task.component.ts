import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

import {MatDialog} from '@angular/material/dialog';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-important-task',
  templateUrl: './important-task.component.html',
  styleUrls: ['./important-task.component.css']
})
export class ImportantTaskComponent implements OnInit {

  @ViewChild('add')

  public add : TemplateRef<any> | undefined;

  isClicked: string = "Add Task";

  important: boolean = true;

  constructor(private modalService: NgbModal) { }

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

import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-group-task',
  templateUrl: './group-task.component.html',
  styleUrls: ['./group-task.component.css']
})
export class GroupTaskComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openXl(content : any) {
    this.modalService.open(content, { size: 'md' });
  }

  openSm(content : any) {
    this.modalService.open(content, { size: 'sm' });
  }

}

import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

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

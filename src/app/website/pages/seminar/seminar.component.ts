import { Component, OnInit } from '@angular/core';

import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-seminar',
  templateUrl: './seminar.component.html',
  styleUrls: ['./seminar.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class SeminarComponent implements OnInit {

  constructor() { 
    
  }

 

  ngOnInit(): void {
  }



}

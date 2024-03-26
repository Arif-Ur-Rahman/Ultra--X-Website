import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-employee-sidebar',
  templateUrl: './employee-sidebar.component.html',
  styleUrls: ['./employee-sidebar.component.css']
})
export class EmployeeSidebarComponent implements OnInit {

  @Input() show_sidebar:boolean |undefined;

  constructor() { }

  ngOnInit(): void {
  }

}

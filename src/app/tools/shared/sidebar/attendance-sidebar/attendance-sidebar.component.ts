import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-attendance-sidebar',
  templateUrl: './attendance-sidebar.component.html',
  styleUrls: ['./attendance-sidebar.component.css']
})
export class AttendanceSidebarComponent implements OnInit {

  @Input() show_sidebar:boolean |undefined;

  constructor() { }

  ngOnInit(): void {
  }

}

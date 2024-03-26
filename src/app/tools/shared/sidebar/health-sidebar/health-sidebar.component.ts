import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-health-sidebar',
  templateUrl: './health-sidebar.component.html',
  styleUrls: ['./health-sidebar.component.css']
})
export class HealthSidebarComponent implements OnInit {

  @Input() show_sidebar:boolean |undefined;

  constructor() { }

  ngOnInit(): void {
  }

}

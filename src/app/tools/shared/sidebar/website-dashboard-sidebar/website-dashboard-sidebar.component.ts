import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-website-dashboard-sidebar',
  templateUrl: './website-dashboard-sidebar.component.html',
  styleUrls: ['./website-dashboard-sidebar.component.css']
})
export class WebsiteDashboardSidebarComponent implements OnInit {

  @Input() show_sidebar:boolean |undefined;
  
  constructor() { }

  ngOnInit(): void {
  }

}

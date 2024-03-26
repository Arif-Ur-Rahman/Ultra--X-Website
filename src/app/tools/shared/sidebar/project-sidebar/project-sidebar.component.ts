import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-sidebar',
  templateUrl: './project-sidebar.component.html',
  styleUrls: ['./project-sidebar.component.css']
})
export class ProjectSidebarComponent implements OnInit {

  @Input() show_sidebar:boolean |undefined;

  constructor() { }

  ngOnInit(): void {
  }

}

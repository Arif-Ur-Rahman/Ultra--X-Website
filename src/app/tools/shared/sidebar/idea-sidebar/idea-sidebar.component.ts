import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-idea-sidebar',
  templateUrl: './idea-sidebar.component.html',
  styleUrls: ['./idea-sidebar.component.css']
})
export class IdeaSidebarComponent implements OnInit {

  @Input() show_sidebar:boolean |undefined;

  constructor() { }

  ngOnInit(): void {
  }

}

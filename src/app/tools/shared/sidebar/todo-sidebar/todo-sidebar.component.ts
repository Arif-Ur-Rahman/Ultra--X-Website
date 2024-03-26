import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-sidebar',
  templateUrl: './todo-sidebar.component.html',
  styleUrls: ['./todo-sidebar.component.css']
})
export class TodoSidebarComponent implements OnInit {

  @Input() show_sidebar:boolean |undefined;
  
  constructor() { }

  ngOnInit(): void {
  }

}

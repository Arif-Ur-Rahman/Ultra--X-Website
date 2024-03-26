import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-discussion-sidebar',
  templateUrl: './discussion-sidebar.component.html',
  styleUrls: ['./discussion-sidebar.component.css']
})
export class DiscussionSidebarComponent implements OnInit {

  @Input() show_sidebar:boolean |undefined;

  constructor() { }

  ngOnInit(): void {
  }

}

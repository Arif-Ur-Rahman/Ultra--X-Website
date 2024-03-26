import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-white-board-sidebar',
  templateUrl: './white-board-sidebar.component.html',
  styleUrls: ['./white-board-sidebar.component.css']
})
export class WhiteBoardSidebarComponent implements OnInit {

  @Input() show_sidebar:boolean |undefined;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit,  Input } from '@angular/core';

@Component({
  selector: 'app-leave-sidebar',
  templateUrl: './leave-sidebar.component.html',
  styleUrls: ['./leave-sidebar.component.css']
})
export class LeaveSidebarComponent implements OnInit {

  @Input() show_sidebar:boolean |undefined;

  // isExpanded: boolean = true;


  constructor() { }

  ngOnInit(): void {
    
  }

}

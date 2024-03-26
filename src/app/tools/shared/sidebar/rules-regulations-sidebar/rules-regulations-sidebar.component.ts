import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-rules-regulations-sidebar',
  templateUrl: './rules-regulations-sidebar.component.html',
  styleUrls: ['./rules-regulations-sidebar.component.css']
})
export class RulesRegulationsSidebarComponent implements OnInit {

  @Input() show_sidebar:boolean |undefined;

  constructor() { }

  ngOnInit(): void {
  }

}

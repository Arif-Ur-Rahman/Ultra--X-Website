import {  Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-evaluation-sidebar',
  templateUrl: './evaluation-sidebar.component.html',
  styleUrls: ['./evaluation-sidebar.component.css']
})
export class EvaluationSidebarComponent implements OnInit {

  @Input() show_sidebar:boolean |undefined;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-idea-panel',
  templateUrl: './idea-panel.component.html',
  styleUrls: ['./idea-panel.component.css']
})
export class IdeaPanelComponent implements OnInit {
  IsDetails: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}

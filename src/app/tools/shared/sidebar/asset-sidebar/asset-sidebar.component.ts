import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-asset-sidebar',
  templateUrl: './asset-sidebar.component.html',
  styleUrls: ['./asset-sidebar.component.css']
})
export class AssetSidebarComponent implements OnInit {

  @Input() show_sidebar:boolean |undefined;

  constructor() { }

  ngOnInit(): void {
  }

}

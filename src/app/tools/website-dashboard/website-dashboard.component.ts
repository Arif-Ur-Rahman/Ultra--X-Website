import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-website-dashboard',
  templateUrl: './website-dashboard.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./website-dashboard.component.css']
})
export class WebsiteDashboardComponent implements OnInit {

  closeResult: string| any;

  isExpanded: boolean = false;

  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  public showContainerBox: boolean = false;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  handleContainerBox(): void {
    this.showContainerBox = !this.showContainerBox;
  }

  openLg(content : any) {
    this.modalService.open(content, { size: 'lg' });
  }

}

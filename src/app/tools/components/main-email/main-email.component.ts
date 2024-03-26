import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-main-email',
  templateUrl: './main-email.component.html',
  styleUrls: ['./main-email.component.css']
})
export class MainEmailComponent implements OnInit {

  @ViewChild('add')

  public add : TemplateRef<any> | undefined;

  isClicked: string = "Compose Mail";

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }


  GetChildData(data:any){
    // alert(data);
    if(data == "open_modal"){
      this.modalService.open(this.add, { size: 'xl' });
    }
  }

}

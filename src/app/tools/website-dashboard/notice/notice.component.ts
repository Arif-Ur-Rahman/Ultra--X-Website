import { Component, OnInit,TemplateRef, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { WebsiteApiService } from '../../../service/websiteDashboard/website-api.service';


@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent implements OnInit {

  @ViewChild('add')

  public add : TemplateRef<any> | undefined;

  isClicked: string = "Add Notice";

  table_data_count: number = 0;

  items:string[] |any;


  // for table showing

  displayedColumns = ['checkbox','index','notice_title','notice_id', 'details', 'date', 'status', 'action'  ];

  dataSource!: MatTableDataSource<any>;

  @ViewChild('paginator') paginator! : MatPaginator
  @ViewChild(MatSort) matSort! : MatSort;

  
 
  constructor(private Data: WebsiteApiService, private modalService: NgbModal){

  }

  ngOnInit(): void {


    // for calling API and showing table data

    const post_data = {
      loggedInId: 1
    }

    this.Data.get_notice(post_data).subscribe({

      next : (result: any) => {
        this.dataSource = new MatTableDataSource(result.data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.matSort;

        this.table_data_count =  result.count;
        console.log(this.table_data_count);

        this.items = result.data;
        console.log(this.items);
      },

      error : (err) => {
        console.log(err)
      }
  
    })

  }


  // for filtering table data

  filterData($event : any){
    this.dataSource.filter = $event.target.value;
  }

  // for modal view

  openSm(content : any) {
    this.modalService.open(content, { size: 'sm' });
  }


  // for add modal and catch data from different component

  GetChildData(data:any){
    // alert(data);
    if(data == "open_modal"){
      this.modalService.open(this.add);
    }
  }


}

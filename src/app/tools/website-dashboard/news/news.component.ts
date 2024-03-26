import { Component, OnInit,TemplateRef, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { WebsiteApiService } from '../../../service/websiteDashboard/website-api.service';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  @ViewChild('add')

  public add : TemplateRef<any> | undefined;

  isClicked: string = "Add Seminar";

  table_data_count: number = 0;

  public i = 0;

  items:string[] |any;


  // for table showing

  displayedColumns = ['checkbox','index','news_title','news_id', 'details', 'date', 'image', 'status', 'action'  ];

  dataSource!: MatTableDataSource<any>;

  @ViewChild('paginator') paginator! : MatPaginator;
  @ViewChild(MatSort) matSort! : MatSort;

  
 
  constructor(private Data: WebsiteApiService, private modalService: NgbModal){

  }

  ngOnInit(): void {


    // for calling API and showing table data

    const post_data = {
      loggedInId: 1
    }

    this.Data.get_news(post_data).subscribe({

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

  // for indexing table content

  increment_serial(){
      this.i = this.i++;
      console.log("ami akhane");
      return this.i;
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

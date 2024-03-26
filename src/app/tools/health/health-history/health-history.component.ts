import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { WebsiteApiService } from '../../../service/websiteDashboard/website-api.service';

@Component({
  selector: 'app-health-history',
  templateUrl: './health-history.component.html',
  styleUrls: ['./health-history.component.css']
})
export class HealthHistoryComponent implements OnInit {

  displayedColumns = ['checkbox','serial','product_title','product_id', 'details', 'date', 'image', 'status', 'action'  ];

  dataSource!: MatTableDataSource<any>;

  @ViewChild('paginator') paginator! : MatPaginator;
  @ViewChild(MatSort) matSort! : MatSort;

  public i = 0;

  products:any;
 
  constructor(private Data: WebsiteApiService, private modalService: NgbModal){

  }

  ngOnInit(): void {

    const post_data = {
      loggedInId: 1
    }

    this.Data.get_product(post_data).subscribe({

      next : (result: any) => {
        this.dataSource = new MatTableDataSource(result.data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.matSort;
      },

      error : (err) => {
        console.log(err)
      }
    })


    function display() {
      console.log("Hello TypeScript!");
    }

  }

  icrement_serial(){
      this.i = this.i++;
      console.log("ami akhane");
  }


  filterData($event : any){
    this.dataSource.filter = $event.target.value;
  }

  // for modal view

  openSm(content : any) {
    this.modalService.open(content, { size: 'sm' });
  }


}

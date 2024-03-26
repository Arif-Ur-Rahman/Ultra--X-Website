import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ApiService } from '../../../service/api.service';


@Component({
  selector: 'app-my-assets',
  templateUrl: './my-assets.component.html',
  styleUrls: ['./my-assets.component.css']
})
export class MyAssetsComponent implements OnInit {

  displayedColumns = ['checkbox','serial',  'username', 'email', 'asset_id', 'details', 'usage_start', 'asset_status', 'action'  ];

  dataSource!: MatTableDataSource<any>;

  @ViewChild('paginator') paginator! : MatPaginator;
  @ViewChild(MatSort) matSort! : MatSort;

  users:any;

  constructor(private userData: ApiService, private modalService: NgbModal)
  {
    userData.users().subscribe((data:any) =>{
      // console.warn("data", data);
      // this.users = data;
      
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.matSort;
    },
    );
  }

  filterData($event : any){
    this.dataSource.filter = $event.target.value;
  }

  // for modal view

  openSm(content : any) {
    this.modalService.open(content, { size: 'sm' });
  }

  ngOnInit(): void {
  }

}

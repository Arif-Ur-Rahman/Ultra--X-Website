import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

export interface PeriodicElement {
  number: number;
  time: string;
  note: string;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { number: 1, time: '4.30 PM', note: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', status: 'Important' },
  { number: 2, time: '4.30 PM', note: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', status: 'Important' },
  { number: 3, time: '4.30 PM', note: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', status: 'Important' },
  { number: 4, time: '4.30 PM', note: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', status: 'Important' },
  { number: 5, time: '4.30 PM', note: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', status: 'Important' },
  { number: 6, time: '4.30 PM', note: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', status: 'Important' },
  { number: 7, time: '4.30 PM', note: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', status: 'Important' },
  { number: 8, time: '4.30 PM', note: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', status: 'Important' },
  { number: 9, time: '4.30 PM', note: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', status: 'Important' },
  { number: 10, time: '4.30 PM', note: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', status: 'Important' },

];

/**
 * @title Table with sorting
 */
@Component({
  selector: 'app-remainder',
  templateUrl: './remainder.component.html',
  styleUrls: ['./remainder.component.css']
})


export class RemainderComponent implements AfterViewInit {
  displayedColumns: string[] = ['number', 'time', 'note', 'status'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  constructor(private _liveAnnouncer: LiveAnnouncer) { }

  @ViewChild(MatSort)
  sort!: MatSort;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}

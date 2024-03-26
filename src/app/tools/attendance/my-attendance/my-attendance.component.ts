import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';


export interface PeriodicElement {
  date: string;
  work_start_time: string;
  work_end_time: string;
  lunch_break_start_time: string;
  lunch_break_end_time: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { date: '10/3/2022', work_start_time: '7.43 AM', work_end_time: '5.30 PM', lunch_break_start_time: '1.00 PM', lunch_break_end_time: '2.00 PM' },
  { date: '10/3/2022', work_start_time: '7.42 AM', work_end_time: '5.30 PM', lunch_break_start_time: '1.00 PM', lunch_break_end_time: '2.00 PM' },
  { date: '10/3/2022', work_start_time: '7.42 AM', work_end_time: '5.30 PM', lunch_break_start_time: '1.00 PM', lunch_break_end_time: '2.00 PM' },
  { date: '10/3/2022', work_start_time: '7.43 AM', work_end_time: '5.30 PM', lunch_break_start_time: '1.00 PM', lunch_break_end_time: '2.00 PM' },
  { date: '10/3/2022', work_start_time: '7.43 AM', work_end_time: '5.30 PM', lunch_break_start_time: '1.00 PM', lunch_break_end_time: '2.00 PM' },
  { date: '10/3/2022', work_start_time: '7.40 AM', work_end_time: '5.30 PM', lunch_break_start_time: '1.00 PM', lunch_break_end_time: '2.00 PM' },
  { date: '10/3/2022', work_start_time: '7.43 AM', work_end_time: '5.30 PM', lunch_break_start_time: '1.00 PM', lunch_break_end_time: '2.00 PM' },
  { date: '10/3/2022', work_start_time: '7.42 AM', work_end_time: '5.30 PM', lunch_break_start_time: '1.00 PM', lunch_break_end_time: '2.00 PM' },
  { date: '10/3/2022', work_start_time: '7.42 AM', work_end_time: '5.30 PM', lunch_break_start_time: '1.00 PM', lunch_break_end_time: '2.00 PM' },
  { date: '10/3/2022', work_start_time: '7.43 AM', work_end_time: '5.30 PM', lunch_break_start_time: '1.00 PM', lunch_break_end_time: '2.00 PM' },
  { date: '10/3/2022', work_start_time: '7.43 AM', work_end_time: '5.30 PM', lunch_break_start_time: '1.00 PM', lunch_break_end_time: '2.00 PM' },
  { date: '10/3/2022', work_start_time: '7.40 AM', work_end_time: '5.30 PM', lunch_break_start_time: '1.00 PM', lunch_break_end_time: '2.00 PM' },
  { date: '10/3/2022', work_start_time: '7.43 AM', work_end_time: '5.30 PM', lunch_break_start_time: '1.00 PM', lunch_break_end_time: '2.00 PM' },
  { date: '10/3/2022', work_start_time: '7.42 AM', work_end_time: '5.30 PM', lunch_break_start_time: '1.00 PM', lunch_break_end_time: '2.00 PM' },
  { date: '10/3/2022', work_start_time: '7.42 AM', work_end_time: '5.30 PM', lunch_break_start_time: '1.00 PM', lunch_break_end_time: '2.00 PM' },
  { date: '10/3/2022', work_start_time: '7.43 AM', work_end_time: '5.30 PM', lunch_break_start_time: '1.00 PM', lunch_break_end_time: '2.00 PM' },
  { date: '10/3/2022', work_start_time: '7.43 AM', work_end_time: '5.30 PM', lunch_break_start_time: '1.00 PM', lunch_break_end_time: '2.00 PM' },
  { date: '10/3/2022', work_start_time: '7.40 AM', work_end_time: '5.30 PM', lunch_break_start_time: '1.00 PM', lunch_break_end_time: '2.00 PM' },
];

/**
 * @title Table with sorting
 */

@Component({
  selector: 'app-my-attendance',
  templateUrl: './my-attendance.component.html',
  styleUrls: ['./my-attendance.component.css']
})
export class MyAttendanceComponent implements OnInit {
  displayedColumns: string[] = ['date', 'work_start_time', 'work_end_time', 'lunch_break_start_time', 'lunch_break_end_time'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  constructor(private _liveAnnouncer: LiveAnnouncer) {
    
  }


  @ViewChild(MatSort)
  sort!: MatSort;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  ngOnInit(): void {
  }

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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

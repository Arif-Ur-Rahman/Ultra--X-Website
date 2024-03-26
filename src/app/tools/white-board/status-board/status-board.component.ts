import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';


export interface PeriodicElement {
  name: string;
  status: string;
  start_time: string;
  end_time: string;
  note: string;
  actions: boolean;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Jamal', status: 'Morning Break', start_time: '5.30 PM', end_time: '1.00 PM', note: '', actions: true },
  { name: 'Gopal', status: 'Lunch', start_time: '5.30 PM', end_time: '1.00 PM', note: '', actions: true },
  { name: 'Lizur', status: 'Meeting', start_time: '5.30 PM', end_time: '1.00 PM', note: 'Project meeting' , actions: true},
  { name: 'Shihab', status: 'Meeting', start_time: '5.30 PM', end_time: '1.00 PM', note: 'Project meeting' , actions: true},
  { name: 'Siam', status: 'Outside', start_time: '5.30 PM', end_time: '1.00 PM', note: 'Ghurte' , actions: true},
  { name: 'Arif', status: 'Outside', start_time: '5.30 PM', end_time: '1.00 PM', note: 'Ghurte' , actions: true},
  { name: 'Jamal', status: 'Morning Break', start_time: '5.30 PM', end_time: '1.00 PM', note: '', actions: true },
  { name: 'Gopal', status: 'Lunch', start_time: '5.30 PM', end_time: '1.00 PM', note: '', actions: true },
  { name: 'Lizur', status: 'Meeting', start_time: '5.30 PM', end_time: '1.00 PM', note: 'Project meeting' , actions: true},
  { name: 'Shihab', status: 'Meeting', start_time: '5.30 PM', end_time: '1.00 PM', note: 'Project meeting' , actions: true},
  { name: 'Siam', status: 'Outside', start_time: '5.30 PM', end_time: '1.00 PM', note: 'Ghurte' , actions: true},
  { name: 'Arif', status: 'Outside', start_time: '5.30 PM', end_time: '1.00 PM', note: 'Ghurte' , actions: true},
];


@Component({
  selector: 'app-status-board',
  templateUrl: './status-board.component.html',
  styleUrls: ['./status-board.component.css']
})
export class StatusBoardComponent implements OnInit {

  displayedColumns: string[] = ['name', 'status', 'start_time', 'end_time', 'note', 'actions'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
;
  constructor(private _liveAnnouncer: LiveAnnouncer) { }

  @ViewChild(MatSort)
  sort!: MatSort;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;


  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {

    this.dataSource.filterPredicate = function(data, filter: string): boolean {
      return data.name.toLowerCase().includes(filter) || data.status.toLowerCase().includes(filter);
    };
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
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

import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';


export interface UserData {
  id: string;
  name: string;
  leave_start: string;
  leave_end: string;
  leave_type: string;
  duration: string;

}

/** Constants used to fill up our data base. */

const NAMES: string[] = [
  'Gopal san',
  'Arif san',
  'Jamal san',
  'Siam san',
  'Shehab san',
  'Lizur san',
  'Sunny san',
  'Rakib san',
  'Rabby san',
  'Nafiz san',
  'Rifayet san',
  'Rahiful san',
  'Shezan san',
  'Omi san',
  'Saiful san',
  'Maruf san',
];

const LEAVE_TYPE: string[] = [
  'Casual',
  'Sick',
  'Sick',
  'Casual',
  'Sick',
  'Casual',
  'Sick',
  'Casual',
];


const LEAVE_START: string[] = [
  '2022-04-8',
  '2022-05-28',
  '2022-06-18',
  '2022-07-8',
  '2022-02-8',
  '2022-01-18',
  '2022-12-28',
  '2022-04-5',
];


const DURATION: string[] = [
  '7',
  '4',
  '3',
  '5',
  '3',
  '2',
  '6',
  '4',
  '5',
  '6',
  '7',
  '2',
  '1',
];

/**
 * @title Data table with sorting, pagination, and filtering.
 */

@Component({
  selector: 'app-leave-history',
  templateUrl: './leave-history.component.html',
  styleUrls: ['./leave-history.component.css']
})
export class LeaveHistoryComponent implements AfterViewInit  {

  displayedColumns: string[] = ['id', 'name','leave_start', 'leave_end', 'leave_type', 'duration'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort | any;

  constructor() {
    // Create 100 users
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))];
  const duration =
    DURATION[Math.round(Math.random())] ;
  const leave_start =
    LEAVE_START[Math.round(Math.random() * (LEAVE_START.length - 1))];
  const leave_type =
    LEAVE_TYPE[Math.round(Math.random() * (LEAVE_TYPE.length - 1))];


  return {
    id: id.toString(),
    name: name,
    leave_start: leave_start,
    leave_end: leave_start,
    leave_type:  leave_type,
    duration: duration,
  };

}

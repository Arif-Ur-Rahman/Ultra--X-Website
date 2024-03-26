// import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteConfirmationDialogComponent } from '../../dialog/delete-confirmation-dialog/delete-confirmation-dialog.component';
import { RaiseIssueDialogComponent } from '../../dialog/raise-issue-dialog/raise-issue-dialog.component';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-issue-card',
  templateUrl: './issue-card.component.html',
  styleUrls: ['./issue-card.component.css']
})
export class IssueCardComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  @Input() check_details:boolean |undefined;



  openEditDialog() {
    const dialogRef = this.dialog.open(RaiseIssueDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDeleteDialog() {
    const dialogRef = this.dialog.open(DeleteConfirmationDialogComponent);
  }

}

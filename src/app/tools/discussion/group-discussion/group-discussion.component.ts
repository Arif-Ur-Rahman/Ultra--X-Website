import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RaiseIssueDialogComponent } from '../../shared/dialog/raise-issue-dialog/raise-issue-dialog.component';
@Component({
  selector: 'app-group-discussion',
  templateUrl: './group-discussion.component.html',
  styleUrls: ['./group-discussion.component.css']
})
export class GroupDiscussionComponent implements OnInit {

  isClicked: string = "Raise an Issue";
  IsDetails: boolean = true;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  raiseIssueDialogOpen(data:any){
    if(data == "open_modal"){
      const dialogRef = this.dialog.open(RaiseIssueDialogComponent);
    }
  }
}

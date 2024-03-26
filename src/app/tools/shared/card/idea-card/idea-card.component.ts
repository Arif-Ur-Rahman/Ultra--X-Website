// import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteConfirmationDialogComponent } from '../../dialog/delete-confirmation-dialog/delete-confirmation-dialog.component';
import { ShareEditIdeaDialogComponent } from '../../dialog/share-edit-idea-dialog/share-edit-idea-dialog.component';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-idea-card',
  templateUrl: './idea-card.component.html',
  styleUrls: ['./idea-card.component.css']
})
export class IdeaCardComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  @Input() check_details:boolean |undefined;
  
  openEditDialog() {
    const dialogRef = this.dialog.open(ShareEditIdeaDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openDeleteDialog() {
    const dialogRef = this.dialog.open(DeleteConfirmationDialogComponent);
  }
}

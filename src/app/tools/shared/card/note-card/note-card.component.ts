import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateNoteDialogComponent } from '../../dialog/create-note-dialog/create-note-dialog.component';
import { DeleteConfirmationDialogComponent } from '../../dialog/delete-confirmation-dialog/delete-confirmation-dialog.component';
import { MakeArchiveConfirmationDialogComponent } from '../../dialog/make-archive-confirmation-dialog/make-archive-confirmation-dialog.component';
import { ViewDetailsNoteDialogComponent } from '../../dialog/view-details-note-dialog/view-details-note-dialog.component';
@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.css']
})
export class NoteCardComponent implements OnInit {
  importent = true;

  constructor(public dialog: MatDialog) { }
  ngOnInit(): void {
  }
  toggleImportent(): void {
    this.importent= !this.importent
  }
  openEditDialog() {
    const dialogRef = this.dialog.open(CreateNoteDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openDeleteDialog() {
    const dialogRef = this.dialog.open(DeleteConfirmationDialogComponent);
  }

  openArchiveDialog(){
    const dialogRef = this.dialog.open(MakeArchiveConfirmationDialogComponent);
  }
  openReadDialog(){
    const dialogRef = this.dialog.open(ViewDetailsNoteDialogComponent);
  }
}

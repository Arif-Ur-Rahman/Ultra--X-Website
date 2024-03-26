import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateNoteDialogComponent } from '../../shared/dialog/create-note-dialog/create-note-dialog.component';
@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  isClicked: string = "Wrire a Note";
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  createNoteDialogOpen(data:any){
    if(data == "open_modal"){
      const dialogRef = this.dialog.open(CreateNoteDialogComponent);
    }
  }
}

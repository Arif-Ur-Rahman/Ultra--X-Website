import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ShareEditIdeaDialogComponent } from '../../shared/dialog/share-edit-idea-dialog/share-edit-idea-dialog.component';
@Component({
  selector: 'app-my-ideas',
  templateUrl: './my-ideas.component.html',
  styleUrls: ['./my-ideas.component.css']
})
export class MyIdeasComponent implements OnInit {
  isClicked: string = "Share an Idea";
  IsDetails: boolean = true;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  shareIdeaDialogOpen(data:any){
    if(data == "open_modal"){
      const dialogRef = this.dialog.open(ShareEditIdeaDialogComponent);

    }
  }
}

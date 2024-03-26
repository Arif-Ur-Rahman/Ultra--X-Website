import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UploadRnrFileComponent } from '../../shared/dialog/upload-rnr-file/upload-rnr-file.component';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  isClicked: string = "Upload new Rules and Regulations";
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  UploadNewFile(data:any){
    if(data == "open_modal"){
      const dialogRef = this.dialog.open(UploadRnrFileComponent);
    }
  }
}

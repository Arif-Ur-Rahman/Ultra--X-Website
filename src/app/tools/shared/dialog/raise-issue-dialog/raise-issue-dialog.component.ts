import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-raise-issue-dialog',
  templateUrl: './raise-issue-dialog.component.html',
  styleUrls: ['./raise-issue-dialog.component.css']
})
export class RaiseIssueDialogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  toppings = new FormControl();
  toppingList: string[] = ['Arif', 'Siam', 'Gopal', 'Jamal', 'Shezan', 'Rahiful'];
}

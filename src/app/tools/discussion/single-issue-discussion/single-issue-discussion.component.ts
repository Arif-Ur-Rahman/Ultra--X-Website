import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-issue-discussion',
  templateUrl: './single-issue-discussion.component.html',
  styleUrls: ['./single-issue-discussion.component.css']
})
export class SingleIssueDiscussionComponent implements OnInit {
  IsDetails: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}

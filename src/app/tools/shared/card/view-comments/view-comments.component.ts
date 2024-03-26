import { Component, OnInit } from '@angular/core';
import { PostReplyComponent } from '../post-reply/post-reply.component';

@Component({
  selector: 'app-view-comments',
  templateUrl: './view-comments.component.html',
  styleUrls: ['./view-comments.component.css']
})
export class ViewCommentsComponent implements OnInit {
  showReply: boolean = false;
  liked: boolean= false;
  constructor() { }

  ngOnInit(): void {
  }

  actionliked(){
    this.liked= !this.liked;
  }
  openPostReplyCard() {
    this.showReply = !this.showReply;
  }
}

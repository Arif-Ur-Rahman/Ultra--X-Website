import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-board-comment',
  templateUrl: './board-comment.component.html',
  styleUrls: ['./board-comment.component.css']
})
export class BoardCommentComponent implements OnInit {
  @Input() comment;

  @Output() emitComment: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onCommentEmit(comment: Comment){
    this.emitComment.emit(comment);
  }

}

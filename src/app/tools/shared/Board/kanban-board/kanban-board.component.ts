import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { kanbanBoardService } from 'src/app/service/project/kanbanBoard.service';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.css']
})
export class KanbanBoardComponent implements OnInit {
  


  constructor(public kanbanBoardService: kanbanBoardService) { }


  ngOnInit(): void {
    console.log('BOARD - INIT');
  }


  onColorChange(color: string, columnId: number){
    this.kanbanBoardService.changeColumnColor(color, columnId);
  }

  addColumn(event: string){
    if(event){
      this.kanbanBoardService.addColumn(event);
    }
  }

  onAddCard(text: string, columnId: number){
    if(text){
      this.kanbanBoardService.addCard(text, columnId);
    }
  }

  onDeleteColumn(columnId: number){
    this.kanbanBoardService.deleteColumn(columnId);
  }

  onDeleteCard(cardId: number, columnId: number){
    this.kanbanBoardService.deleteCard(cardId, columnId);
  }

  onChangeLike(event: {card:any, increase: boolean}, columnId: number){
    const { card: {id}, increase} = event;
    this.kanbanBoardService.changeLike(id, columnId, increase)
  }

  onChangDislike(event: {card:any, decrease: boolean}, columnId: number){
    const { card: {id}, decrease} = event;
    this.kanbanBoardService.changeDisike(id, columnId, decrease)
  }

  onAddComment(event: {id: number, text: string}, columnId: number){
    this.kanbanBoardService.addComment(columnId, event.id, event.text);
  }

  onDeleteComment(comment, columnId, item){
    this.kanbanBoardService.deleteComment(columnId, item.id, comment.id);  
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

 

 
}
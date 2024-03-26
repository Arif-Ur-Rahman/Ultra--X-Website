import { Injectable } from "@angular/core";
import {BehaviorSubject} from 'rxjs';
import { Card, Column, Comment } from "src/app/tools/shared/models/board.model"; 

@Injectable({
    providedIn: 'root',
})

export class kanbanBoardService{
    private initBoard = [
        {
            id: 1,
            title: 'New',
            color: '#c4ff86',
            list:[
                {
                    id: 1,
                    text: 'New Task 1',
                    like: 8,
                    dislike: 2,
                    comments:[
                        {
                            id: 1,
                            title: 'New Task 1 comment here 1'
                        },
                        {
                            id: 2,
                            title: 'New Task 1 comment here 2'
                        }
                    ]
                },
                {
                    id: 2,
                    text: 'New Task 2',
                    like: 5,
                    dislike: 5,
                    comments:[
                        {
                            id: 1,
                            title: 'New Task 2 comment here'
                        }
                    ]
                },
                {
                    id: 3,
                    text: 'New Task 3',
                    like: 3,
                    dislike: 2,
                    comments:[
                        {
                            id: 1,
                            title: 'New Task 3 comment here'
                        }
                    ]
                },
                
            ]
        },

        {
            id: 2,
            title: 'Backlog',
            color: '#9BA17B',
            list:[
                {
                    id: 1,
                    text: 'Backlog Task 1',
                    like: 1,
                    dislike: 0,
                    comments:[
                        {
                            id: 1,
                            title: 'Backlog New comment 1'
                        }
                    ]
                },
                {
                    id: 2,
                    text: 'Backlog Task 2',
                    like: 5,
                    dislike: 1,
                    comments:[
                        {
                            id: 1,
                            title: 'Backlog New comment 1'
                        },
                        {
                            id: 2,
                            title: 'Backlog New comment 2'
                        },
                    ]
                },
                
            ]
        },

        {
            id: 3,
            title: 'Ready',
            color: '#CFB997',
            list:[
                {
                    id: 1,
                    text: 'Ready Task 1',
                    like: 10,
                    dislike: 5,
                    comments:[
                        {
                            id: 1,
                            title: 'Ready comment 1'
                        },
                        {
                            id: 2,
                            title: 'Ready comment 2'
                        },
                    ]
                },
                {
                    id: 2,
                    text: 'Ready Task 2',
                    like: 10,
                    dislike: 5,
                    comments:[
                        {
                            id: 1,
                            title: 'Ready 2 comment 1'
                        }
                    ]
                },
                
            ]
        },

        {
            id: 4,
            title: 'In Progress',
            color: '#FAD6A5',
            list:[
                {
                    id: 1,
                    text: 'Task 1',
                    like: 10,
                    dislike: 5,
                    comments:[
                        {
                            id: 1,
                            title: 'New comment'
                        }
                    ]
                },
                
            ]
        },

        {
            id: 5,
            title: 'In Review',
            color: '#A9AF7E',
            list:[
                {
                    id: 1,
                    text: 'Task 1',
                    like: 10,
                    dislike: 5,
                    comments:[
                        {
                            id: 1,
                            title: 'New comment'
                        }
                    ]
                },
                
            ]
        },
        {
            id: 6,
            title: 'Done',
            color: '#C8DBBE',
            list:[
                {
                    id: 1,
                    text: 'Task 1',
                    like: 10,
                    dislike: 5,
                    comments:[
                        {
                            id: 1,
                            title: 'New comment 1'
                        },
                        {
                            id: 2,
                            title: 'New comment 2'
                        },
                    ]
                },
                {
                    id: 2,
                    text: 'Task 2',
                    like: 10,
                    dislike: 5,
                    comments:[
                        {
                            id: 1,
                            title: 'New comment'
                        }
                    ]
                },
                {
                    id: 3,
                    text: 'Task 3',
                    like: 10,
                    dislike: 5,
                    comments:[
                        {
                            id: 1,
                            title: 'New comment'
                        }
                    ]
                },
                
            ]
        },
    ]

    private board: Column[] = this.initBoard;
    private board$ = new BehaviorSubject<Column[]>(this.initBoard);

    getBoard$(){
        return this.board$.asObservable()
    }

    changeColumnColor(color: string, columnId: number){
        this.board = this.board.map((column: Column) =>{
            if(column.id === columnId){
                column.color = color;
            }
            return column;
        });
        this.board$.next([...this.board]);
    }

    addColumn(title: string){
        const newColumn: Column ={
            id: Date.now(),
            title: title,
            color: '#F7E0EA',
            list:[]
        };
        this.board = [...this.board, newColumn];
        this.board$.next([...this.board]);
    }

    addCard(text: string, columnId: number){
        const newCard: Card = {
            id: Date.now(),
            text,
            like: 0,
            dislike: 0,
            comments: [],
        };

        this.board = this.board.map((column: Column) => {
            if(column.id === columnId){
                column.list = [newCard, ...column.list];
            }
            return column;
        });

        this.board$.next([...this.board]);
    }

    deleteColumn(columnId){
        this.board = this.board.filter((column: Column) => column.id !== columnId);
        this.board$.next([...this.board]);
    }

    deleteCard(cardId: number, columnId: number){
        this.board = this.board.map((column: Column) => {
            if(column.id === columnId){
                column.list = column.list.filter((card: Card) => card.id !== cardId);
            }
            return column;
        });
        
        this.board$.next([...this.board]);
    }

    changeDisike(cardId: number, columnId: number, decrease: boolean){
        this.board = this.board.map((column: Column) =>{
            if(column.id === columnId){
                const list = column.list.map((card: Card) =>{
                    if(card.id === cardId){
                        if(decrease){
                            card.dislike++;
                        }
                        // else{
                        //     if(card.like > 0){
                        //         card.dislike--;
                        //     }
                        // }
                    }
                    return card;
                });
                column.list = list;
                return column;
            }
            else{
                return column;
            }
        });
        this.board$.next([...this.board]);
    }

    changeLike(cardId: number, columnId: number, increase: boolean){
        this.board = this.board.map((column: Column) =>{
            if(column.id === columnId){
                const list = column.list.map((card: Card) =>{
                    if(card.id === cardId){
                        if(increase){
                            card.like++;
                        }
                        // else{
                        //     if(card.like > 0){
                        //         card.dislike--;
                        //     }
                        // }
                    }
                    return card;
                });
                column.list = list;
                return column;
            }
            else{
                return column;
            }
        });
        this.board$.next([...this.board]);
    }

    addComment(columnId: number, cardId: number, title: string){
        this.board = this.board.map((column: Column) =>{
            if(column.id === columnId){
                const list = column.list.map((card: Card) =>{
                    
                    if(card.id === cardId){
                        const newComment = {
                            id: Date.now(),
                            title,
                        };
                        
                        card.comments = [newComment, ...card.comments];
                    }
                    //console.log(card);
                    return card;
                });
                column.list = list;
            }
           return column;
        });

        this.board$.next([...this.board]);

    }

    deleteComment(columnId, itemId, commentId){
        this.board = this.board.map((column: Column) =>{
            if(column.id === columnId){
                const list = column.list.map(item =>{
                    if(item.id === itemId){
                        item.comments = item.comments.filter((comment: Comment) =>{
                            return comment.id !== commentId
                        })
                    }
                    return item;
                })
                column.list = list;
            }
            return column;
        })
        this.board$.next([...this.board]);
    }
}
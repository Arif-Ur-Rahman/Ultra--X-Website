import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css']
})
export class TaskCardComponent implements OnInit {
  // @Input() item!: string;

  constructor() { }

  @ViewChild(MatAccordion)
  accordion!: MatAccordion;
  ngOnInit(): void {
  }

}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';

enum colors{
  RED = "#c4ff86",
  GREEN = "#9BA17B",
  BLUE = "#CFB997",
  ORANGE = "#FAD6A5",
  YELLOW = "#A9AF7E",
  VIOLET = "#C8DBBE"
}


@Component({
  selector: 'app-color-panel',
  templateUrl: './color-panel.component.html',
  styleUrls: ['./color-panel.component.css']
})
export class ColorPanelComponent implements OnInit {

  @Output() emitColor: EventEmitter<string> = new EventEmitter();

  colorsData = Object.values(colors);

  constructor() { }

  ngOnInit(): void {
  }

  onColorEmit(color: string){
    this.emitColor.emit(color);
  }

}

import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() numberEvent = new EventEmitter<number>();
  num: number = 0;
  timer: any;
  constructor() { }

  ngOnInit() {
  }

  onStart() {
    this.timer = setInterval(() => {
      this.numberEvent.emit(this.num++);
    }, 1000);
  }

  onStop() {
    clearInterval(this.timer);
  }

}

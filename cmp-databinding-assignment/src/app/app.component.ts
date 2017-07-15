import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  evens: number[] = [];
  odds: number[] = [];

  getNumber(event) {
    event % 2 === 0 ? this.evens.push(event) : this.odds.push(event);
  }
}

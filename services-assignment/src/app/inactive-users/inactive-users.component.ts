import { Component, EventEmitter, Input, Output } from '@angular/core';

import { UserService } from "../user.service";
import { CounterService } from "../counter.service";

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css'],
  providers: [CounterService]
})
export class InactiveUsersComponent {
  @Input() users: string[];
  counter: number = 0;

  constructor(private userService: UserService, private counterService: CounterService) {
    this.counterService.counterUpdated.subscribe(() => this.counter++);
  }

  onSetToActive(id: number) {
    this.userService.setToActive(id);
    this.counterService.counterUpdated.emit();
  }
}

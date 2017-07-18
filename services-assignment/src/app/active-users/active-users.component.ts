import { Component, EventEmitter, Input, Output } from '@angular/core';

import { UserService } from "../user.service";
import { CounterService } from "../counter.service";

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
  providers: [CounterService]
})
export class ActiveUsersComponent {
  @Input() users: string[];
  counter: number = 0;

  constructor(private userService: UserService, private counterService: CounterService) {
    this.counterService.counterUpdated.subscribe(() => this.counter++);
  }

  onSetToInactive(id: number) {
    this.userService.setToInactive(id);
    this.counterService.counterUpdated.emit();
  }
}

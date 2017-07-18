import { EventEmitter } from '@angular/core';

export class CounterService {
  counterUpdated = new EventEmitter<any>();
}

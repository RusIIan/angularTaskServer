import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  constructor() { }
  activeToInactive = 0;
  inactiveToActive = 0;
  activePlus() {
    this.activeToInactive++;
    console.log(this.activeToInactive)
  };
  inactivePlus() {
    this.inactiveToActive++;
    console.log(this.inactiveToActive)
  };
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserCounterService {
 activeToInactiveCounter=0;
 InActiveToActiveCounter=0;

  constructor() { }
  incrementActiveToInactive(){
    this.activeToInactiveCounter++;
    console.log('ActiveToInactiveCounter :',this.activeToInactiveCounter);
  }
  incrementInactiveToActive(){
    this.InActiveToActiveCounter++;
    console.log('InActiveToActiveCounter :',this.InActiveToActiveCounter);
  }
}

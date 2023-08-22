import {  Injectable } from '@angular/core';
import { UserCounterService } from './user-counter.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];
  constructor(private userCounterService:UserCounterService) { }


  SetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.userCounterService.incrementInactiveToActive()
  }

  SetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.userCounterService.incrementActiveToInactive()
  }

  
}

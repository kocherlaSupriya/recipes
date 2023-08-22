import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.scss']
})
export class ActiveUsersComponent {
  users!:string[];
  constructor(private userService:UserService){}
  ngOnInit(): void {
    this.users=this.userService.activeUsers;
  }
  onSetToInactive(id: number) {
    this.userService.SetToInactive(id)
  }
}

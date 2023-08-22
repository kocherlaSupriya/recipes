import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.scss']
})
export class InactiveUsersComponent implements OnInit {
users!:string[];
  constructor(private userService:UserService){}
  ngOnInit(): void {
    this.users=this.userService.inactiveUsers;
  }
  onSetToActive(id: number) {
    this.userService.SetToActive(id)
  }
}

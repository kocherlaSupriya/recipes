import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  constructor(private router:Router){}
  users=[
    {id:1,name:"apple"},
    {id:2,name:"mango"},
    {id:3,name:"grapes"}
  ]
  viewUser(id:number){
this.router.navigate(['/users',id])
  }
}

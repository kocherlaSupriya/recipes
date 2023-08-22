import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit{
  id!:number;
  idNumber!:number;
constructor(private route:ActivatedRoute){}
ngOnInit(): void {
 this.id=this.route.snapshot.params['id'] ;

this.route.params.subscribe((paramsData:Params)=>{
  this.idNumber=paramsData['id']
 })
}
}

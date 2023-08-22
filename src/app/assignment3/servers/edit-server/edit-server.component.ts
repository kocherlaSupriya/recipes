import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.scss']
})
export class EditServerComponent implements OnInit {
constructor(private route:ActivatedRoute){}
id!:number;
ngOnInit(): void {
  console.log(this.route.snapshot.queryParams);
  // console.log(this.route.snapshot.fragment);
  this.id=this.route.snapshot.params['id']
console.log("id :",this.id)
console.log(typeof(this.id))

this.id=+this.route.snapshot.params['id']
console.log(typeof(this.id))
  // this.route.queryParams.subscribe((data)=>{console.log("query params data is :",data)})
  // this.route.fragment.subscribe((data)=>{console.log("fragment data is :",data)})
}
}

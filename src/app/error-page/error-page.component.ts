import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent implements OnInit{
  errorMessage!:string;
constructor(private route:ActivatedRoute){}
ngOnInit(): void {
  // console.log(this.route.snapshot.data['msg'])
  // this.errorMessage=this.route.snapshot.data['msg']
  this.route.data.subscribe((errormsg)=>{this.errorMessage=errormsg['msg']})
}
}

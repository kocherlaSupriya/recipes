import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-server',
  templateUrl: './view-server.component.html',
  styleUrls: ['./view-server.component.scss']
})
export class ViewServerComponent {
  constructor(private router:Router
    ,private route:ActivatedRoute){}
  viewServer(){
// this.router.navigate(['viewserver'],{relativeTo:this.route});
// console.log('view server')
this.router.navigate([2,'edit'],{relativeTo: this.route})
  }
}

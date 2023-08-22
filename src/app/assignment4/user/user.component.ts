import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, Subscription, count, filter, interval, map } from 'rxjs';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit,OnDestroy {
id!:number;
constructor(private route:ActivatedRoute,private userservice:UserService){}



  firstObsSubscription!:Subscription;
 
ngOnInit(): void {
  this.route.params.subscribe((params:Params)=>{
    this.id=params['id'];



  //  this.firstObsSubscription= interval(1000).subscribe((count)=>{console.log(count)})
  const customObservable=Observable.create((observer:any )=>{
    let count=0;
    setInterval(()=>{
      observer.next(count);
      if(count>=5){
        observer.error(new Error('count is greater than 3!...'));
        
      }
      if(count==4){
        observer.complete();
      }
      count++;
    },1000)
  })

 this.firstObsSubscription=customObservable.pipe(filter((data:number)=>{
  return data%2==0
 }),map((data:number)=>{
  return 'Round :'+ (data)
 }))
 .subscribe(
  (data:number)=>{console.log(data)},
 (error:Error)=>{console.log(error)},
 ()=>{console.log('Completed!')}
 )
  })
}
ngOnDestroy(): void {
  this.firstObsSubscription.unsubscribe()
}
}

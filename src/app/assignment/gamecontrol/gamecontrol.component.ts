import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.scss']
})
export class GamecontrolComponent {

  count=0;
  intervalId:any;
  @Output() countIncreased=new EventEmitter<number>();

   sayHello() {
    this.count+=1;
    this.countIncreased.emit(this.count)
  }
  
  setInterval(){
    this.intervalId = setInterval(() => {
      this.sayHello();
    }, 1000);
  }
 
  clearInterval(){
    clearInterval(this.intervalId);
  }


}

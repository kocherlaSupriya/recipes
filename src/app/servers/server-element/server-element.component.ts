import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { ServerElement } from '../serverElement.model';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit,OnChanges{
// @Input() serverElements:any;
// @Input() element!:{type:string,name:string,content:string};
@Input('singleElement') p!:ServerElement;
@Input() name!:string;
constructor(){
  console.log('constructor is called....')
}
ngOnInit(): void {
  console.log('ng oninit is called......')
}
ngOnChanges(changes:SimpleChanges){
  console.log('ng onchange is called......')
console.log(changes)
}


}

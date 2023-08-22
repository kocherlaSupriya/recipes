import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ServerElement } from '../serverElement.model';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss']
})
export class CockpitComponent {
  serverName = '';
  serverContent = '';
  @ViewChild('address',{static:true}) address!:ElementRef;

  @Output() cockServerData=new EventEmitter<{name:string,content:string}>();
  @Output('bpData') cockBlueprintData=new EventEmitter<{name:string,content:string}>();

  addServer() {
   this.cockServerData.emit({name:this.serverName,content:this.serverContent})
  }

  addServerBluePrint() {
    this.cockBlueprintData.emit({name:this.serverName,content:this.serverContent})
  }
  getAddress(addre:HTMLInputElement){
console.log(addre.value)
console.log('address from viewchild is :',this.address.nativeElement.value)
  }
}

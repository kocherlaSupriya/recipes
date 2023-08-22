import { Component } from '@angular/core';
import { ServerElement } from 'src/app/servers/serverElement.model';



@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss'],
})
export class ServerComponent {
  
  serverElements:ServerElement[] = [];
  addServer(serverData:{name:string,content:string}) {
    this.serverElements.push({
      type: 'server',
      name:serverData.name,
      content:serverData.content
    });
  }

  addServerBluePrint(blueprintData:{name:string,content:string}) {
    this.serverElements.push({
      type: 'blueprint',
      name:blueprintData.name,
      content:blueprintData.content
    });
  }
  onchangesFirst(){
    this.serverElements[0].name='changed!..'
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = "No Server was Created!";
  serverName: string = "";
  userName: string = "";
  allowUserName: boolean = false;
  serverCreated: boolean = false;
  servers: string[]= ["Test 1", "Test 2"];


  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = this.serverName + " Server was Created!";
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }

  onUpdateUserName() {
   this.userName = '';
  }
} 

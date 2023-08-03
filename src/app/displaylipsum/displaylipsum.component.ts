import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-displaylipsum',
  templateUrl: './displaylipsum.component.html',
  styleUrls: ['./displaylipsum.component.css']
})
export class DisplaylipsumComponent implements OnInit {
  displayparagraph: boolean = true;
  displaylogs: string[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  toggleDisplay() {
    this.displayparagraph = !this.displayparagraph;
    const now = new Date();
    let logentry: string = "Switched to " + this.displayparagraph + " at " + now.toLocaleString();
    this.displaylogs.push(logentry);
  }

  getColor() {
    return this.displaylogs.length >= 5 ? 'blue' : 'transparent';
  }  
}

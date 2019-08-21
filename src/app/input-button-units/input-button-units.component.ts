import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-button-units',
  template: `
    <p>
      input-button-units works!<br/>
      The title is: {{title}}
    </p>

    <input [value]="title">
    <button (click)="changeTitle('Button Clicked !')">Save</button>
  `,
  styleUrls: ['./input-button-units.component.css']
})
export class InputButtonUnitsComponent implements OnInit {
  title: string = 'mon petit poney';
  
  constructor() {}
  
  
  ngOnInit() {
  }
  
  changeTitle(newTitle: string){
    this.title = newTitle;
  }
}

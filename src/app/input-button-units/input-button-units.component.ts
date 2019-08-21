import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-button-units',
  template: `
    <input #inputElementRef
            [value]="title" 
            (keyup.enter)="changeTitle($event.target.value)">

    <button (click)="changeTitle(inputElementRef.value)">
      Save
    </button>
  `,
  styleUrls: ['./input-button-units.component.css']
})
export class InputButtonUnitsComponent implements OnInit {
  title: string = 'mon petit poney';

  constructor() { }


  ngOnInit() {
  }

  changeTitle(newTitle: string) {
    this.title = newTitle;
  }
}

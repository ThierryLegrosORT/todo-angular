import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-button-units',
  template: `
    <input class="todo-input"
            #inputElementRef
            [value]="title" 
            (keyup.enter)="submitValue($event.target.value)">

    <button 
    class="btn"
    (click)="submitValue(inputElementRef.value)">
      Save
    </button>
  `,
  styleUrls: ['./input-button-units.component.css']
})
export class InputButtonUnitsComponent implements OnInit {
  @Output() submit: EventEmitter<string> = new EventEmitter();

  title: string = 'mon petit poney';

  constructor() { }

  ngOnInit() {
  }

  submitValue(newTitle: string) {
    this.submit.emit(newTitle);
  }
}

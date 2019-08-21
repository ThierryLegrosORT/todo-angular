import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
  <h1>
  Welcome to {{ title }}
  </h1>

  <app-input-button-units></app-input-button-units>
  <app-input-button-units></app-input-button-units>
  <app-input-button-units></app-input-button-units>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My ToDo-List';
}

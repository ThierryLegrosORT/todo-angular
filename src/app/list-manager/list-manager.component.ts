import { Component } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-list-manager',
  template: `
  <app-input-button-units (submit)="addItem($event)"></app-input-button-units>
  <ul>
    <li *ngFor="let todoItem of todoList">
      <app-todo-item [item]="todoItem"></app-todo-item>
    </li>
  </ul>
  `,
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent {
  todoList: TodoItem[] = [
    {title: 'install NodeJS'},
    {title: 'install Angular CLI'},
    {title: 'create new app'},
    {title: 'serve app'},
    {title: 'develop app'},
    {title: 'deploy app'},
  ];
  addItem(title: string){
    this.todoList.push({title});
  }

}
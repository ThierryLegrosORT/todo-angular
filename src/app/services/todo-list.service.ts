import { Injectable } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  private todoList: TodoItem[] = [
    {title: 'Install NodeJS'},
    {title: 'Install Angular CLI'},
    {title: 'Create new app'},
    {title: 'Serve App'},
    {title: 'Develop app'},
    {title: 'Deploy app'},
  ];

  constructor() { }

  getTodoList(){
    return this.todoList;
  }
}

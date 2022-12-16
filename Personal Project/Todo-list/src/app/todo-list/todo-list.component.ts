import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  description = '';
  complete = '';
  todos: any[]= [
    {
      description: 'Chores',
      Complete: 'true',
    },
    {
      Complete: 'false',
      description: 'Homework',
    },
  ];
  addtodo() {
    this.todos.push({
      description: this.description,
      complete: this.complete,
    });
  }
  deletetodo(i :any){
    this.todos.splice(i,1);
  }
}

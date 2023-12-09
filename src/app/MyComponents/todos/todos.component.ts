import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';

import {Todo} from '../../Todo';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, TodoItemComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
  todos: Todo[];

  constructor() {
    this.todos = [
      {
        sno: 3,
        title: 'My title',
        desc: 'My desc',
        active: true
      },
      {
        sno: 4,
        title: 'My title 4',
        desc: 'My desc 4',
        active: true
      },
      {
        sno: 5,
        title: 'My title 5',
        desc: 'My desc 5',
        active: true
      }
    ];
  }

  ngOnInit(): void {}

  deleteTodo(todo:Todo) {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }
}

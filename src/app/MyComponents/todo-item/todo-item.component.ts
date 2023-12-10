import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Todo } from '../../Todo';
import { AddTodoComponent } from '../add-todo/add-todo.component';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [AddTodoComponent],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input() todo: Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  
  ngOnInit(): void {}

  constructor() {
    
  } 

  onClick(todo: Todo) {
    this.todoDelete.emit(todo);
    console.log('delete buttin has been triggered');
  }
}

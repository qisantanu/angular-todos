import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Todo } from '../../Todo';
import { AddTodoComponent } from '../add-todo/add-todo.component';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [AddTodoComponent, CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input() todo: Todo;
  @Input() ind; number;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoMakeComplete: EventEmitter<Todo> = new EventEmitter();
  
  ngOnInit(): void {}

  constructor() {
    
  } 

  onClick(todo: Todo) {
    this.todoDelete.emit(todo);
    console.log('delete buttin has been triggered');
  }

  onCheckboxClick(todo: Todo) {
    this.todoMakeComplete.emit(todo);
    console.log('done todo check box triggered');
  }
}

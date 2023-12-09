import { Component, Input, Output, EventEmitter } from '@angular/core';
//import * as EventEmitter from "node:events";
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
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

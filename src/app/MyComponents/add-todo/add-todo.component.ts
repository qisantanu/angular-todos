import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})

export class AddTodoComponent {
  title:string;
  desc:string;

  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  ngOnInit(): void {}

  constructor() {
    
  } 

  onSubmit() {
    const todo = {
      desc: this.desc,
      title: this.title,
      active: true,
      sno: 10
    }
    console.log("---" + todo)
    this.todoAdd.emit(todo);
    console.log('Submit button has been triggered');
  }
}

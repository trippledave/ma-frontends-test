import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToDo } from '../model/todo';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() item: ToDo; // decorate the property with @Input()
  @Output() deleted = new EventEmitter<ToDo>();

  constructor() { }

  ngOnInit(): void {
    console.log("onint");
    console.log(this.item);
  }

  delete(): void {
    console.log("delete");
    this.deleted.emit(this.item);
  }
}

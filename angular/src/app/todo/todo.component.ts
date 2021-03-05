import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToDo } from '../model/todo';
import { ThemeService } from '../service/theme.service';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: ToDo[] = [
    { id: 1, task: "clean the house" },
    { id: 2, task: "buy milk" },
  ];

  inputFormControl = new FormControl('', [Validators.required]);

  constructor(private route: ActivatedRoute, private themeService: ThemeService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.themeService.changeTheme(params['color']);
    });
  }

  add(task: string): void {
    task = task.trim();
    if (!task) { return; }
    this.todos.push({ task, id: this.todos.length + 1 } as ToDo);
  }

  onDelete(todo: ToDo): void {
    this.todos = this.todos.filter(h => h !== todo);
  }
}
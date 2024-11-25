import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Task } from '../models/task.model';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputComponent } from '../input/input.component';
import { TodoComponent } from '../todo/todo.component';


@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [NgFor, FormsModule, InputComponent, TodoComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})

export class TodoListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.getTasks().subscribe(tasks => this.tasks = tasks);
  }

  createTask(title: string) {
    const newTask: Task = { title, completed: false };
    this.todoService.addTask(newTask);
  }

  updateTask(task: Task) {
    this.todoService.updateTask(task);
  }

  deleteTask(taskId: string) {
    this.todoService.deleteTask(taskId);
  }
}

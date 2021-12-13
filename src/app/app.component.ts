import { Component } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  config: { [key: string]: string } | null = null;
  tasks: Task[] = [
    {
      name: 'Siłownia',
      deadline: '2022-01-02',
      done: false,
    },
    {
      name: 'Nauka Angulara',
      deadline: '2022-01-03',
      done: false,
    },
    {
      name: 'Sprzątanie kuwety',
      deadline: '2022-01-04',
      done: false,
    },
  ];

  constructor() {
    setTimeout(() => {
      this.config = {
        title: 'Lista zadań',
        footer: '© Lista zadań zbudowana w Angularze.',
        date: new Date().toDateString(),
      };
    }, 500);
  }

  clearTasks() {
    this.tasks = [];
  }



  createTask(name: string, deadline: string) {
    const task: Task = {
      name: name,
      deadline: deadline,
      done: false,
    };
    this.tasks.push(task);
  }
}

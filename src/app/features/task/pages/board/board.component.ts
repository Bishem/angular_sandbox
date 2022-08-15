import { last, takeLast } from 'rxjs/operators';
import { TaskService } from '@core/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/auth';
import { Task } from '@core/models';
import { switchMap } from 'rxjs';

@Component({
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.less'],
})
export class BoardComponent implements OnInit {
  tasks: Task[] = [];

  constructor(
    private taskService: TaskService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authService.user
      .pipe(
        switchMap((user) => this.taskService.fetchMatching({ user } as Task))
      )
      .subscribe({ next: (tasks) => (this.tasks = tasks) });
  }
}

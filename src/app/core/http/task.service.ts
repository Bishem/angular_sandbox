import { Injectable } from '@angular/core';
import { Task } from '@core/models';
import { ApiService } from './core';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private root = 'task';

  constructor(private api: ApiService<Task>) {}

  fetchMatching(task: Task) {
    return this.api.fetchMatchingAt(this.root, 'match', task);
  }

  fetchAll() {
    return this.api.fetchAll(this.root);
  }
}

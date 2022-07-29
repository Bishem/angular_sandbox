import { Injectable } from '@angular/core';
import { Task } from '@core/models';
import { Dictionary } from '@shared/interfaces';
import { ApiService } from '@core/http/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private path = '/task';

  constructor(private apiService: ApiService) { }

  getTask(id: number): Promise<Task> {
    return this.apiService.get<Task>(`${this.path}/${id}`);
  }

  getTasks(): Promise<Task[]> {
    return this.apiService.getList<Task>(`${this.path}`);
  }

  createTask(task: Task): Promise<Task> {
    return this.apiService.post<Task>(`${this.path}`, task);
  }

  deleteTask(id: number): Promise<Dictionary> {
    return this.apiService.delete<Task>(`${this.path}/${id}`);
  }

  updateTask(task: Task): Promise<Dictionary> {
    return this.apiService.put<Task>(`${this.path}`, task);
  }
}

import { Observable } from 'rxjs/internal/Observable';
import { Injectable } from '@angular/core';
import { Task } from '@core/models';
import { ApiService } from './core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private path = '/task';

  constructor(private apiService: ApiService) { }

  get(id: number): Observable<Task> {
    return this.apiService.get<Task>(`${this.path}/${id}`);
  }

  getAll(): Observable<Task[]> {
    return this.apiService.getAll<Task[]>(`${this.path}`);
  }

  create(task: Task): Observable<Task> {
    return this.apiService.post<Task>(`${this.path}`, task);
  }

  delete(id: number): Observable<Task> {
    return this.apiService.delete<Task>(`${this.path}/${id}`);
  }

  update(task: Task): Observable<Task> {
    return this.apiService.put<Task>(`${this.path}`, task);
  }
}

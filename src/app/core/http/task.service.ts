import { Injectable } from '@angular/core';
import { Task } from '@core/models';
import { ApiService } from './core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private apiService: ApiService<Task>) {
    apiService.path = '/task';
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpMethod } from '@core/http/util';

@Injectable({
  providedIn: 'root',
})
export class ApiService<T> {
  constructor(private http: HttpClient) {}

  fetch(root: string, target: string) {
    return this.http.get<T>(`/${root}/${target}`);
  }

  fetchAt(root: string, path: string, target: string) {
    return this.http.get<T>(`/${root}/${path}/${target}`);
  }

  fetchMatching(root: string, body: T) {
    return this.http.post<T[]>(`/${root}`, body);
  }

  fetchMatchingAt(root: string, path: string, body: T) {
    return this.http.post<T[]>(`/${root}/${path}`, body);
  }

  fetchAll(root: string) {
    return this.http.get<T[]>(`/${root}`);
  }

  create(root: string, body: T) {
    return this.http.post<T>(`/${root}`, body);
  }

  createAt(root: string, path: string, body: T) {
    return this.http.post<T>(`/${root}/${path}`, body);
  }

  delete(root: string, target: string) {
    return this.http.delete<boolean>(`/${root}/${target}`);
  }

  deleteAt(root: string, path: string, target: string) {
    return this.http.delete<boolean>(`/${root}/${path}/${target}`);
  }

  update(root: string, body: T) {
    return this.http.put<T>(`/${root}`, body);
  }

  updateAt(root: string, path: string, body: T) {
    return this.http.put<T>(`/${root}/${path}`, body);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class ApiService<T> {

  private _path: string = '';

  constructor(private http: HttpClient) { }

  fetch(value: string): Observable<T> {
    return this.http.get<T>(`${this.path}/${value}`).pipe(retry(1));
  }

  fetchMatching(property: string, value: string): Observable<T[]> {
    return this.http.get<T[]>(`${this.path}?${property}=${value}`).pipe(retry(1));
  }

  fetchAll(): Observable<T[]> {
    return this.http.get<T[]>(this.path).pipe(retry(1));
  }

  create(body: T): Observable<T> {
    return this.http.post<T>(this.path, body).pipe(retry(1));
  }

  createAt(body: T, route: string): Observable<T> {
    return this.http.post<T>(`${this.path}/${route}`, body).pipe(retry(1));
  }

  delete(value: string): Observable<T> {
    return this.http.delete<T>(`${this.path}/${value}`).pipe(retry(1));
  }

  update(body: T): Observable<T> {
    return this.http.put<T>(this.path, body).pipe(retry(1));
  }

  get path(): string {
    return this.path;
  }

  set path(path:string) {
    this._path = path;
  }
}

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  get<T>(url: string): Observable<T> {
    return this.http.get<T>(url).pipe(retry(1));
  }

  getAll<T>(url: string): Observable<T[]> {
    return this.http.get<T[]>(url).pipe(retry(1));
  }

  post<T>(url: string, body: T): Observable<T> {
    return this.http.post<T>(url, body).pipe(retry(1));
  }

  delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(url).pipe(retry(1));
  }

  put<T>(url: string, body: T): Observable<T> {
    return this.http.put<T>(url, body).pipe(retry(1));
  }
}

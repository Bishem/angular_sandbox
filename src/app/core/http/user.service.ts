import { Injectable } from '@angular/core';
import { User } from '@core/models';
import { Observable } from 'rxjs/internal/Observable';
import { ApiService } from './core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private path = '/auth';

  constructor(private apiService: ApiService) { }

  authMe(): Observable<User> {
    return this.apiService.get<User>(`${this.path}/me`);
  }

  logIn(userSecret: User): Observable<User> {
    return this.apiService.post<User>(`${this.path}/login`, userSecret);
  }

  signUp(userSecret: User): Observable<User> {
    return this.apiService.post<User>(`${this.path}/signup`, userSecret);
  }

  update(user: User): Observable<User> {
    return this.apiService.put<User>(`${this.path}`, user);
  }

  signOut(userSecret: User): Observable<User> {
    return this.apiService.post<User>(`${this.path}/signout`, userSecret);
  }
}

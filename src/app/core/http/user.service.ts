import { Injectable } from '@angular/core';
import { User } from '@core/models';
import { Observable } from 'rxjs/internal/Observable';
import { ApiService } from './core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private apiService: ApiService<User>) {
    apiService.path = '/auth';
  }

  authMe(): Observable<User> {
    return this.apiService.fetch('me');
  }

  login(userSecret: User): Observable<User> {
    return this.apiService.createAt(userSecret, 'login');
  }

  signup(userSecret: User): Observable<User> {
    return this.apiService.createAt(userSecret, 'signup');
  }

  signout(userSecret: User): Observable<User> {
    return this.apiService.createAt(userSecret, 'signout');
  }
}

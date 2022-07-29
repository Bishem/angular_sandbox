import { Injectable } from '@angular/core';
import { User } from '@core/models';
import { Dictionary } from '@shared/interfaces';
import { ApiService } from '@core/http/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private path = '/auth';

  constructor(private apiService: ApiService) { }

  authMe(): Promise<User> {

    console.log('getting user');

    return this.apiService.get<User>(`${this.path}/me`);
  }

  logIn(userSecret: FormData): Promise<User> {

    console.log('signing in user');

    return this.apiService.post<User>(`${this.path}/login`, userSecret);
  }

  signUp(userSecret: FormData): Promise<User> {

    console.log('singing up user');

    return this.apiService.post<User>(`${this.path}/signup`, userSecret);
  }

  update(user: User): Promise<Dictionary> {
    return this.apiService.put<User>(`${this.path}`, user);
  }

  signOut(email: string): Promise<Dictionary> {
    return this.apiService.delete<User>(`${this.path}/signout`, { email });
  }
}

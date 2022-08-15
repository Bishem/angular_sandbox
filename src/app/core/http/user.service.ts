import { Injectable } from '@angular/core';
import { UserSecret } from '@core/auth/models';
import { User } from '@core/models';
import { ApiService } from './core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private root = 'user';

  constructor(private _api: ApiService<User>) {}

  get api(): ApiService<User> {
    return this._api;
  }
}

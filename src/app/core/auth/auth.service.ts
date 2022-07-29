import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { JwtService } from './jwt.service';
import { distinctUntilChanged } from 'rxjs/operators';
import { User } from '@core/models';
import { UserService } from '@core/http';

/**
 * Provides a base for auth workflow.
 * The Credentials interface as well as signIn/logout methods should be replaced with proper implementation.
 */
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _currentUser = new BehaviorSubject<User>({} as User);
  public currentUser = this._currentUser.asObservable().pipe(distinctUntilChanged());

  private _isAuthenticated = new BehaviorSubject<boolean>(false);
  public isAuthenticated = this._isAuthenticated.asObservable();

  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) {
    this.populate();
  }

  populate() {

    console.log('trying refreshing token');

    if (this.jwtService.getToken()) {

      console.log('refreshing token');

      this.userService.authMe()
        .then(user => this.setAuth(user))
        .catch(() => this.purgeAuth());
    }
  }

  attemptAuth(userSecret: FormData, isSigningUp = false) {

    if (isSigningUp) {
      return this.userService.signUp(userSecret).then(user => this.setAuth(user));
    }
    return this.userService.logIn(userSecret).then(user => this.setAuth(user));
  }

  setAuth(user: User) {

    console.log('setting auth');

    this._currentUser.next(user);
    this._isAuthenticated.next(true);
    this.jwtService.saveToken(user.token);
  }

  purgeAuth() {

    console.log('purging auth');

    this._currentUser.next({} as User);
    this._isAuthenticated.next(false);
    this.jwtService.destroyToken();
  }
}

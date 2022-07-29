import { Injectable } from '@angular/core';
import { UserService } from '@core/http';
import { User } from '@core/models';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { JwtService } from './jwt.service';

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
    if (this.jwtService.getToken()) {
      this.userService.authMe().subscribe({
        next: user => this.setAuth(user),
        error: () => this.purgeAuth()
      }).unsubscribe();
    }
  }

  attemptAuth(userSecret: User, isSigningUp = false) {
    const authBehavior = isSigningUp ? this.userService.signUp(userSecret) : this.userService.logIn(userSecret);
    return authBehavior.subscribe(user => this.setAuth(user));
  }

  setAuth(user: User) {
    this._currentUser.next(user);
    this._isAuthenticated.next(true);
    this.jwtService.saveToken(user.token);
  }

  purgeAuth() {
    this._currentUser.next({} as User);
    this._isAuthenticated.next(false);
    this.jwtService.destroyToken();
  }
}

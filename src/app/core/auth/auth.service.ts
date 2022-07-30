import { Injectable } from '@angular/core';
import { UserService } from '@core/http';
import { User } from '@core/models';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { distinctUntilChanged } from 'rxjs/operators';
import { JwtService } from '.';

/**
 * Provides a base for auth workflow
 */
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _user = new BehaviorSubject<User>({} as User);
  private _isAuth = new BehaviorSubject<boolean>(false);

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

  attemptAuth(userSecret: User, signup = false) {
    const authBehavior: Observable<User> = signup ? this.userService.signup(userSecret) : this.userService.login(userSecret);
    return authBehavior.subscribe(user => this.setAuth(user));
  }

  setAuth(user: User) {
    this._user.next(user);
    this._isAuth.next(true);
    this.jwtService.saveToken(user.token);
  }

  purgeAuth() {
    this._user.next({} as User);
    this._isAuth.next(false);
    this.jwtService.destroyToken();
  }

  /**
   * TODO check if behaves correctly on unsubscribe of cosuming entity, GOD NEEDS TESTING !!!
   *
   * must be unsubscribed
   */
  get user(): Observable<User> {
    return this._user.asObservable().pipe(distinctUntilChanged());
  }

  /**
  * TODO check if behaves correctly on unsubscribe of cosuming entity, GOD NEEDS TESTING !!!
  *
  * must be unsubscribed
  */
  get isAuth(): Observable<boolean> {
    return this._isAuth.asObservable();
  }
}

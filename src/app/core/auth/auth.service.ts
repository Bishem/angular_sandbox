import { distinctUntilChanged, take } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { ApiService } from '@core/http/core';
import { User } from '@core/models';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { JwtService } from '.';
import { UserSecret } from './models';

/**
 * Provides a base for auth workflow
 */
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private root = 'auth';
  private _user = new BehaviorSubject<User>({} as User);
  private _authenticated = new BehaviorSubject<boolean>(false);

  user = this._user.asObservable().pipe(distinctUntilChanged());
  authenticated = this._authenticated.asObservable();

  constructor(private api: ApiService<User>, private jwtService: JwtService) {
    if (this.jwtService.getToken()) {
      this.populate();
    }
  }

  /**
   * TODO check if behaves correctly on unsubscribe of consuming entity, GOD NEEDS TESTING !!!
   *
   * must be unsubscribed
   */
  attemptAuth(userSecret: UserSecret, signup = false) {
    const onConnect = signup ? this.signup(userSecret) : this.login(userSecret);
    return onConnect.subscribe({ next: (user) => this.setAuth(user) });
  }

  attemptPurge(signout = false) {
    const onExit = signout ? this.signout() : this.logout();
    return onExit.subscribe({ next: () => this.purgeAuth() });
  }

  private populate() {
    return this.authMe().subscribe({
      next: (user) => this.setAuth(user),
      error: () => this.purgeAuth(),
    });
  }

  private setAuth(user: User) {
    this._authenticated.next(true);
    this._user.next(user);
    this.jwtService.saveToken(user.token);
  }

  private purgeAuth() {
    this._authenticated.next(false);
    this._user.next({} as User);
    this.jwtService.destroyToken();
  }

  private authMe() {
    return this.api.fetch(this.root, 'me');
  }

  private login(userSecret: UserSecret) {
    return this.api.createAt(this.root, 'login', userSecret);
  }

  private signup(userSecret: UserSecret) {
    return this.api.createAt(this.root, 'signup', userSecret);
  }

  private logout() {
    return this.api.delete(this.root, 'logout');
  }

  private signout() {
    return this.api.delete(this.root, 'signout');
  }
}

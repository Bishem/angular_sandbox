import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot, CanActivate,
  CanLoad,
  Route, Router, RouterStateSnapshot, UrlSegment, UrlTree
} from '@angular/router';
import { AuthService } from '@core/auth';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.authService.isAuthenticated.pipe(take(1));
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {

    return this.authService.isAuthenticated
      .pipe(take(1), map(isAuth => {

        console.log('is auth no guard ', isAuth);

        if (!isAuth) {
          this.router
            .navigate(['/signIn'])
            .then(console.log)
            .catch(console.error);
        }
        return isAuth;
      }));
  }
}

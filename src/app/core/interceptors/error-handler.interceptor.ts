import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

/**
 * Adds a default error handler to all requests.
 */
@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next
      .handle(request)
      .pipe(catchError((error) => ErrorHandlerInterceptor.handle(error)));
  }

  // would normaly redirect to custom error page with error message properly handled, guessing here
  private static handle(error: HttpEvent<any>): Observable<HttpEvent<any>> {
    if (!environment.production) {
      console.error(error);
    }

    throw error;
  }
}

import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

// todo may need to add logic to handle error response type

/**
 * Adds a default error handler to all requests.
 */
@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerInterceptor implements HttpInterceptor {

  // Customize the default error handler here if needed
  private static errorHandler(error: HttpEvent<any>): Observable<HttpEvent<any>> {

    console.log('handeling error');

    if (!environment.production) {
      console.error(error);
    }

    throw error;
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log('intercepted error response');

    return next.handle(request).pipe(catchError(error => ErrorHandlerInterceptor.errorHandler(error)));
  }

}

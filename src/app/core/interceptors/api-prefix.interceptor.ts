import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';

/**
 * Prefixes all requests with `environment.api_url`.
 *
 * probleme with this interceptor is it removes type sent to api see if can be fixed
 */
@Injectable()
export class ApiPrefixInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(
      /^(http|https):/i.test(request.url)
        ? request
        : request.clone({ url: environment.apiUrl + request.url })
    );
  }
}

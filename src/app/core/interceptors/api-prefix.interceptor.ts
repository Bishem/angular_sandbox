import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';

/**
 * Prefixes all requests with `environment.api_url`.
 */
@Injectable({
  providedIn: 'root'
})
export class ApiPrefixInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const isRequestAnUrl = /^(http|https):/i.test(request.url);
    const requestAsUrl = request.clone({ url: environment.apiUrl + request.url });

    return next.handle(
      isRequestAnUrl ? request : requestAsUrl
    );
  }
}

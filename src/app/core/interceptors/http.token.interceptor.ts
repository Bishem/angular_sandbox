import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtService } from '@core/auth';

/**
 * Adds header authorization to the request using in storage token
 */
@Injectable({
  providedIn: 'root'
})
export class HttpTokenInterceptor implements HttpInterceptor {

  constructor(
    private jwtService: JwtService
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Accept-charset': 'utf8'
    });

    console.log('intercepted request without authaurization');

    const token = this.jwtService.getToken();

    if (this.jwtService.getToken()) {

      console.log('found token ', token);

      headers.append('Authorization', `Bearer ${token}`);
    }

    return next.handle(req.clone({ headers }));
  }
}

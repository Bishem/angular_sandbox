import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  private jwtKey = 'token';

  getToken(): string | null {

    console.log('getting token');

    return localStorage.getItem(this.jwtKey);
  }

  saveToken(token: string) {

    console.log('saving token');

    localStorage.setItem(this.jwtKey, token);
  }

  destroyToken() {

    console.log('destroying token');

    localStorage.removeItem(this.jwtKey);
  }
}

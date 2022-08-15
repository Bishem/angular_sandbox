import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JwtService {
  private jwtKey = 'token';

  getToken(): string | null {
    return localStorage.getItem(this.jwtKey);
  }

  saveToken(token: string) {
    localStorage.setItem(this.jwtKey, token);
  }

  destroyToken() {
    localStorage.removeItem(this.jwtKey);
  }
}

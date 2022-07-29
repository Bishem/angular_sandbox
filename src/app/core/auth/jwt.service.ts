import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  private jwtKey = 'token';

  getToken(): string | null {
    return sessionStorage.getItem(this.jwtKey);
  }

  saveToken(token: string) {
    sessionStorage.setItem(this.jwtKey, token);
  }

  destroyToken() {
    sessionStorage.removeItem(this.jwtKey);
  }
}

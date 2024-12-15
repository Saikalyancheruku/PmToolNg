import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenKey ='auth_token';
  constructor() { }



  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  // Method to set the JWT token
  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  // Method to remove the JWT token
  removeToken(): void {
    localStorage.removeItem(this.tokenKey);
  }

  // Check if the user is authenticated based on token presence
  isAuthenticated(): boolean {
    return this.getToken() !== null;
  }
}

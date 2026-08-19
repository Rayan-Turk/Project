import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

interface LoginResponse {
  token: string | null;
  isFirstLogin: boolean | null;
  message: string;
  permissions: unknown | null;
}

@Injectable({ providedIn: 'root' })
export class LoginService {
  private http = inject(HttpClient);
  private apiUrl =
    'https://ibrprojects.ibrgc.com/archiveapi/api/UserAccount/login';

  login(username: string, password: string) {
    return this.http.post<LoginResponse>(this.apiUrl, { username, password });
  }

  saveToken(token: string): void {
    localStorage.setItem('authToken', token);
  }

  //  getToken(): string | null {
  //  return localStorage.getItem('authToken');
  //}

  logout(): void {
    localStorage.removeItem('authToken');
  }
}

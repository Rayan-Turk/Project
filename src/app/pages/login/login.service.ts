import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

interface LoginResponse {
  token: string | null;
  isFirstLogin: boolean | null;
  message: string;
  permissions: unknown | null;
}

interface DecodedToken {
  'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier': string;
  'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name': string;
  'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress': string;
  'http://schemas.microsoft.com/ws/2008/06/identity/claims/role': string;
  permissions: string;
  exp: number;
  iss: string;
  aud: string;
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
    sessionStorage.setItem('auth_token', token);
  }

  getToken(): string | null {
    return sessionStorage.getItem('auth_token');
  }

  logout(): void {
    sessionStorage.removeItem('auth_token');
  }

  decodeToken(token: string): DecodedToken | null {
    try {
      const payload = token.split('.')[1];
      const decodedPayload = atob(payload);
      return JSON.parse(decodedPayload);
    } catch (err) {
      console.error('Failed to decode token', err);
      return null;
    }
  }

  getCurrentUser(): {
    name: string;
    role: string;
    permissions: string[];
  } | null {
    const token = this.getToken();
    if (!token) return null;

    const decoded = this.decodeToken(token);
    if (!decoded) return null;

    return {
      name: decoded[
        'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'
      ],
      role: decoded[
        'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'
      ],
      permissions: decoded.permissions.split(',').map((p) => p.trim()),
    };
  }
}

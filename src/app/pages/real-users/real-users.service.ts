import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { RealUser } from './real-user.model';

interface RegisterUserPayload {
  userName: string;
  email: string;
  password: string;
  roleName: string;
}

@Injectable({ providedIn: 'root' })
export class RealUsersService {
  private httpClient = inject(HttpClient);
  private baseUrl = 'https://ibrprojects.ibrgc.com/archiveapi/api/UserAccount';

  users = signal<RealUser[]>([]);

  fetchUsers() {
    this.httpClient.get<RealUser[]>(`${this.baseUrl}/getuserlist`).subscribe({
      next: (response) => this.users.set(response),
      error: (err) => console.error('Failed to fetch real users', err),
    });
  }

  registerUser(payload: RegisterUserPayload) {
    return this.httpClient.post(`${this.baseUrl}/register`, payload, {
      responseType: 'text' as 'json', // in case the API returns plain text like SaveRolePermissions did
    });
  }
}

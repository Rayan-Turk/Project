import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Role, SaveRolePermissionsPayload } from './role.model';

@Injectable({ providedIn: 'root' })
export class RolesService {
  private httpClient = inject(HttpClient);
  private baseUrl = 'https://ibrprojects.ibrgc.com/archiveapi/api/UserAccount';

  roles = signal<Role[]>([]);

  fetchRoles() {
    this.httpClient.get<Role[]>(`${this.baseUrl}/GetAllRoles`).subscribe({
      next: (response) => this.roles.set(response),
      error: (err) => console.error('Failed to fetch roles', err),
    });
  }

  getRolePermissions(roleName: string) {
    return this.httpClient.get<string[]>(
      `${this.baseUrl}/GetUserRolePermissions`,
      { params: { roleName } },
    );
  }

  saveRolePermissions(payload: SaveRolePermissionsPayload) {
    return this.httpClient.post(
      `${this.baseUrl}/SaveRolePermissions`,
      payload,
      { responseType: 'text' as 'json' },
    );
  }
}

import { Injectable, inject } from '@angular/core';
import { ALL_PERMISSIONS } from './permissions-data';
import { LoginService } from '../pages/login/login.service';

@Injectable({ providedIn: 'root' })
export class PermissionsService {
  private loginService = inject(LoginService);

  private getUserPermissionIds(): number[] {
    const currentUser = this.loginService.getCurrentUser();
    return currentUser?.permissions.map(Number) ?? [];
  }

  can(moduleName: string, action: 'Read' | 'Add' | 'Edit' | 'Delete'): boolean {
    const definition = ALL_PERMISSIONS.find(
      (p) => p.moduleName === moduleName && p.action === action,
    );
    if (!definition) return false;

    return this.getUserPermissionIds().includes(definition.id);
  }
}

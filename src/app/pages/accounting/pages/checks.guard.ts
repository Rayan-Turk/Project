import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { PermissionsService } from 'src/app/permissions/permissions.service';

export const checksViewGuard: CanActivateFn = () => {
  const permissionsService = inject(PermissionsService);
  const router = inject(Router);

  if (permissionsService.can('Accounting', 'Read')) {
    return true;
  }

  router.navigate(['/not-authorized']);
  return false;
};
export const checksAddGuard: CanActivateFn = () => {
  const permissionsService = inject(PermissionsService);
  const router = inject(Router);

  if (permissionsService.can('Accounting', 'Add')) {
    return true;
  }

  router.navigate(['/not-authorized']);
  return false;
};

export const checksEditGuard: CanActivateFn = () => {
  const permissionsService = inject(PermissionsService);
  const router = inject(Router);

  if (permissionsService.can('Accounting', 'Edit')) {
    return true;
  }

  router.navigate(['/not-authorized']);
  return false;
};

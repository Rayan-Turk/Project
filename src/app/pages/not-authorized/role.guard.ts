import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { LoginService } from '../login/login.service';

export const superAdminGuard: CanActivateFn = () => {
  const loginService = inject(LoginService);
  const router = inject(Router);

  const currentUser = loginService.getCurrentUser();

  if (currentUser && currentUser.role === 'SuperAdmin') {
    return true;
  }

  router.navigate(['/not-authorized']);
  return false;
};

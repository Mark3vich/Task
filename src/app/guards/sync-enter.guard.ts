import { inject } from '@angular/core';
import { AuthGuardService } from '../shared/services/authGuard.service';
import { Router } from '@angular/router';

export const syncEnterGuard = (): boolean => {
  const authService = inject(AuthGuardService);
  const route = inject(Router);
  if (authService.getStateUser() === false) {
    route.navigateByUrl('/authorization');
    return false;
  }
  return true;
};

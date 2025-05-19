import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AppStore } from '../../../app.store';
import { AuthService } from '../../../shared/services/auth.service';

export function redirectLoginIfNotAuthenticated(): CanActivateFn {
  return async (route) => {
    const authService = inject(AuthService);
    const router = inject(Router);
    const user = await authService.getAuthState();
    // const user = inject(AuthService);
    // console.log('user', user);
    if (!user) {
      // User is not authenticated, redirect to login page
      return router.parseUrl('/login');
    }
    return true;
  };
}

export function redirectToProductPageIfAuthenticated(): CanActivateFn {
  return async (route) => {
    const authService = inject(AuthService);
    const router = inject(Router);
    const user = await authService.getAuthState();
    // const user = inject(AuthService).user();
    // console.log('user', user);
    if (user) {
      // User is not authenticated, redirect to login page
      return router.parseUrl('/products');
    }
    return true;
  };
}

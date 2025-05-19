import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AppStore } from '../../../app.store';

export function redirectLoginIfNotAuthenticated(): CanActivateFn {
  return (route) => {
    const user = inject(AppStore).user();
    const router = inject(Router);
    if (!user) {
      // User is not authenticated, redirect to login page
      return router.parseUrl('/login');
    }
    return true;
  };
}

export function redirectToProductPageIfAuthenticated(): CanActivateFn {
  return (route) => {
    const user = inject(AppStore).user();
    const router = inject(Router);
    if (user) {
      // User is not authenticated, redirect to login page
      return router.parseUrl('/products');
    }
    return true;
  };
}

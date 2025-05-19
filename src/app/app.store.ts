import { computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { AuthService } from './shared/services/auth.service';

export interface User {
  email: string;
  name: string;
}

type AppState = {};

const initialState: AppState = {
  user: undefined,
};

export const AppStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed((store, authService = inject(AuthService)) => ({
    user: computed(() => authService.user()),
  })),
  withMethods(
    (store, router = inject(Router), authService = inject(AuthService)) => ({
      login: async (email: string, password: string) => {
        console.log('login fired');
        await authService.login(email, password);
        //navigate to products list page
        router.navigate(['/products']);
      },
      logout: async () => {
        console.log('logOut fired');

        await authService.logout();
        //navigate to login page
        router.navigate(['/login']);
      },
    })
  )
);

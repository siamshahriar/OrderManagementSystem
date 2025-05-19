import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';

export interface User {
  email: string;
  name: string;
}

type AppState = {
  user: User | undefined;
};

const initialState: AppState = {
  user: undefined,
};

export const AppStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store, router = inject(Router)) => ({
    login: () => {
      //call the login function
      patchState(store, { user: { email: 'siam@gmail.com', name: 'Siam' } });
      //navigate to products list page
      router.navigate(['/products']);
    },
    logout: () => {
      //call the logout function
      patchState(store, { user: undefined });
      console.log(store.user());
      //navigate to login page
      router.navigate(['/login']);
    },
  }))
);

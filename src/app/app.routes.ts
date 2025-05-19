import { Routes } from '@angular/router';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { LoginComponent } from './features/login/login.component';
import { LayoutComponent } from './components/shared/layout/layout.component';
import {
  redirectLoginIfNotAuthenticated,
  redirectToProductPageIfAuthenticated,
} from './components/shared/guards/auth.guards';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'products',
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [redirectLoginIfNotAuthenticated()],
    children: [
      {
        path: 'products',
        component: ProductListComponent,
      },
      {
        path: 'orders',
        component: OrdersComponent,
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [redirectToProductPageIfAuthenticated()],
  },
];

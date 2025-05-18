import { Routes } from '@angular/router';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { OrdersComponent } from './pages/orders/orders.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ProductListComponent,
  },
  {
    path: 'orders',
    component: OrdersComponent,
  },
];

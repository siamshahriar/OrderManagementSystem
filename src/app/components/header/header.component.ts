import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OrdersService } from '../../services/orders.service';
import { AppStore } from '../../app.store';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  ordersService = inject(OrdersService);
  orders = computed(() => this.ordersService.orders());
  store = inject(AppStore);

  ngOnInit() {
    this.ordersService.fetchOrders();
  }

  onLogOut() {
    this.store.logout();
  }
}

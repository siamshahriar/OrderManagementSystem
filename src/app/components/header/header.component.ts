import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  ordersService = inject(OrdersService);
  orders = computed(() => this.ordersService.orders());

  ngOnInit() {
    this.ordersService.fetchOrders();
  }
}

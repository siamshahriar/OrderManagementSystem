import { Component, inject } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { ItemComponent } from './item/item.component';

@Component({
  selector: 'app-orders',
  imports: [ItemComponent],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css',
})
export class OrdersComponent {
  ordersService = inject(OrdersService);

  
}

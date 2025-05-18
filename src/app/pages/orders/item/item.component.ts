import { Component, inject, input, output } from '@angular/core';
import { Product } from '../../product-list/product/product.component';
import { OrderedItem, OrdersService } from '../../../services/orders.service';

@Component({
  selector: 'app-item',
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css',
})
export class ItemComponent {
  item = input.required<OrderedItem>();
  ordersService = inject(OrdersService);
  btnClicked = output();
  onRemoveClick() {
    this.ordersService.removeFromorders(this.item().product);
    // console.log(this.item());
    this.btnClicked.emit(); // Emit event to parent if needed
  }
  onIncrementClick() {
    this.ordersService.incrementQuantity(this.item().product);
  }
  onDecrementClick() {
    this.ordersService.decrementQuantity(this.item().product);
  }
}

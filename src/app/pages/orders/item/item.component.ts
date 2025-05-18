import { Component, inject, input, output } from '@angular/core';
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
    if (this.item()._id) {
      this.ordersService.removeFromorders(this.item()._id!);
    } else {
      console.error('Item _id is undefined');
    }
    // console.log(this.item());
    this.btnClicked.emit(); // Emit event to parent if needed
  }
  onIncrementClick() {
    this.ordersService.incrementQuantity(this.item()._id!);
  }
  onDecrementClick() {
    this.ordersService.decrementQuantity(this.item()._id!);
  }
}

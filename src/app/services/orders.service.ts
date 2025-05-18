import { Injectable, signal } from '@angular/core';
import { Product } from '../pages/product-list/product/product.component';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  orders = signal<Product[]>([]);

  addToCart(product: Product) {
    this.orders.set([...this.orders(), product]);
    console.log(this.orders());
  }

  removeFromorders(product: Product) {
    console.log('removeFromorders', product);
    this.orders.set(this.orders().filter((p) => p.id !== product.id));
  }
}

export interface OrderedItem {
  product: Product;
  quantity: number;
}

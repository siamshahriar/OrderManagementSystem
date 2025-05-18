import { Injectable, signal } from '@angular/core';
import { Product } from '../pages/product-list/product/product.component';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  orders = signal<OrderedItem[]>([]);

  // addToCart(product: Product) {
  //   this.orders.set([...this.orders(), product]);
  //   console.log(this.orders());
  // }

  // Add a product to the cart
  addToCart(product: Product, quantity: number = 1) {
    const existingItem = this.orders().find(
      (item) => item.product.id === product.id
    );
    if (existingItem) {
      // If product exists, increment quantity
      existingItem.quantity += quantity;
    } else {
      // Add new item with specified quantity
      this.orders().push({ product, quantity });
    }
  }

  removeFromorders(product: Product) {
    this.orders.set(this.orders().filter((p) => p.product.id !== product.id));
  }

  // Get total quantity of items in the cart
  getTotalQuantity(): number {
    return this.orders().reduce((total, item) => total + item.quantity, 0);
  }

  // Get total price of items in the cart
  getTotalPrice(): number {
    return this.orders().reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  }

  //increment quantity of a product in the cart
  incrementQuantity(product: Product) {
    const existingItem = this.orders().find(
      (item) => item.product.id === product.id
    );
    if (existingItem) {
      existingItem.quantity++;
    }
  }

  //decrement quantity of a product in the cart
  decrementQuantity(product: Product) {
    const existingItem = this.orders().find(
      (item) => item.product.id === product.id
    );
    if (existingItem && existingItem.quantity > 1) {
      existingItem.quantity--;
    } else {
      this.removeFromorders(product);
    }
  }
}

export interface OrderedItem {
  product: Product;
  quantity: number;
}

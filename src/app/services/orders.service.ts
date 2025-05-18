import { Injectable, signal } from '@angular/core';
import { Product } from '../pages/product-list/product/product.component';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  orders = signal<OrderedItem[]>([]);
  apiUrl = 'https://order-management-system-server.vercel.app/orders';

  async fetchOrders() {
    const response = await fetch(this.apiUrl);
    const data = await response.json();
    this.orders.set(data);
  }

  // addToCart(product: Product) {
  //   this.orders.set([...this.orders(), product]);
  //   console.log(this.orders());
  // }

  // Add a product to the cart
  async addToCart(product: Product, quantity: number = 1) {
    // const existingItem = this.orders().find(
    //   (item) => item.product.id === product.id
    // );
    // if (existingItem) {
    //   // If product exists, increment quantity
    //   existingItem.quantity += quantity;
    // } else {
    //   // Add new item with specified quantity
    //   this.orders().push({ product, quantity });
    // }
    // POST to the backend
    await fetch(this.apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ product, quantity }),
    });
    // Refresh local orders
    await this.fetchOrders();

    // console.log(this.orders());
  }

  // removeFromorders(product: Product) {
  //   this.orders.set(this.orders().filter((p) => p.product.id !== product.id));
  // }

  async removeFromorders(_id: string) {
    await fetch(`${this.apiUrl}/${_id}`, {
      method: 'DELETE',
    });
    await this.fetchOrders();
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
  async incrementQuantity(_id: string) {
    await fetch(`${this.apiUrl}/${_id}/increase`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
    });
    await this.fetchOrders();
  }

  //decrement quantity of a product in the cart
  async decrementQuantity(_id: string) {
    await fetch(`${this.apiUrl}/${_id}/decrease`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
    });
    await this.fetchOrders();
  }
}

export interface OrderedItem {
  _id?: string;
  product: Product;
  quantity: number;
}

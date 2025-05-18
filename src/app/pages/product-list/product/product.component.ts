import { Component, inject, input, output } from '@angular/core';
import { OrdersService } from '../../../services/orders.service';
import { HttpClient } from '@angular/common/http';

export interface Product {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
  creationAt: string;
  updatedAt: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  image: string;
  creationAt: string;
  updatedAt: string;
}

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  ordersService = inject(OrdersService);
  product = input.required<Product>();
  btnClicked = output();
  http = inject(HttpClient);
  onOrderClick() {
    this.ordersService.addToCart(this.product(), 1);
    this.btnClicked.emit(); // Emit event to parent if needed
    // this.http
    //   .post('http://localhost:5000/orders', {
    //     product: this.product(),
    //     quantity: 1,
    //   })
    //   .subscribe((response) => {
    //     console.log('Product added to orders:', response);
    //   });
  }
}

import { Component, signal } from '@angular/core';
import { Product, ProductComponent } from './product/product.component';

@Component({
  selector: 'app-product-list',
  imports: [ProductComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  async ngOnInit() {
    const response = await fetch('https://api.escuelajs.co/api/v1/products');
    const data = await response.json();
    this.products.set(data);
  }
  products = signal<Product[]>([]);
}

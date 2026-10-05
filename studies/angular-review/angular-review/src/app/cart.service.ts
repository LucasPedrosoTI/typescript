import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product, products } from './products';

export interface CartItem {
  product: Product
  quantity: number
}

export interface Shipping {
  type: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: CartItem[] = [{ product: products[0], quantity: 1 }];
  constructor(private http: HttpClient) { }

  addToCart(product: Product) {
    const currentItem = this.findItem(product);
    if (currentItem) {
      currentItem.quantity += 1
    } else {
      this.items.push({ product: product, quantity: 1 });
    }
  }

  removeItem(product: Product) {
    const currentItem = this.findItem(product);
    if (currentItem) {
      if (currentItem.quantity > 1) {
        currentItem.quantity -= 1;
      } else {
        this.items.splice(this.items.indexOf(currentItem), 1)
      }
    }
  }

  private findItem(product: Product) {
    return this.items.find(item => item.product.id === product.id);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items.splice(0);
  }

  getShippingPrices() {
    return this.http.get<Shipping[]>('/assets/shipping.json')
  }
}

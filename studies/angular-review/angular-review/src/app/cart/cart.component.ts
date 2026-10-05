import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartItem, CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  items: CartItem[] = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
  })

  constructor(private cartService: CartService, private formBuilder: FormBuilder) { }

  clearCart() {
    this.cartService.clearCart();
    window.alert('The cart has been cleared!')
  }

  addToCart(item: CartItem) {
    this.cartService.addToCart(item.product);
  }

  removeItem(item: CartItem) {
    this.cartService.removeItem(item.product);
  }

  onSubmit() {
    this.cartService.clearCart();
    window.alert('Your order has been submitted: ' + JSON.stringify(this.checkoutForm.value));
    this.checkoutForm.reset();
  }
}

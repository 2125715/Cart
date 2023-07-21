import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/product.model';
import { cartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: product[] = [];
  constructor(private cartService : cartService) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }

}

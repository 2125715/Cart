import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public products: any = [];
  public grandTotal !: number;
  public total!: number;


  constructor(private cartservice: CartService) { }

  ngOnInit(): void {
    this.cartservice.getProducts()
      .subscribe(res => {
        this.products = res;
        //this.grandTotal = this.cartservice.getTotalPrice();
        this.total = this.getTotalCost();
      })
  }

  removeItem(item: any) {
    this.cartservice.removeCartItem(item);
  }
  emptyCart() {
    this.cartservice.removeAllCart();
  }
  dec(item: any) {
    if (item.quantity != 1) {
      item.quantity = item.quantity - 1;
      this.total = this.getTotalCost();

    }

  }
  inc(item: any) {

    item.quantity = item.quantity + 1;
    this.total = this.getTotalCost();

  }
  getTotalCost() {
    let total = 0;
    for (var i = 0; i < this.products.length; i++) {
      //console.log("length is ", this.products.length);
      this.products[i].price;
      this.grandTotal = this.products[i].price * this.products[i].quantity;
      total = total + this.grandTotal
      //console.log(total);
    }

    return total;
  }





}

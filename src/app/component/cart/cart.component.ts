import { isNgTemplate } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
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
  cart: any[] = [];
  username: string = '';
  totalItemCount: number = 0;

  constructor(private cartservice: CartService, private api: ApiService) { }

  ngOnInit(): void {
    this.cartservice.getProducts()

      .subscribe((res: any) => {
        this.products = res;
        //this.grandTotal = this.cartservice.getTotalPrice();
        this.total = this.getTotalCost();
        this.updateTotalItemCount();
      });
    
  }


  get totalCartItems(): number {
    return this.cartservice.gettotalCartItems();
  }

  removeItem(item: any) {
    this.cartservice.removeCartItem(item);
    this.updateTotalItemCount();
    //this.loadCartData(username);
  }
  emptyCart() {
    this.cartservice.removeAllCart();
    this.updateTotalItemCount();
   
  }
  dec(item: any) {
    

    if (item.quantity != 1) {
      item.quantity = item.quantity - 1;

      this.total = this.getTotalCost();

    }
    this.updateTotalItemCount();

  }
  inc(item: any) {
  
    item.quantity = item.quantity + 1;

    this.total = this.getTotalCost();
    this.updateTotalItemCount();

  }

  updateTotalItemCount() {
    this.totalItemCount = this.cartservice.gettotalCartItems();
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

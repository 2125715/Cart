import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList: any = []
  public cart: any = [];
  private cartKey = 'user_cart';
  //public quantity: number = 1;
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");
  // incart = false;

  constructor() {
  }
  
  getProducts() {
    return this.productList.asObservable();
  }
  addtoCart(product: any ) {
   

    // }
    const inCart = this.cartItemList.find((cartItem: { id: any; }) => cartItem.id === product.id);
    if (!inCart) {
      this.cartItemList.push(product);
      this.productList.next(this.cartItemList);
      this.getTotalPrice();
      //alert("✅✅Product added successfully to cart ✅✅");
    }
    else {
      inCart.quantity++;
      //alert("Quantity Updated +  ✅✅");

    }

  }


  gettotalCartItems(): number {
  
   

    return this.cartItemList.reduce((total: any, cartItem: any) => total + cartItem.quantity, 0);
  }
  getTotalPrice(): number {
    let grandTotal = 0;
    this.cartItemList.map((a: any) => {
      grandTotal = grandTotal + (a.total * a.quantity)
    })

    return grandTotal;
  }
  inc(item: any) {
    
     item.quantity = item.quantity + 1;

  }

  dec(item: any) {
   
     item.quantity = item.quantity - 1;

  }

  removeCartItem(product: any) {

    this.cartItemList.map((a: any, index: any) => {
      if (product.id == a.id) {
        this.cartItemList.splice(index, 1);
      }
    })
    this.productList.next(this.cartItemList);
    

   
  }
  removeAllCart() {

    this.cartItemList = []
    this.productList.next(this.cartItemList);
    
  }


}

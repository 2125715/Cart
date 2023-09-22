import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-vieworders',
  templateUrl: './vieworders.component.html',
  styleUrls: ['./vieworders.component.css']
})
export class ViewordersComponent implements OnInit {
  public products: any = [];
  public grandTotal!: number;
  public total!: number;
  public deliveryCharges=99;
  public cancel:boolean=false;
  public productList = new BehaviorSubject<any>([]);

  isDisable=false;
  constructor(private cartService: CartService , private router:Router) { }

  ngOnInit(): void {
    this.cartService.getProducts()
      .subscribe((res: any) => {
        this.products = res;
        console.log(this.products.length);
        this.total = this.getTotalCost();
        this.cancel=false;
      });
  }
  removeOrder(item:any){
    this.products.map((a: any, index: any) => {
      if (item.id == a.id) {
        this.products.splice(index, 1);
      }
    })
    this.productList.next(this.products);
    this.total=this.getTotalCost();
    return this.total;
  }
  cancelOrder(){
    this.cancel=true;
    this.router.navigate(['/vieworders']);
  }
  isDisableMethod(){
    if(this.products.length===0){
      this.isDisable=true;
    }
    return this.isDisable;

  }
  getTotalCost() {
    let total = 0;
    for (var i = 0; i < this.products.length; i++) {
      //console.log("length is ", this.products.length);
      this.products[i].price;
      this.grandTotal = this.products[i].price * this.products[i].quantity;
      total = total + this.grandTotal
      console.log("Total", total);
    }

    return total;
  }
}

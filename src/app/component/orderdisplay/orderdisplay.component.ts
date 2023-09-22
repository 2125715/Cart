import { Component, OnInit, Input } from '@angular/core';
import { AddressData } from 'src/app/addressdata/address';
import { CartService } from 'src/app/service/cart.service';
import { CartItem } from 'src/models/cart-item interface';

@Component({
  selector: 'app-orderdisplay',
  templateUrl: './orderdisplay.component.html',
  styleUrls: ['./orderdisplay.component.css']
})
export class OrderdisplayComponent implements OnInit {
  addressdata: AddressData = {
    name: "",
    doorno: "",
    address:"",
    pincode: "",
    mobile: ""

  }
  public products: any = [];
  address: string | undefined;
  cartItemList: any = []
  public grandTotal!: number;
  public total!: number;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
      .subscribe((res: any) => {
        this.products = res;
        console.log(this.products);
        this.total=this.getTotalCost();
      });

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

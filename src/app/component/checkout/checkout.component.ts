import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CartService } from 'src/app/service/cart.service';
import { AddressData } from 'src/app/addressdata/address';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  addressdata: AddressData = {
    name: "",
    address: "",
    pincode: "",
    mobile: ""

  }

  public products: any = [];
  public totalItem: number = 0;
  public total: number = 0;
  public grandTotal: number = 0;
  public deliveryCharges: number = 10;
  public isdisabled: boolean = true;


  constructor(private cartservice: CartService) { }



  ngOnInit(): void {

    this.cartservice.getProducts()
      .subscribe(res => {
        this.grandTotal = this.cartservice.getTotalPrice();
      })
    this.cartservice.getProducts()
      .subscribe(res => {
        this.totalItem = res.length;
        if (this.totalItem == 0) {
          this.isdisabled = true;
        }
        else {
          this.isdisabled = false;
        }
      })

    this.total = this.grandTotal + this.deliveryCharges;
  }

  orderNow(data: any) {
    console.log(data);
  }
  addAddress() {
    window.alert("Address added succesfully ..!")
  }



}
